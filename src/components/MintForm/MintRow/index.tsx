import { TokenValue } from "@beanstalk/sdk";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "react-feather";
import { IMintFormToken } from "../../../interfaces/mintForm";
import useAppStore from "../../../store";
import { displayBN } from "../../../util/bigNumber";
import TokenPickerModal from "../../TokenPickerModal";
import * as S from "./styled";

export default function MintRow({ index }: { index: number }) {
  const [openTokenPicker, setOpenTokenPicker] = useState(false);
  const { account, mintFormState, onChangeMintFormStateField } = useAppStore(
    ({ account, mintFormState, onChangeMintFormStateField }) => ({
      account,
      mintFormState,
      onChangeMintFormStateField,
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

  const tokenBalance =
    mintItem.token.symbol === "BEAN DEPOSIT"
      ? account?.siloDeposits.reduce((v, cur) => {
          return v.add(cur.amount);
        }, TokenValue.fromHuman("0", 6)) || TokenValue.fromHuman("0", 6)
      : account?.balances.get(mintItem.token.address) ||
        TokenValue.fromHuman("0", mintItem.token.decimals);

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
                ).gt(tokenBalance);
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
                <span>
                  Balance:{" "}
                  {displayBN(tokenBalance, mintItem.token.formatDecimals)}
                </span>{" "}
                <button
                  onClick={() =>
                    onChangeWithField(
                      "amount",
                      displayBN(
                        tokenBalance,
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
