import { useEffect, useState } from "react"

import { useStytchUser, useStytchLazy } from "@stytch/stytch-react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import WalletView from "../../components/getWallet/nxyzWallet"
import nxyzLogo from "../../public/nxyz-color.svg"
import plusIcon from "../../public/plus-color.svg"
import stytchLogo from "../../public/stytch-color.svg"
import styles from "../../styles/Home.module.css"

export default function Wallet() {
  const router = useRouter()
  const user = useStytchUser()
  const stytch = useStytchLazy()
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
          <div>
            <Link href="https://stytch.com/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={stytchLogo}
                  height={100}
                  width={150}
                  alt="stytch logo"
                />
              </a>
            </Link>
            <Image src={plusIcon} height={100} width={50} alt="plus Icon" />
            <Link href="https://n.xyz/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src={nxyzLogo}
                  height={100}
                  width={130}
                  alt="nxyz logo"
                />
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
