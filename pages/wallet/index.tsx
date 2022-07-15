import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useStytchUser, useStytchLazy } from "@stytch/stytch-react";
import WalletView from "../../components/getWallet/nxyzWallet";
import Head from "next/head";

const Home: NextPage = () => {
  const router = useRouter();
  const user = useStytchUser();
  const stytch = useStytchLazy();
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (typeof window !== null && !user) {
      router.replace("/");
    }

    for (const wallet of user?.crypto_wallets ?? []) {
      if (wallet.crypto_wallet_type === "ethereum") {
        setWalletAddress(wallet.crypto_wallet_address);
      }
    }
  });

  const signOut = async () => {
    await stytch.session.revoke();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>nxyz ETH Wallet Data</title>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.githubLink}>
            <a
              href={"https://github.com/neevaco/stytch-X-nxyz"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <button className={styles.signOut} onClick={signOut}>
            Sign Out
          </button>
        </header>
        {walletAddress === "" ? (
          <p className={styles.description}>
            Please sign out and use an ethereum wallet
          </p>
        ) : (
          <WalletView walletAddress={walletAddress} />
        )}
      </main>
    </div>
  );
};

export default Home;
