import React from "react";
import { Wallet } from "@neevaco/xyzapi/lib/typescript";
import { useIntervalWhen } from "rooks";

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
  useIntervalWhenActive(() => {
    request(walletAddress, "Ethereum").then((res) => {
      setLiveWallet(res.props.wallet);
    });
  }, 2000);

  return (
    <div>
      <p>{JSON.stringify(liveWallet, null, 2)?.replace(" ", "")}</p>
      {liveWallet ? " " : <p>Loading...</p>}
    </div>
  );
}

function request(
  walletAddress: string,
  blockchain = "ethereum"
): Promise<ServerSideProps> {
  const basePath = process.env["XYZD_HOST"] ?? "";

  return fetch(
    `${basePath}/api/wallet/${walletAddress}?blockchain=${blockchain}`
  )
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

function useIsOnline(): boolean {
  // If the user is in a browser, and the navigator is not explicitly offline,
  // consider initial state online. Otherwise if window is missing, just
  // assume we're online because that's probably SSR
  const [isOnline, setIsOnline] = React.useState(
    typeof window === "object" ? window.navigator.onLine !== false : true
  );

  function onOffline() {
    setIsOnline(false);
  }

  function onOnline() {
    setIsOnline(true);
  }

  React.useEffect(() => {
    if (
      typeof window === "object" &&
      typeof window.addEventListener === "function"
    ) {
      window.addEventListener("offline", onOffline);
      window.addEventListener("online", onOffline);

      return () => {
        window.removeEventListener("offline", onOffline);
        window.removeEventListener("online", onOnline);
      };
    }
  });

  return isOnline;
}

function useIntervalWhenActive(callback: () => void, interval: number) {
  const isFocused = true; // useIsFocused();
  const isOnline = useIsOnline();

  useIntervalWhen(callback, interval, isFocused && isOnline, true);
}
