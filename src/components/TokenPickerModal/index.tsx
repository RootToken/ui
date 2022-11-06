import { useEffect, useState } from "react";
import { X } from "react-feather";
import useAppStore from "../../store";

import * as S from "./styled";
import { IToken, ITokenSymbol, TOKENS } from "../../interfaces/token";
import { ISiloDeposit } from "../../interfaces/siloDeposit";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (token: IToken, siloDeposit?: ISiloDeposit) => void;
  excludes: ITokenSymbol[];
}

export default function TokenPickerModal({
  open,
  onClose,
  onSelect,
  excludes = [],
}: ModalProps) {
  const [search, setSearch] = useState("");
  const { account, mintFormState } = useAppStore((state) => ({
    beanstalkSdk: state.beanstalkSdk,
    account: state.account,
    mintFormState: state.mintFormState,
  }));

  const disabledTokens: { [key: string]: boolean } = {};

  mintFormState.mintTokens.forEach((token) => {
    if (token.siloDeposit) {
      disabledTokens[`${token.token.symbol}${token.siloDeposit.season}`] = true;
    } else {
      disabledTokens[token.token.symbol] = true;
    }
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
                        {balance
                          .decimalPlaces(token.formatDecimals)
                          .toNumber()
                          .toLocaleString()}
                      </div>
                    )}
                  </S.CoinItem>
                </li>
              );
            })}
          {!excludes.includes("BEAN DEPOSIT") && (search === "" || "BEAN DEPOSIT".includes(search.toUpperCase())) &&
            account?.siloDeposits.map((deposit) => {
              const isDisabled =
                disabledTokens[TOKENS["BEAN DEPOSIT"].symbol + deposit.season];
              return (
                <li key={deposit.season.toString()}>
                  <S.CoinItem
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;
                      onSelect(TOKENS["BEAN DEPOSIT"], deposit);
                      onClose();
                    }}
                  >
                    <div className="content">
                      <img width={35} height={35} src="/bean.svg" />
                      <div>
                        <div>BEAN DEPOSIT</div>
                        <div>Season: {deposit.season.toString()}</div>
                      </div>
                    </div>
                    <div className="balance">
                      {deposit.amount
                        .decimalPlaces(TOKENS["BEAN DEPOSIT"].formatDecimals)
                        .toNumber()
                        .toLocaleString()}
                    </div>
                  </S.CoinItem>
                </li>
              );
            })}
        </S.CoinList>
      </S.Body>
    </S.Modal>
  );
}
