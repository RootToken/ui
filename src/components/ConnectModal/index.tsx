import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { X } from "react-feather";
import { useConnect } from "wagmi";
import ENVIRONMENT from "../../config";

import * as S from "./styled";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ConnectModal({ open, onClose }: ModalProps) {
  const { connect, connectors, error } = useConnect({
    onSuccess() {
      onClose();
    },
  });
  return (
    <S.Modal
      overlayClassName="modalOverlay"
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      isOpen={open}
      onRequestClose={onClose}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <S.Body>
        <S.Header>
          <h4>CONNECT A WALLET</h4>
          <button onClick={onClose}>
            <X color="#E4E4E6" size={20} />
          </button>
        </S.Header>
        <S.WalletList>
          {connectors.map((connector) => {
            if (
              !connector.ready ||
              (connector.name === "MetaMask" &&
                !(connector instanceof MetaMaskConnector))
            ) {
              return null;
            }
            return (
              <li key={connector.name}>
                <button
                  onClick={() => {
                    connect({ connector });
                  }}
                >
                  <span>{connector.name}</span>
                  <img
                    alt={connector.name}
                    width={35}
                    height={35}
                    src={`${ENVIRONMENT.connectorLogos[connector.name]}`}
                  />
                </button>
              </li>
            );
          })}
        </S.WalletList>
        {error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
      </S.Body>
    </S.Modal>
  );
}
