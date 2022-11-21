import { TokenValue } from "@beanstalk/sdk";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "react-feather";
import TooltipIcon from "../../../components/TooltipIcon";
import { IMintFormToken } from "../../../interfaces/mintForm";
import useAppStore from "../../../store";
import { displayBN } from "../../../util/bigNumber";
import TokenPickerModal from "../../TokenPickerModal";
import * as S from "./styled";

export default function MintRow({ index }: { index: number }) {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const { account, mintFormState, onChangeMintFormStateField, beanstalkSdk } =
    useAppStore(
      ({
        account,
        mintFormState,
        onChangeMintFormStateField,
        beanstalkSdk,
      }) => ({
        account,
        mintFormState,
        onChangeMintFormStateField,
        beanstalkSdk,
      })
    );

  const mintItem = mintFormState.mintTokens[index];

  const onChangeWithField = (field: keyof IMintFormToken, value: any) => {
    const clonedArr: any = [...mintFormState.mintTokens];
    clonedArr[index][field] = value;
    onChangeMintFormStateField("mintTokens", clonedArr);
  };

  const onChangeWithValue = (value: IMintFormToken) => {
    const clonedArr = [...mintFormState.mintTokens];
    clonedArr[index] = value;
    onChangeMintFormStateField("mintTokens", clonedArr);
  };

  let balance = TokenValue.fromHuman("0", mintItem.token.decimals);
  let external = TokenValue.fromHuman("0", mintItem.token.decimals);
  let internal = TokenValue.fromHuman("0", mintItem.token.decimals);
  if (account && mintItem.token.symbol === "BEAN DEPOSIT") {
    balance = account.siloDeposits.reduce((v, cur) => {
      return v.add(cur.amount);
    }, TokenValue.fromHuman("0", 6));
    external = balance;

  } else if (account && mintItem.token.symbol === "ETH") {
    balance = account.ethBalance;
    external = balance;
  } else if (account) {
    const map = beanstalkSdk.tokens.getMap();
    const token = map.get(mintItem.token.address.toLowerCase());
    if (token) {
      const total = account.tokenBalances.get(token)?.total;
      const externalTemp = account.tokenBalances.get(token)?.external;
      const internalTemp = account.tokenBalances.get(token)?.internal;
      if (total) {
        balance = total;
      }
      if (externalTemp) {
        external = externalTemp;
      }
      if (internalTemp) {
        internal = internalTemp;
      }
    }
  }

  return (
    <>
      <S.Row $connected={!!account}>
        <div className="inputContainer">
          <S.Input
            $connected={!!account}
            placeholder="0"
            id="rootAmount"
            thousandSeparator
            decimalScale={mintItem.token.formatDecimals}
            valueIsNumericString
            allowNegative={false}
            value={mintItem.amount}
            isAllowed={(v) => {
              if (v.floatValue) {
                return !TokenValue.fromHuman(
                  v.floatValue,
                  mintItem.token.decimals
                ).gt(balance);
              }
              return true;
            }}
            onValueChange={(e) => {
              const value = e.value;
              onChangeWithField("amount", value);
            }}
          />
          <div className="pickerContainer">
            <button onClick={() => setOpenTokenPicker(true)}>
              <div>
                <img width={14} height={14} src={mintItem.token.icon} />
                <div>{mintItem.token.symbol}</div>
              </div>
              <ChevronDown size={14} color="#999999" />
            </button>
          </div>
        </div>
      </S.Row>
      <AnimatePresence>
        {account && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                opacity: 0,
                height: 0,
                overflow: "hidden",
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <S.Balance>
              <div className="balance">
                <TooltipIcon
                  width={300}
                  placement="bottom-center"
                  element={
                    <S.BalanceHover>
                      <div>
                        <b>Circulating Balance</b>:{" "}
                        {displayBN(external, mintItem.token.formatDecimals)}{" "}
                        {mintItem.token.name}{" "}
                      </div>

                      <div>
                        <b>Farm Balance</b>:{" "}
                        {displayBN(internal, mintItem.token.formatDecimals)}{" "}
                        {mintItem.token.name}{" "}
                      </div>
                      <hr />
                      <p>
                        The Root UI first spends the balance that is most
                        gas-efficient based on the specified amount.
                      </p>
                      <p>
                        For more information{" "}
                        <a
                          href="https://docs.bean.money/guides/balances/understand-my-balances#farm-balance-circulating-balance"
                          target="_blank"
                        >
                          click here
                        </a>
                        .
                      </p>
                    </S.BalanceHover>
                  }
                >
                  <span>
                    Balance: {displayBN(balance, mintItem.token.formatDecimals)}
                  </span>
                </TooltipIcon>
                <button
                  onClick={() =>
                    onChangeWithField(
                      "amount",
                      displayBN(
                        balance,
                        mintItem.token.formatDecimals
                      ).replaceAll(",", "")
                    )
                  }
                >
                  Max
                </button>
              </div>
            </S.Balance>
          </motion.div>
        )}
      </AnimatePresence>

      <TokenPickerModal
        excludes={[]}
        open={openTokenPicker}
        onClose={() => setOpenTokenPicker(false)}
        onSelect={(newToken) => {
          onChangeWithValue({
            ...mintItem,
            amount: "",
            token: newToken,
            slippage: newToken.slippage.toString(),
          });
        }}
      />
    </>
  );
}
