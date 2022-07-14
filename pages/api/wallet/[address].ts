import { Wallet, DefaultApiFactory } from "@neevaco/xyzapi/lib/typescript";
import type { NextApiRequest, NextApiResponse } from "next";

const basePath = process.env["NXYZ_API_HOST"];
const apiKey = process.env["NXYZ_API_KEY"];
const api = DefaultApiFactory({ basePath }, undefined, basePath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address: walletAddress, blockchain = "ethereum" } = req.query;

  if (typeof walletAddress !== "string" || typeof blockchain !== "string") {
    return res.status(400).end();
  }

  return api
    .apiV1WalletsWalletAddressGet(walletAddress, blockchain, {
      query: { apikey: apiKey },
    })
    .then((wallets: Wallet[]) => {
      return res.end(JSON.stringify(wallets));
    })
    .catch((err) => {
      res.status(err.status);
      res.end("[]");

      console.error("Unable to fetch wallet", err);

      return {
        notFound: false,
        props: {},
      };
    });
}