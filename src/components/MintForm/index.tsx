import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { MintFormState } from "../../interfaces/mintForm";
import * as S from "./styled";

export default function MintForm() {
  const [form, setForm] = useState<MintFormState>({
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
          <label htmlFor="rootAmount">ROOT TOKENS AMOUNT</label>
          <div className="contentContainer">
            <div className="inputContainer">
              <NumericFormat
                placeholder="Mint amount"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                value={
                  form.mintAmount
                }
                onValueChange={(e) => {
                  const value = e.value;
                  setForm((v) => ({
                    ...v,
                    mintAmount: value,
                  }));
                }}
              />
            </div>
          </div>
          <div className="infoContainer">
            <div className="bdv">~ 100 BDV</div>
            <div className="max">
              4,000 <button>(Max)</button>
            </div>
          </div>
        </div>
      </S.Phase>
      <S.Phase>
        
      </S.Phase>
      <S.MintButton>MINT</S.MintButton>
    </S.Form>
  );
}
