import React from "react"

import {
  TransactionLogLine,
  Transaction,
  Token,
  Wallet,
  CurrencyInfo,
  TokenAttribute,
  ENS,
} from "@neevaco/xyzapi/lib/typescript"
import cx from "classnames"
import { DateTime } from "luxon"
import Image from "next/image"

import styles from "./index.module.css"

const wallet = {
  ens: [
    {
      name: "ramaswamy.eth",
      pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
      isPrimary: true,
    },
    {
      name: "neevaco.eth",
      pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
    },
    {
      name: "nxyz.eth",
      pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
    },
  ] as ENS[],
  balances: [
    {
      value: "285750317161542050",
      tokenValue: 0.28575031716154203,
      fiat: [
        {
          value: "41121",
          tokenValue: 411.21,
          pretty: "411.21",
          decimals: 2,
          symbol: "USD",
          name: "US Dollar",
        },
      ],
      pretty: "0.29",
      decimals: 18,
      symbol: "ETH",
      name: "Ethereum",
    },
    {
      value: "19523741",
      tokenValue: 19.523741,
      fiat: [
        {
          value: "1951",
          tokenValue: 19.51,
          pretty: "19.51",
          decimals: 2,
          symbol: "USD",
          name: "US Dollar",
        },
      ],
      pretty: "19.52",
      decimals: 6,
      symbol: "USDT",
    },
    {
      value: "1566647757094265560",
      tokenValue: 1.5666477570942656,
      fiat: [
        {
          value: "14695",
          tokenValue: 146.95,
          pretty: "146.95",
          decimals: 2,
          symbol: "USD",
          name: "US Dollar",
        },
      ],
      pretty: "1.57",
      decimals: 18,
      symbol: "AAVE",
    },
    {
      value: "81363039052153296597",
      tokenValue: 81.3630390521533,
      pretty: "81.36",
      decimals: 18,
      symbol: "FWB",
    },
    {
      value: "21742485698016608278",
      tokenValue: 21.74248569801661,
      fiat: [
        {
          value: "1475",
          tokenValue: 14.75,
          pretty: "14.75",
          decimals: 2,
          symbol: "USD",
          name: "US Dollar",
        },
      ],
      pretty: "21.74",
      decimals: 18,
      symbol: "1INCH",
    },
    {
      value: "506385841410855616820",
      tokenValue: 506.3858414108556,
      pretty: "506.39",
      decimals: 18,
      symbol: "ANKR",
    },
    {
      value: "3419650087452814553",
      tokenValue: 3.419650087452814,
      fiat: [
        {
          value: "1903",
          tokenValue: 19.03,
          pretty: "19.03",
          decimals: 2,
          symbol: "USD",
          name: "US Dollar",
        },
      ],
      pretty: "3.42",
      decimals: 18,
      symbol: "APE",
    },
  ] as CurrencyInfo[],
  address: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",

  recentTokens: [
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      } as Blockchain,
      contractAddress: "0x6456cb6cea7a2B9C527b8d7A648d72a24F1057b3",
      tokenStandard: "ERC-1155",
      symbol: "Black Spells",
      nft: {
        tokenID: "1",
        title: "Fire Angel",
        contractTitle: "Black Spells",
        description:
          "The 1st blockchain-based mobile game ever made, Spells of Genesis combines TCG functionalities with the point-and-shoot aspects of arcade games. Players have to collect and combine cards to create the strongest deck in order to fight their enemies. Locking time is 24 days. But you can now unlock [Here](https://spells.host) with a fee.",
        media: {
          key: "dkaGI6bojAePE4q0Nr6uYe5uRDW7sJzR3pEEeSdshXE",
          URI: "https://c.neevacdn.net/image/upload/xyz/dkaGI6bojAePE4q0Nr6uYe5uRDW7sJzR3pEEeSdshXE.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 320,
              height: 477,
              numBytes: 276495,
            },
          ],
        },
        owner: {
          address: "0x1103c062611Bd6Cde6A8aa8f9D32EfC270A62E26",
          ens: [
            {
              pointsTo: "0x1103c062611Bd6Cde6A8aa8f9D32EfC270A62E26",
              expires: "0001-01-01T00:00:00Z",
            },
          ],
        },
        attributes: [
          {
            traitType: "Name",
            value: "Fire Angel",
          },
          {
            traitType: "Rarity",
            value: "Not Assigned",
          },
          {
            traitType: "Attack",
            value: "8",
          },
          {
            traitType: "Health",
            value: "13",
          },
          {
            traitType: "Speed",
            value: "1",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x6456cb6cea7a2B9C527b8d7A648d72a24F1057b3",
          symbol: "Black Spells",
          name: "Black Spells",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: new Date("2022-06-06T03:30:41Z"),
          logLine: [
            {
              fromAddress: "0x83BA33a1F3D42131e4AE5D8fBAc81688BeC3cd6a",
              toAddress: "0x1103c062611Bd6Cde6A8aa8f9D32EfC270A62E26",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Web",
      },
    } as Token,
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x518304D00F64DaCbA07204322B43ED3d1C426340",
      tokenStandard: "ERC-1155",
      symbol: "GradisArt",
      nft: {
        tokenID: "133",
        title: "Duckito",
        contractTitle: "GradisArt",
        description:
          "- [3D generator](https://gradiss.tech). - Rarity rank https://gradiss.tech. - Open Source Code https://github.com/JeanOsorio/GradisNFT Get your gif [Here](https://gradiss.tech). - A collection of script-based generative animations.",
        media: {
          key: "3eBvUB_2E4UimVWZnI9AtmJxb_wdd5TFU1tG7EbRRoU",
          URI: "https://c.neevacdn.net/image/upload/xyz/3eBvUB_2E4UimVWZnI9AtmJxb_wdd5TFU1tG7EbRRoU.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 828,
              height: 828,
              numBytes: 66199,
            },
          ],
        },
        owner: {
          address: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
          ens: [
            {
              pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              expires: "0001-01-01T00:00:00Z",
            },
          ],
        },
        attributes: [
          {
            traitType: "Ancestry",
            value: "Duckito",
          },
          {
            traitType: "Body Breed",
            value: "biga",
          },
          {
            traitType: "Base Color",
            value: "gingito",
          },
          {
            traitType: "Base Gradient Head",
            value: "double",
          },
          {
            traitType: "Background",
            value: "olive",
          },
          {
            traitType: "Color H1",
            value: "burnum",
          },
          {
            traitType: "Color H2",
            value: "warmum",
          },
          {
            traitType: "Color H3",
            value: "sunae",
          },
          {
            traitType: "Base gradient body",
            value: "triple",
          },
          {
            traitType: "Color B1",
            value: "frostum",
          },
          {
            traitType: "Color B2",
            value: "frostis",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x518304D00F64DaCbA07204322B43ED3d1C426340",
          symbol: "GradisArt",
          name: "GradisArt",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: new Date("2022-05-19T04:02:06Z"),
          logLine: [
            {
              fromAddress: "0x202c5d47ddd348f5C77a7B692E2c332FBB99d7eb",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Web",
      },
    } as Token,
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x1438807D452d5883B038c007E88B9Ced10364F67",
      tokenStandard: "ERC-721",
      symbol: "GPCC",
      nft: {
        tokenID: "8194",
        title: "Gutter Punks Flyer - Crypto Coven",
        contractTitle: "Gutter Punks - Crypto Coven",
        description:
          "Crypto Coven holders are invited to join the Gutter Punks - a woman-led project building tools to level the playing field and support creators. Details on Twitter @GutterPunksNFT or visit https://mint.gutterpunks.co to mint now!",
        media: {
          key: "CeUPSJ4lndosWMWoUNPbfB4U8t69FRJ2Op_yDYGklRY",
          URI: "https://c.neevacdn.net/image/upload/xyz/CeUPSJ4lndosWMWoUNPbfB4U8t69FRJ2Op_yDYGklRY.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 400,
              height: 401,
              numBytes: 240053,
            },
          ],
        },
        owner: {
          address: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
          ens: [
            {
              pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              expires: "0001-01-01T00:00:00Z",
            },
          ],
        },
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x1438807D452d5883B038c007E88B9Ced10364F67",
          symbol: "GPCC",
          name: "Gutter Punks - Crypto Coven",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: new Date("2022-05-19T00:53:34Z"),
          logLine: [
            {
              fromAddress: "0x1438807D452d5883B038c007E88B9Ced10364F67",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    } as Token,
  ] as Token[],

  history: [
    {
      transactionIndex: 203,
      gasFee: {
        value: "5829071556421545",
        pretty: "\u003c 0.01",
        decimals: 18,
        symbol: "ETH",
        name: "Ethereum",
      },
      timestamp: new Date("2022-06-12T14:39:55Z"),
      logLine: [
        {
          logIndex: 222,
          fromAddress: "0xf79fc43494ce8a4613cb0b2a67a1b1207fd05d27",
          toAddress: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          price: {
            value: "3419650087452814553",
            tokenValue: 3.419650087452814,
            fiat: [
              {
                value: "1903",
                tokenValue: 19.03,
                pretty: "19.03",
                decimals: 2,
                symbol: "USD",
                name: "US Dollar",
              },
            ],
            pretty: "3.42",
            decimals: 18,
            symbol: "APE",
          },
        },
      ],
    },
    {
      transactionIndex: 149,
      gasFee: {
        value: "5824608844953912",
        pretty: "\u003c 0.01",
        decimals: 18,
        symbol: "ETH",
        name: "Ethereum",
      },
      timestamp: new Date("2022-06-12T14:28:44Z"),
      logLine: [
        {
          logIndex: 233,
          fromAddress: "0x13dc0a39dc00f394e030b97b0b569dedbe634c0d",
          toAddress: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          price: {
            value: "506385841410855616820",
            tokenValue: 506.3858414108556,
            pretty: "506.39",
            decimals: 18,
            symbol: "ANKR",
          },
        },
      ],
    },
    {
      transactionIndex: 52,
      gasFee: {
        value: "6088007939938816",
        pretty: "\u003c 0.01",
        decimals: 18,
        symbol: "ETH",
        name: "Ethereum",
      },
      timestamp: new Date("2022-06-12T14:24:39Z"),
      logLine: [
        {
          logIndex: 114,
          fromAddress: "0xd35efae4097d005720608eaf37e42a5936c94b44",
          toAddress: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          price: {
            value: "21742485698016608278",
            tokenValue: 21.74248569801661,
            fiat: [
              {
                value: "1475",
                tokenValue: 14.75,
                pretty: "14.75",
                decimals: 2,
                symbol: "USD",
                name: "US Dollar",
              },
            ],
            pretty: "21.74",
            decimals: 18,
            symbol: "1INCH",
          },
        },
      ],
    },
    {
      transactionIndex: 274,
      gasFee: {
        value: "2648483825154132",
        pretty: "\u003c 0.01",
        decimals: 18,
        symbol: "ETH",
        name: "Ethereum",
      },
      timestamp: new Date("2022-05-21T03:20:06Z"),
      logLine: [
        {
          logIndex: 1373,
          fromAddress: "0x11b815efb8f581194ae79006d24e0d814b7697f6",
          toAddress: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          price: {
            value: "19523741",
            tokenValue: 19.523741,
            fiat: [
              {
                value: "1951",
                tokenValue: 19.51,
                pretty: "19.51",
                decimals: 2,
                symbol: "USD",
                name: "US Dollar",
              },
            ],
            pretty: "19.52",
            decimals: 6,
            symbol: "USDT",
          },
        },
      ],
    },
    {
      transactionIndex: 38,
      gasFee: {
        value: "16767262325115079",
        pretty: "0.02",
        decimals: 18,
        symbol: "ETH",
        name: "Ethereum",
      },
      timestamp: new Date("2022-03-31T20:58:30Z"),
      logLine: [
        {
          logIndex: 53,
          fromAddress: "0x5ab53ee1d50eef2c1dd3d5402789cd27bb52c1bb",
          toAddress: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          price: {
            value: "1566647757094265560",
            tokenValue: 1.5666477570942656,
            fiat: [
              {
                value: "14695",
                tokenValue: 146.95,
                pretty: "146.95",
                decimals: 2,
                symbol: "USD",
                name: "US Dollar",
              },
            ],
            pretty: "1.57",
            decimals: 18,
            symbol: "AAVE",
          },
        },
      ],
    },
    {
      transactionIndex: 280,
      gasFee: {
        value: "34196636874595902",
        pretty: "0.03",
        decimals: 18,
        symbol: "ETH",
        name: "Ethereum",
      },
      timestamp: new Date("2021-11-03T14:24:19Z"),
      logLine: [
        {
          logIndex: 458,
          fromAddress: "0x74de5d4fcbf63e00296fd95d33236b9794016631",
          toAddress: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          price: {
            value: "81363039052153296597",
            tokenValue: 81.3630390521533,
            pretty: "81.36",
            decimals: 18,
            symbol: "FWB",
          },
        },
      ],
    },
  ] as Transaction[],
} as Wallet

function WalletSection(): React.ReactElement | null {
  const hasENS =
    Array.isArray(wallet.ens) && wallet.ens[0] && wallet.ens[0].name

  let nfts
  if (Array.isArray(wallet.recentTokens) && wallet.recentTokens.length) {
    nfts = (
      <>
        <SectionTitle>Recent Purchases</SectionTitle>
        <Section>
          {wallet.recentTokens.map((token) => {
            const { contractAddress, nft } = token
            const { tokenID } = nft
            return (
              <TokenCard token={token} key={`${contractAddress}~${tokenID}`} />
            )
          })}
        </Section>
      </>
    )
  }

  let transactions

  if (Array.isArray(wallet.history) && wallet.history.length > 0) {
    transactions = (
      <>
        <SectionTitle>Recent transactions</SectionTitle>
        <Section>
          {wallet.history.map((history) => {
            return (
              <History
                key={`${history.timestamp}~${history.transactionIndex}`}
                history={history}
              />
            )
          })}
        </Section>
      </>
    )
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="font-sans mx-auto p-4 w-screen md:w-4/5 lg:w-3/5">
          <hgroup className="leading-loose border-b pb-4 mb-8 border-slate-200">
            <h1 className="text-4xl font-medium text-gray-800 break-all">
              {hasENS ? wallet.ens[0].name : wallet.address}
            </h1>
            {hasENS ? (
              <h2 className="text-l font-normal text-gray-400 break-all">
                {wallet.address}
              </h2>
            ) : null}
          </hgroup>
          {transactions}
          {nfts}
        </div>
      </main>
    </div>
  )
}

interface TokenProps {
  token: Token
}

function TokenCard(props: TokenProps): React.ReactElement {
  const { token } = props
  const { nft } = token

  if (!nft) {
    return null
  }

  return (
    <div className="flex flex-row p-4">
      <div
        className="rounded-lg shrink-0 w-32 h-32 mr-4 border border-slate-100 whitespace-nowrap"
        style={{ fontSize: 0 }}
      >
        <Image
          width="200"
          height="200"
          src={nft.media.URI}
          alt=""
          className="rounded-lg"
        />
      </div>
      <div className="shrink-1">
        <h4 className="text-2xl font-medium text-gray-800 break-all text-ellipsis overflow-hidden h-8">
          {nft.title}
        </h4>
        <p className="text-lg text-gray-500 break-words overflow-hidden">
          {nft.contractTitle}
        </p>

        {Array.isArray(nft.attributes) ? (
          <Attributes attributes={nft.attributes} />
        ) : null}
      </div>
    </div>
  )
}

interface AttributesProps {
  attributes: TokenAttribute[]
}

function Attributes(props: AttributesProps) {
  const { attributes } = props
  return (
    <ul className="leading-relaxed text-gray-700 mt-4 break-all overflow-hidden h-20 w-full">
      {attributes.map((attribute, index) => {
        if (index > 1) {
          return null
        }
        return (
          <li key={`${attribute.traitType}~${attribute.value}`}>
            {attribute.traitType}: {attribute.value}
          </li>
        )
      })}
    </ul>
  )
}

interface HistoryProps {
  history: Transaction
}

function History(props: HistoryProps) {
  const { history } = props
  const historyTimestamp = history.timestamp
    ? DateTime.fromJSDate(history.timestamp).toLocaleString(
        DateTime.DATETIME_SHORT_WITH_SECONDS
      )
    : ""
  return (
    <div className="p-4">
      <div className="shrink-1">
        <div>
          <h4 className="text-l font-light text-slate-600 mb-2">
            {historyTimestamp}
          </h4>
          <div>
            {Array.isArray(history.logLine)
              ? history.logLine.map((line) => {
                  return (
                    <LogLine
                      key={`${line.fromAddress}~${line.toAddress}~${line.logIndex}`}
                      line={line}
                    />
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}
interface LogLineProps {
  line: TransactionLogLine
}

function LogLine(props: LogLineProps) {
  const { line } = props
  return (
    <div className="text-normal font-normal text-gray-800 flex flex-row justify-between flex-wrap">
      <div>
        <span
          className={cx("text-xl", {
            "text-red-700":
              line.fromAddress.toLowerCase() === wallet.address.toLowerCase(),
            "text-green-700":
              line.toAddress.toLowerCase() === wallet.address.toLowerCase(),
          })}
        >
          {line.price.pretty}
        </span>
        &nbsp;
        {line.price.symbol}
      </div>
      <div className="text-gray-600 font-mono tracking-tighter font-light font-s break-all">
        {line.toAddress.toLowerCase() === wallet.address
          ? line.toAddress
          : line.fromAddress}
      </div>
    </div>
  )
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

export default WalletSection
