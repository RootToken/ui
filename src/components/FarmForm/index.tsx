import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Info, X } from "react-feather";
import { NumericFormat } from "react-number-format";
import useAppStore from "../../store";
import MintSettingsPopover from "../MintSettingsPopover";
import TokenPickerModal from "../TokenPickerModal";
import TooltipIcon from "../TooltipIcon";
import * as S from "./styled";

export default function FarmForm() {
  const [openTx, setOpenTx] = useState(false);
  const [totalPreview, setTotalPreview] = useState(true);
  const [openPicker, setOpenPicker] = useState(false);
  const {
    mintFormState,
    onChangeMintFormStateField,
    onResetMintFormState,
    prices,
  } = useAppStore(
    ({
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      prices,
    }) => ({
      mintFormState,
      onChangeMintFormStateField,
      onResetMintFormState,
      prices,
    })
  );

  useEffect(() => {
    onResetMintFormState();
    return () => {
      onResetMintFormState();
    };
  }, []);

  let mintAmount = 0;
  let totalUSD = 0;

  mintFormState.mintTokens.forEach((v, idx) => {
    if (prices) {
      mintAmount +=
        prices[v.token.symbol] * (idx + 1) * parseFloat(v.amount || "0");
      totalUSD += prices[v.token.symbol] * parseFloat(v.amount || "0");
    }
  });

  return (
    <S.Container>
      <S.Button>
        Earn{" "}
        <TooltipIcon text="Earn">
          <HelpCircle size={14} color="#838383" />
        </TooltipIcon>
      </S.Button>
      <S.Button>
        Mow{" "}
        <TooltipIcon text="Mow">
          <HelpCircle size={14} color="#838383" />
        </TooltipIcon>
      </S.Button>
      <S.Button>
        Update BDVs
        <TooltipIcon text="Update BDVs">
          <HelpCircle size={14} color="#838383" />
        </TooltipIcon>
      </S.Button>
    </S.Container>
  );
}
