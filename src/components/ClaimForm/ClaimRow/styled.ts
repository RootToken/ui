import styled from "styled-components";
import { NumericFormat } from "react-number-format";
import { darken } from "polished";

export const Row = styled.div`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.03);
  > .inputContainer {
    position: relative;
    display: flex;
    > .pickerContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 5px 10px 5px 5px;
      justify-content: center;
      > button {
        border: none;
        margin: 0;
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: 3.17392px;
        display: flex;
        align-items: center;
        padding: 5px 10px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        > div {
          display: flex;
          align-items: center;
          margin-right: 5px;
          > div {
            margin-left: 8px;
            color: #fff;
            font-size: 14px;
            line-height: 19px;
            flex: 1;
          }
          > img {
            margin: 0 0 -2px 0;
          }
        }
      }
      > .balance {
        color: #fff;
        font-size: 14px;
        text-align: right;
        margin-top: 3px;
        > span {
          font-weight: 300;
          font-size: 14px;
          line-height: 26px;
          color: #757880;
        }
        > button {
          color: #00f97c;
          background-color: transparent;
          margin: 0 0 0 5px;
          padding: 0;
          border: none;
          font-size: 14px;
          font-weight: bold;

          &:hover {
            color: ${darken("0.1", "#00f97c")};
          }
        }
      }
    }
  }
`;
export const Input = styled(NumericFormat)`
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 16px;
  line-height: 19px;
  padding: 15px 5px 15px 20px;
  flex: 1;
`;
