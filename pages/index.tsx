import React, { useEffect } from "react"

import { useStytchUser } from "@stytch/stytch-react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import Login from "../components/login/StytchWalletLogin"
import nxyzLogo from "../public/nxyz-color.svg"
import plusIcon from "../public/plus-color.svg"
import stytchLogo from "../public/stytch-color.svg"
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
