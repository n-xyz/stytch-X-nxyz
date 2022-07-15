import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../components/login/StytchWalletLogin";
import styles from "../styles/Home.module.css";
import { useStytchUser } from "@stytch/stytch-react";
import Head from "next/head";

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
      <Head>
        <title>Stytch X nxyz</title>
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
        </header>
        <h1 className={styles.title}>Wallet Viewer</h1>
        <p className={styles.description}>
          Displays your blockchain data within <em>milliseconds</em>.
        </p>
        <Login />
      </main>
    </div>
  );
};

export default Home;
