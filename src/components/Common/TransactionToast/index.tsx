import React, { useCallback } from "react";
import { ContractReceipt, ContractTransaction } from "ethers";
import toast from "react-hot-toast";
import * as S from "./styled";
import ENVIRONMENT from "../../../config";
import { X } from "react-feather";

function dismissErrors(id?: any) {
  if (id) {
    toast.dismiss(id);
  } else {
    toast.dismiss();
  }
}

export function ToastAlert({
  desc,
  hash = undefined,
  msg,
  id,
}: {
  desc?: string;
  hash?: string;
  msg?: string;
  id?: any;
}) {
  const handleClick = useCallback(
    () => (id !== null ? dismissErrors(id) : dismissErrors()),
    [id]
  );
  return (
    <S.Box>
      <S.Content>
        <span>
          {desc}
          {hash && (
            <>
              &nbsp;
              <S.Link
                href={`${ENVIRONMENT.chainExplorer}/tx/${hash}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Etherscan
              </S.Link>
            </>
          )}
        </span>
        {msg && <S.Message>{msg}</S.Message>}
      </S.Content>
      {msg && (
        <S.CloseButton onClick={handleClick}>
          <X size={18} />
        </S.CloseButton>
      )}
    </S.Box>
  );
}

type ToastMessages = {
  loading: string;
  success: string;
  error?: string;
};

/**
 * A lightweight wrapper around react-hot-toast
 * to minimize repetitive Toast code when issuing transactions.
 */
export default class TransactionToast {
  /** */
  messages: ToastMessages;

  /** */
  toastId: any;

  constructor(messages: ToastMessages) {
    this.messages = messages;
    this.toastId = toast.loading(<ToastAlert desc={this.messages.loading} />, {
      duration: Infinity,
    });
  }

  /**
   * Shows a loading message with Etherscan txn link while
   * a transaction is confirming
   * @param response The ethers.ContractTransaction response
   */
  confirming(response: ContractTransaction) {
    toast.loading(
      <ToastAlert
        desc={this.messages.loading}
        hash={response.hash}
        id={this.toastId}
      />,
      {
        id: this.toastId,
        duration: Infinity,
      }
    );
  }

  /**
   * After a transaction confirms, show a success message
   * and set a timeout duration for the toast.
   * @param value The ethers.ContractReceipt confirming the txn.
   */
  success(value?: ContractReceipt) {
    toast.success(
      <ToastAlert
        desc={this.messages.success}
        hash={value?.transactionHash}
        id={this.toastId}
      />,
      {
        id: this.toastId,
        duration: 5000,
      }
    );
  }

  error(error: any) {
    const duration = Infinity;
    let msg = "Something went wrong!";
    if (error.reason) {
      msg = error.reason;
    } else if (error.message) {
      msg = error.message;
    }
    msg = `${msg.charAt(0).toUpperCase()}${msg.slice(1)}`;
    toast.error(
      <ToastAlert desc={this.messages.error} msg={msg} id={this.toastId} />,
      {
        id: this.toastId,
        duration: duration,
      }
    );
    return msg;
  }
}
