import React, { useEffect } from "react"

import { Wallet } from "@neevaco/xyzapi/lib/typescript"

import request from "../../lib/request"
import styles from "../../styles/Home.module.css"

interface walletProps {
  walletAddress: string
}

export default function WalletView({ walletAddress }: walletProps) {
  const [liveWallet, setLiveWallet] = React.useState<Wallet | undefined>()

  useEffect(() => {
    request(walletAddress, "Ethereum").then((res) => {
      setLiveWallet(res.props.wallet)
    })
  }, [walletAddress])

  return (
    <div>
      {liveWallet ? (
        <div>
          <h1 className={styles.title}>nxyz wallet data</h1>
          <p className={styles.description}>{liveWallet.address}</p>
        </div>
      ) : (
        <p className={styles.description}>Loading...</p>
      )}
      <p className={styles.code}>
        {JSON.stringify(liveWallet, null, 2)?.replace(" ", "")}
      </p>
    </div>
  )
}
