import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../components/login/StytchWalletLogin";
import styles from "../styles/Home.module.css";
import { useStytchUser } from "@stytch/stytch-react";
import Link from "next/link";

const Home: NextPage = () => {
  const sdkUser = useStytchUser();

  const router = useRouter();

  useEffect(() => {
    if (sdkUser) {
      router.push("/wallet");
    }
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.githubLink}>
            <Link href={"https://github.com/neevaco/stytch-X-nxyz"}>
              github
            </Link>
          </div>
        </header>
        <h1 className={styles.title}>Wallet Viewer</h1>
        <p className={styles.description}>
          This is a simple wallet viewer that allows you to view your wallet
          data on the blockchain and within miliseconds.
        </p>
        <Login />
      </main>
    </div>
  );
};

export default Home;
