import { useLayer, useHover, Placement } from "react-laag";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";

export default function TooltipIcon({
  children,
  text,
  element,
  placement = "top-center",
}: {
  text?: string;
  children: JSX.Element;
  element?: JSX.Element;
  placement?: Placement;
}) {
  const [isOpen, hoverProps] = useHover({
    delayLeave: 300
  });

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement, // we prefer to place the menu "top-end"
    triggerOffset: 10, // keep some distance to the trigger
    // containerOffset: 16, // give the menu some room to breath relative to the container
    // arrowOffset: 16, // let the arrow have some room to breath also
  });

  return (
    <>
      <S.TooltipTrigger {...triggerProps} {...hoverProps}>
        {children}
      </S.TooltipTrigger>
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <S.PopoverContainer {...hoverProps} {...layerProps}>
              {text && <p>{text}</p>}
              {element && element}
            </S.PopoverContainer>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
