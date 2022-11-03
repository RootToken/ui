export function trimAddress(address: string, showSuffix: boolean = true) {
  return `${address.substring(0, 6)}${
    showSuffix ? `..${address.slice(-4)}` : ""
  }`;
}
