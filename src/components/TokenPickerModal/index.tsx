import { useEffect, useState } from "react";
import { X } from "react-feather";
import { ISiloDeposit } from "../../interfaces/siloDeposit";
import useAppStore from "../../store";
import { calculateGrownStalk } from "../../util/deposit";
import { TOKENS } from "../../util/token";
import { BigNumber } from "bignumber.js";

import * as S from "./styled";
import { ITokenSymbol } from "../../interfaces/token";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TokenPickerModal({ open, onClose }: ModalProps) {
  const [search, setSearch] = useState("");
  const { account } = useAppStore((state) => ({
    beanstalkSdk: state.beanstalkSdk,
    account: state.account,
  }));

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
              return (
                search === "" ||
                token.name.toUpperCase().includes(search.toUpperCase()) ||
                token.symbol.toUpperCase().includes(search.toUpperCase())
              );
            })
            .map((key) => {
              const token = TOKENS[key as ITokenSymbol];
              const balance = account?.balances.get(token.address);
              return (
                <li key={token.symbol}>
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
                </li>
              );
            })}
          {(search === "" || "BEAN DEPOSIT".includes(search.toUpperCase())) &&
            account?.siloDeposits.map((deposit) => {
              return (
                <li key={deposit.season.toString()}>
                  <div className="content">
                    <img width={35} height={35} src="/bean.svg" />
                    <div>
                      <div>BEAN DEPOSIT</div>
                      <div>Season: {deposit.season.toString()}</div>
                    </div>
                  </div>
                  <div className="balance">
                    {deposit.amount
                      .decimalPlaces(2)
                      .toNumber()
                      .toLocaleString()}
                  </div>
                </li>
              );
            })}
        </S.CoinList>
      </S.Body>
    </S.Modal>
  );
}
