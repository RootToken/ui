import { useEffect, useState } from "react";
import * as S from "./styled";
import { useNetwork, useSwitchNetwork } from "wagmi";

export default function NetworkModal() {
  const [open, setOpen] = useState(false);
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    if (chain?.id && chain.id !== 1) {
      // setOpen(true);
    } else if (chain?.id === 1) {
      setOpen(false);
    }
  }, [chain?.id]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <S.Modal
      overlayClassName="modalOverlay"
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      isOpen={open}
      onRequestClose={onClose}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <S.Body>
        <S.Header>
          <h4>SELECT A NETWORK</h4>
        </S.Header>
        <S.WalletList>
          <li>
            <button
              onClick={() => {
                if (switchNetwork) {
                  switchNetwork(1);
                }
              }}
            >
              <span>Ethereum</span>
              <img alt="Ethereum" width={35} height={35} src={`/eth.svg`} />
            </button>
          </li>
        </S.WalletList>
        <S.ErrorMessage>
          Chain {chain?.id} is not supported. Please select another network
          below.
        </S.ErrorMessage>
      </S.Body>
    </S.Modal>
  );
}
