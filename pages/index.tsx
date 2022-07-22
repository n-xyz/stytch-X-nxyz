import React, { useEffect } from "react"

import { useStytchUser } from "@stytch/stytch-react"
import Head from "next/head"
import { useRouter } from "next/router"

import Header from "../components/header"
import Login from "../components/login"
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
        <Header signOut={false} />
        <h1 className={styles.title}>Wallet Viewer</h1>
        <p className={styles.description}>
          Displays your blockchain data within <em>milliseconds</em>.
        </p>
        <Login />
      </main>
    </div>
  )
}
