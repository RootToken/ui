import M from "react-modal";
import styled from "styled-components";
import { mediaDown } from "../../styled";

export const Modal = styled(M)`
  background: #18181b;
  border: 1px solid #323232;
  border-radius: 12px;
  max-width: 450px;
  width: 100%;
  margin: 100px auto 0 auto;

  ${mediaDown("phone")`
  max-width: 90%;
`}
`;

export const Body = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 26px 22px 0 22px;

  ${mediaDown("phone")`
    padding: 26px 15px 0 15px;
  `}

  > h4 {
    margin: 0;
    color: #757880;
  }
  > button {
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const SearchInputContainer = styled.div`
  padding: 0 22px;
  ${mediaDown("phone")`
    padding: 0 15px;
  `}
`;
export const SearchInput = styled.input`
  border: none;
  padding: 15px 20px;
  width: 100%;
  margin-bottom: 22px;

  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
`;
export const CoinList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 22px 22px;
  max-height: 350px;
  overflow-y: auto;
  ${mediaDown("phone")`
    padding: 0 15px 22px 15px;
  `}
`;

export const CoinItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 100%;

  padding: 10px;
  border-radius: 12px;
  &:hover {
    background-color: #222226;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > .content {
    display: flex;
    align-items: center;
    > img {
      margin-right: 23.5px;
      width: 35px;
      height: 35px;
      ${mediaDown("phone")`
        margin-right: 15px;
      `}
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > div:nth-child(1) {
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;
        color: #ffffff;
        ${mediaDown("phone")`
        font-size: 14px;
      `}
      }
      > div:nth-child(2) {
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        color: #b0b0b0;
      }
    }
  }
  > .balance {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    align-items: center;
    font-weight: bold;

    color: #ffffff;
    ${mediaDown("phone")`
        font-size: 14px;
      `}
  }

  ${(props) =>
    props.disabled &&
    `
  opacity: 0.2;
  cursor: unset;

  &:hover {
    background-color: transparent;
  }
`}
`;

export const ErrorMessage = styled.div`
  margin-top: 20px;
  border-radius: 12px;
  padding: 15px 20px;
  background-color: rgb(253, 237, 237);
  color: rgb(95, 33, 32);
  font-size: 1rem;
  font-weight: 500;
`;
