import { useLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Settings } from "react-feather";
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
                <div className="header">Settings</div>
                <div className="content">
                  <div className="text">Mint Slippage Tolerance</div>

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
              </div>

              {mintFormState.mintTokens.filter((v) => v.token.slippage > 0)
                .length > 0 && (
                <div className="section">
                  <div className="header">Swap Slippage</div>
                  {mintFormState.mintTokens.map((v, idx) => {
                    if (v.token.slippage === 0) {
                      return null;
                    }
                    return (
                      <div className="content" key={idx}>
                        <div className="text">{v.token.symbol} Tolerance</div>
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
                          <label htmlFor={`slippage-${v.token.symbol}`}>%</label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </S.PopoverContainer>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
