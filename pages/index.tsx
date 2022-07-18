import React, { useEffect } from "react"

import { useStytchUser } from "@stytch/stytch-react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

import Login from "../components/login/StytchWalletLogin"
import styles from "../styles/Home.module.css"

export default function Home() {
  const sdkUser = useStytchUser()

  const router = useRouter()

  useEffect(() => {
    if (sdkUser) {
      router.push("/wallet")
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Stytch X nxyz</title>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.githubLink}>
            <Link href="https://github.com/neevaco/stytch-X-nxyz">
              <a target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Link>
          </div>
        </header>
        <h1 className={styles.title}>Wallet Viewer</h1>
        <p className={styles.description}>
          Displays your blockchain data within <em>milliseconds</em>.
        </p>
        <Login />
      </main>
    </div>
  )
}
