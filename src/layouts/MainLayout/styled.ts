import styled from "styled-components";
import { mediaDown, mediaUp } from "../../styled";

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 75px;
  background: #000000;
  padding: 11px 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 15;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #091A0A;

  ${mediaDown("phone")`
    padding: 11px 20px;
  `}

  > .right {
    display: flex;
    align-items: center;

    > .menu {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;

      ${mediaDown("laptop")`
        display: none;
      `}

      > li {
        > a {
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 24px;
          color: #f4eff4;
          margin-right: 24px;
          &.wc {
            color: #72f589;
          }
          opacity: 0.8;
          &:hover {
            opacity: 1.0;
          }
        }

        ${mediaDown("laptop")`
          &:last-child {
            display: none;
          }
        `}

        &:last-child {
          margin: 0;
        }
      }
    }
  }
`;
export const Body = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  overflow: hidden;
  margin-top: 75px;
  > .bgTop {
    position: fixed;
    top: 0;
    filter: brightness(0.12);
    width: 100%;
    ${mediaUp("desktop")`
      top: -150px;
    `}
  }
  > div {
    position: relative;
    z-index: 10;
    padding: 20px 30px 100px 30px;

    ${mediaDown("phone")`
      padding: 20px 20px 100px 20px;
    `}
  }
  > .bgBottom {
    position: fixed;
    bottom: 0;
    filter: brightness(0.12);
    width: 100%;
  }
`;

export const MoreButton = styled.button`
  color: #123123;
  font-size: 14px;
  border-radius: 12px;
  line-height: 20px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-left: 20px;
  background-color: #18181b;

  display: none;

  &:hover {
    background-color: #393948 !important;
  }

  ${mediaDown("desktop")`
    display: flex;
  `}
  ${mediaDown("tablet")`
    margin-left: 10px;
    height: 42px;
    width: 42px;
  `}
`;
