import { motion } from "framer-motion";
import { darken } from "polished";
import styled from "styled-components";
import { NumericFormat } from "react-number-format";

export const PopoverContainer = styled(motion.div)`
  background: #18181b;
  border: 1px solid #323232;
  border-radius: 12px;
  padding: 12px 15px;
  width: 275px;

  > .header {
    font-weight: bold;
    margin: 0 0 4px 0;
    color: #757880;
  }
  > .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .text {
      color: #b0b0b0;
      font-size: 14px;
    }
    > .slippage {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: rgba(255, 255, 255, 0.03);
      border-radius: 6px;
      padding: 0 7px 0 0;
    }
  }
`;

export const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;

  > svg {
    stroke: #fdfdfd;

    &:hover {
      stroke: ${darken("0.2", "#FDFDFD")};
    }
  }
`;

export const SlippageInput = styled(NumericFormat)`
  max-width: 50px;
  background-color: transparent;
  border: none;
  padding: 5px 3px 5px 7px;
  color: #fff;
  margin: 0;
  text-align: end;
  flex: 1;
`;
