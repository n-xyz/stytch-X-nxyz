import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StytchProvider, initStytch } from "@stytch/stytch-react";
import Script from "next/script";

const stytch = initStytch(process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN || "");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script
        src="https://js.stytch.com/stytch.js"
        strategy="beforeInteractive"
      />
      <StytchProvider stytch={stytch}>
        <Component {...pageProps} />
      </StytchProvider>
    </div>
  );
}

export default MyApp;
