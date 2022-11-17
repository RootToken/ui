import { useEffect, useState, lazy, Suspense } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import MintForm from "../components/MintForm";
import { Route, Routes, useLocation, useNavigate } from "react-router";
// import RedeemForm from "../components/RedeemForm";
// import ClaimForm from "../components/ClaimForm";
// import FarmForm from "../components/FarmForm";
import { mediaDown } from "../styled";

const FarmForm = lazy(() => import("../components/FarmForm"));
const ClaimForm = lazy(() => import("../components/ClaimForm"));
const RedeemForm = lazy(() => import("../components/RedeemForm"));

const Container = styled.div`
  max-width: 470px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  ${mediaDown("tablet")`
    padding-top: 10px !important;
  `}
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
    z-index: 10;
  }
  > .img {
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 369px;

    ${mediaDown("phone")`
      right: -80px;
    `}
    @media (max-width: 400px) {
      right: -140px;
    }
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
        margin: 0 0 -3px 3px;
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
  padding: 20px 53px 16px 53px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${mediaDown("phone")`
    padding: 25px 20px 14px 20px;
  `}

  > div {
    width: 0px;
    height: 1px;
    position: absolute;
    background-color: #00f97c;
    bottom: -1px;
    transition: transform 0.2s cubic-bezier(0.33, 1, 0.68, 1);
  }
`;
const MintHeaderButton = styled.button<{ active: boolean }>`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;

  flex-basis: 33.33%;
  width: 33.33%;
  border-radius: 10px;
  padding: 10px 15px;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  ${(props) =>
    props.active &&
    `
    color: #00f97c;
    background-color: rgba(255, 255, 255, 0.03);

    &:hover {
      
      color: #00f97c;
    }
  `}
`;
const MintBody = styled.div`
  padding: 35px 53px;
  ${mediaDown("phone")`
    padding: 35px 20px;
  `}
`;

export default function AppPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <MainLayout>
      <>
        <Container>
          <a href="https://app.betparadox.com/soccer/root-5" target="_blank">
            <Banner>
              <img
                className="ribbon"
                src="/fifa-wc.svg"
                width={31}
                height={54}
              />
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
              <img className="img" src="/wc.png" width={369} height={101} />
            </Banner>
          </a>
          <MintContainer>
            <MintHeader>
              <MintHeaderButton
                id="mint"
                active={pathname === "/mint" || pathname === "/"}
                onClick={(e: any) => {
                  navigate("/mint");
                }}
              >
                Mint
              </MintHeaderButton>
              <MintHeaderButton
                id="redeem"
                active={pathname === "/redeem"}
                onClick={(e: any) => {
                  navigate("/redeem");
                }}
              >
                Redeem
              </MintHeaderButton>
              <MintHeaderButton
                id="claim"
                active={pathname === "/claim"}
                onClick={(e: any) => {
                  navigate("/claim");
                }}
              >
                Claim
              </MintHeaderButton>
            </MintHeader>
            <MintBody>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/redeem" element={<RedeemForm />} />
                  <Route path="/claim" element={<ClaimForm />} />
                  <Route path="/farm" element={<FarmForm />} />
                  <Route path="*" element={<MintForm />} />
                </Routes>
              </Suspense>
            </MintBody>
          </MintContainer>
        </Container>
      </>
    </MainLayout>
  );
}
