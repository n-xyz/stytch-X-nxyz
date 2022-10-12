import { useStytchLazy } from "@stytch/stytch-react"
import Image from "next/image"
import Link from "next/link"

import nxyzLogo from "../../public/nxyz-color.svg"
import plusIcon from "../../public/plus-color.svg"
import stytchLogo from "../../public/stytch-color.svg"
import styles from "../../styles/Home.module.css"

interface HeaderProps {
  signOut: boolean
}

export default function Header({ signOut }: HeaderProps) {
  const stytch = useStytchLazy()
  const onSignOut = async () => {
    await stytch.session.revoke()
  }
  return (
    <header className={styles.header}>
      <div className={styles.githubLink}>
        <Link href="https://github.com/neevaco/stytch-X-nxyz">
          <a target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Link>
      </div>
      <div>
        <Link href="https://stytch.com/">
          <a target="_blank" rel="noopener noreferrer">
            <Image src={stytchLogo} height={100} width={150} alt="stytch" />
          </a>
        </Link>
        <Image src={plusIcon} height={100} width={50} alt="" />
        <Link href="https://n.xyz/">
          <a
            className={styles.nxyzLogo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={nxyzLogo} height={100} width={120} alt="nxyz" />
          </a>
        </Link>
      </div>
      {signOut ? (
        <button type="button" className={styles.signOut} onClick={onSignOut}>
          Sign Out
        </button>
      ) : null}
    </header>
  )
}
