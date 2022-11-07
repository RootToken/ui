import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import MintForm from "../components/MintForm";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import RedeemForm from "../components/RedeemForm";
import ClaimForm from "../components/ClaimForm";
import FarmForm from "../components/FarmForm";

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
  padding: 25px 53px 14px 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState<{
    offset: number;
    width: number;
    active?: boolean;
  }>({
    offset: 0,
    width: 45,
    active: false,
  });

  const setTabPosition = () => {
    new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        entry.contentRect.width;
        if (pathname === "/farm") {
          setTab({
            offset: entry.target.offsetLeft - 53,
            width: entry.contentRect.width,
            active: true,
          });
        }
      });
    }).observe(document.getElementById("farm")!);

    new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        entry.contentRect.width;
        if (pathname === "/mint" || pathname === "/") {
          setTab({
            offset: entry.target.offsetLeft - 53,
            width: entry.contentRect.width,
            active: true,
          });
        }
      });
    }).observe(document.getElementById("mint")!);

    new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        entry.contentRect.width;
        if (pathname === "/redeem") {
          setTab({
            offset: entry.target.offsetLeft - 53,
            width: entry.contentRect.width,
            active: true,
          });
        }
      });
    }).observe(document.getElementById("redeem")!);

    new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        entry.contentRect.width;
        if (pathname === "/claim") {
          setTab({
            offset: entry.target.offsetLeft - 53,
            width: entry.contentRect.width,
            active: true,
          });
        }
      });
    }).observe(document.getElementById("claim")!);
  };

  useEffect(() => {
    setTabPosition();
  }, [pathname]);

  useEffect(() => {
    const resize = (event: any) => {
      setTabPosition();
    };
    addEventListener("resize", resize);
    return () => {
      removeEventListener("resize", resize);
    };
  }, []);

  return (
    <MainLayout>
      <>
        <Container>
          <Banner>
            <img className="ribbon" src="/fifa-wc.svg" width={31} height={54} />
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
          <MintContainer>
            <MintHeader>
              <MintHeaderButton
                id="mint"
                active={pathname === "/mint"}
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
              <MintHeaderButton
                id="farm"
                active={pathname === "/farm"}
                onClick={(e: any) => {
                  navigate("/farm");
                }}
              >
                Collective Farming
              </MintHeaderButton>
              {tab.active && (
                <div
                  style={{
                    transform: `translateX(${tab.offset}px)`,
                    width: tab.width,
                  }}
                />
              )}
            </MintHeader>
            <MintBody>
              <Routes>
                <Route path="/redeem" element={<RedeemForm />} />
                <Route path="/claim" element={<ClaimForm />} />
                <Route path="/farm" element={<FarmForm />} />
                <Route path="*" element={<MintForm />} />
              </Routes>
            </MintBody>
          </MintContainer>
        </Container>
      </>
    </MainLayout>
  );
}
