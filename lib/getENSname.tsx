import { ENS } from "@neevaco/xyzapi"

export default function getEnsName(ens: ENS[], address: string): string {
  let name = address.toLowerCase()
  if (Array.isArray(ens) && ens.length > 0) {
    const primary = ens.find((ensName) => {
      return ensName.isPrimary
    })
    if (primary && primary.name) {
      name = maybeAddEth(primary.name)
    } else if (ens[0].name) {
      name = maybeAddEth(ens[0].name)
    }
  }
  return name
}

function maybeAddEth(ens: string): string {
  if (ens.indexOf(".") >= 0) {
    return ens
  }
  return `${ens}.eth`
}
