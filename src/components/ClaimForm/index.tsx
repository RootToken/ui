import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "react-feather";
import { NumericFormat } from "react-number-format";
import ENVIRONMENT from "../../config";
import useAppStore from "../../store";
import TooltipIcon from "../TooltipIcon";
import ClaimRow from "./ClaimRow";
import ClaimSettingsPopver from "./ClaimSettingsPopover";
import * as S from "./styled";

export default function ClaimForm() {
  const [openTx, setOpenTx] = useState(false);
  const {
    claimFormState,
    onChangeClaimFormStateField,
    onResetClaimFormState,
    account,
  } = useAppStore(
    ({
      claimFormState,
      onChangeClaimFormStateField,
      onResetClaimFormState,
      account,
    }) => ({
      claimFormState,
      onChangeClaimFormStateField,
      onResetClaimFormState,
      account,
    })
  );

  useEffect(() => {
    onResetClaimFormState();
  }, []);

  const claimTokenAmount = parseFloat(claimFormState.claimAmount) * 0.5;
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
            <div>CLAIM AMOUNT</div>
            <ClaimSettingsPopver />
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
                value={claimFormState.claimAmount}
                onValueChange={(e) => {
                  onChangeClaimFormStateField("claimAmount", e.value);
                }}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/bean.svg" />
                <div>cBean</div>
              </div>
            </div>
          </div>
          {account && (
            <div className="infoContainer">
              <div />
              <div className="balance">
                <span>Claimable Balance: {tokenBalance}</span>{" "}
                <button
                  onClick={() =>
                    onChangeClaimFormStateField("claimAmount", tokenBalance)
                  }
                >
                  Max
                </button>
              </div>
            </div>
          )}
        </div>
      </S.Phase>

      <S.Phase>
        <div className="group">
          <div className="header">
            <div>CLAIM TO</div>
          </div>
            <ClaimRow />
          <div className="infoContainer">
            <div />
            <div className="gas">Est. Gas: 0.03319 ETH</div>
          </div>
        </div>
      </S.Phase>

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
                    height: "45px",
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
                <img width={16} height={16} src={claimFormState.claimToken.token.icon} />
                {claimTokenAmount > 0
                  ? (
                    claimTokenAmount *
                      ((100 - parseFloat(claimFormState.slippage)) / 100)
                    ).toLocaleString("en-us", {
                      maximumFractionDigits: claimFormState.claimToken.token.formatDecimals,
                    })
                  : 0}
              </div>
            </div>
          </div>
        </S.TxDetails>
      </S.Phase>
      <S.MintButton>CLAIM</S.MintButton>
    </S.Form>
  );
}
