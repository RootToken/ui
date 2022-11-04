import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Info, X } from "react-feather";
import { NumericFormat } from "react-number-format";
import { TOKENS } from "../../interfaces/token";
import useAppStore from "../../store";
import MintSettingsPopover from "../MintSettingsPopover";
import TooltipIcon from "../TooltipIcon";
import MintRow from "./MintRow";
import * as S from "./styled";

export default function MintForm() {
  const [openTx, setOpenTx] = useState(false);
  const { mintFormState, onChangeMintFormStateField, onResetMintFormState } =
    useAppStore(
      ({
        mintFormState,
        onChangeMintFormStateField,
        onResetMintFormState,
      }) => ({
        mintFormState,
        onChangeMintFormStateField,
        onResetMintFormState,
      })
    );

  useEffect(() => {
    onResetMintFormState();
  }, []);

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
            <MintSettingsPopover />
          </div>
          <div className="mintList">
            {mintFormState.mintTokens.map((_, index) => (
              <div key={index}>
                <MintRow index={index} />
                {mintFormState.mintTokens.length > 1 && (
                  <button
                    onClick={() => {
                      onChangeMintFormStateField(
                        "mintTokens",
                        mintFormState.mintTokens.filter(
                          (_, idx) => idx !== index
                        )
                      );
                    }}
                  >
                    <X color="red" size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="infoContainer">
            <div className="add">
              <button
                onClick={() => {
                  onChangeMintFormStateField("mintTokens", [
                    ...mintFormState.mintTokens,
                    { amount: "", token: TOKENS.ETH },
                  ]);
                }}
              >
                + Add another token
              </button>
              <TooltipIcon text="Testing">
                <HelpCircle size={16} color="#3D3D3D" />
              </TooltipIcon>
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
                // value={form.mintAmount}
                // onValueChange={(e) => {
                //   const value = e.value;
                //   setForm((v) => ({
                //     ...v,
                //     mintAmount: value,
                //   }));
                // }}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/root.svg" />
                <div>Root</div>
              </div>
            </div>
          </div>
          <div className="infoContainer">
            <div className="price">
              <TooltipIcon text="Testing">
                <Info size={16} color="#E4E4E6" />
              </TooltipIcon>
              <div>1 ETH = 148 Root</div>
            </div>
            <div className="gas">Est. Gas: 0.03319 ETH</div>
          </div>
        </div>
      </S.Phase>
      <S.Phase>
        <S.TxDetails
          onClick={() => {
            setOpenTx((t) => !t);
          }}
        >
          <div className="header">
            <div className="content">
              <img src="/tx.svg" />
              <span>Transaction details</span>
            </div>
            {openTx ? (
              <ChevronUp size={14} color="#999999" />
            ) : (
              <ChevronDown size={14} color="#999999" />
            )}
          </div>
          <div
            className="collapse"
            style={
              openTx
                ? {
                    minHeight: "0px",
                    transitionDuration: "100ms",
                    height: "50px",
                    visibility: "initial",
                  }
                : {}
            }
          >
            test
          </div>
        </S.TxDetails>
      </S.Phase>
      <S.MintButton>MINT</S.MintButton>
    </S.Form>
  );
}
