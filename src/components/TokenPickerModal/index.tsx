import { useEffect, useState } from "react";
import { X } from "react-feather";
import useAppStore from "../../store";

import * as S from "./styled";
import { IToken, ITokenSymbol, TOKENS } from "../../interfaces/token";
import { ISiloDeposit } from "../../interfaces/siloDeposit";
import { displayBN } from "../../util/bigNumber";
import { TokenValue } from "@beanstalk/sdk";

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
              if (token.symbol == "BEAN DEPOSIT") {
                return;
              }
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
              const balance = account?.balances.get(token.address);
              const isDisabled = disabledTokens[token.symbol];
              return (
                <li key={token.symbol}>
                  <S.CoinItem
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;
                      onSelect(token);
                      onClose();
                    }}
                  >
                    <div className="content">
                      <img width={35} height={35} src={token.icon} />
                      <div>
                        <div>{token.symbol}</div>
                        <div>{token.name}</div>
                      </div>
                    </div>
                    {balance && (
                      <div className="balance">
                        {displayBN(balance, token.formatDecimals)}
                      </div>
                    )}
                  </S.CoinItem>
                </li>
              );
            })}
          {!excludes.includes("BEAN DEPOSIT") &&
            account &&
            (search === "" ||
              "BEAN DEPOSIT".includes(search.toUpperCase())) && (
              <li>
                <S.CoinItem
                  disabled={disabledTokens[TOKENS["BEAN DEPOSIT"].symbol]}
                  onClick={() => {
                    if (disabledTokens[TOKENS["BEAN DEPOSIT"].symbol]) return;
                    onSelect(TOKENS["BEAN DEPOSIT"]);
                    onClose();
                  }}
                >
                  <div className="content">
                    <img width={35} height={35} src="/bean.svg" />
                    <div>
                      <div>BEAN DEPOSIT</div>
                      <div>Bean Deposit</div>
                    </div>
                  </div>
                  {account?.siloDeposits && (
                    <div className="balance">
                      {displayBN(
                        beanDepositAmount,
                        TOKENS["BEAN DEPOSIT"].formatDecimals
                      )}
                    </div>
                  )}
                </S.CoinItem>
              </li>
            )}
        </S.CoinList>
      </S.Body>
    </S.Modal>
  );
}
