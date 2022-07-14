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
        <h1 className={styles.title}>Welcome to nxyz</h1>
        <div className={styles.githubLink}>
          <Link href={"https://github.com/neevaco/stytch-X-nxyz"}>github</Link>
        </div>
        <Login />
      </main>
    </div>
  );
};

export default Home;
