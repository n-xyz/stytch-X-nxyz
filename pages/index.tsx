import type { NextPage } from "next";
import { useEffect } from "react";
import Login from "../components/login/StytchWalletLogin";
import Wallet from "../components/getWallet/nxyzWallet";
import styles from "../styles/Home.module.css";
import { useStytchUser, useStytchLazy } from "@stytch/stytch-react";

const Home: NextPage = () => {
  const stytchClient = useStytchLazy();
  const WalletAddress =
    useStytchUser()?.crypto_wallets[0].crypto_wallet_address;

  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      stytchClient.session.revoke();
    });
  }, [stytchClient]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to nxyz
          {WalletAddress ? `,\n${WalletAddress}` : ""}
        </h1>
        {WalletAddress ? "cookies" : <Login />}
      </main>
    </div>
  );
};

export default Home;
