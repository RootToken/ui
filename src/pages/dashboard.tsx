import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { mediaDown } from "../styled";
import useAppStore from "../store";
import { displayBN } from "../util/bigNumber";
import { DataSource, TokenValue } from "@beanstalk/sdk";
import ENVIRONMENT from "../config";
import useSWR from "swr";
import { getAPY } from "../api/subgraph";
import TooltipIcon from "../components/TooltipIcon";
import { HelpCircle } from "react-feather";
import TransactionToast from "../components/Common/TransactionToast";

const Container = styled.div`
  max-width: 750px;
  margin: 20px auto;
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
  flex-direction: column;

  ${mediaDown("phone")`
      padding: 0; 
      margin-bottom: 15px;
  `}

  > div {
    background: #18181b;
    border-radius: 6px;
    padding: 20px 20px;
    width: 100%;

    > .header {
      align-items: center;
      justify-content: center;
      display: flex;
      margin-bottom: 25px;

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
    > .actions {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      ${mediaDown("tablet")`
        justify-content: space-between;
      `}
    }
  }
`;
const MintContainer = styled.div`
  overflow: hidden;
  padding: 0 15px;
  margin-bottom: 25px;
  width: 50%;
  flex-basis: 50%;
  ${mediaDown("phone")`
      padding: 0;
      margin-bottom: 15px;
  `}

  ${mediaDown("tablet")`
    flex-basis: 100%;
    width: 100%;
  `}

  > div {
    background: #18181b;
    border-radius: 6px;
    padding: 20px 30px;
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

const FarmButton = styled.button<{ $disabled: boolean }>`
  background: transparent;
  border-radius: 2.24601px;
  color: #72f589;
  border: 1px solid #72f589;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 10px;

  ${props => props.$disabled && `
    opacity: 0.5;
  `}

  ${mediaDown("tablet")`
    margin: 0;
    width: 48%;
    flex-basis: 48%;
  `}

  &:hover {
    background-color: #212623;
  }

  > div {
    margin-left: 8px;
    margin-top: 2px;
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
    grownStalk: TokenValue.fromHuman("0", 10),
    earnedBeans: TokenValue.fromHuman("0", 10),
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
      const grownStalk = TokenValue.fromBlockchain(
        await beanstalkContract.balanceOfGrownStalk(
          ENVIRONMENT.rootContractAddress
        ),
        10
      );
      const earnedBeans = TokenValue.fromBlockchain(
        await beanstalkContract.balanceOfEarnedBeans(
          ENVIRONMENT.rootContractAddress
        ),
        6
      );
      setState({
        totalSupply,
        underlyingBdv,
        seeds,
        stalk,
        isLoading: false,
        grownStalk,
        earnedBeans,
      });
    } catch (e: any) {
      setState((s) => ({
        ...s,
        isLoading: false,
      }));
      // toast.error(e.message);
    }
  };

  const onEarn = async () => {
    if (state.earnedBeans.eq(0)) {
      return;
    }
    const txToast = new TransactionToast({
      loading: `Claiming rewards...`,
      success: "Claim successful.",
    });

    try {
      const txn = await beanstalkSdk.contracts.root.earn();
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
      getData();
    } catch (e) {
      txToast.error(e);
    }
  };

  const onMow = async () => {
    if (state.grownStalk.eq(0)) {
      return;
    }
    const txToast = new TransactionToast({
      loading: `Claiming rewards...`,
      success: "Claim successful.",
    });

    try {
      const txn = await beanstalkSdk.contracts.beanstalk.update(
        ENVIRONMENT.rootContractAddress
      );
      txToast.confirming(txn);
      const receipt = await txn.wait();
      txToast.success(receipt);
      getData();
    } catch (e) {
      txToast.error(e);
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
              <div className="header">
                <img src="/root-logo.svg" />
                {data && (
                  <TooltipIcon
                    element={
                      <p>
                        The Variable Bean APY uses a moving average of Beans
                        earned by Stalkholders during recent Seasons to estimate
                        a future rate of return, accounting for Stalk growth.{" "}
                        <br />
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

          <MintContainer>
            <div>
              <h2>Earned Beans</h2>
              <p>The total earned Beans of Root.</p>
              {!state.isLoading && <div>{displayBN(state.earnedBeans, 2)}</div>}
              <FarmButton $disabled={state.earnedBeans.eq(0)} onClick={onEarn}>
                Earn{" "}
                <TooltipIcon text="Mow all of Root’s Grown Stalk, Plant the Seeds associated with Root’s Earned Beans, and Deposit Root’s Earned Beans in the current Season">
                  <HelpCircle size={16} color="rgba(255,255,255,0.5)" />
                </TooltipIcon>
              </FarmButton>
            </div>
          </MintContainer>

          <MintContainer>
            <div>
              <h2>Grown Stalk</h2>
              <p>The total grown Stalk of Root.</p>
              {!state.isLoading && <div>{displayBN(state.grownStalk, 2)}</div>}
              <FarmButton $disabled={state.grownStalk.eq(0)} onClick={onMow}>
                Mow{" "}
                <TooltipIcon text="Mow all of Root’s Grown Stalk">
                  <HelpCircle size={16} color="rgba(255,255,255,0.5)" />
                </TooltipIcon>
              </FarmButton>
            </div>
          </MintContainer>
        </Container>
      </>
    </MainLayout>
  );
}
