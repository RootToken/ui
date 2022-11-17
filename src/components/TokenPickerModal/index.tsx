import { useEffect, useState } from "react";
import { X } from "react-feather";
import useAppStore from "../../store";

import * as S from "./styled";
import { IToken, ITokenSymbol, TOKENS } from "../../interfaces/token";
import { ISiloDeposit } from "../../interfaces/siloDeposit";
import { displayBN } from "../../util/bigNumber";
import { TokenValue } from "@beanstalk/sdk";
import { IAccount } from "../../interfaces/account";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (token: IToken, siloDeposit?: ISiloDeposit) => void;
  excludes?: ITokenSymbol[];
  claim?: boolean;
}

export default function TokenPickerModal({
  open,
  onClose,
  onSelect,
  excludes = [],
  claim = false,
}: ModalProps) {
  const [search, setSearch] = useState("");
  const { account, mintFormState, claimFormState } = useAppStore((state) => ({
    beanstalkSdk: state.beanstalkSdk,
    account: state.account,
    mintFormState: state.mintFormState,
    claimFormState: state.claimFormState,
  }));

  const disabledTokens: { [key: string]: boolean } = {};

  if (!claim) {
    mintFormState.mintTokens.forEach((token) => {
      disabledTokens[token.token.symbol] = true;
    });
  } else {
    disabledTokens[claimFormState.claimToken.token.symbol] = true;
  }

  let beanDepositAmount = TokenValue.fromHuman("0", 6);
  account?.siloDeposits.forEach((deposit) => {
    beanDepositAmount = beanDepositAmount.add(deposit.amount);
  });

  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  return (
    <S.Modal
      overlayClassName="modalOverlay"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      isOpen={open}
      onRequestClose={onClose}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <S.Body>
        <S.Header>
          <h4>SELECT A TOKEN</h4>
          <button onClick={onClose}>
            <X color="#E4E4E6" size={20} />
          </button>
        </S.Header>
        <S.SearchInputContainer>
          <S.SearchInput
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
            }}
            placeholder="Search for token here..."
          />
        </S.SearchInputContainer>
        <S.CoinList>
          {Object.keys(TOKENS)
            .filter((key) => {
              const token = TOKENS[key as ITokenSymbol];
              if (excludes.includes(token.symbol)) {
                return;
              }
              return (
                search === "" ||
                token.name.toUpperCase().includes(search.toUpperCase()) ||
                token.symbol.toUpperCase().includes(search.toUpperCase())
              );
            })
            .map((key) => {
              const token = TOKENS[key as ITokenSymbol];
              return (
                <CoinItem
                  key={key}
                  token={token}
                  search={search}
                  excludes={excludes}
                  isDisabled={disabledTokens[token.symbol]}
                  account={account}
                  onSelect={(token) => {
                    onSelect(token);
                    onClose();
                  }}
                />
              );
            })}
        </S.CoinList>
      </S.Body>
    </S.Modal>
  );
}

const CoinItem = ({
  token,
  excludes,
  search,
  isDisabled,
  account,
  onSelect,
}: {
  token: IToken;
  excludes: string[];
  search: string;
  isDisabled: boolean;
  account?: IAccount;
  onSelect: (token: IToken) => void;
}) => {
  const balance = account?.balances.get(token.address);
  let beanDepositAmount = TokenValue.fromHuman("0", 6);

  if (token.symbol === "BEAN DEPOSIT") {
    account?.siloDeposits.forEach((deposit) => {
      beanDepositAmount = beanDepositAmount.add(deposit.amount);
    });
  }

  return (
    <li key={token.symbol}>
      <S.CoinItem
        disabled={isDisabled}
        onClick={() => {
          if (isDisabled) return;
          onSelect(token);
        }}
      >
        <div className="content">
          <img width={35} height={35} src={token.icon} />
          <div>
            <div>{token.symbol}</div>
            <div>{token.name}</div>
          </div>
        </div>
        {token.symbol === "BEAN DEPOSIT" ? (
          <>
            <div className="balance">
              {displayBN(beanDepositAmount, token.formatDecimals)}
            </div>
          </>
        ) : (
          balance && (
            <div className="balance">
              {displayBN(balance, token.formatDecimals)}
            </div>
          )
        )}
      </S.CoinItem>
    </li>
  );
};
