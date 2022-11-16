import { useLayer } from "react-laag";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Copy, ExternalLink } from "react-feather";
import * as S from "./styled";
import useAppStore from "../../store";
import { useAccount, useDisconnect } from "wagmi";
import { trimAddress } from "../../util/account";
import ConnectModal from "../ConnectModal";
import TooltipIcon from "../TooltipIcon";
import ENVIRONMENT from "../../config";
import CopyToClipboard from "react-copy-to-clipboard";

export default function AccountPopover() {
  const [isOpen, setOpen] = useState(false);
  const [copy, setCopy] = useState(false);
  const sdk = useAppStore((v) => v.beanstalkSdk);
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true, // automatically find the best placement
    placement: "bottom-end", // we prefer to place the menu "top-end"
    triggerOffset: 10, // keep some distance to the trigger
    // containerOffset: 16, // give the menu some room to breath relative to the container
    // arrowOffset: 16, // let the arrow have some room to breath also
  });

  useEffect(() => {
    if (sdk && isConnected) {
    }
  }, [sdk, isConnected]);

  return (
    <>
      <S.ConnectButton
        {...triggerProps}
        onClick={() => {
          if (isOpen) {
            setOpen(false)
          } else {
            if (isConnected) {
              setOpen(true);
            } else {
              setOpenConnectModal(true);
            }
          }
        }}
      >
        {isConnected && address
          ? trimAddress(address).toUpperCase()
          : "CONNECT"}
      </S.ConnectButton>
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <S.PopoverContainer {...layerProps}>
              <div className="section">
                <div className="header">Connected Wallet</div>
                {isConnected && address && (
                  <div className="address">
                    <div className="text">
                      {trimAddress(address).toUpperCase()}
                    </div>
                    <div className="actions">
                      <TooltipIcon text="Explore" placement="bottom-center">
                        <a
                          target="_blank"
                          href={`${ENVIRONMENT.chainExplorer}/address/${address}`}
                        >
                          <button>
                            <ExternalLink size={14} />
                          </button>
                        </a>
                      </TooltipIcon>

                      <TooltipIcon
                        text={copy ? "Copied!" : "Copy"}
                        placement="bottom-center"
                      >
                        <CopyToClipboard
                          text=""
                          onCopy={() => {
                            setCopy(true);
                            setTimeout(() => {
                              setCopy(false);
                            }, 500);
                          }}
                        >
                          <button>
                            <Copy size={14} />
                          </button>
                        </CopyToClipboard>
                      </TooltipIcon>
                    </div>
                  </div>
                )}
                <S.DisconnectButton
                  onClick={() => {
                    close();
                    disconnect();
                  }}
                >
                  Disconnect
                </S.DisconnectButton>
              </div>
            </S.PopoverContainer>
          )}
        </AnimatePresence>
      )}

      <ConnectModal
        open={openConnectModal}
        onClose={() => setOpenConnectModal(false)}
      />
    </>
  );
}
