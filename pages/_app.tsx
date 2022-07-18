import "../styles/globals.css"
import { StytchProvider, initStytch } from "@stytch/stytch-react"
import type { AppProps } from "next/app"
import Head from "next/head"
import Script from "next/script"

const stytch = initStytch(process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN || "")

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://js.stytch.com/stytch.js"
        strategy="beforeInteractive"
      />
      <StytchProvider stytch={stytch}>
        <Component {...pageProps} />
      </StytchProvider>
    </div>
  )
}

export default MyApp
