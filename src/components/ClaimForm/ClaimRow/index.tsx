import { useState } from "react";
import { ChevronDown } from "react-feather";
import useAppStore from "../../../store";
import TokenPickerModal from "../../TokenPickerModal";
import * as S from "./styled";

export default function MintRow() {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const { account, claimFormState, onChangeClaimFormStateField } = useAppStore(
    ({ account, claimFormState, onChangeClaimFormStateField }) => ({
      account,
      claimFormState,
      onChangeClaimFormStateField,
    })
  );

  // const mintItem = mintFormState.mintTokens[index];

  // const onChangeWithField = (field: keyof IMintFormToken, value: any) => {
  //   const clonedArr: any = [...mintFormState.mintTokens];
  //   clonedArr[index][field] = value;
  //   onChangeMintFormStateField("mintTokens", clonedArr);
  // };

  // const onChangeWithValue = (value: IMintFormToken) => {
  //   const clonedArr = [...mintFormState.mintTokens];
  //   clonedArr[index] = value;
  //   onChangeMintFormStateField("mintTokens", clonedArr);
  // };

  const tokenBalance =
    account?.balances
      .get(claimFormState.claimToken.token.address)
      ?.decimalPlaces(claimFormState.claimToken.token.formatDecimals)
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
            decimalScale={claimFormState.claimToken.token.formatDecimals}
            valueIsNumericString
            allowNegative={false}
            readOnly
            value={parseFloat(claimFormState.claimAmount) * 0.5}
            // onValueChange={(e) => {
            //   const value = e.value;
            //   onChangeClaimFormStateField("claimToken", {
            //     ...claimFormState.claimToken,
            //     amount: value,
            //   });
            // }}
          />
          <div className="pickerContainer">
            <button onClick={() => setOpenTokenPicker(true)}>
              <div>
                <img
                  width={14}
                  height={14}
                  src={claimFormState.claimToken.token.icon}
                />
                <div>{claimFormState.claimToken.token.symbol}</div>
              </div>
              <ChevronDown size={14} color="#999999" />
            </button>
          </div>
        </div>
      </S.Row>

      <TokenPickerModal
        excludes={["BEAN DEPOSIT"]}
        open={openTokenPicker}
        onClose={() => setOpenTokenPicker(false)}
        onSelect={(newToken) => {
          onChangeClaimFormStateField("claimToken", {
            ...claimFormState.claimToken,
            token: newToken,
          });
        }}
      />
    </>
  );
}
