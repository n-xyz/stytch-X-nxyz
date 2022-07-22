import { useEffect, useState } from "react"

import { useStytchUser } from "@stytch/stytch-react"
import Head from "next/head"
import { useRouter } from "next/router"

import Header from "../../components/header"
import WalletView from "../../components/Wallet"
import styles from "../../styles/Home.module.css"

export default function Wallet() {
  const router = useRouter()
  const user = useStytchUser()
  const [walletAddress, setWalletAddress] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      router.replace("/")
    }
    if (user?.crypto_wallets) {
      const wallets = user?.crypto_wallets
      wallets.forEach((wallet) => {
        if (wallet.crypto_wallet_type === "ethereum") {
          setWalletAddress(wallet.crypto_wallet_address)
        }
      })
    }
  }, [user, router])

  return (
    <div className={styles.container}>
      <Head>
        <title>nxyz ETH Wallet Data</title>
      </Head>
      <main className={styles.main}>
        <Header signOut />
        {walletAddress === "" ? (
          <p className={styles.description}>
            Please sign out and use an Ethereum wallet
          </p>
        ) : (
          <WalletView walletAddress={walletAddress} />
        )}
      </main>
    </div>
  )
}
