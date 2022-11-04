import { useState } from "react";
import { ChevronDown } from "react-feather";
import { IMintFormToken } from "../../../interfaces/mintForm";
import useAppStore from "../../../store";
import TokenPickerModal from "../../TokenPickerModal";
import * as S from "./styled";

export default function MintRow({ index }: { index: number }) {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const { account, mintFormState, onChangeMintFormStateField } = useAppStore(
    ({ account, mintFormState, onChangeMintFormStateField }) => ({
      account,
      mintFormState,
      onChangeMintFormStateField,
    })
  );

  const mintItem = mintFormState.mintTokens[index];

  const onChangeWithField = (field: keyof IMintFormToken, value: any) => {
    const clonedArr: any = [...mintFormState.mintTokens];
    clonedArr[index][field] = value;
    onChangeMintFormStateField("mintTokens", clonedArr);
  };

  const onChangeWithValue = (value: IMintFormToken) => {
    const clonedArr = [...mintFormState.mintTokens];
    clonedArr[index] = value;
    onChangeMintFormStateField("mintTokens", clonedArr);
  };

  const tokenBalance = mintItem.siloDeposit
    ? mintItem.siloDeposit.amount
        .decimalPlaces(mintItem.token.formatDecimals)
        .toNumber()
        .toLocaleString()
    : account?.balances
        .get(mintItem.token.address)
        ?.decimalPlaces(mintItem.token.formatDecimals)
        .toNumber()
        .toLocaleString() || "";

  return (
    <>
      <S.Row>
        <div className="inputContainer">
          <S.Input
            placeholder="0"
            id="rootAmount"
            thousandSeparator
            valueIsNumericString
            allowNegative={false}
            value={mintItem.amount}
            onValueChange={(e) => {
              const value = e.value;
              onChangeWithField("amount", value);
            }}
          />
          <div className="pickerContainer">
            <button onClick={() => setOpenTokenPicker(true)}>
              <div>
                <img width={14} height={14} src={mintItem.token.icon} />
                <div>{mintItem.token.symbol}</div>
              </div>
              <ChevronDown size={14} color="#999999" />
            </button>
            {account && (
              <div className="balance">
                <span>Balance: {tokenBalance}</span>{" "}
                <button
                  onClick={() => onChangeWithField("amount", tokenBalance)}
                >
                  Max
                </button>
              </div>
            )}
          </div>
        </div>
      </S.Row>

      <TokenPickerModal
        open={openTokenPicker}
        onClose={() => setOpenTokenPicker(false)}
        onSelect={(newToken, deposit) => {
          onChangeWithValue({
            ...mintItem,
            token: newToken,
            siloDeposit: deposit,
          });
        }}
      />
    </>
  );
}
