import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useStytchUser, useStytchLazy } from "@stytch/stytch-react";
import WalletView from "../../components/getWallet/nxyzWallet";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  const user = useStytchUser();
  const stytch = useStytchLazy();
  const [walletAddress, setWalletAddress] = useState("");
  const [wrongWalletType, setWrongWalletType] = useState(false);

  useEffect(() => {
    if (typeof window !== null && !user) {
      router.replace("/");
    }
    let gotWalletAddress = false;
    for (const wallet of user?.crypto_wallets ?? []) {
      if (wallet.crypto_wallet_type === "ethereum") {
        setWalletAddress(wallet.crypto_wallet_address);
        gotWalletAddress = true;
      }
    }

    if (!gotWalletAddress) {
      setWrongWalletType(true);
    }
  });

  const signOut = async () => {
    await stytch.session.revoke();
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.githubLink}>
            <Link href={"https://github.com/neevaco/stytch-X-nxyz"}>
              Github
            </Link>
          </div>
          <button className={styles.signOut} onClick={signOut}>
            Sign Out
          </button>
        </header>
        {wrongWalletType ? (
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
