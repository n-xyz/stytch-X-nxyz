import React, { useEffect } from "react";
import { Wallet } from "@neevaco/xyzapi/lib/typescript";
import styles from "../../styles/Home.module.css";

interface walletProps {
  walletAddress: string;
}

interface Props {
  wallet?: Wallet;
}

interface ServerSideProps {
  props: Props;
  notFound: boolean;
}

export default function WalletView({ walletAddress }: walletProps) {
  const [liveWallet, setLiveWallet] = React.useState<Wallet | undefined>();

  useEffect(() => {
    request(walletAddress, "Ethereum").then((res) => {
      setLiveWallet(res.props.wallet);
    });
  }, [walletAddress]);

  return (
    <div>
      {liveWallet ? (
        <div>
          <h1 className={styles.title}>nxyz wallet data</h1>
          <p className={styles.description}>{liveWallet.address}</p>
        </div>
      ) : (
        <p className={styles.description}>Loading...</p>
      )}
      <p className={styles.code}>
        {JSON.stringify(liveWallet, null, 2)?.replace(" ", "")}
      </p>
    </div>
  );
}

function request(
  walletAddress: string,
  blockchain = "ethereum"
): Promise<ServerSideProps> {
  return fetch(`/api/wallet/${walletAddress}?blockchain=${blockchain}`)
    .then((res) => res.json())
    .then((res: Wallet[]): Promise<ServerSideProps> => {
      if (res.length === 0) {
        return Promise.resolve({
          notFound: true,
          props: {},
        });
      }

      return Promise.resolve({
        notFound: false,
        props: {
          wallet: res[0],
        },
      });
    })
    .catch((err) => {
      if (err && err.status === 404) {
        return {
          notFound: true,
          props: {},
        };
      }

      console.error("Unable to fetch wallet", err);

      return {
        notFound: false,
        props: {},
      };
    });
}
