import React, { useEffect } from "react"

import { Wallet } from "@neevaco/xyzapi/lib/typescript"
import cx from "classnames"
import { DateTime } from "luxon"
import Image from "next/image"
import Link from "next/link"

import request from "../../lib/request"
import styles from "../../styles/Home.module.css"

/**
 * WalletView displays recent transactions and nfts for a given ethereum wallet address
 * It sends a request to the API to get the wallet data, then constructs
 * the nft and transaction sections before conditionally displaying them
 */
export default function WalletView({ walletAddress }: walletProps) {
  const [wallet, setWallet] = React.useState<Wallet | undefined>()

  useEffect(() => {
    request(walletAddress, "Ethereum").then((res) => {
      setWallet(res.props.wallet)
    })
  }, [walletAddress])

  const hasENS = !!(
    wallet?.ens &&
    Array.isArray(wallet.ens) &&
    wallet.ens[0] &&
    wallet.ens[0].name
  )

  let nfts
  if (Array.isArray(wallet?.recentTokens) && wallet?.recentTokens.length) {
    nfts = (
      <>
        <SectionTitle>Recent Purchases</SectionTitle>
        <Section>
          {wallet.recentTokens.map((token) => {
            const { nft } = token
            if (!nft) {
              return null
            }

            return (
              <div key={nft.tokenID} className="flex flex-row p-4">
                <div
                  className="rounded-lg shrink-0 w-48 mr-4 border border-slate-100 whitespace-nowrap"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    width="201"
                    height="200"
                    src={nft.media.URI}
                    alt=""
                    className="rounded-lg"
                  />
                </div>

                <div className="shrink-1">
                  <h4 className="text-2xl font-medium text-gray-800 text-ellipsis overflow-hidden h-8">
                    {nft.title}
                  </h4>
                  <p className="text-lg text-gray-500">{nft.contractTitle}</p>
                  <p className="leading-relaxed text-gray-700 mt-4 text-ellipsis overflow-hidden h-20">
                    {nft.description}
                  </p>
                </div>
              </div>
            )
          })}
        </Section>
      </>
    )
  }

  let transactions
  if (wallet?.history) {
    transactions = (
      <>
        <SectionTitle>Recent transactions</SectionTitle>
        <Section>
          {wallet.history.map((history) => {
            const historyTimestamp = DateTime.fromISO(
              history.timestamp.toString()
            ).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
            return (
              <div
                key={`${history.timestamp}~${history.transactionIndex}`}
                className="p-4"
              >
                <div className="shrink-1">
                  <div>
                    <h4 className="text-l font-light text-slate-600 mb-2">
                      {historyTimestamp}
                    </h4>
                    <div>
                      {history.logLine.map((line) => {
                        return (
                          <div
                            className="text-normal font-normal text-gray-800 flex flex-row justify-between"
                            key={`${line.fromAddress}~${line.toAddress}~${line.logIndex}`}
                          >
                            <div>
                              <span
                                className={cx("text-xl", {
                                  "text-red-700":
                                    line.fromAddress.toLowerCase() ===
                                    wallet.address.toLowerCase(),
                                  "text-green-700":
                                    line.toAddress.toLowerCase() ===
                                    wallet.address.toLowerCase(),
                                })}
                              >
                                {line.price.pretty}
                              </span>
                              &nbsp;
                              {line.price.symbol}
                            </div>
                            <div className="text-gray-600 font-mono tracking-tighter font-light font-s">
                              {line.toAddress.toLowerCase() === wallet.address
                                ? line.toAddress
                                : line.fromAddress}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Section>
      </>
    )
  }

  return (
    <div>
      {wallet ? (
        <div className={styles.container}>
          <main className={styles.main}>
            <div className="font-sans max-w-screen-md mx-auto p-8">
              <hgroup className="leading-loose border-b pb-4 mb-8 border-slate-200">
                <h1 className="text-5xl font-medium text-gray-800">
                  {hasENS ? wallet.ens[0].name : wallet.address}
                </h1>
                {hasENS ? (
                  <h2 className="text-l font-normal text-gray-400">
                    {wallet.address}
                  </h2>
                ) : null}
              </hgroup>
              {nfts}
              {transactions}
              <div className={styles.neevaxyzOut}>
                <Link href="https://neeva.xyz/">
                  <a target="_blank" rel="noopener noreferrer">
                    <p className={styles.link}>
                      Click Here and see more on your wallet on Neeva.xyz
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <p className={styles.description}>Loading...</p>
      )}
    </div>
  )
}

interface walletProps {
  walletAddress: string
}

interface SectionTitleProps {
  children: React.ReactNode
}

function SectionTitle(props: SectionTitleProps) {
  const { children } = props
  return <h1 className="text-2xl font-normal mb-4 text-gray-600">{children}</h1>
}

interface SectionProps {
  children: React.ReactNode
}

function Section(props: SectionProps) {
  const { children } = props
  return (
    <div className="rounded-lg shadow-xl mb-8 border border-slate-100 grid grid-cols-1 divide-y divide-slate-100">
      {children}
    </div>
  )
}
