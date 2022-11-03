import { between, darken } from "polished";
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

  > .right {
    display: flex;
    align-items: center;

    > .menu {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;

      > li {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #f4eff4;
        margin-right: 24px;

        &.wc {
          color: #72f589;
        }

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
  > .bgTop {
    position: absolute;
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
  }
  > .bgBottom {
    position: absolute;
    bottom: 0;
    filter: brightness(0.12);
    width: 100%;
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
  padding: 14px 27px;
`;
