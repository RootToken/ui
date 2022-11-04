import { motion } from "framer-motion";
import styled from "styled-components";

export const PopoverContainer = styled(motion.div)`
  background: #18181b;
  border: 1px solid #323232;
  border-radius: 12px;
  padding: 12px 15px;
  width: fit-content;

  > p {
    margin: 0;
    font-size: 14px;
  }
`;

export const TooltipTrigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
