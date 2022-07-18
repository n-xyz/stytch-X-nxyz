import { useEffect, useState } from "react"

import { useStytchUser, useStytchLazy } from "@stytch/stytch-react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

import WalletView from "../../components/getWallet/nxyzWallet"
import styles from "../../styles/Home.module.css"

export default function Home() {
  const router = useRouter()
  const user = useStytchUser()
  const stytch = useStytchLazy()
  const [walletAddress, setWalletAddress] = useState("")

  useEffect(() => {
    if (typeof window !== typeof null && !user) {
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

  const signOut = async () => {
    await stytch.session.revoke()
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>nxyz ETH Wallet Data</title>
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
          <button type="button" className={styles.signOut} onClick={signOut}>
            Sign Out
          </button>
        </header>
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
