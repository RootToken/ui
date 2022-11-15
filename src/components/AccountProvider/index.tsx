import { useEffect } from "react";
import { useAccount, useSigner } from "wagmi";
import useAppStore from "../../store";
import NetworkModal from "../NetworkModal";

export default function AccountProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const { onUserDisconnect, onUserConnect } = useAppStore((v) => ({
    onUserConnect: v.onUserConnect,
    onUserDisconnect: v.onUserDisconnect,
  }));
  const { data: signerData } = useSigner();
  const { address, isDisconnected } = useAccount();

  useEffect(() => {
    if (address && signerData) {
      onUserConnect(signerData);
    }
  }, [address, signerData]);

  useEffect(() => {
    if (isDisconnected) {
      onUserDisconnect();
    }
  }, [isDisconnected]);

  return (
    <>
      {children}
      <NetworkModal />
    </>
  );
}
