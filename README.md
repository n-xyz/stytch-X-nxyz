# STYTCH X nxyz

This is a collaboration to show an example of what [Stytch's](https://stytch.com/) Web3 auth and [nxyz's](https://n.xyz/) blockchain data API can do.

This is an example wallet viewer app that authenticates a user with [Stytch's web3 login SDK](https://stytch.com/docs/sdks/javascript-sdk#crypto-wallets_ui-components) and displays the user's Ethereum wallet. It leverages n.xyz's wallet API to show the most recent NFTs the user got and any recent transactions they may have made.

Some things to notice about the demo:

- ⛓ The data is from the Ethereum blockchain
- ⚡️ It takes a few hundred milliseconds to retrieve all of the wallet data
- 📦 The API provides more data that the demo is displaying

nxyz is a startup that makes reading blockchains as easy as a api call and as fast as search.
You can learn more about nxyz at our website [n.xyz](https://n.xyz/) or in our [api documentation](https://docs.n.xyz/).

This demo was made in next.js with Vercel so you can try out the Demo here:
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
to fork the github repo and have a vercel site made for it.

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
