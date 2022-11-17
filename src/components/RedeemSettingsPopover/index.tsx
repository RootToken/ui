import { useLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, Settings } from "react-feather";
import * as S from "./styled";
import useAppStore from "../../store";
import TooltipIcon from "../TooltipIcon";

export default function RedeemSettingsPopver() {
  const [isOpen, setOpen] = useState(false);

  const { redeemFormState, onChangeRedeemFormStateField } = useAppStore(
    ({ redeemFormState, onChangeRedeemFormStateField }) => ({
      redeemFormState,
      onChangeRedeemFormStateField,
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
                  <div className="text">
                    Slippage Tolerance{" "}
                    <TooltipIcon text="Your transaction will fail if the cBean/Bean Deposit you receive for Redeeming Roots decreases by more than this percentage.">
                      <HelpCircle size={14} color="#838383" />
                    </TooltipIcon>
                  </div>

                  <div className="slippage">
                    <S.SlippageInput
                      id="slippage"
                      maxLength={5}
                      allowNegative={false}
                      allowLeadingZeros={false}
                      decimalScale={2}
                      placeholder="1"
                      value={redeemFormState.slippage}
                      valueIsNumericString
                      onValueChange={(v) => {
                        const value = v.value;
                        onChangeRedeemFormStateField("slippage", value);
                      }}
                    />
                    <label htmlFor="slippage">%</label>
                  </div>
                </div>

                <div className="content">
                  <div className="text">
                    Redeem for Bean Deposit{" "}
                    <TooltipIcon text="Roots are instantly Redeemable for Bean Deposits. To Use Bean Deposits, go to bean.money.">

                      <HelpCircle size={14} color="#838383" />
                    </TooltipIcon>
                  </div>

                  <S.ToggleButton
                    $active={redeemFormState.redeemToWallet}
                    className="toggle"
                    onClick={() =>
                      onChangeRedeemFormStateField(
                        "redeemToWallet",
                        !redeemFormState.redeemToWallet
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
