# STYTCH X nxyz

This is a collaboration to show an example of what [Stytch's](https://stytch.com/) Web3 auth and [nxyz's](https://n.xyz/) blockchain data API can do.

This wallet viewer app authenticates a user with [Stytch's web3 login SDK](https://stytch.com/docs/sdks/javascript-sdk#crypto-wallets_ui-components) and displays the user's Ethereum wallet. It leverages nxyz's wallet API to show the users' most recent NFTs and transactions.

Some things to notice about the demo:

- ⛓ The data is from the Ethereum blockchain
- ⚡️ It takes a few hundred milliseconds to retrieve all of the wallet data
- 📦 The API provides more data that the demo is displaying

nxyz helps developers ship faster for the first billion web3 users. Our multi-chain API turns reading blockchains into real-time performant data streams for any engineer. Retrieve detailed data across wallets, transactions, NFTs, and smart contracts with both on and off-chain information.
You can learn more about nxyz at our website [n.xyz](https://n.xyz/) or in our [API documentation](https://docs.n.xyz/).

This demo was made in Next.js with Vercel. You can try out the demo at [https://stytch-x-nxyz.vercel.app/](stytch-x-nxyz.vercel.app).
https://stytch-x-nxyz.vercel.app/

## Prerequisites

To run this demo locally you need 2 things:

- a stytch public API token
- a nxyz API key

### Setup Stytch

After signing up for Stytch, you'll need a `public_token`. You can find these in the [API keys tab](https://stytch.com/dashboard/api-keys).

Put this value in the `.env.template` file for the Stytch key. Example:

```
NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN="public-token-test-3333333-3333-3333-3333-3333333333"
```

### Get nxyz api key

Click this link and copy the demo key into your `.env.template` file for the nxyz key and
use the proper host for the api calls you make per the [docs](https://docs.n.xyz/).

[Click here for Demo nxyz API key](https://share.1password.com/s#PE8aY4siBHZo5-fOyCk8obxbewXx5DwuxI2vsAw18Xg)

Example:

```
NXYZ_API_KEY="nsihcusd79s8hcd8hidjc"
NXYZ_API_HOST="https://api.n.xyz"
```

Once you've gathered these values, add them to a new .env.local file. Example:

```bash
cp .env.template .env.local
# Replace your keys in new .env.local file`
```

## How to run your own copy on Vercel

use this link + a stytch public api token + a nxyz api key
to fork the GitHub repo and have a Vercel site made for it.

once the site is deployed you will want to [add the api keys to vercel using their website GUI](https://vercel.com/docs/concepts/projects/environment-variables#development-environment-variables).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneevaco%2Fstytch-X-nxyz)

## How to run locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo.

## Learn More on Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
