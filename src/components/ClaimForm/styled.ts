import { darken } from "polished";
import styled from "styled-components";

export const Form = styled.form`
  .group {
    > .header {
      justify-content: space-between;
      display: flex;
      align-items: center;
      margin-bottom: 6px;

      > div {
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        text-transform: uppercase;
        color: #757880;
      }
      > button {
        border: none;
        margin: 0;
        padding: 0;
        background-color: transparent;
      }
    }
    > .mintList {
      display: flex;
      flex-direction: column;
      > div {
        margin-bottom: 15px;
        position: relative;

        &:last-child {
          margin-bottom: 0;
        }

        > button {
          position: absolute;
          right: -35px;
          transform: translate(0, -50%);
          top: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    > .contentContainer {
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.03);
      > .inputContainer {
        position: relative;
        display: flex;
        > input {
          background-color: transparent;
          border: 0;
          color: #fff;
          font-size: 16px;
          line-height: 19px;
          padding: 15px 5px 15px 20px;
          flex: 1;
        }
        > .rootContainer {
          display: flex;
          align-items: center;
          padding: 5px 20px 5px 5px;
          > img {
            margin-right: 10px;
          }
          > div {
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }
    > .infoContainer {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .balance {
        color: #fff;
        font-size: 14px;
        text-align: right;
        > span {
          font-weight: 300;
          font-size: 14px;
          line-height: 18px;
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
      > .price {
        display: flex;
        align-items: center;
        > div:nth-child(1) {
          margin-right: 8px;
        }
        > div:nth-child(2) {
          font-size: 12px;
          line-height: 20px;
          color: #999999;
        }
      }
      > .gas {
        font-size: 12px;
        line-height: 8px;

        color: #ffffff;
      }
      > .add {
        display: flex;
        align-items: center;
        > button {
          color: #787878;
          font-size: 14px;
          background: transparent;
          border: none;
          margin: 0 10px 0 0;
          line-height: 26px;
        }
      }
    }
  }
`;

export const Phase = styled.section`
  margin-bottom: 25px;
`;
export const Option = styled.div<{ active: boolean }>`
  border-radius: 6px;
  border: 1px solid #7c7c7c;
  margin-bottom: 15px;

  ${(props) =>
    props.active &&
    `
  border: 1px solid #72F589;

    `}
`;
export const OptionBody = styled.div`
  padding: 12px;
  display: flex;
`;

export const OptionHeader = styled.div<{ active: boolean }>`
  padding: 10px 11px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #393939;
  cursor: pointer;
  > button {
    border-radius: 50%;
    border: 1px solid #5b5b5b;
    padding: 0;
    margin: 0;
    width: 14px;
    height: 14px;
    background: transparent;
    margin-right: 9px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      props.active &&
      `
        
    border: 1px solid #72f589;
    > div {
        border-radius: 50%;
        background-color: #72f589;
        width: 8px;
        height: 8px;
      }
    `}
  }
  > h3 {
    margin: 0;
    color: #999999;
    line-height: 20px;
    font-weight: 300;
    font-size: 14px;

    ${(props) =>
      props.active &&
      `
        color: #FFF;
    `}
  }
`;

export const MintButton = styled.button`
  background: #72f589;
  border-radius: 2.24601px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 15px 50px;
  font-weight: bold;
  color: #123123;
  font-size: 14px;
  border-radius: 6px;
  line-height: 20px;
  margin: 0 auto;
`;

export const Graph = styled.div`
  background-color: #1f1f1f;
  border-radius: 6px;
  padding: 10px 14px;
  flex-basis: 55%;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 19px;
`;

export const TxDetails = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;

  > .collapse {
    height: 0px;
    overflow: hidden;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    visibility: hidden;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;

      > div:nth-child(1) {
        display: flex;
        align-items: center;
        font-weight: bold;
        > div {
          margin-left: 6px;
        }
      }
      > div:nth-child(2) {
        display: flex;
        align-items: center;
        > img {
          margin-right: 6px;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const TxHeader = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 13px;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.active &&
    `
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  `}
  > .content {
    display: flex;
    align-items: center;

    > img {
      margin-right: 10px;
    }
    > span {
      font-size: 14px;
      line-height: 20px;
      color: #999999;
    }
  }
`;

export const PriceExchangeTooltip = styled.div`
  > .header {
    font-weight: bold;
    margin: 0 0 4px 0;
    color: #757880;
  }
  > .body {
    color: #b0b0b0;
    font-size: 14px;
  }
`;
