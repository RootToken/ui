import M from "react-modal";
import styled from "styled-components";
import { mediaDown } from "../../styled";

export const Modal = styled(M)`
  background: #18181b;
  border: 1px solid #323232;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  margin: 50px auto 0 auto;
  padding: 26px 22px;

  ${mediaDown("tablet")`
    max-width: 400px;
  `}
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
export const List = styled.ul`
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
    button {
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
    }
  }
`;
