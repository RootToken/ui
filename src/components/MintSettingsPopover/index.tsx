import { useLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronsRight, Settings } from "react-feather";
import TooltipIcon from "../TooltipIcon";
import * as S from "./styled";
import useAppStore from "../../store";

export default function MintSettingsPopover() {
  const [isOpen, setOpen] = useState(false);

  const { mintFormState, onChangeMintFormStateField } = useAppStore(
    ({ mintFormState, onChangeMintFormStateField }) => ({
      mintFormState,
      onChangeMintFormStateField,
    })
  );

  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: "bottom-end", // we prefer to place the menu "top-end"
    triggerOffset: 10, // keep some distance to the trigger
    // containerOffset: 16, // give the menu some room to breath relative to the container
    // arrowOffset: 16, // let the arrow have some room to breath also
  });

  return (
    <>
      <S.SettingsButton {...triggerProps} onClick={() => setOpen(!isOpen)}>
        <Settings size={15} />
      </S.SettingsButton>
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <S.PopoverContainer {...layerProps}>
              <div className="section">
                <div className="header" style={{ display: "flex" }}>
                  Slippage Tolerance
                  <div style={{ marginTop: "7px", marginLeft: "3px" }}>
                    <TooltipIcon text="Your transaction will fail if the Roots you receive upon Minting decreases by more than this percentage.">
                      <HelpCircle size={12} color="#838383" />
                    </TooltipIcon>
                  </div>
                </div>

                {mintFormState.mintTokens.filter((v) => v.token.slippage !== 0)
                  .length > 0 ? (
                  <>
                    {mintFormState.mintTokens.map((v, idx) => {
                      if (v.token.slippage === 0) {
                        return null;
                      }
                      return (
                        <div className="content" key={idx}>
                          <div className="text">
                            <div className="from">
                              <img width={16} src={v.token.icon} />{" "}
                              {v.token.symbol}{" "}
                            </div>
                            <ChevronsRight color="#b0b0b0" size={16} />
                            <img src="/root.svg" width={16} />
                            ROOT
                          </div>
                          <div className="slippage">
                            <S.SlippageInput
                              id={`slippage-${v.token.symbol}`}
                              maxLength={5}
                              allowNegative={false}
                              allowLeadingZeros={false}
                              decimalScale={2}
                              placeholder="1"
                              value={v.slippage}
                              valueIsNumericString
                              onValueChange={(v) => {
                                const value = v.value;
                                const temp = [...mintFormState.mintTokens];
                                temp[idx].slippage = value;
                                onChangeMintFormStateField("mintTokens", temp);
                              }}
                            />
                            <label htmlFor={`slippage-${v.token.symbol}`}>
                              %
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="content">
                      <div className="text">
                        <img src="/bean.svg" width={16} />
                        BEAN
                        <ChevronsRight color="#b0b0b0" size={16} />
                        <img src="/root.svg" width={16} />
                        ROOT
                      </div>

                      <div className="slippage">
                        <S.SlippageInput
                          id="slippage"
                          maxLength={5}
                          allowNegative={false}
                          allowLeadingZeros={false}
                          decimalScale={2}
                          placeholder="1"
                          value={mintFormState.slippage}
                          valueIsNumericString
                          onValueChange={(v) => {
                            const value = v.value;
                            onChangeMintFormStateField("slippage", value);
                          }}
                        />
                        <label htmlFor="slippage">%</label>
                      </div>
                    </div>
                  </>
                )}

                <div className="content">
                  <div className="text">
                    Mint to Farm Balance
                    <TooltipIcon text="Transfer minted Roots to Beanstalk Farm Balance.">
                      <div className="helper">
                        <HelpCircle size={14} color="#838383" />
                      </div>
                    </TooltipIcon>
                  </div>

                  <S.ToggleButton
                    $active={mintFormState.mintToFarmBalance}
                    className="toggle"
                    onClick={() =>
                      onChangeMintFormStateField(
                        "mintToFarmBalance",
                        !mintFormState.mintToFarmBalance
                      )
                    }
                  >
                    <div />
                  </S.ToggleButton>
                </div>
              </div>
            </S.PopoverContainer>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
