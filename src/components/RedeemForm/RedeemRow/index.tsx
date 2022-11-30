import { useState } from "react";
import { ChevronDown } from "react-feather";
import { IRedeemFormState } from "../../../interfaces/mintForm";
import useAppStore from "../../../store";
import TokenPickerModal from "../../TokenPickerModal";
import * as S from "./styled";

export default function RedeemRow({ output, loading }: { output: string; loading: boolean }) {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const {
    account,
    redeemFormState,
    onChangeRedeemFormStateField,
    beanstalkSdk,
  } = useAppStore(
    ({
      account,
      redeemFormState,
      onChangeRedeemFormStateField,
      beanstalkSdk,
    }) => ({
      account,
      redeemFormState,
      onChangeRedeemFormStateField,
      beanstalkSdk,
    })
  );

  const onChangeWithField = (field: keyof IRedeemFormState, value: any) => {
    onChangeRedeemFormStateField(field, value);
  };

  return (
    <>
      <S.Row $connected={!!account} $loading={loading}>
        <div className="inputContainer">
          <S.Input
            $connected={!!account}
            placeholder="0"
            id="rootAmount"
            thousandSeparator
            decimalScale={redeemFormState.redeemToken.formatDecimals}
            valueIsNumericString
            allowNegative={false}
            readOnly
            value={output}
            // isAllowed={(v) => {
            //   if (v.floatValue) {
            //     return !TokenValue.fromHuman(
            //       v.floatValue,
            //       mintItem.token.decimals
            //     ).gt(balance);
            //   }
            //   return true;
            // }}
            // onValueChange={(e) => {
            //   const value = e.value;
            //   onChangeWithField("amount", value);
            // }}
          />
          <div className="pickerContainer">
            <button onClick={() => setOpenTokenPicker(true)}>
              <div>
                <img width={14} height={14} src={redeemFormState.redeemToken.icon} />
                <div>{redeemFormState.redeemToken.symbol}</div>
              </div>
              <ChevronDown size={14} color="#999999" />
            </button>
          </div>
        </div>
      </S.Row>

      <TokenPickerModal
        excludes={[]}
        showBalance={true}
        open={openTokenPicker}
        onClose={() => setOpenTokenPicker(false)}
        onSelect={(newToken) => {
          onChangeWithField("redeemToken", newToken);
        }}
      />
    </>
  );
}
