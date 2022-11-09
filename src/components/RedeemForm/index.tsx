import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "react-feather";
import { NumericFormat } from "react-number-format";
import ENVIRONMENT from "../../config";
import useAppStore from "../../store";
import RedeemSettingsPopver from "../RedeemSettingsPopover";
import TooltipIcon from "../TooltipIcon";
import * as S from "./styled";

export default function RedeemForm() {
  const [openTx, setOpenTx] = useState(false);
  const {
    redeemFormState,
    onChangeRedeemFormStateField,
    onResetRedeemFormState,
    account,
  } = useAppStore(
    ({
      redeemFormState,
      onChangeRedeemFormStateField,
      onResetRedeemFormState,
      account,
    }) => ({
      redeemFormState,
      onChangeRedeemFormStateField,
      onResetRedeemFormState,
      account,
    })
  );

  useEffect(() => {
    onResetRedeemFormState();
  }, []);

  const claimableAmount = parseFloat(redeemFormState.redeemAmount) * 0.5;
  const tokenBalance =
    account?.balances
      .get(ENVIRONMENT.rootContractAddress)
      ?.decimalPlaces(18)
      .toNumber()
      .toLocaleString() || "0";

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.Phase>
        <div className="group">
          <div className="header">
            <div>REDEEM AMOUNT</div>
            <RedeemSettingsPopver />
          </div>
          <div className="contentContainer">
            <div className="inputContainer">
              <NumericFormat
                decimalScale={2}
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                value={redeemFormState.redeemAmount}
                onValueChange={(e) => {
                  onChangeRedeemFormStateField("redeemAmount", e.value);
                }}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/root.svg" />
                <div>Root</div>
              </div>
            </div>
          </div>
          {account && (
            <div className="infoContainer">
              <div />
              <div className="balance">
                <span>Balance: {tokenBalance}</span>{" "}
                <button
                  onClick={() =>
                    onChangeRedeemFormStateField("redeemAmount", tokenBalance)
                  }
                >
                  Max
                </button>
              </div>
            </div>
          )}
        </div>
      </S.Phase>

      {redeemFormState.redeemToWallet ? (
        <>
          <S.Phase>
            <div className="group">
              <div className="header">
                <div>REDEEM TO</div>
              </div>
              <div className="contentContainer">
                <div className="inputContainer">
                  <NumericFormat
                    decimalScale={2}
                    placeholder="0"
                    id="rootAmount"
                    thousandSeparator
                    valueIsNumericString
                    allowNegative={false}
                    readOnly
                    value={
                      redeemFormState.redeemAmount !== ""
                        ? (
                            parseFloat(redeemFormState.redeemAmount) * 0.5
                          ).toLocaleString()
                        : ""
                    }
                  />
                  <div className="rootContainer">
                    <img width={14} height={14} src="/bean.svg" />
                    <div>Bean Deposit</div>
                  </div>
                </div>
              </div>
              <div className="infoContainer">
                <div />
                <div className="gas">Est. Gas: 0.03319 ETH</div>
              </div>
            </div>
          </S.Phase>
        </>
      ) : (
        <>
          <S.Phase>
            <div className="group">
              <div className="header">
                <div>CLAIMABLE AMOUNT</div>
              </div>
              <div className="contentContainer">
                <div className="inputContainer">
                  <NumericFormat
                    decimalScale={2}
                    placeholder="0"
                    id="rootAmount"
                    thousandSeparator
                    valueIsNumericString
                    allowNegative={false}
                    readOnly
                    value={
                      redeemFormState.redeemAmount !== ""
                        ? (
                            parseFloat(redeemFormState.redeemAmount) * 0.5
                          ).toLocaleString()
                        : ""
                    }
                  />
                  <div className="rootContainer">
                    <img width={14} height={14} src="/bean.svg" />
                    <div>
                      cBean{" "}
                      <TooltipIcon text="Copy here">
                        <HelpCircle size={14} color="#838383" />
                      </TooltipIcon>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoContainer">
                <div />
                <div className="gas">Est. Gas: 0.03319 ETH</div>
              </div>
            </div>
          </S.Phase>

          <S.Phase>
            <S.Info>
              You can Claim your claimable Bean at the start of the next hour.
            </S.Info>
          </S.Phase>
        </>
      )}

      <S.Phase>
        <S.TxDetails>
          <S.TxHeader
            active={openTx}
            className="header"
            onClick={() => {
              setOpenTx((t) => !t);
            }}
          >
            <div className="content">
              <img src="/tx.svg" />
              <span>Transaction details</span>
            </div>
            {openTx ? (
              <ChevronUp size={14} color="#999999" />
            ) : (
              <ChevronDown size={14} color="#999999" />
            )}
          </S.TxHeader>
          <div
            className="collapse"
            style={
              openTx
                ? {
                    minHeight: "0px",
                    transitionDuration: "200ms",
                    height: "75px",
                    visibility: "initial",
                    padding: "10px 13px",
                  }
                : {}
            }
          >
            <div>
              <div>
                Minimum Output{" "}
                <TooltipIcon text="The minimum amount you are guaranteed to receive. If the price slips any further, your transaction will revert.">
                  <HelpCircle size={16} color="#3D3D3D" />
                </TooltipIcon>
              </div>
              <div>
                <img width={16} height={16} src="/root.svg" />
                {claimableAmount > 0
                  ? (
                      claimableAmount *
                      ((100 - parseFloat(redeemFormState.slippage)) / 100)
                    ).toLocaleString("en-us", {
                      maximumFractionDigits: 2,
                    })
                  : 0}
              </div>
            </div>
            <div>
              <div>
                Price Impact{" "}
                <TooltipIcon text="The impact your trade has on the market price of this pool. There may be a large difference between the amount of your input token and what you will receive in the output token">
                  <HelpCircle size={16} color="#3D3D3D" />
                </TooltipIcon>
              </div>
              <div>1.4%</div>
            </div>
          </div>
        </S.TxDetails>
      </S.Phase>
      <S.MintButton>REDEEM</S.MintButton>
    </S.Form>
  );
}
