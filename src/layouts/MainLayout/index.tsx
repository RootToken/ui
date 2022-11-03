import { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import ConnectModal from "../../components/ConnectModal";
import useAppStore from "../../store";
import { trimAddress } from "../../util/account";
import * as S from "./styled";

export default function MainLayout({ children }: { children: JSX.Element }) {
  const sdk = useAppStore((v) => v.beanstalkSdk);
  const [openConnectModal, setOpenConnectModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (sdk && isConnected) {
    }
  }, [sdk, isConnected]);

  return (
    <S.Layout>
      <S.Header>
        <div>
          <img src="/root-logo.svg" alt="Root Logo" />
        </div>
        <div className="right">
          <ul className="menu">
            <li className="wc">2022 FIFA World Cup Pool</li>
            <li>Root Token Whitepaper</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>Discord</li>
            <li>Beanstalk</li>
          </ul>
          <S.ConnectButton
            onClick={() => {
              if (isConnected) {
                disconnect();
              } else {
                setOpenConnectModal(true);
              }
            }}
          >
            {isConnected && address
              ? trimAddress(address).toUpperCase()
              : "CONNECT"}
          </S.ConnectButton>
        </div>
      </S.Header>
      <S.Body>
        <img className="bgTop" src="/bg-top.svg" />
        <div>{children}</div>
        <img className="bgBottom" src="/bg-bottom.svg" />
      </S.Body>

      <ConnectModal
        open={openConnectModal}
        onClose={() => setOpenConnectModal(false)}
      />
    </S.Layout>
  );
}
