import React from "react"

import { SDKProductTypes, StyleConfig, Stytch } from "@stytch/stytch-react"

const loginOrSignupViewConfig = {
  products: [SDKProductTypes.crypto],
}

const sdkStyle: StyleConfig = {
  fontFamily: '"Helvetica New", Helvetica, sans-serif',
  primaryColor: "#19303d",
  primaryTextColor: "#090909",
  hideHeaderText: true,
}
/**
 * Login returns a prefigured Stytch SDK web3 login widget
 */
export default function Login() {
  return <Stytch loginOrSignupView={loginOrSignupViewConfig} style={sdkStyle} />
}
