import M from "react-modal";
import styled from "styled-components";

export const Modal = styled(M)`
  background: #18181b;
  border: 1px solid #323232;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  margin: 100px auto 0 auto;
  padding: 26px 22px;
`;

export const Body = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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
export const WalletList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
    > button {
      padding: 15px 20px;
      width: 100%;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 12px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }
      > span {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
      }
      > img {
        width: 35px;
        height: 35px;
      }
    }
  }
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
