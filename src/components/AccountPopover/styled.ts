import { motion } from "framer-motion";
import { darken } from "polished";
import styled from "styled-components";
import { mediaDown } from "../../styled";

export const PopoverContainer = styled(motion.div)`
  background: #18181b;
  border: 1px solid #323232;
  border-radius: 12px;
  padding: 12px 15px;
  width: 275px;

  > .section {
    margin-bottom: 15px;

    &:last-child {
      margin: 0;
    }
    > .header {
      font-weight: bold;
      margin: 0 0 10px 0;
      color: #757880;
    }

    > .address {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;

      > .text {
        color: #b0b0b0;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        > img {
          margin-right: 5px;
        }
      }
      > .actions {
        display: flex;
        align-items: center;

        button {
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;

          margin-left: 7px;

          color: #fff;
          font-weight: bold;
          font-size: 14px;

          &:hover {
            background: rgba(255, 255, 255, 0.08);
          }
        }
      }
    }
  }
`;

export const ConnectButton = styled.button`
  margin-left: 32px;
  background: rgba(0, 249, 124, 0.05);
  border: 1px solid #00f97c;
  border-radius: 500px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  font-weight: bold;
  line-height: 20px;
  min-width: 155px;

  &:hover {
    background-color: #212623;
  }

  ${mediaDown("tablet")`
    min-width: 120px;
    padding: 10px 15px;
    margin-left: 0;
  `}
`;

export const DisconnectButton = styled.button`
  padding: 11px 15px;
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;
