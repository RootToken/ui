import { TokenValue } from "@beanstalk/sdk";

export const displayBN = (
  v: TokenValue,
  formatDecimals: number = 2
): string => {
  const pow = 10**formatDecimals;
  return (
    Math.floor(parseFloat(v.toHuman()) * (pow)) /
    (pow)
  ).toLocaleString("en-US", {
    maximumFractionDigits: formatDecimals,
  });
};
