import { Wallet, DefaultApiFactory } from "@nxyzinc/xyzapi"
import type { NextApiRequest, NextApiResponse } from "next"

const basePath = process.env.NXYZ_API_HOST
const apiKey = process.env.NXYZ_API_KEY
const api = DefaultApiFactory({ basePath }, undefined, basePath)

/**
 * Handler handles API requests to {this site's domain}/api/wallet/{wallet address}?blockchain=ethereum
 * it returns the response for the given wallet address and blockchain from the nxyz api
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address: walletAddress, blockchain = "ethereum" } = req.query

  if (typeof walletAddress !== "string" || typeof blockchain !== "string") {
    return res.status(400).end()
  }

  return api
    .apiV1WalletsWalletAddressGet(walletAddress, blockchain, {
      query: { apikey: apiKey },
    })
    .then((wallets: Wallet[]) => res.end(JSON.stringify(wallets)))
    .catch((err) => {
      res.status(err.status)
      res.end("[]")

      console.error("Unable to fetch wallet", err)

      return {
        notFound: false,
        props: {},
      }
    })
}
