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
