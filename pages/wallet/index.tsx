import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Wallet from "../../components/getWallet/nxyzWallet";
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

  useEffect(() => {
    if (typeof window !== null && !user) {
      router.replace("/");
    }
    setWalletAddress(user?.crypto_wallets[0].crypto_wallet_address);
  });

  const signOut = async () => {
    await stytch.session.revoke();
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{walletAddress}</h1>
        <div className={styles.githubLink}>
          <Link href={"https://github.com/neevaco/stytch-X-nxyz"}>github</Link>
        </div>
        <button onClick={signOut}>Sign Out</button>
        <WalletView walletAddress={walletAddress} />
      </main>
    </div>
  );
};

export default Home;
