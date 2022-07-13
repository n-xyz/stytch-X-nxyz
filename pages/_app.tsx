import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StytchProvider, initStytch } from "@stytch/stytch-react";
import Script from "next/script";

const stytch = initStytch(
  "public-token-test-a5dd8aa8-8f9c-47cd-8f81-3ab1e0fdcb43"
);

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
