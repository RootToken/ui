import { useState } from "react";
import { ChevronDown, HelpCircle, Info, Settings } from "react-feather";
import { NumericFormat } from "react-number-format";
import { IMintFormState } from "../../interfaces/mintForm";
import TokenPickerModal from "../TokenPickerModal";
import * as S from "./styled";

export default function MintForm() {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const [form, setForm] = useState<IMintFormState>({
    mintTokens: [],
    mintAmount: "",
  });
  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>TOKENS</div>
            <button>
              <Settings size={15} />
            </button>
          </div>
          <div className="contentContainer">
            <div className="inputContainer">
              <NumericFormat
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                value={form.mintAmount}
                onValueChange={(e) => {
                  const value = e.value;
                  setForm((v) => ({
                    ...v,
                    mintAmount: value,
                  }));
                }}
              />
              <div className="pickerContainer">
                <button onClick={() => setOpenTokenPicker(true)}>
                  <div>
                    <img width={14} height={14} src="/eth.svg" />
                    <div>ETH</div>
                  </div>
                  <ChevronDown size={14} color="#999999" />
                </button>
                <div className="balance">
                  <span>Balance: 4,000</span> <button>Max</button>
                </div>
              </div>
            </div>
          </div>
          <div className="infoContainer">
            <div className="add">
              <button>+ Add another token</button>
              <HelpCircle size={16} color="#3D3D3D" />
            </div>
          </div>
        </div>
      </S.Phase>
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>MINT AMOUNT</div>
          </div>
          <div className="contentContainer">
            <div className="inputContainer">
              <NumericFormat
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                value={form.mintAmount}
                onValueChange={(e) => {
                  const value = e.value;
                  setForm((v) => ({
                    ...v,
                    mintAmount: value,
                  }));
                }}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/root.svg" />
                <div>Root</div>
              </div>
            </div>
          </div>
          <div className="infoContainer">
            <div className="add">
              <button>+ Add another token</button>
              <HelpCircle size={16} color="#3D3D3D" />
            </div>
          </div>
        </div>
      </S.Phase>
      <S.MintButton>MINT</S.MintButton>

      <TokenPickerModal
        open={openTokenPicker}
        onClose={() => setOpenTokenPicker(false)}
      />
    </S.Form>
  );
}
