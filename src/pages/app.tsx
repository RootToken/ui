import { useEffect, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import MintForm from "../components/MintForm";

const Container = styled.div`
  max-width: 470px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  display: flex;
`;

const Banner = styled.div`
  width: 100%;
  background-color: #4b0a62;
  border-radius: 6px;
  padding: 21px 16px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 0 0 20px 0;

  > .ribbon {
    margin-right: 16px;
  }
  > .img {
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 369px;
  }
  > div {
    position: relative;
    z-index: 999;
    > h2 {
      color: #fff;
      font-weight: bold;
      margin: 0 0 6px 0;

      font-weight: 700;
      font-size: 16.6875px;
      line-height: 19px;
      display: flex;
      align-items: center;

      color: #ffffff;
    }
    > p {
      display: flex;
      align-items: center;
      > span {
        margin-left: 3px;
        color: #fff;
        font-size: 12.5px;
        > b {
          color: #fff;
        }
      }
    }
  }
`;
const MintContainer = styled.div`
  background: #18181b;
  border-radius: 6px;
  overflow: hidden;
`;
const MintHeader = styled.div`
  position: relative;
  border-bottom: 1px solid #393939;
  padding: 25px 53px 14px 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 50px;
    height: 1px;
    position: absolute;
    background-color: #00f97c;
    bottom: -1px;
    transition: transform 0.2s cubic-bezier(0.33, 1, 0.68, 1);
  }
`;
const MintHeaderButton = styled.button<{ active: boolean }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  ${(props) =>
    props.active &&
    `
    color: #fff;
    &:hover {
      color: rgba(255,255,255,1);
    }
  `}
`;
const MintBody = styled.div`
  padding: 35px 53px;
`;

export default function AppPage() {
  const [tab, setTab] = useState<{
    active: "mint" | "redeem" | "claim" | "farm";
    offset: number;
    width: number;
  }>({
    active: "mint",
    offset: 0,
    width: 53,
  });
  return (
    <MainLayout>
      <>
        <Container>
          <Banner>
            <img className="ribbon" src="/fifa-wc.svg" />
            <div>
              <h2>
                Bet to Earn on the
                <br /> 2022 FIFA World Cup
              </h2>
              <p>
                <img src="/root-logo.svg" width={47} height={23} />
                <span>
                  on <b>Paradox</b>
                </span>
              </p>
            </div>
            <img className="img" src="/wc.png" />
          </Banner>
          <MintContainer>
            <MintHeader>
              <MintHeaderButton
                active={tab.active === "mint"}
                onClick={(e: any) => {
                  setTab({
                    active: "mint",
                    offset: 0,
                    width: e.target.clientWidth,
                  });
                }}
              >
                Minting
              </MintHeaderButton>
              <MintHeaderButton
                active={tab.active === "redeem"}
                onClick={(e: any) => {
                  setTab({
                    active: "redeem",
                    offset: e.target.offsetLeft - 53,
                    width: e.target.clientWidth,
                  });
                }}
              >
                Redeem
              </MintHeaderButton>
              <MintHeaderButton
                active={tab.active === "claim"}
                onClick={(e: any) => {
                  setTab({
                    active: "claim",
                    offset: e.target.offsetLeft - 53,
                    width: e.target.clientWidth,
                  });
                }}
              >
                Claim
              </MintHeaderButton>
              <MintHeaderButton
                active={tab.active === "farm"}
                onClick={(e: any) => {
                  setTab({
                    active: "farm",
                    offset: e.target.offsetLeft - 53,
                    width: e.target.clientWidth,
                  });
                }}
              >
                Collective Farming
              </MintHeaderButton>
              <div
                style={{
                  transform: `translateX(${tab.offset}px)`,
                  width: tab.width,
                }}
              />
            </MintHeader>
            <MintBody>{tab.active === "mint" && <MintForm />}</MintBody>
          </MintContainer>
        </Container>
      </>
    </MainLayout>
  );
}
