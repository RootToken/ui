import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { mediaDown } from "../styled";
import useAppStore from "../store";
import { displayBN } from "../util/bigNumber";
import { TokenValue } from "@beanstalk/sdk";
import ENVIRONMENT from "../config";
import useSWR from "swr";
import { getAPY } from "../api/subgraph";
import TooltipIcon from "../components/TooltipIcon";

const Container = styled.div`
  max-width: 750px;
  margin: 60px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > .top {
    width: 100%;
    flex-basis: 100%;
  }
  ${mediaDown("tablet")`
    margin: 10px 0;
  `}
`;

const Banner = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 25px;

  > div {
    background: #18181b;
    border-radius: 6px;
    padding: 20px 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;

    > div {
      color: #00f97c;
      border-radius: 20px;
      background: #212623;
      font-weight: bold;
      font-size: 14px;
      padding: 5px 10px;
      margin-left: 10px;
      margin-top: 6px;
    }
  }
`;
const MintContainer = styled.div`
  overflow: hidden;
  padding: 0 15px;
  margin-bottom: 25px;
  width: 50%;
  flex-basis: 50%;

  ${mediaDown("tablet")`
    flex-basis: 100%;
    width: 100%;
  `}

  > div {
    background: #18181b;
    border-radius: 6px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    > h2 {
      margin: 0 0 7px 0;
    }
    > p {
      margin: 0 0 10px 0;
      font-size: 14px;
    }
    > div {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      flex: 1;
      display: flex;
      align-items: flex-end;
    }
  }
`;
const MintHeader = styled.div`
  position: relative;
  border-bottom: 1px solid #393939;
  padding: 25px 53px 14px 53px;
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
  ${mediaDown("phone")`
    padding: 35px 20px;
  `}
`;

export default function DashboardPage() {
  const { data } = useSWR("apys", getAPY);
  const [state, setState] = useState({
    totalSupply: TokenValue.fromHuman("0", 18),
    underlyingBdv: TokenValue.fromHuman("0", 6),
    seeds: TokenValue.fromHuman("0", 6),
    stalk: TokenValue.fromHuman("0", 10),
    isLoading: false,
  });
  const { beanstalkSdk, beanstalkContract, erc20Contracts } = useAppStore(
    (v) => ({
      beanstalkSdk: v.beanstalkSdk,
      beanstalkContract: v.beanstalkContract,
      erc20Contracts: v.erc20Contracts,
    })
  );

  const getData = async () => {
    setState((s) => ({
      ...s,
      isLoading: true,
    }));

    try {
      const totalSupply = TokenValue.fromBlockchain(
        await erc20Contracts[ENVIRONMENT.rootContractAddress].totalSupply(),
        18
      );
      const underlyingBdv = TokenValue.fromBlockchain(
        await erc20Contracts[ENVIRONMENT.rootContractAddress].underlyingBdv(),
        6
      );
      const seeds = TokenValue.fromBlockchain(
        await beanstalkContract.balanceOfSeeds(ENVIRONMENT.rootContractAddress),
        6
      );
      const stalk = TokenValue.fromBlockchain(
        await beanstalkContract.balanceOfStalk(ENVIRONMENT.rootContractAddress),
        10
      );
      setState({
        totalSupply,
        underlyingBdv,
        seeds,
        stalk,
        isLoading: false,
      });
    } catch (e: any) {
      setState((s) => ({
        ...s,
        isLoading: false,
      }));
      // toast.error(e.message);
    }
  };
  useEffect(() => {
    getData();
  }, [erc20Contracts, beanstalkContract]);
  return (
    <MainLayout>
      <>
        <Container>
          <Banner>
            <div>
              <img src="/root-logo.svg" />
              {data && (
                <TooltipIcon
                  element={
                    <p>
                      The Variable Bean APY uses a moving average of Beans
                      earned by Stalkholders during recent Seasons to estimate a
                      future rate of return, accounting for Stalk growth. <br />
                      <a
                        href="https://docs.bean.money/guides/silo/understand-vapy"
                        target="_blank"
                      >
                        Learn more
                      </a>
                    </p>
                  }
                >
                  <div className="apy">{data?.seeds}% vAPY</div>
                </TooltipIcon>
              )}
            </div>
          </Banner>

          <MintContainer>
            <div>
              <h2>Total Roots</h2>
              <p>The total outstanding Roots.</p>
              {!state.isLoading && <div>{displayBN(state.totalSupply, 2)}</div>}
            </div>
          </MintContainer>
          <MintContainer>
            <div>
              <h2>Total BDV</h2>
              <p>The total (unupdated) BDV of Silo Deposits owned by Root.</p>
              {!state.isLoading && (
                <div>{displayBN(state.underlyingBdv, 2)}</div>
              )}
            </div>
          </MintContainer>

          <MintContainer>
            <div>
              <h2>Total Stalk</h2>
              <p>The total Stalk of Root. Does not include Grown Stalk.</p>
              {!state.isLoading && <div>{displayBN(state.stalk, 2)}</div>}
            </div>
          </MintContainer>

          <MintContainer>
            <div>
              <h2>Total Seeds</h2>
              <p>The total Seeds of Root. Does not include Earned Seeds.</p>
              {!state.isLoading && <div>{displayBN(state.seeds, 2)}</div>}
            </div>
          </MintContainer>
        </Container>
      </>
    </MainLayout>
  );
}
