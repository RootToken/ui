import styled from "styled-components";

export const Form = styled.form`
  .group {
    > label {
      font-weight: 700;
      font-size: 14px;
      line-height: 26px;
      text-transform: uppercase;
      color: #757880;
      margin-bottom: 6px;
      display: flex;
    }
    > .contentContainer {
      border-radius: 6px;
      background-color: rgba(255, 255, 255, 0.03);

      > .inputContainer {
        position: relative;
        > input {
          background-color: transparent;
          border: 0;
          color: #fff;
          font-size: 14px;
          line-height: 19px;
          padding: 15px 20px;
          width: 100%;
        }
      }
    }
    > .infoContainer {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > .bdv {
        color: #fff;
        font-size: 14px;
      }
      > .max {
        color: #fff;
        font-size: 14px;
        > button {
          color: #00f97c;
          background-color: transparent;
          margin: 0;
          padding: 0;
          border: none;
          font-size: 14px;
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
    font-weight: 400;
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