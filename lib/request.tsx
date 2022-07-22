import { Wallet } from "@neevaco/xyzapi/lib/typescript"

/**
 * sends a request to the nxyz API wallet endpoints
 * API wrapper and handles the API response.
 */
export default function request(
  walletAddress: string,
  blockchain = "ethereum"
): Promise<ServerSideProps> {
  return fetch(`/api/wallet/${walletAddress}?blockchain=${blockchain}`)
    .then((res) => res.json())
    .then((res: Wallet[]): Promise<ServerSideProps> => {
      if (res.length === 0) {
        return Promise.resolve({
          notFound: true,
          props: {},
        })
      }

      return Promise.resolve({
        notFound: false,
        props: {
          wallet: res[0],
        },
      })
    })
    .catch((err) => {
      if (err && err.status === 404) {
        return {
          notFound: true,
          props: {},
        }
      }

      console.error("Unable to fetch wallet", err)

      return {
        notFound: false,
        props: {},
      }
    })
}

interface Props {
  wallet?: Wallet
}

interface ServerSideProps {
  props: Props
  notFound: boolean
}
