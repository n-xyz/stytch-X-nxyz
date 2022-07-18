import type { NextPage } from "next";
import { DateTime } from "luxon";
import cx from "classnames";
import Image from "next/image";
import styles from "./index.module.css";

const wallet = {
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
  ],
  address: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
  ens: [
    {
      name: "ramaswamy.eth",
      pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
      expires: "0001-01-01T00:00:00Z",
      isPrimary: true,
    },
    {
      name: "neevaco.eth",
      pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
      expires: "0001-01-01T00:00:00Z",
    },
    {
      name: "nxyz.eth",
      pointsTo: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
      expires: "0001-01-01T00:00:00Z",
    },
  ],
  socialMedia: [
    {
      network: "twitter",
      username: "RamaswmySridhar",
    },
  ],
  recentTokens: [
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
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
          timestamp: "2022-06-06T03:30:41Z",
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
    },
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
          timestamp: "2022-05-19T04:02:06Z",
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
    },
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
          timestamp: "2022-05-19T00:53:34Z",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xFBBeBDc2e686f8D902E9eAD0444271bDfbAA948d",
      tokenStandard: "ERC-1155",
      symbol: "Alphabetty Doodlez",
      nft: {
        tokenID: "202",
        title: "AlphaBetty Doodle #202",
        contractTitle: "Alphabetty Doodlez",
        description:
          "[AlphaBetty Doodles](https://alphabettydoodles.link) is a vibrant character who helps children go through the alphabet in colourful style. Visit [Website](https://alphabettydoodles.link) and get your AlphaBetty Doodle.",
        media: {
          key: "tXk6K_rjS__efSZMYGu4E4akt5kh57RjthXSd7Tqqmo",
          URI: "https://c.neevacdn.net/image/upload/xyz/tXk6K_rjS__efSZMYGu4E4akt5kh57RjthXSd7Tqqmo.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 2000,
              height: 2000,
              numBytes: 439280,
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
            traitType: "Background",
            value: "Alphabetty Logo",
          },
          {
            traitType: "Body",
            value: "Yellow Flower Dress",
          },
          {
            traitType: "Hair",
            value: "Brown Low Bunches",
          },
          {
            traitType: "Cheek",
            value: "Doge",
          },
          {
            traitType: "Eye",
            value: "Eyelash",
          },
          {
            traitType: "Mouth",
            value: "Left Smile",
          },
          {
            traitType: "Item",
            value: "Key",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0xFBBeBDc2e686f8D902E9eAD0444271bDfbAA948d",
          symbol: "Alphabetty Doodlez",
          name: "Alphabetty Doodlez",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-18T03:34:21Z",
          logLine: [
            {
              fromAddress: "0x4d549216f1dea86EA46aF3C8FEE24e787C131C01",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x7ED1fcB7DF1B71942dAbEf49A91D9D536EB27E3b",
      tokenStandard: "ERC-1155",
      symbol: "EtherHead",
      nft: {
        tokenID: "331",
        title: "EtherHead #331",
        contractTitle: "EtherHead",
        description:
          "TMint some Heads here: [EtherHead](https://etherhead.link). EtherHeads is the first 10k NFT collection from [Zsolt Kosa](https://etherhead.link). These unique portraits are a fusion between traditional avatars and abstract art. Link [Here](https://etherhead.link).",
        media: {
          key: "IPTC4afxQN2Ug0WrxhqZycgeJwat9vhrT3XSYn-gZQI",
          URI: "https://c.neevacdn.net/image/upload/xyz/IPTC4afxQN2Ug0WrxhqZycgeJwat9vhrT3XSYn-gZQI.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 2425,
              height: 3119,
              numBytes: 209328,
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
          contractAddress: "0x7ED1fcB7DF1B71942dAbEf49A91D9D536EB27E3b",
          symbol: "EtherHead",
          name: "EtherHead",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-15T08:45:19Z",
          logLine: [
            {
              fromAddress: "0x6490351260FA984BFE567615b12835f654484FCc",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x705bdf57443a671F6B478b46dBd1516E76dD57Aa",
      tokenStandard: "ERC-1155",
      symbol: "FlyFrogs",
      nft: {
        tokenID: "9",
        title: "Fly Frog #9",
        contractTitle: "FlyFrogs",
        description:
          "10,000 randomly generated frogs on the Ethereum blockchain. The future is amphibious, ribbit! The frogs are composed of 185+ hand-drawn assets across 6 traits. No two are exactly alike. Journey [Here](https://flyfrog.link)",
        media: {
          key: "uAPMmVPTO0D9yjRj_6WLNlkoKXUPB9hWxTwO8XvuoEA",
          URI: "https://c.neevacdn.net/image/upload/xyz/uAPMmVPTO0D9yjRj_6WLNlkoKXUPB9hWxTwO8XvuoEA.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 155534,
            },
          ],
        },
        owner: {
          address: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
          ens: [
            {
              pointsTo: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
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
          contractAddress: "0x705bdf57443a671F6B478b46dBd1516E76dD57Aa",
          symbol: "FlyFrogs",
          name: "FlyFrogs",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-06T09:02:59Z",
          logLine: [
            {
              fromAddress: "0x28C47d5B3F05450f51d14F71C7734A56dC2E6Ecd",
              toAddress: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x71A08A18bC6ba25d093e8b7347068bFAB3112E6a",
      tokenStandard: "ERC-1155",
      symbol: "FlyFrogs",
      nft: {
        tokenID: "1",
        title: "Fly Frog #1",
        contractTitle: "FlyFrogs",
        description:
          "10,000 randomly generated frogs on the Ethereum blockchain. The future is amphibious, ribbit! The frogs are composed of 185+ hand-drawn assets across 6 traits. No two are exactly alike. Journey [Here](https://flyfrog.link)",
        media: {
          key: "6WSmaBNXeDXLR7sCXD9KpgOdrBVhpMDAfzr9m7RYVYw",
          URI: "https://c.neevacdn.net/image/upload/xyz/6WSmaBNXeDXLR7sCXD9KpgOdrBVhpMDAfzr9m7RYVYw.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 275456,
            },
          ],
        },
        owner: {
          address: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
          ens: [
            {
              pointsTo: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
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
          contractAddress: "0x71A08A18bC6ba25d093e8b7347068bFAB3112E6a",
          symbol: "FlyFrogs",
          name: "FlyFrogs",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-06T08:58:02Z",
          logLine: [
            {
              fromAddress: "0x336279DE6b8ECb106E56EC89D9254eCcC40453cA",
              toAddress: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x556654C90c80b4fedD12cdd7f84F66CA41851520",
      tokenStandard: "ERC-1155",
      symbol: "Spinal Foxes",
      nft: {
        tokenID: "813",
        title: "Spinal Foxes",
        contractTitle: "Spinal Foxes",
        description:
          "The human spine consists of 33 vertebrae, our project consists of 6,000 spinal foxes that will help people rebuild! Let Spinal Fox help others. Visit [Here](https://spinalfoxes.link) to find out more.",
        media: {
          key: "xkoNPM4rf42xUUBpR3MMHtmjPyHKVGqbsIsvl9ZH1PY",
          URI: "https://c.neevacdn.net/image/upload/xyz/xkoNPM4rf42xUUBpR3MMHtmjPyHKVGqbsIsvl9ZH1PY.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 130,
              height: 130,
              numBytes: 38813,
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
          contractAddress: "0x556654C90c80b4fedD12cdd7f84F66CA41851520",
          symbol: "Spinal Foxes",
          name: "Spinal Foxes",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-29T13:09:03Z",
          logLine: [
            {
              fromAddress: "0x7a6bAce23e58016C6CC3248F2B576577eD71adF4",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xC037a4d7Be66F604F2b528Ad2f4d3E6c95096384",
      tokenStandard: "ERC-1155",
      symbol: "Crypto Polar Bears",
      nft: {
        tokenID: "7",
        title: "PolarBear",
        contractTitle: "Crypto Polar Bears",
        description:
          "Polar Bear Club is a custom collection of 8,888 3D unique hand-drawn Crypto Polar Bears who live on the Ethereum network! Polar Bear Club is not only a piece of art but a token. Visit [Here](https://polarbears.in) to participate in presale now!",
        media: {
          key: "ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes",
          URI: "https://c.neevacdn.net/image/upload/xyz/ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 403458,
            },
          ],
        },
        owner: {
          address: "0x5F99FC2d2A98e0469689d3117e0F96bb5c640d88",
          ens: [
            {
              pointsTo: "0x5F99FC2d2A98e0469689d3117e0F96bb5c640d88",
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
          contractAddress: "0xC037a4d7Be66F604F2b528Ad2f4d3E6c95096384",
          symbol: "Crypto Polar Bears",
          name: "Crypto Polar Bears",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-29T06:14:39Z",
          logLine: [
            {
              fromAddress: "0x353224270c2C9a7eCcE7d8dBA98a61587da6F50a",
              toAddress: "0x5F99FC2d2A98e0469689d3117e0F96bb5c640d88",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xc0Ec5e46c144f6543864a60aB7a8cD1a3dE638d4",
      tokenStandard: "ERC-1155",
      symbol: "Bored Snakes Club",
      nft: {
        tokenID: "70",
        title: "Bored Snake Club",
        contractTitle: "Bored Snakes Club",
        description:
          "A collection of 3,333 unique Bored Snakes NFTs- unique digital collectibles on the Ethereum blockchain. Hold Your Bored Sanke Club (Card) NFT , and grants access to members-only benefits. Visit [Here](https://boredsnakesclub.com) to invest more.",
        media: {
          key: "PxOvGXnN__lbmCPY2zfi20AEFluj34j8BI4Y9zs2ADY",
          URI: "https://c.neevacdn.net/image/upload/xyz/PxOvGXnN__lbmCPY2zfi20AEFluj34j8BI4Y9zs2ADY.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 400,
              height: 400,
              numBytes: 66955,
            },
          ],
        },
        owner: {
          address: "0x3D1Af3A5f9539157fd24a354Fd19170aD45693DF",
          ens: [
            {
              pointsTo: "0x3D1Af3A5f9539157fd24a354Fd19170aD45693DF",
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
          contractAddress: "0xc0Ec5e46c144f6543864a60aB7a8cD1a3dE638d4",
          symbol: "Bored Snakes Club",
          name: "Bored Snakes Club",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-26T14:46:22Z",
          logLine: [
            {
              fromAddress: "0xC3793fe3943579a66d1c642bfdd620cB6524244B",
              toAddress: "0x3D1Af3A5f9539157fd24a354Fd19170aD45693DF",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xc2B5eBcc823Ff38d4DEcD8Aadbd2017900AEdC55",
      tokenStandard: "ERC-1155",
      symbol: "The Misfits Ape Society",
      nft: {
        tokenID: "31",
        title: "Misfits Ape Society",
        contractTitle: "The Misfits Ape Society",
        description:
          "Misfits Ape Society is a collection of 10,000 NFTs living in the Ethereum Blockchain and representing a society of people from around the globe who have trouble fitting into the status quo. Visit https://misfitsapesociety.live to participate in presale now!",
        media: {
          key: "N9IkCPyotnGkJQ5gS5xWzbBDjwpZdzlw2neLZE7eXDw",
          URI: "https://c.neevacdn.net/image/upload/xyz/N9IkCPyotnGkJQ5gS5xWzbBDjwpZdzlw2neLZE7eXDw.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 713,
              numBytes: 161734,
            },
          ],
        },
        owner: {
          address: "0x7d22aF94809C95324c81CbBcFd7C26C9d4B665d8",
          ens: [
            {
              pointsTo: "0x7d22aF94809C95324c81CbBcFd7C26C9d4B665d8",
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
          contractAddress: "0xc2B5eBcc823Ff38d4DEcD8Aadbd2017900AEdC55",
          symbol: "The Misfits Ape Society",
          name: "The Misfits Ape Society",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-16T23:18:06Z",
          logLine: [
            {
              fromAddress: "0xbEbc733C64DEBA1c494E5B01b89Ee16B5cAfd2C5",
              toAddress: "0x7d22aF94809C95324c81CbBcFd7C26C9d4B665d8",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x46FFCEe133E68E4c9b7Dff38E0dB98C0CEB5d5Bb",
      tokenStandard: "ERC-1155",
      symbol: "cPolarBear",
      nft: {
        tokenID: "20",
        title: "PolarBear",
        contractTitle: "cPolarBear",
        description:
          "Polar Bear Club is a custom collection of 8,888 3D unique hand-drawn Crypto Polar Bears who live on the Ethereum network! Polar Bear Club is not only a piece of art but a token. Visit https://polarbears.in to participate in presale now!",
        media: {
          key: "ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes",
          URI: "https://c.neevacdn.net/image/upload/xyz/ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 403458,
            },
          ],
        },
        owner: {
          address: "0x3a7bd05287CDAB1d7124957d8274371CbC2561ED",
          ens: [
            {
              pointsTo: "0x3a7bd05287CDAB1d7124957d8274371CbC2561ED",
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
          contractAddress: "0x46FFCEe133E68E4c9b7Dff38E0dB98C0CEB5d5Bb",
          symbol: "cPolarBear",
          name: "cPolarBear",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-26T02:54:22Z",
          logLine: [
            {
              fromAddress: "0x4177c6568322eF1206342bAbDF558b041DAEC022",
              toAddress: "0x3a7bd05287CDAB1d7124957d8274371CbC2561ED",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xBa0980ABbE2BdD2fD8eD956718e619271aD26Da4",
      tokenStandard: "ERC-1155",
      symbol: "pLobstar",
      nft: {
        tokenID: "6",
        title: "Lobstar",
        contractTitle: "pLobstar",
        description:
          "The Lobstars is a collection of 7777 lobster portraits by British contemporary artist, Philip Colbert, often referred to as ‘the godson of Andy Warhol’. Visit https://thelobstar.link to participate in presale now!",
        media: {
          key: "TDjFmHhPdRcCNRchIdjVa4hoyKHVr9rRfOZEKSmltGs",
          URI: "https://c.neevacdn.net/image/upload/xyz/TDjFmHhPdRcCNRchIdjVa4hoyKHVr9rRfOZEKSmltGs.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 404454,
            },
          ],
        },
        owner: {
          address: "0xaCa2A46EA852F9558449AecaCE47131d2A58279B",
          ens: [
            {
              pointsTo: "0xaCa2A46EA852F9558449AecaCE47131d2A58279B",
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
          contractAddress: "0xBa0980ABbE2BdD2fD8eD956718e619271aD26Da4",
          symbol: "pLobstar",
          name: "pLobstar",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-23T00:54:15Z",
          logLine: [
            {
              fromAddress: "0x8916B27cBb3a2Ab84e63847C34964649B42e34A1",
              toAddress: "0xaCa2A46EA852F9558449AecaCE47131d2A58279B",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
      tokenStandard: "ERC-721",
      symbol: "NPNFT",
      nft: {
        tokenID: "3964",
        title: "National Parks #3964",
        contractTitle: "National Parks NFT",
        media: {
          key: "Lnhr0OmA3n-VH7ixRzfsbQa0pSkWNoEtR4FsuaLIL_s",
          URI: "https://c.neevacdn.net/image/upload/xyz/Lnhr0OmA3n-VH7ixRzfsbQa0pSkWNoEtR4FsuaLIL_s.jpg",
          version: [
            {
              kind: "image",
              format: "jpg",
              width: 1720,
              height: 1960,
              numBytes: 252971,
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
            traitType: "Sky",
            value: "Morning Blue",
          },
          {
            traitType: "Earth",
            value: "H2o",
          },
          {
            traitType: "Parks",
            value: "Gates Of The Arctic",
          },
          {
            traitType: "Ambience",
            value: "Golden Hour",
          },
          {
            traitType: "Atmosphere",
            value: "Glare",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
          symbol: "NPNFT",
          slug: "nationalparksnft",
          name: "National Parks NFT",
          description:
            "The first-ever national parks-themed NFT community • Discord Trivia and Webinars every 2 weeks • A community-led project for earth's most passionate outdoor enthusiasts • Supporting the National Parks Foundation\n\n• Community: https://discord.gg/HbCaQ5GWpC\n• Website: https://nationalparksnft.io\n\nNot affiliated with the US National Parks Service or any of its entities.",
          createdDate: "2022-01-29T01:00:54.768324Z",
          floorPrice: {
            pretty: "0.05",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--r3a4Y6gz--/https%3A//lh3.googleusercontent.com/2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ%3Ds2500?savepath=2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--PfoNdQaj--/https%3A//lh3.googleusercontent.com/ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA%3Ds300?savepath=ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/HbCaQ5GWpC",
            },
            {
              name: "External",
              url: "http://nationalparksnft.io",
            },
          ],
          socialMedia: [
            {
              network: "instagram",
              username: "nationalparks.nft",
            },
          ],
        },
        purchase: {
          timestamp: "2022-04-08T17:57:43Z",
          logLine: [
            {
              fromAddress: "0xB2560748ABDA7F837a1d01CFb660DbEEa2667198",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "48000000000000000",
                pretty: "0.05",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
      tokenStandard: "ERC-1155",
      symbol: "OPENSTORE",
      nft: {
        tokenID:
          "23443662500946835264283410846443095105284164377306294737980794877950453350401",
        title: "crypto-totem#3021",
        contractTitle: "OpenSea Shared Storefront",
        description:
          "Crypto totem is a collection of 5555 totems created with generative art on the Ethereum blockchain.",
        media: {
          key: "N_y_A-aq8uaINqEV0gJpjyA9a30KDx-OyosTblFSK-M",
          URI: "https://c.neevacdn.net/image/upload/xyz/N_y_A-aq8uaINqEV0gJpjyA9a30KDx-OyosTblFSK-M.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 512,
              height: 512,
              numBytes: 360592,
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
          contractAddress: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
          symbol: "OPENSTORE",
          slug: "opensea-shared-storefront-v2",
          name: "OpenSea Shared Storefront",
          createdDate: "2020-12-02T17:40:53.50754Z",
          bannerImage: {
            key: "",
          },
          featuredImage: {
            key: "",
          },
        },
        purchase: {
          timestamp: "2022-03-19T20:13:53Z",
          logLine: [
            {
              fromAddress: "0x33D4a48b6E7821d61298c28AE97d4AbF25c1d810",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "19000000000000000",
                pretty: "0.02",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
      tokenStandard: "ERC-721",
      symbol: "NPNFT",
      nft: {
        tokenID: "1253",
        title: "National Parks #1253",
        contractTitle: "National Parks NFT",
        media: {
          key: "ktNMrqDQngEntIQAgA3uxkFPyvmL_kXKHOYpX98It6M",
          URI: "https://c.neevacdn.net/image/upload/xyz/ktNMrqDQngEntIQAgA3uxkFPyvmL_kXKHOYpX98It6M.jpg",
          version: [
            {
              kind: "image",
              format: "jpg",
              width: 1720,
              height: 1960,
              numBytes: 270997,
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
            traitType: "Sky",
            value: "Morning Blue",
          },
          {
            traitType: "Earth",
            value: "Feldspar",
          },
          {
            traitType: "Parks",
            value: "Great Basin",
          },
          {
            traitType: "Atmosphere",
            value: "Glare",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
          symbol: "NPNFT",
          slug: "nationalparksnft",
          name: "National Parks NFT",
          description:
            "The first-ever national parks-themed NFT community • Discord Trivia and Webinars every 2 weeks • A community-led project for earth's most passionate outdoor enthusiasts • Supporting the National Parks Foundation\n\n• Community: https://discord.gg/HbCaQ5GWpC\n• Website: https://nationalparksnft.io\n\nNot affiliated with the US National Parks Service or any of its entities.",
          createdDate: "2022-01-29T01:00:54.768324Z",
          floorPrice: {
            pretty: "0.05",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--r3a4Y6gz--/https%3A//lh3.googleusercontent.com/2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ%3Ds2500?savepath=2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--PfoNdQaj--/https%3A//lh3.googleusercontent.com/ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA%3Ds300?savepath=ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/HbCaQ5GWpC",
            },
            {
              name: "External",
              url: "http://nationalparksnft.io",
            },
          ],
          socialMedia: [
            {
              network: "instagram",
              username: "nationalparks.nft",
            },
          ],
        },
        purchase: {
          timestamp: "2022-02-19T16:44:02Z",
          logLine: [
            {
              fromAddress: "0xd633F52185438B85648468601f26e823BE83d404",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "80000000000000000",
                pretty: "0.08",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x4b18aeDb3F3C2D1aEfF974D6dCB41459B19A6A66",
      tokenStandard: "ERC-721",
      symbol: "MathFlowers",
      nft: {
        tokenID: "10",
        title: "MathFlowers #10",
        contractTitle: "MathFlowers",
        description:
          "Mathflowers - the most beautiful flowers on the Ethereum Blockchain. MathFlowers are one-of-a-kind work of art created with sophisticated algorithms and advanced image processing technology. They are unique as there a over a trillion possibilities, but only 10.000 will ever be minted. As each MathFlower has some characteristics, like coloring, number of repetitions, uniqueness, etc. some of them are rarer than others. Visit www.MathFlowers.art for more info",
        media: {
          key: "OU_23_CFWGwMxenVLpcvrUP0wcGiyTdx1u2xJxLGva4",
          URI: "https://c.neevacdn.net/image/upload/xyz/OU_23_CFWGwMxenVLpcvrUP0wcGiyTdx1u2xJxLGva4.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 500,
              height: 500,
              numBytes: 1163229,
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
          contractAddress: "0x4b18aeDb3F3C2D1aEfF974D6dCB41459B19A6A66",
          symbol: "MathFlowers",
          slug: "mathflowers",
          name: "MathFlowers",
          description:
            "Mathflowers - the most beautiful flowers on the Ethereum Blockchain. MathFlowers are one-of-a-kind work of art created with sophisticated algorithms and advanced image processing technology. They are unique as there a over a trillion possibilities, but only 333 will ever be minted. As each MathFlower has some characteristics, like coloring, number of repetitions, uniqueness, etc. some of them are rarer than others. Visit https://www.MathFlowers.art for more info or follow us on Twitter: http://twitter.com/MathFlowersNFT or join our Community on Discord https://discord.gg/BHEbRmrbkS",
          createdDate: "2021-04-08T09:44:24.130758Z",
          floorPrice: {
            pretty: "0.02",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s---CRs2Ka8--/https%3A//lh3.googleusercontent.com/N9lkE7bkNOaGS1GAh1e878flVnb0sF5wmVSGzC9fgPON9SYWN8FIlq8YF0MqKYBeCAdSHGo_1VnRuUn-loQ1RRDGJKN5PVjd-5oG7z0%3Ds2500?savepath=N9lkE7bkNOaGS1GAh1e878flVnb0sF5wmVSGzC9fgPON9SYWN8FIlq8YF0MqKYBeCAdSHGo_1VnRuUn-loQ1RRDGJKN5PVjd-5oG7z0=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--as4beZ3a--/https%3A//lh3.googleusercontent.com/NEjW9RqrRW_hAXi6hgRFW8yIKYyEG1VgqKXCjDx3aVXLmSPk2Q8YkNp40juAIUIP1G6b0lqYr2zBJynKSiAACt7dEctpMwuIpYLu0g%3Ds300?savepath=NEjW9RqrRW_hAXi6hgRFW8yIKYyEG1VgqKXCjDx3aVXLmSPk2Q8YkNp40juAIUIP1G6b0lqYr2zBJynKSiAACt7dEctpMwuIpYLu0g=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/BHEbRmrbkS",
            },
            {
              name: "External",
              url: "https://www.MathFlowers.art",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "MathFlowersNFT",
            },
            {
              network: "medium",
              username: "MathFlowers",
            },
          ],
        },
        purchase: {
          timestamp: "2022-02-09T02:31:12Z",
          logLine: [
            {
              fromAddress: "0xbab64597e8d0eB511a356B56b8dc46C7b01097c5",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "10000000000000000",
                pretty: "0.01",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x13Bd2ac3779cBbCb2aC874C33f1145DD71Ce41ee",
      tokenStandard: "ERC-721",
      symbol: "CBOX",
      nft: {
        tokenID: "1611",
        title: "Companion #1611",
        contractTitle: "CompanionInABox",
        description:
          "Boxed in a small, wooden box, this companion is a bit of a mystery.",
        media: {
          key: "YaD0mz9g4IJbmV1rrUVmYWcSQ_dYZ3hyemrcdZU_jwM",
          URI: "https://c.neevacdn.net/image/upload/xyz/YaD0mz9g4IJbmV1rrUVmYWcSQ_dYZ3hyemrcdZU_jwM.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 1024,
              height: 1024,
              numBytes: 136782,
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
            traitType: "birthday",
            value: "1643648361604",
          },
          {
            traitType: "updated",
            value: "1643648361604",
          },
          {
            traitType: "backgroundColor",
            value: "blue",
          },
          {
            traitType: "skinColor",
            value: "4",
          },
          {
            traitType: "hairColor",
            value: "lightblue",
          },
          {
            traitType: "pose",
            value: "1",
          },
          {
            traitType: "gender",
            value: "m",
          },
          {
            traitType: "blemish",
            value: "blush",
          },
          {
            traitType: "hair",
            value: "locks",
          },
          {
            traitType: "brows",
            value: "regular",
          },
          {
            traitType: "eyes",
            value: "default",
          },
          {
            traitType: "nose",
            value: "button",
          },
          {
            traitType: "mouth",
            value: "widesmile",
          },
          {
            traitType: "eyewear",
            value: "roundedColorFrames",
          },
          {
            traitType: "top",
            value: "tshirtsquiggle",
          },
          {
            traitType: "bottom",
            value: "pants",
          },
          {
            traitType: "shoes",
            value: "hightops",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x13Bd2ac3779cBbCb2aC874C33f1145DD71Ce41ee",
          symbol: "CBOX",
          slug: "companioninabox",
          name: "CompanionInABox",
          description:
            "Get in, everyone. We're hanging out in boxes. \n\n(NOTE: Owners number are higher than they appear due to staking)\n\nCompanion-in-a-box is a limited run of NFTs on the Ethereum blockchain. Each NFT is an ERC-721 token and is completely and utterly one-of-a-kind.",
          createdDate: "2021-12-21T08:02:20.43345Z",
          floorPrice: {
            pretty: "0.03",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--GYDf8prG--/https%3A//lh3.googleusercontent.com/y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo%3Ds2500?savepath=y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--Yn5C48iR--/https%3A//lh3.googleusercontent.com/y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo%3Ds300?savepath=y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo=s300",
          },
          urls: [
            {
              name: "External",
              url: "http://companioninabox.art",
            },
          ],
        },
        purchase: {
          timestamp: "2022-02-06T02:59:37Z",
          logLine: [
            {
              fromAddress: "0x3bb5cf9984f12aA0591A4cEca9C2b2Df8980d3eA",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "65000000000000000",
                pretty: "0.07",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xaBBBDf5226F9b993e5e15a01fcb1b9c9A25987be",
      tokenStandard: "ERC-721",
      symbol: "HBEAT",
      nft: {
        tokenID: "115",
        title: "ramaswamy.eth's Heartbeat",
        contractTitle: "Heartbeat",
        description: "A heart beating 6 beats per minute across 2 chains.",
        media: {
          key: "BlPjV0QNTkYUF7zbirHfMxmx1-skjzupRhPDo8OdZkk",
          URI: "https://c.neevacdn.net/image/upload/xyz/BlPjV0QNTkYUF7zbirHfMxmx1-skjzupRhPDo8OdZkk.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 350,
              height: 350,
              numBytes: 1746182,
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
            traitType: "address",
            value: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          },
          {
            traitType: "Active Network Count",
            value: "2",
          },
          {
            traitType: "Beats Per Minute",
            value: "6",
          },
          {
            traitType: "Ethereum Total Transactions",
            value: "31",
          },
          {
            traitType: "Ethereum Transactions Last Week",
            value: "2",
          },
          {
            traitType: "Ethereum Transactions Last Month",
            value: "5",
          },
          {
            traitType: "Polygon Total Transactions",
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
          contractAddress: "0xaBBBDf5226F9b993e5e15a01fcb1b9c9A25987be",
          symbol: "HBEAT",
          slug: "heartbeat-metagame",
          name: "Heartbeat",
          description:
            "A beating heart based on your on-chain activity. \u003cbr\u003e\u003cbr\u003e Part of **The Metagame**. Follow along on twitter [@The_Metagame](https://twitter.com/the_metagame). Mint one via [themetagame.xyz](https://www.themetagame.xyz) ",
          createdDate: "2022-01-27T20:58:38.405299Z",
          bannerImage: {
            key: "",
          },
          featuredImage: {
            key: "",
          },
          urls: [
            {
              name: "External",
              url: "https://heartbeat.themetagame.xyz",
            },
          ],
        },
        purchase: {
          timestamp: "2022-01-29T01:48:56Z",
          logLine: [
            {
              fromAddress: "0x0000000000000000000000000000000000000000",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xB228D7B6e099618Ca71bd5522B3a8c3788A8F172",
      tokenStandard: "ERC-721",
      symbol: "POOLEXEC",
      nft: {
        tokenID: "166",
        title: "Poolsuite - Executive Member 166/2500",
        contractTitle: "Poolsuite - Executive Member",
        description:
          "Holding the Poolsuite Executive Member card suggests your esteemed presence within the crème de la crème of internet high society, and says a lot about the way you live your life on the web. This NFT can be connected to your account at Poolsuite.net to unlock perks, including early access to all Poolsuite projects.",
        media: {
          key: "JGB87qvCSwe-yTBs4cWImYdz6GtZkf4NcjXrrAWROSQ",
          URI: "https://c.neevacdn.net/image/upload/xyz/JGB87qvCSwe-yTBs4cWImYdz6GtZkf4NcjXrrAWROSQ.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 600,
              height: 600,
              numBytes: 5815283,
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
          contractAddress: "0xB228D7B6e099618Ca71bd5522B3a8c3788A8F172",
          symbol: "POOLEXEC",
          slug: "poolsuite-executive-member",
          name: "Poolsuite - Executive Member",
          createdDate: "2021-11-25T00:35:31.543214Z",
          floorPrice: {
            pretty: "1.58",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--nmbJW89_--/https%3A//lh3.googleusercontent.com/pN8dsrbR5TnTRCtTD7qNqZABzny1JB1tx5xXSSz3XdlovlptmEymNcQ7JE1DZJTZZHEqDg2dzArvcucoUL0dDHdnAMLxU_Nf-gsFSQ%3Ds2500?savepath=pN8dsrbR5TnTRCtTD7qNqZABzny1JB1tx5xXSSz3XdlovlptmEymNcQ7JE1DZJTZZHEqDg2dzArvcucoUL0dDHdnAMLxU_Nf-gsFSQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--X0VE7QBq--/https%3A//lh3.googleusercontent.com/n-Ry4Vw7lEu_gqtRmuyFa54BsvKEmQC4bu-mi4DL31n-ZTiFIhJR0VGd305GSWpGg7bJhhMA4-0960_Lul6P_46q_HlFrHCTfeV4eQ%3Ds300?savepath=n-Ry4Vw7lEu_gqtRmuyFa54BsvKEmQC4bu-mi4DL31n-ZTiFIhJR0VGd305GSWpGg7bJhhMA4-0960_Lul6P_46q_HlFrHCTfeV4eQ=s300",
          },
          urls: [
            {
              name: "External",
              url: "http://poolsuite.net",
            },
            {
              name: "Telegram",
              url: "https://t.me/poolsuite",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "poolsuite",
            },
            {
              network: "instagram",
              username: "poolsuite",
            },
          ],
        },
        purchase: {
          timestamp: "2022-01-27T04:18:09Z",
          logLine: [
            {
              fromAddress: "0x0C2f710164656E590a0B9557f9B69C7E46Abd5d2",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "1880000000000000000",
                pretty: "1.88",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",
      tokenStandard: "ERC-721",
      symbol: "WITCH",
      nft: {
        tokenID: "8194",
        title: "chrysoidine, the formidable hourglass",
        contractTitle: "Crypto Coven",
        description:
          "You are a WITCH made of predator teeth. You collect mushrooms for tea and keep powerful chickens. Your magic spawns from a long-forgotten kiss. You are a guardian of the gates of death. FILL YOUR MIND WITH PRECIOUS GEMS!",
        media: {
          key: "SIY-uw5H-zJqZWcnJcxxAZLjQDlQvW-CbvnD8jRWrbo",
          URI: "https://c.neevacdn.net/image/upload/xyz/SIY-uw5H-zJqZWcnJcxxAZLjQDlQvW-CbvnD8jRWrbo.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 2000,
              height: 2000,
              numBytes: 2499106,
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
            traitType: "Skin Tone",
            value: "Midnight",
          },
          {
            traitType: "Body Shape",
            value: "Soft",
          },
          {
            traitType: "Hair (Front)",
            value: "Box Braids",
          },
          {
            traitType: "Hair Color",
            value: "Black",
          },
          {
            traitType: "Hair (Back)",
            value: "Puffy Buns",
          },
          {
            traitType: "Hair Topper",
            value: "Aries Horns",
          },
          {
            traitType: "Background",
            value: "Pink",
          },
          {
            traitType: "Back Item",
            value: "Monstera",
          },
          {
            traitType: "Mouth",
            value: "Bow (Red)",
          },
          {
            traitType: "Eye Style",
            value: "Smudged Snake",
          },
          {
            traitType: "Eye Color",
            value: "Glo",
          },
          {
            traitType: "Eyebrows",
            value: "Thin Arched (Grey)",
          },
          {
            traitType: "Top",
            value: "Vivetta Ghost Hand Collar (Black)",
          },
          {
            traitType: "Earrings",
            value: "Dangly Bones (Bone)",
          },
          {
            traitType: "Archetype of Power",
            value: "Necromancer",
          },
          {
            traitType: "Sun Sign",
            value: "Cancer",
          },
          {
            traitType: "Moon Sign",
            value: "Gemini",
          },
          {
            traitType: "Rising Sign",
            value: "Sagittarius",
          },
          {
            traitType: "Will",
            value: "6",
          },
          {
            traitType: "Wit",
            value: "5",
          },
          {
            traitType: "Wiles",
            value: "6",
          },
          {
            traitType: "Wisdom",
            value: "5",
          },
          {
            traitType: "Wonder",
            value: "4",
          },
          {
            traitType: "Woe",
            value: "9",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",
          symbol: "WITCH",
          slug: "cryptocoven",
          name: "Crypto Coven",
          description: "it's the season of the witch. 🌙",
          createdDate: "2021-11-04T00:42:55.8895Z",
          floorPrice: {
            pretty: "0.36",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--4l8tybWY--/https%3A//lh3.googleusercontent.com/M42Xf9Vbu_yodzKVFA1I6TYXIx5Hz699gEtp2lDg9vGT7g-S4z_5cx2iYPub1kytnOlexV5WDdGOmpGeuH4-N0CYXi7FaC_iqEm4gQ%3Ds2500?savepath=M42Xf9Vbu_yodzKVFA1I6TYXIx5Hz699gEtp2lDg9vGT7g-S4z_5cx2iYPub1kytnOlexV5WDdGOmpGeuH4-N0CYXi7FaC_iqEm4gQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--laQ3dLFr--/https%3A//lh3.googleusercontent.com/5_8So8vKCwnu2li2QNRd43zcPlKFtc3MeZIRiKrFRyDFOTK7MiPnn0EKTEySs1lhGDbSmgL0e_YNtdyAdGNF-dTlwcsYZjYwwL89%3Ds300?savepath=5_8So8vKCwnu2li2QNRd43zcPlKFtc3MeZIRiKrFRyDFOTK7MiPnn0EKTEySs1lhGDbSmgL0e_YNtdyAdGNF-dTlwcsYZjYwwL89=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/cryptocoven",
            },
            {
              name: "External",
              url: "https://www.cryptocoven.xyz/",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "crypto_coven",
            },
            {
              network: "instagram",
              username: "crypto_coven",
            },
          ],
        },
        purchase: {
          timestamp: "2021-12-12T15:48:15Z",
          logLine: [
            {
              fromAddress: "0x63AE1130e1789D79196b4Aa40F30B37c0B977111",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "149000000000000000",
                pretty: "0.15",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
      tokenStandard: "ERC-721",
      symbol: "PROOF",
      nft: {
        tokenID: "302",
        title: "PROOF Collective",
        contractTitle: "PROOF Collective",
        media: {
          key: "VMzPNAzTeinR0gaCrZzL3SevHeTvXnBvB3716hLSv1Q",
          URI: "https://c.neevacdn.net/image/upload/xyz/VMzPNAzTeinR0gaCrZzL3SevHeTvXnBvB3716hLSv1Q.jpg",
          version: [
            {
              kind: "image",
              format: "jpg",
              width: 512,
              height: 512,
              numBytes: 55704,
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
          contractAddress: "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
          symbol: "PROOF",
          slug: "proof-collective",
          name: "PROOF Collective",
          description:
            "A private group of 1000 dedicated NFT collectors and artists. Membership to the collective and all of the benefits come from holding the PROOF Collective NFT.",
          createdDate: "2021-12-08T16:15:41.074289Z",
          floorPrice: {
            pretty: "73.00",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--2Ny6k4Kd--/https%3A//lh3.googleusercontent.com/B0HkqNeqCSqEilUzeg6KndcAoKAv6C7znFMq7--xzXvev6fOUeLmprVVitfoZ2xuWs0h5Vt7k4jj-8DG-GyB12jRFlkiZEaqjyjWiBI%3Ds2500?savepath=B0HkqNeqCSqEilUzeg6KndcAoKAv6C7znFMq7--xzXvev6fOUeLmprVVitfoZ2xuWs0h5Vt7k4jj-8DG-GyB12jRFlkiZEaqjyjWiBI=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--Jm1yI4xc--/https%3A//lh3.googleusercontent.com/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8%3Ds300?savepath=uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8=s300",
          },
          urls: [
            {
              name: "External",
              url: "https://collective.proof.xyz",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "proof_xyz",
            },
          ],
        },
        purchase: {
          timestamp: "2021-12-11T19:28:57Z",
          logLine: [
            {
              fromAddress: "0x0000000000000000000000000000000000000000",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xAa9ae09510462cEBcfdCE50Cb900Fa83f38A23C0",
      tokenStandard: "ERC-1155",
      symbol: "STAMPU",
      nft: {
        tokenID: "17",
        title: "A Sakura Daze",
        contractTitle: "Stampu",
        description:
          "Finding nature within the city, embracing it, it gives you a moment to pause and appreciate things.",
        media: {
          key: "v5Vi1cqoxlU07H3fsAqaIIjwI50LHkxh4miTIaaiqcE",
          URI: "https://c.neevacdn.net/image/upload/xyz/v5Vi1cqoxlU07H3fsAqaIIjwI50LHkxh4miTIaaiqcE.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 1080,
              height: 1080,
              numBytes: 1937628,
            },
          ],
        },
        owner: {
          address: "0xAE9E33D5AAE9A20EC475FC57c7F19F62cDE7ad61",
          ens: [
            {
              pointsTo: "0xAE9E33D5AAE9A20EC475FC57c7F19F62cDE7ad61",
              expires: "0001-01-01T00:00:00Z",
            },
          ],
        },
        attributes: [
          {
            traitType: "Season",
            value: "Photography",
          },
          {
            traitType: "Theme",
            value: "Connection",
          },
          {
            traitType: "Artist",
            value: "Anocam",
          },
          {
            traitType: "Edition",
            value: "Silver",
          },
          {
            traitType: "Max Supply",
            value: "200",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0xAa9ae09510462cEBcfdCE50Cb900Fa83f38A23C0",
          symbol: "STAMPU",
          slug: "stampu",
          name: "Stampu",
          description:
            "Send messages, Stampu NFTs, and $ETH to your Twitter, Discord, NFT, DeFi, Metaverse friends \u0026 heroes who made our crypto journey possible\n \nHave you thanked them yet?",
          createdDate: "2021-09-21T05:01:28.659632Z",
          floorPrice: {
            pretty: "0.01",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--OshXfBjy--/https%3A//lh3.googleusercontent.com/HXF4Nhv3IT5J2YbxrQVN0W15dMzL08_VrtI8XDjWE2GFqlvPPW_eEoxH70yq__uOWCQ1Tt0vpFyzHN9lcy0MemUYc6LqWU5npGVE%3Ds2500?savepath=HXF4Nhv3IT5J2YbxrQVN0W15dMzL08_VrtI8XDjWE2GFqlvPPW_eEoxH70yq__uOWCQ1Tt0vpFyzHN9lcy0MemUYc6LqWU5npGVE=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--A82BBH8w--/https%3A//lh3.googleusercontent.com/QwsgeRoEqJzcMJOpciDr5MtPqdjZXmWTDvTTTs4a-PpH823nDDcSQXE9uRaP9ZEnRJXpNDYwKSZz430Zn1F3FnhOiDYPFXWf5YMFxa0%3Ds300?savepath=QwsgeRoEqJzcMJOpciDr5MtPqdjZXmWTDvTTTs4a-PpH823nDDcSQXE9uRaP9ZEnRJXpNDYwKSZz430Zn1F3FnhOiDYPFXWf5YMFxa0=s300",
          },
          urls: [
            {
              name: "External",
              url: "https://stampu.xyz",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "StampuNFT",
            },
          ],
        },
        purchase: {
          timestamp: "2022-07-08T14:05:23Z",
          logLine: [
            {
              fromAddress: "0x1347BA69eC9e93959eF03f233994dAE5e5c105f0",
              toAddress: "0xAE9E33D5AAE9A20EC475FC57c7F19F62cDE7ad61",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
  ],
  topTokens: [
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xB228D7B6e099618Ca71bd5522B3a8c3788A8F172",
      tokenStandard: "ERC-721",
      symbol: "POOLEXEC",
      nft: {
        tokenID: "166",
        title: "Poolsuite - Executive Member 166/2500",
        contractTitle: "Poolsuite - Executive Member",
        description:
          "Holding the Poolsuite Executive Member card suggests your esteemed presence within the crème de la crème of internet high society, and says a lot about the way you live your life on the web. This NFT can be connected to your account at Poolsuite.net to unlock perks, including early access to all Poolsuite projects.",
        media: {
          key: "JGB87qvCSwe-yTBs4cWImYdz6GtZkf4NcjXrrAWROSQ",
          URI: "https://c.neevacdn.net/image/upload/xyz/JGB87qvCSwe-yTBs4cWImYdz6GtZkf4NcjXrrAWROSQ.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 600,
              height: 600,
              numBytes: 5815283,
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
          contractAddress: "0xB228D7B6e099618Ca71bd5522B3a8c3788A8F172",
          symbol: "POOLEXEC",
          slug: "poolsuite-executive-member",
          name: "Poolsuite - Executive Member",
          createdDate: "2021-11-25T00:35:31.543214Z",
          floorPrice: {
            pretty: "1.58",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--nmbJW89_--/https%3A//lh3.googleusercontent.com/pN8dsrbR5TnTRCtTD7qNqZABzny1JB1tx5xXSSz3XdlovlptmEymNcQ7JE1DZJTZZHEqDg2dzArvcucoUL0dDHdnAMLxU_Nf-gsFSQ%3Ds2500?savepath=pN8dsrbR5TnTRCtTD7qNqZABzny1JB1tx5xXSSz3XdlovlptmEymNcQ7JE1DZJTZZHEqDg2dzArvcucoUL0dDHdnAMLxU_Nf-gsFSQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--X0VE7QBq--/https%3A//lh3.googleusercontent.com/n-Ry4Vw7lEu_gqtRmuyFa54BsvKEmQC4bu-mi4DL31n-ZTiFIhJR0VGd305GSWpGg7bJhhMA4-0960_Lul6P_46q_HlFrHCTfeV4eQ%3Ds300?savepath=n-Ry4Vw7lEu_gqtRmuyFa54BsvKEmQC4bu-mi4DL31n-ZTiFIhJR0VGd305GSWpGg7bJhhMA4-0960_Lul6P_46q_HlFrHCTfeV4eQ=s300",
          },
          urls: [
            {
              name: "External",
              url: "http://poolsuite.net",
            },
            {
              name: "Telegram",
              url: "https://t.me/poolsuite",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "poolsuite",
            },
            {
              network: "instagram",
              username: "poolsuite",
            },
          ],
        },
        purchase: {
          timestamp: "2022-01-27T04:18:09Z",
          logLine: [
            {
              fromAddress: "0x0C2f710164656E590a0B9557f9B69C7E46Abd5d2",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "1880000000000000000",
                pretty: "1.88",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",
      tokenStandard: "ERC-721",
      symbol: "WITCH",
      nft: {
        tokenID: "8194",
        title: "chrysoidine, the formidable hourglass",
        contractTitle: "Crypto Coven",
        description:
          "You are a WITCH made of predator teeth. You collect mushrooms for tea and keep powerful chickens. Your magic spawns from a long-forgotten kiss. You are a guardian of the gates of death. FILL YOUR MIND WITH PRECIOUS GEMS!",
        media: {
          key: "SIY-uw5H-zJqZWcnJcxxAZLjQDlQvW-CbvnD8jRWrbo",
          URI: "https://c.neevacdn.net/image/upload/xyz/SIY-uw5H-zJqZWcnJcxxAZLjQDlQvW-CbvnD8jRWrbo.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 2000,
              height: 2000,
              numBytes: 2499106,
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
            traitType: "Skin Tone",
            value: "Midnight",
          },
          {
            traitType: "Body Shape",
            value: "Soft",
          },
          {
            traitType: "Hair (Front)",
            value: "Box Braids",
          },
          {
            traitType: "Hair Color",
            value: "Black",
          },
          {
            traitType: "Hair (Back)",
            value: "Puffy Buns",
          },
          {
            traitType: "Hair Topper",
            value: "Aries Horns",
          },
          {
            traitType: "Background",
            value: "Pink",
          },
          {
            traitType: "Back Item",
            value: "Monstera",
          },
          {
            traitType: "Mouth",
            value: "Bow (Red)",
          },
          {
            traitType: "Eye Style",
            value: "Smudged Snake",
          },
          {
            traitType: "Eye Color",
            value: "Glo",
          },
          {
            traitType: "Eyebrows",
            value: "Thin Arched (Grey)",
          },
          {
            traitType: "Top",
            value: "Vivetta Ghost Hand Collar (Black)",
          },
          {
            traitType: "Earrings",
            value: "Dangly Bones (Bone)",
          },
          {
            traitType: "Archetype of Power",
            value: "Necromancer",
          },
          {
            traitType: "Sun Sign",
            value: "Cancer",
          },
          {
            traitType: "Moon Sign",
            value: "Gemini",
          },
          {
            traitType: "Rising Sign",
            value: "Sagittarius",
          },
          {
            traitType: "Will",
            value: "6",
          },
          {
            traitType: "Wit",
            value: "5",
          },
          {
            traitType: "Wiles",
            value: "6",
          },
          {
            traitType: "Wisdom",
            value: "5",
          },
          {
            traitType: "Wonder",
            value: "4",
          },
          {
            traitType: "Woe",
            value: "9",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x5180db8F5c931aaE63c74266b211F580155ecac8",
          symbol: "WITCH",
          slug: "cryptocoven",
          name: "Crypto Coven",
          description: "it's the season of the witch. 🌙",
          createdDate: "2021-11-04T00:42:55.8895Z",
          floorPrice: {
            pretty: "0.36",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--4l8tybWY--/https%3A//lh3.googleusercontent.com/M42Xf9Vbu_yodzKVFA1I6TYXIx5Hz699gEtp2lDg9vGT7g-S4z_5cx2iYPub1kytnOlexV5WDdGOmpGeuH4-N0CYXi7FaC_iqEm4gQ%3Ds2500?savepath=M42Xf9Vbu_yodzKVFA1I6TYXIx5Hz699gEtp2lDg9vGT7g-S4z_5cx2iYPub1kytnOlexV5WDdGOmpGeuH4-N0CYXi7FaC_iqEm4gQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--laQ3dLFr--/https%3A//lh3.googleusercontent.com/5_8So8vKCwnu2li2QNRd43zcPlKFtc3MeZIRiKrFRyDFOTK7MiPnn0EKTEySs1lhGDbSmgL0e_YNtdyAdGNF-dTlwcsYZjYwwL89%3Ds300?savepath=5_8So8vKCwnu2li2QNRd43zcPlKFtc3MeZIRiKrFRyDFOTK7MiPnn0EKTEySs1lhGDbSmgL0e_YNtdyAdGNF-dTlwcsYZjYwwL89=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/cryptocoven",
            },
            {
              name: "External",
              url: "https://www.cryptocoven.xyz/",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "crypto_coven",
            },
            {
              network: "instagram",
              username: "crypto_coven",
            },
          ],
        },
        purchase: {
          timestamp: "2021-12-12T15:48:15Z",
          logLine: [
            {
              fromAddress: "0x63AE1130e1789D79196b4Aa40F30B37c0B977111",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "149000000000000000",
                pretty: "0.15",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
      tokenStandard: "ERC-721",
      symbol: "NPNFT",
      nft: {
        tokenID: "1253",
        title: "National Parks #1253",
        contractTitle: "National Parks NFT",
        media: {
          key: "ktNMrqDQngEntIQAgA3uxkFPyvmL_kXKHOYpX98It6M",
          URI: "https://c.neevacdn.net/image/upload/xyz/ktNMrqDQngEntIQAgA3uxkFPyvmL_kXKHOYpX98It6M.jpg",
          version: [
            {
              kind: "image",
              format: "jpg",
              width: 1720,
              height: 1960,
              numBytes: 270997,
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
            traitType: "Sky",
            value: "Morning Blue",
          },
          {
            traitType: "Earth",
            value: "Feldspar",
          },
          {
            traitType: "Parks",
            value: "Great Basin",
          },
          {
            traitType: "Atmosphere",
            value: "Glare",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
          symbol: "NPNFT",
          slug: "nationalparksnft",
          name: "National Parks NFT",
          description:
            "The first-ever national parks-themed NFT community • Discord Trivia and Webinars every 2 weeks • A community-led project for earth's most passionate outdoor enthusiasts • Supporting the National Parks Foundation\n\n• Community: https://discord.gg/HbCaQ5GWpC\n• Website: https://nationalparksnft.io\n\nNot affiliated with the US National Parks Service or any of its entities.",
          createdDate: "2022-01-29T01:00:54.768324Z",
          floorPrice: {
            pretty: "0.05",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--r3a4Y6gz--/https%3A//lh3.googleusercontent.com/2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ%3Ds2500?savepath=2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--PfoNdQaj--/https%3A//lh3.googleusercontent.com/ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA%3Ds300?savepath=ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/HbCaQ5GWpC",
            },
            {
              name: "External",
              url: "http://nationalparksnft.io",
            },
          ],
          socialMedia: [
            {
              network: "instagram",
              username: "nationalparks.nft",
            },
          ],
        },
        purchase: {
          timestamp: "2022-02-19T16:44:02Z",
          logLine: [
            {
              fromAddress: "0xd633F52185438B85648468601f26e823BE83d404",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "80000000000000000",
                pretty: "0.08",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x13Bd2ac3779cBbCb2aC874C33f1145DD71Ce41ee",
      tokenStandard: "ERC-721",
      symbol: "CBOX",
      nft: {
        tokenID: "1611",
        title: "Companion #1611",
        contractTitle: "CompanionInABox",
        description:
          "Boxed in a small, wooden box, this companion is a bit of a mystery.",
        media: {
          key: "YaD0mz9g4IJbmV1rrUVmYWcSQ_dYZ3hyemrcdZU_jwM",
          URI: "https://c.neevacdn.net/image/upload/xyz/YaD0mz9g4IJbmV1rrUVmYWcSQ_dYZ3hyemrcdZU_jwM.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 1024,
              height: 1024,
              numBytes: 136782,
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
            traitType: "birthday",
            value: "1643648361604",
          },
          {
            traitType: "updated",
            value: "1643648361604",
          },
          {
            traitType: "backgroundColor",
            value: "blue",
          },
          {
            traitType: "skinColor",
            value: "4",
          },
          {
            traitType: "hairColor",
            value: "lightblue",
          },
          {
            traitType: "pose",
            value: "1",
          },
          {
            traitType: "gender",
            value: "m",
          },
          {
            traitType: "blemish",
            value: "blush",
          },
          {
            traitType: "hair",
            value: "locks",
          },
          {
            traitType: "brows",
            value: "regular",
          },
          {
            traitType: "eyes",
            value: "default",
          },
          {
            traitType: "nose",
            value: "button",
          },
          {
            traitType: "mouth",
            value: "widesmile",
          },
          {
            traitType: "eyewear",
            value: "roundedColorFrames",
          },
          {
            traitType: "top",
            value: "tshirtsquiggle",
          },
          {
            traitType: "bottom",
            value: "pants",
          },
          {
            traitType: "shoes",
            value: "hightops",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x13Bd2ac3779cBbCb2aC874C33f1145DD71Ce41ee",
          symbol: "CBOX",
          slug: "companioninabox",
          name: "CompanionInABox",
          description:
            "Get in, everyone. We're hanging out in boxes. \n\n(NOTE: Owners number are higher than they appear due to staking)\n\nCompanion-in-a-box is a limited run of NFTs on the Ethereum blockchain. Each NFT is an ERC-721 token and is completely and utterly one-of-a-kind.",
          createdDate: "2021-12-21T08:02:20.43345Z",
          floorPrice: {
            pretty: "0.03",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--GYDf8prG--/https%3A//lh3.googleusercontent.com/y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo%3Ds2500?savepath=y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--Yn5C48iR--/https%3A//lh3.googleusercontent.com/y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo%3Ds300?savepath=y84ibleRl2E9v_h41piFKwliV2ReXM7i5JH3F1aLDSG8LCs88FQJ7lTaya4Yd9PDgaW8RaM2M6Ot_6b1FapGwSKL9MNZnPUt9R_wofo=s300",
          },
          urls: [
            {
              name: "External",
              url: "http://companioninabox.art",
            },
          ],
        },
        purchase: {
          timestamp: "2022-02-06T02:59:37Z",
          logLine: [
            {
              fromAddress: "0x3bb5cf9984f12aA0591A4cEca9C2b2Df8980d3eA",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "65000000000000000",
                pretty: "0.07",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
      tokenStandard: "ERC-721",
      symbol: "NPNFT",
      nft: {
        tokenID: "3964",
        title: "National Parks #3964",
        contractTitle: "National Parks NFT",
        media: {
          key: "Lnhr0OmA3n-VH7ixRzfsbQa0pSkWNoEtR4FsuaLIL_s",
          URI: "https://c.neevacdn.net/image/upload/xyz/Lnhr0OmA3n-VH7ixRzfsbQa0pSkWNoEtR4FsuaLIL_s.jpg",
          version: [
            {
              kind: "image",
              format: "jpg",
              width: 1720,
              height: 1960,
              numBytes: 252971,
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
            traitType: "Sky",
            value: "Morning Blue",
          },
          {
            traitType: "Earth",
            value: "H2o",
          },
          {
            traitType: "Parks",
            value: "Gates Of The Arctic",
          },
          {
            traitType: "Ambience",
            value: "Golden Hour",
          },
          {
            traitType: "Atmosphere",
            value: "Glare",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0x64Dc7F3624A1456A7BA52025FCFDDf428FFf92E0",
          symbol: "NPNFT",
          slug: "nationalparksnft",
          name: "National Parks NFT",
          description:
            "The first-ever national parks-themed NFT community • Discord Trivia and Webinars every 2 weeks • A community-led project for earth's most passionate outdoor enthusiasts • Supporting the National Parks Foundation\n\n• Community: https://discord.gg/HbCaQ5GWpC\n• Website: https://nationalparksnft.io\n\nNot affiliated with the US National Parks Service or any of its entities.",
          createdDate: "2022-01-29T01:00:54.768324Z",
          floorPrice: {
            pretty: "0.05",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--r3a4Y6gz--/https%3A//lh3.googleusercontent.com/2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ%3Ds2500?savepath=2iQ2v1RZvxKonL52e0JnEcBWFyFQ3ug-CZHyRzaksFPVVPqlz4VRxlgvWyUfnkR4ZXVnDY9h9UXWwXpOcSnb4twGW6iZVfcy4KLQ=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--PfoNdQaj--/https%3A//lh3.googleusercontent.com/ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA%3Ds300?savepath=ZLAVGLLO0OxhJX3a0JJvY4MU_cIk2ds3BXcf2tECzX82-PlQ-EJ5ZFB1rtdKCy3WYauVxL06DJhN_JSkXu-u6idZ-5d6vUlJdgL0twA=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/HbCaQ5GWpC",
            },
            {
              name: "External",
              url: "http://nationalparksnft.io",
            },
          ],
          socialMedia: [
            {
              network: "instagram",
              username: "nationalparks.nft",
            },
          ],
        },
        purchase: {
          timestamp: "2022-04-08T17:57:43Z",
          logLine: [
            {
              fromAddress: "0xB2560748ABDA7F837a1d01CFb660DbEEa2667198",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "48000000000000000",
                pretty: "0.05",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
      tokenStandard: "ERC-1155",
      symbol: "OPENSTORE",
      nft: {
        tokenID:
          "23443662500946835264283410846443095105284164377306294737980794877950453350401",
        title: "crypto-totem#3021",
        contractTitle: "OpenSea Shared Storefront",
        description:
          "Crypto totem is a collection of 5555 totems created with generative art on the Ethereum blockchain.",
        media: {
          key: "N_y_A-aq8uaINqEV0gJpjyA9a30KDx-OyosTblFSK-M",
          URI: "https://c.neevacdn.net/image/upload/xyz/N_y_A-aq8uaINqEV0gJpjyA9a30KDx-OyosTblFSK-M.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 512,
              height: 512,
              numBytes: 360592,
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
          contractAddress: "0x495f947276749Ce646f68AC8c248420045cb7b5e",
          symbol: "OPENSTORE",
          slug: "opensea-shared-storefront-v2",
          name: "OpenSea Shared Storefront",
          createdDate: "2020-12-02T17:40:53.50754Z",
          bannerImage: {
            key: "",
          },
          featuredImage: {
            key: "",
          },
        },
        purchase: {
          timestamp: "2022-03-19T20:13:53Z",
          logLine: [
            {
              fromAddress: "0x33D4a48b6E7821d61298c28AE97d4AbF25c1d810",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "19000000000000000",
                pretty: "0.02",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x4b18aeDb3F3C2D1aEfF974D6dCB41459B19A6A66",
      tokenStandard: "ERC-721",
      symbol: "MathFlowers",
      nft: {
        tokenID: "10",
        title: "MathFlowers #10",
        contractTitle: "MathFlowers",
        description:
          "Mathflowers - the most beautiful flowers on the Ethereum Blockchain. MathFlowers are one-of-a-kind work of art created with sophisticated algorithms and advanced image processing technology. They are unique as there a over a trillion possibilities, but only 10.000 will ever be minted. As each MathFlower has some characteristics, like coloring, number of repetitions, uniqueness, etc. some of them are rarer than others. Visit www.MathFlowers.art for more info",
        media: {
          key: "OU_23_CFWGwMxenVLpcvrUP0wcGiyTdx1u2xJxLGva4",
          URI: "https://c.neevacdn.net/image/upload/xyz/OU_23_CFWGwMxenVLpcvrUP0wcGiyTdx1u2xJxLGva4.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 500,
              height: 500,
              numBytes: 1163229,
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
          contractAddress: "0x4b18aeDb3F3C2D1aEfF974D6dCB41459B19A6A66",
          symbol: "MathFlowers",
          slug: "mathflowers",
          name: "MathFlowers",
          description:
            "Mathflowers - the most beautiful flowers on the Ethereum Blockchain. MathFlowers are one-of-a-kind work of art created with sophisticated algorithms and advanced image processing technology. They are unique as there a over a trillion possibilities, but only 333 will ever be minted. As each MathFlower has some characteristics, like coloring, number of repetitions, uniqueness, etc. some of them are rarer than others. Visit https://www.MathFlowers.art for more info or follow us on Twitter: http://twitter.com/MathFlowersNFT or join our Community on Discord https://discord.gg/BHEbRmrbkS",
          createdDate: "2021-04-08T09:44:24.130758Z",
          floorPrice: {
            pretty: "0.02",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s---CRs2Ka8--/https%3A//lh3.googleusercontent.com/N9lkE7bkNOaGS1GAh1e878flVnb0sF5wmVSGzC9fgPON9SYWN8FIlq8YF0MqKYBeCAdSHGo_1VnRuUn-loQ1RRDGJKN5PVjd-5oG7z0%3Ds2500?savepath=N9lkE7bkNOaGS1GAh1e878flVnb0sF5wmVSGzC9fgPON9SYWN8FIlq8YF0MqKYBeCAdSHGo_1VnRuUn-loQ1RRDGJKN5PVjd-5oG7z0=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--as4beZ3a--/https%3A//lh3.googleusercontent.com/NEjW9RqrRW_hAXi6hgRFW8yIKYyEG1VgqKXCjDx3aVXLmSPk2Q8YkNp40juAIUIP1G6b0lqYr2zBJynKSiAACt7dEctpMwuIpYLu0g%3Ds300?savepath=NEjW9RqrRW_hAXi6hgRFW8yIKYyEG1VgqKXCjDx3aVXLmSPk2Q8YkNp40juAIUIP1G6b0lqYr2zBJynKSiAACt7dEctpMwuIpYLu0g=s300",
          },
          urls: [
            {
              name: "Discord",
              url: "https://discord.gg/BHEbRmrbkS",
            },
            {
              name: "External",
              url: "https://www.MathFlowers.art",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "MathFlowersNFT",
            },
            {
              network: "medium",
              username: "MathFlowers",
            },
          ],
        },
        purchase: {
          timestamp: "2022-02-09T02:31:12Z",
          logLine: [
            {
              fromAddress: "0xbab64597e8d0eB511a356B56b8dc46C7b01097c5",
              toAddress: "0x5C62EcCd649076673DA39AD8E5b92dd263D5A1df",
              price: {
                value: "10000000000000000",
                pretty: "0.01",
                decimals: 18,
                symbol: "ETH",
                name: "Ether",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xAa9ae09510462cEBcfdCE50Cb900Fa83f38A23C0",
      tokenStandard: "ERC-1155",
      symbol: "STAMPU",
      nft: {
        tokenID: "17",
        title: "A Sakura Daze",
        contractTitle: "Stampu",
        description:
          "Finding nature within the city, embracing it, it gives you a moment to pause and appreciate things.",
        media: {
          key: "v5Vi1cqoxlU07H3fsAqaIIjwI50LHkxh4miTIaaiqcE",
          URI: "https://c.neevacdn.net/image/upload/xyz/v5Vi1cqoxlU07H3fsAqaIIjwI50LHkxh4miTIaaiqcE.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 1080,
              height: 1080,
              numBytes: 1937628,
            },
          ],
        },
        owner: {
          address: "0xAE9E33D5AAE9A20EC475FC57c7F19F62cDE7ad61",
          ens: [
            {
              pointsTo: "0xAE9E33D5AAE9A20EC475FC57c7F19F62cDE7ad61",
              expires: "0001-01-01T00:00:00Z",
            },
          ],
        },
        attributes: [
          {
            traitType: "Season",
            value: "Photography",
          },
          {
            traitType: "Theme",
            value: "Connection",
          },
          {
            traitType: "Artist",
            value: "Anocam",
          },
          {
            traitType: "Edition",
            value: "Silver",
          },
          {
            traitType: "Max Supply",
            value: "200",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0xAa9ae09510462cEBcfdCE50Cb900Fa83f38A23C0",
          symbol: "STAMPU",
          slug: "stampu",
          name: "Stampu",
          description:
            "Send messages, Stampu NFTs, and $ETH to your Twitter, Discord, NFT, DeFi, Metaverse friends \u0026 heroes who made our crypto journey possible\n \nHave you thanked them yet?",
          createdDate: "2021-09-21T05:01:28.659632Z",
          floorPrice: {
            pretty: "0.01",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--OshXfBjy--/https%3A//lh3.googleusercontent.com/HXF4Nhv3IT5J2YbxrQVN0W15dMzL08_VrtI8XDjWE2GFqlvPPW_eEoxH70yq__uOWCQ1Tt0vpFyzHN9lcy0MemUYc6LqWU5npGVE%3Ds2500?savepath=HXF4Nhv3IT5J2YbxrQVN0W15dMzL08_VrtI8XDjWE2GFqlvPPW_eEoxH70yq__uOWCQ1Tt0vpFyzHN9lcy0MemUYc6LqWU5npGVE=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--A82BBH8w--/https%3A//lh3.googleusercontent.com/QwsgeRoEqJzcMJOpciDr5MtPqdjZXmWTDvTTTs4a-PpH823nDDcSQXE9uRaP9ZEnRJXpNDYwKSZz430Zn1F3FnhOiDYPFXWf5YMFxa0%3Ds300?savepath=QwsgeRoEqJzcMJOpciDr5MtPqdjZXmWTDvTTTs4a-PpH823nDDcSQXE9uRaP9ZEnRJXpNDYwKSZz430Zn1F3FnhOiDYPFXWf5YMFxa0=s300",
          },
          urls: [
            {
              name: "External",
              url: "https://stampu.xyz",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "StampuNFT",
            },
          ],
        },
        purchase: {
          timestamp: "2022-07-08T14:05:23Z",
          logLine: [
            {
              fromAddress: "0x1347BA69eC9e93959eF03f233994dAE5e5c105f0",
              toAddress: "0xAE9E33D5AAE9A20EC475FC57c7F19F62cDE7ad61",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Web",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
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
          timestamp: "2022-06-06T03:30:41Z",
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
    },
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
          timestamp: "2022-05-19T04:02:06Z",
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
    },
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
          timestamp: "2022-05-19T00:53:34Z",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xFBBeBDc2e686f8D902E9eAD0444271bDfbAA948d",
      tokenStandard: "ERC-1155",
      symbol: "Alphabetty Doodlez",
      nft: {
        tokenID: "202",
        title: "AlphaBetty Doodle #202",
        contractTitle: "Alphabetty Doodlez",
        description:
          "[AlphaBetty Doodles](https://alphabettydoodles.link) is a vibrant character who helps children go through the alphabet in colourful style. Visit [Website](https://alphabettydoodles.link) and get your AlphaBetty Doodle.",
        media: {
          key: "tXk6K_rjS__efSZMYGu4E4akt5kh57RjthXSd7Tqqmo",
          URI: "https://c.neevacdn.net/image/upload/xyz/tXk6K_rjS__efSZMYGu4E4akt5kh57RjthXSd7Tqqmo.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 2000,
              height: 2000,
              numBytes: 439280,
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
            traitType: "Background",
            value: "Alphabetty Logo",
          },
          {
            traitType: "Body",
            value: "Yellow Flower Dress",
          },
          {
            traitType: "Hair",
            value: "Brown Low Bunches",
          },
          {
            traitType: "Cheek",
            value: "Doge",
          },
          {
            traitType: "Eye",
            value: "Eyelash",
          },
          {
            traitType: "Mouth",
            value: "Left Smile",
          },
          {
            traitType: "Item",
            value: "Key",
          },
        ],
        collection: {
          blockchain: {
            name: "Ethereum Mainnet",
            shortName: "Ethereum",
            chainID: "eip155:1",
            shortChainID: "1",
          },
          contractAddress: "0xFBBeBDc2e686f8D902E9eAD0444271bDfbAA948d",
          symbol: "Alphabetty Doodlez",
          name: "Alphabetty Doodlez",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-18T03:34:21Z",
          logLine: [
            {
              fromAddress: "0x4d549216f1dea86EA46aF3C8FEE24e787C131C01",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x7ED1fcB7DF1B71942dAbEf49A91D9D536EB27E3b",
      tokenStandard: "ERC-1155",
      symbol: "EtherHead",
      nft: {
        tokenID: "331",
        title: "EtherHead #331",
        contractTitle: "EtherHead",
        description:
          "TMint some Heads here: [EtherHead](https://etherhead.link). EtherHeads is the first 10k NFT collection from [Zsolt Kosa](https://etherhead.link). These unique portraits are a fusion between traditional avatars and abstract art. Link [Here](https://etherhead.link).",
        media: {
          key: "IPTC4afxQN2Ug0WrxhqZycgeJwat9vhrT3XSYn-gZQI",
          URI: "https://c.neevacdn.net/image/upload/xyz/IPTC4afxQN2Ug0WrxhqZycgeJwat9vhrT3XSYn-gZQI.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 2425,
              height: 3119,
              numBytes: 209328,
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
          contractAddress: "0x7ED1fcB7DF1B71942dAbEf49A91D9D536EB27E3b",
          symbol: "EtherHead",
          name: "EtherHead",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-15T08:45:19Z",
          logLine: [
            {
              fromAddress: "0x6490351260FA984BFE567615b12835f654484FCc",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x705bdf57443a671F6B478b46dBd1516E76dD57Aa",
      tokenStandard: "ERC-1155",
      symbol: "FlyFrogs",
      nft: {
        tokenID: "9",
        title: "Fly Frog #9",
        contractTitle: "FlyFrogs",
        description:
          "10,000 randomly generated frogs on the Ethereum blockchain. The future is amphibious, ribbit! The frogs are composed of 185+ hand-drawn assets across 6 traits. No two are exactly alike. Journey [Here](https://flyfrog.link)",
        media: {
          key: "uAPMmVPTO0D9yjRj_6WLNlkoKXUPB9hWxTwO8XvuoEA",
          URI: "https://c.neevacdn.net/image/upload/xyz/uAPMmVPTO0D9yjRj_6WLNlkoKXUPB9hWxTwO8XvuoEA.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 155534,
            },
          ],
        },
        owner: {
          address: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
          ens: [
            {
              pointsTo: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
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
          contractAddress: "0x705bdf57443a671F6B478b46dBd1516E76dD57Aa",
          symbol: "FlyFrogs",
          name: "FlyFrogs",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-06T09:02:59Z",
          logLine: [
            {
              fromAddress: "0x28C47d5B3F05450f51d14F71C7734A56dC2E6Ecd",
              toAddress: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x71A08A18bC6ba25d093e8b7347068bFAB3112E6a",
      tokenStandard: "ERC-1155",
      symbol: "FlyFrogs",
      nft: {
        tokenID: "1",
        title: "Fly Frog #1",
        contractTitle: "FlyFrogs",
        description:
          "10,000 randomly generated frogs on the Ethereum blockchain. The future is amphibious, ribbit! The frogs are composed of 185+ hand-drawn assets across 6 traits. No two are exactly alike. Journey [Here](https://flyfrog.link)",
        media: {
          key: "6WSmaBNXeDXLR7sCXD9KpgOdrBVhpMDAfzr9m7RYVYw",
          URI: "https://c.neevacdn.net/image/upload/xyz/6WSmaBNXeDXLR7sCXD9KpgOdrBVhpMDAfzr9m7RYVYw.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 275456,
            },
          ],
        },
        owner: {
          address: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
          ens: [
            {
              pointsTo: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
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
          contractAddress: "0x71A08A18bC6ba25d093e8b7347068bFAB3112E6a",
          symbol: "FlyFrogs",
          name: "FlyFrogs",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-06T08:58:02Z",
          logLine: [
            {
              fromAddress: "0x336279DE6b8ECb106E56EC89D9254eCcC40453cA",
              toAddress: "0x150EeE0Bd4C6943Dd4844684f5A532dd1d3C37F4",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x556654C90c80b4fedD12cdd7f84F66CA41851520",
      tokenStandard: "ERC-1155",
      symbol: "Spinal Foxes",
      nft: {
        tokenID: "813",
        title: "Spinal Foxes",
        contractTitle: "Spinal Foxes",
        description:
          "The human spine consists of 33 vertebrae, our project consists of 6,000 spinal foxes that will help people rebuild! Let Spinal Fox help others. Visit [Here](https://spinalfoxes.link) to find out more.",
        media: {
          key: "xkoNPM4rf42xUUBpR3MMHtmjPyHKVGqbsIsvl9ZH1PY",
          URI: "https://c.neevacdn.net/image/upload/xyz/xkoNPM4rf42xUUBpR3MMHtmjPyHKVGqbsIsvl9ZH1PY.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 130,
              height: 130,
              numBytes: 38813,
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
          contractAddress: "0x556654C90c80b4fedD12cdd7f84F66CA41851520",
          symbol: "Spinal Foxes",
          name: "Spinal Foxes",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-29T13:09:03Z",
          logLine: [
            {
              fromAddress: "0x7a6bAce23e58016C6CC3248F2B576577eD71adF4",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xC037a4d7Be66F604F2b528Ad2f4d3E6c95096384",
      tokenStandard: "ERC-1155",
      symbol: "Crypto Polar Bears",
      nft: {
        tokenID: "7",
        title: "PolarBear",
        contractTitle: "Crypto Polar Bears",
        description:
          "Polar Bear Club is a custom collection of 8,888 3D unique hand-drawn Crypto Polar Bears who live on the Ethereum network! Polar Bear Club is not only a piece of art but a token. Visit [Here](https://polarbears.in) to participate in presale now!",
        media: {
          key: "ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes",
          URI: "https://c.neevacdn.net/image/upload/xyz/ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 403458,
            },
          ],
        },
        owner: {
          address: "0x5F99FC2d2A98e0469689d3117e0F96bb5c640d88",
          ens: [
            {
              pointsTo: "0x5F99FC2d2A98e0469689d3117e0F96bb5c640d88",
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
          contractAddress: "0xC037a4d7Be66F604F2b528Ad2f4d3E6c95096384",
          symbol: "Crypto Polar Bears",
          name: "Crypto Polar Bears",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-29T06:14:39Z",
          logLine: [
            {
              fromAddress: "0x353224270c2C9a7eCcE7d8dBA98a61587da6F50a",
              toAddress: "0x5F99FC2d2A98e0469689d3117e0F96bb5c640d88",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xc0Ec5e46c144f6543864a60aB7a8cD1a3dE638d4",
      tokenStandard: "ERC-1155",
      symbol: "Bored Snakes Club",
      nft: {
        tokenID: "70",
        title: "Bored Snake Club",
        contractTitle: "Bored Snakes Club",
        description:
          "A collection of 3,333 unique Bored Snakes NFTs- unique digital collectibles on the Ethereum blockchain. Hold Your Bored Sanke Club (Card) NFT , and grants access to members-only benefits. Visit [Here](https://boredsnakesclub.com) to invest more.",
        media: {
          key: "PxOvGXnN__lbmCPY2zfi20AEFluj34j8BI4Y9zs2ADY",
          URI: "https://c.neevacdn.net/image/upload/xyz/PxOvGXnN__lbmCPY2zfi20AEFluj34j8BI4Y9zs2ADY.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 400,
              height: 400,
              numBytes: 66955,
            },
          ],
        },
        owner: {
          address: "0x3D1Af3A5f9539157fd24a354Fd19170aD45693DF",
          ens: [
            {
              pointsTo: "0x3D1Af3A5f9539157fd24a354Fd19170aD45693DF",
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
          contractAddress: "0xc0Ec5e46c144f6543864a60aB7a8cD1a3dE638d4",
          symbol: "Bored Snakes Club",
          name: "Bored Snakes Club",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-26T14:46:22Z",
          logLine: [
            {
              fromAddress: "0xC3793fe3943579a66d1c642bfdd620cB6524244B",
              toAddress: "0x3D1Af3A5f9539157fd24a354Fd19170aD45693DF",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xc2B5eBcc823Ff38d4DEcD8Aadbd2017900AEdC55",
      tokenStandard: "ERC-1155",
      symbol: "The Misfits Ape Society",
      nft: {
        tokenID: "31",
        title: "Misfits Ape Society",
        contractTitle: "The Misfits Ape Society",
        description:
          "Misfits Ape Society is a collection of 10,000 NFTs living in the Ethereum Blockchain and representing a society of people from around the globe who have trouble fitting into the status quo. Visit https://misfitsapesociety.live to participate in presale now!",
        media: {
          key: "N9IkCPyotnGkJQ5gS5xWzbBDjwpZdzlw2neLZE7eXDw",
          URI: "https://c.neevacdn.net/image/upload/xyz/N9IkCPyotnGkJQ5gS5xWzbBDjwpZdzlw2neLZE7eXDw.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 713,
              numBytes: 161734,
            },
          ],
        },
        owner: {
          address: "0x7d22aF94809C95324c81CbBcFd7C26C9d4B665d8",
          ens: [
            {
              pointsTo: "0x7d22aF94809C95324c81CbBcFd7C26C9d4B665d8",
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
          contractAddress: "0xc2B5eBcc823Ff38d4DEcD8Aadbd2017900AEdC55",
          symbol: "The Misfits Ape Society",
          name: "The Misfits Ape Society",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-05-16T23:18:06Z",
          logLine: [
            {
              fromAddress: "0xbEbc733C64DEBA1c494E5B01b89Ee16B5cAfd2C5",
              toAddress: "0x7d22aF94809C95324c81CbBcFd7C26C9d4B665d8",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x46FFCEe133E68E4c9b7Dff38E0dB98C0CEB5d5Bb",
      tokenStandard: "ERC-1155",
      symbol: "cPolarBear",
      nft: {
        tokenID: "20",
        title: "PolarBear",
        contractTitle: "cPolarBear",
        description:
          "Polar Bear Club is a custom collection of 8,888 3D unique hand-drawn Crypto Polar Bears who live on the Ethereum network! Polar Bear Club is not only a piece of art but a token. Visit https://polarbears.in to participate in presale now!",
        media: {
          key: "ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes",
          URI: "https://c.neevacdn.net/image/upload/xyz/ax18RGdwNAWIsEhY8RpEfejc5yfzRYABQRTWyiIPCes.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 403458,
            },
          ],
        },
        owner: {
          address: "0x3a7bd05287CDAB1d7124957d8274371CbC2561ED",
          ens: [
            {
              pointsTo: "0x3a7bd05287CDAB1d7124957d8274371CbC2561ED",
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
          contractAddress: "0x46FFCEe133E68E4c9b7Dff38E0dB98C0CEB5d5Bb",
          symbol: "cPolarBear",
          name: "cPolarBear",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-26T02:54:22Z",
          logLine: [
            {
              fromAddress: "0x4177c6568322eF1206342bAbDF558b041DAEC022",
              toAddress: "0x3a7bd05287CDAB1d7124957d8274371CbC2561ED",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xBa0980ABbE2BdD2fD8eD956718e619271aD26Da4",
      tokenStandard: "ERC-1155",
      symbol: "pLobstar",
      nft: {
        tokenID: "6",
        title: "Lobstar",
        contractTitle: "pLobstar",
        description:
          "The Lobstars is a collection of 7777 lobster portraits by British contemporary artist, Philip Colbert, often referred to as ‘the godson of Andy Warhol’. Visit https://thelobstar.link to participate in presale now!",
        media: {
          key: "TDjFmHhPdRcCNRchIdjVa4hoyKHVr9rRfOZEKSmltGs",
          URI: "https://c.neevacdn.net/image/upload/xyz/TDjFmHhPdRcCNRchIdjVa4hoyKHVr9rRfOZEKSmltGs.png",
          version: [
            {
              kind: "image",
              format: "png",
              width: 600,
              height: 600,
              numBytes: 404454,
            },
          ],
        },
        owner: {
          address: "0xaCa2A46EA852F9558449AecaCE47131d2A58279B",
          ens: [
            {
              pointsTo: "0xaCa2A46EA852F9558449AecaCE47131d2A58279B",
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
          contractAddress: "0xBa0980ABbE2BdD2fD8eD956718e619271aD26Da4",
          symbol: "pLobstar",
          name: "pLobstar",
          createdDate: "0001-01-01T00:00:00Z",
        },
        purchase: {
          timestamp: "2022-04-23T00:54:15Z",
          logLine: [
            {
              fromAddress: "0x8916B27cBb3a2Ab84e63847C34964649B42e34A1",
              toAddress: "0xaCa2A46EA852F9558449AecaCE47131d2A58279B",
              price: {
                value: "0",
                pretty: "\u003c 0.01",
              },
            },
          ],
        },
        durability: "Decentralized",
      },
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0xaBBBDf5226F9b993e5e15a01fcb1b9c9A25987be",
      tokenStandard: "ERC-721",
      symbol: "HBEAT",
      nft: {
        tokenID: "115",
        title: "ramaswamy.eth's Heartbeat",
        contractTitle: "Heartbeat",
        description: "A heart beating 6 beats per minute across 2 chains.",
        media: {
          key: "BlPjV0QNTkYUF7zbirHfMxmx1-skjzupRhPDo8OdZkk",
          URI: "https://c.neevacdn.net/image/upload/xyz/BlPjV0QNTkYUF7zbirHfMxmx1-skjzupRhPDo8OdZkk.gif",
          version: [
            {
              kind: "image",
              format: "gif",
              width: 350,
              height: 350,
              numBytes: 1746182,
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
            traitType: "address",
            value: "0x5c62eccd649076673da39ad8e5b92dd263d5a1df",
          },
          {
            traitType: "Active Network Count",
            value: "2",
          },
          {
            traitType: "Beats Per Minute",
            value: "6",
          },
          {
            traitType: "Ethereum Total Transactions",
            value: "31",
          },
          {
            traitType: "Ethereum Transactions Last Week",
            value: "2",
          },
          {
            traitType: "Ethereum Transactions Last Month",
            value: "5",
          },
          {
            traitType: "Polygon Total Transactions",
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
          contractAddress: "0xaBBBDf5226F9b993e5e15a01fcb1b9c9A25987be",
          symbol: "HBEAT",
          slug: "heartbeat-metagame",
          name: "Heartbeat",
          description:
            "A beating heart based on your on-chain activity. \u003cbr\u003e\u003cbr\u003e Part of **The Metagame**. Follow along on twitter [@The_Metagame](https://twitter.com/the_metagame). Mint one via [themetagame.xyz](https://www.themetagame.xyz) ",
          createdDate: "2022-01-27T20:58:38.405299Z",
          bannerImage: {
            key: "",
          },
          featuredImage: {
            key: "",
          },
          urls: [
            {
              name: "External",
              url: "https://heartbeat.themetagame.xyz",
            },
          ],
        },
        purchase: {
          timestamp: "2022-01-29T01:48:56Z",
          logLine: [
            {
              fromAddress: "0x0000000000000000000000000000000000000000",
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
    },
    {
      blockchain: {
        name: "Ethereum Mainnet",
        shortName: "Ethereum",
        chainID: "eip155:1",
        shortChainID: "1",
      },
      contractAddress: "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
      tokenStandard: "ERC-721",
      symbol: "PROOF",
      nft: {
        tokenID: "302",
        title: "PROOF Collective",
        contractTitle: "PROOF Collective",
        media: {
          key: "VMzPNAzTeinR0gaCrZzL3SevHeTvXnBvB3716hLSv1Q",
          URI: "https://c.neevacdn.net/image/upload/xyz/VMzPNAzTeinR0gaCrZzL3SevHeTvXnBvB3716hLSv1Q.jpg",
          version: [
            {
              kind: "image",
              format: "jpg",
              width: 512,
              height: 512,
              numBytes: 55704,
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
          contractAddress: "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
          symbol: "PROOF",
          slug: "proof-collective",
          name: "PROOF Collective",
          description:
            "A private group of 1000 dedicated NFT collectors and artists. Membership to the collective and all of the benefits come from holding the PROOF Collective NFT.",
          createdDate: "2021-12-08T16:15:41.074289Z",
          floorPrice: {
            pretty: "73.00",
          },
          bannerImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--2Ny6k4Kd--/https%3A//lh3.googleusercontent.com/B0HkqNeqCSqEilUzeg6KndcAoKAv6C7znFMq7--xzXvev6fOUeLmprVVitfoZ2xuWs0h5Vt7k4jj-8DG-GyB12jRFlkiZEaqjyjWiBI%3Ds2500?savepath=B0HkqNeqCSqEilUzeg6KndcAoKAv6C7znFMq7--xzXvev6fOUeLmprVVitfoZ2xuWs0h5Vt7k4jj-8DG-GyB12jRFlkiZEaqjyjWiBI=s2500",
          },
          featuredImage: {
            key: "",
            URI: "https://c.neevacdn.net/image/fetch/s--Jm1yI4xc--/https%3A//lh3.googleusercontent.com/uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8%3Ds300?savepath=uKX9nuMgFMvSXVH-m11abul1YKW1GxiDcKQ2gRlCDJAhZ61i20lJlwi0aGLaRTNk-r9vveXjOvMYDTvODz236PtcYGoyyLHLJ5hLd_8=s300",
          },
          urls: [
            {
              name: "External",
              url: "https://collective.proof.xyz",
            },
          ],
          socialMedia: [
            {
              network: "twitter",
              username: "proof_xyz",
            },
          ],
        },
        purchase: {
          timestamp: "2021-12-11T19:28:57Z",
          logLine: [
            {
              fromAddress: "0x0000000000000000000000000000000000000000",
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
    },
  ],
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
      timestamp: "2022-06-12T14:39:55Z",
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
      timestamp: "2022-06-12T14:28:44Z",
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
      timestamp: "2022-06-12T14:24:39Z",
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
      timestamp: "2022-05-21T03:20:06Z",
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
      timestamp: "2022-03-31T20:58:30Z",
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
      timestamp: "2021-11-03T14:24:19Z",
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
  ],
};

const Wallet: NextPage = () => {
  const hasENS =
    Array.isArray(wallet.ens) && wallet.ens[0] && wallet.ens[0].name;

  let nfts;
  if (Array.isArray(wallet.recentTokens) && wallet.recentTokens.length) {
    nfts = (
      <>
        <SectionTitle>Recent Purchases</SectionTitle>
        <Section>
          {wallet.recentTokens.map((token) => {
            const nft = token.nft;
            if (!nft) {
              return null;
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
            );
          })}
        </Section>
      </>
    );
  }

  let transactions;

  if (wallet.history) {
    transactions = (
      <>
        <SectionTitle>Recent transactions</SectionTitle>
        <Section>
          {wallet.history.map((history) => {
            const historyTimestamp = DateTime.fromISO(
              history.timestamp
            ).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Section>
      </>
    );
  }
  return (
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
          {transactions}
          {nfts}
        </div>
      </main>
    </div>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle(props: SectionTitleProps) {
  return (
    <h1 className="text-2xl font-normal mb-4 text-gray-600">
      {props.children}
    </h1>
  );
}

interface SectionProps {
  children: React.ReactNode;
}

function Section(props: SectionProps) {
  return (
    <div className="rounded-lg shadow-xl mb-8 border border-slate-100 grid grid-cols-1 divide-y divide-slate-100">
      {props.children}
    </div>
  );
}

export default Wallet;
