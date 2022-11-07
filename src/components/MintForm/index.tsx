import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Info, X } from "react-feather";
import { NumericFormat } from "react-number-format";
import useAppStore from "../../store";
import MintSettingsPopover from "../MintSettingsPopover";
import TokenPickerModal from "../TokenPickerModal";
import TooltipIcon from "../TooltipIcon";
import MintRow from "./MintRow";
import * as S from "./styled";

export default function MintForm() {
  const [openTx, setOpenTx] = useState(false);
  const [totalPreview, setTotalPreview] = useState(true);
  const [openPicker, setOpenPicker] = useState(false);
  const {
    mintFormState,
    onChangeMintFormStateField,
    onResetMintFormState,
    prices,
  } = useAppStore(
    ({
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      prices,
    }) => ({
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      prices,
    })
  );

  useEffect(() => {
    onResetMintFormState();
    return () => {
      onResetMintFormState();
    };
  }, []);

  let mintAmount = 0;
  let totalUSD = 0;

  mintFormState.mintTokens.forEach((v, idx) => {
    if (prices) {
      mintAmount +=
        prices[v.token.symbol] * (idx + 1) * parseFloat(v.amount || "0");
      totalUSD += prices[v.token.symbol] * parseFloat(v.amount || "0");
    }
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
                  setOpenPicker(true);
                }}
              >
                + Add another token
              </button>
              <TooltipIcon text="You can swap multiple tokens at once to mint Root">
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
                decimalScale={2}
                placeholder="0"
                id="rootAmount"
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
                readOnly
                value={mintAmount}
              />
              <div className="rootContainer">
                <img width={14} height={14} src="/root.svg" />
                <div>Root</div>
              </div>
            </div>
          </div>
          <div className="infoContainer">
            <div className="price">
              {prices && mintAmount > 0 && (
                <>
                  <TooltipIcon
                    element={
                      <S.PriceExchangeTooltip>
                        <div className="header">Exchange Rate</div>
                        <div className="body">
                          {mintFormState.mintTokens.map((v, idx) => {
                            return (
                              <div key={idx}>
                                Swap {v.amount} {v.token.symbol} for{" "}
                                {(
                                  (idx + 1) *
                                  prices[v.token.symbol] *
                                  parseFloat(v.amount)
                                ).toLocaleString("en-us", {
                                  maximumFractionDigits: 2,
                                })}{" "}
                                ROOT
                              </div>
                            );
                          })}
                        </div>
                      </S.PriceExchangeTooltip>
                    }
                  >
                    <Info size={16} color="#E4E4E6" />
                  </TooltipIcon>
                  {totalPreview ? (
                    <div onClick={() => setTotalPreview(false)}>
                      $
                      {totalUSD.toLocaleString("en-us", {
                        maximumFractionDigits: 2,
                      })}{" "}
                      ={" "}
                      {mintAmount.toLocaleString("en-us", {
                        maximumFractionDigits: 2,
                      })}{" "}
                      Root
                    </div>
                  ) : (
                    <div onClick={() => setTotalPreview(true)}>
                      1 Root = $
                      {(mintAmount / totalUSD).toLocaleString("en-us", {
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
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
                {(
                  (mintAmount / 100) *
                  (100 - parseFloat(mintFormState.slippage))
                ).toLocaleString("en-us", {
                  maximumFractionDigits: 2,
                })}
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
      <S.MintButton>MINT</S.MintButton>

      <TokenPickerModal
        open={openPicker}
        onClose={() => {
          setOpenPicker(false);
        }}
        onSelect={(token, deposit) => {
          onChangeMintFormStateField("mintTokens", [
            ...mintFormState.mintTokens,
            {
              amount: "",
              token,
              siloDeposit: deposit,
              slippage: token.slippage.toString(),
            },
          ]);
        }}
      />
    </S.Form>
  );
}
