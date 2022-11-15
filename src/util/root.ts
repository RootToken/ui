import { TokenValue } from "@beanstalk/sdk";
import { ethers } from "ethers";
const PRECISION = TokenValue.fromBlockchain(ethers.utils.parseEther("1"), 18);

export const calculateRoot = (
    totalStalkFromDeposits: TokenValue,
    totalSeedsFromDeposits: TokenValue,
    totalBdvFromDeposits: TokenValue,
    rootTotalSupply: TokenValue,
    rootUnderlyingBdvBefore: TokenValue,
    rootStalkBefore: TokenValue,
    rootSeedsBefore: TokenValue,
    isDeposit: boolean
  ) => {
    try {
      const rootStalkAfter = rootStalkBefore.add(totalStalkFromDeposits);
      const rootSeedsAfter = rootSeedsBefore.add(totalSeedsFromDeposits);
      const rootUnderlyingBdvAfter = isDeposit
        ? rootUnderlyingBdvBefore.add(totalBdvFromDeposits)
        : rootUnderlyingBdvBefore.sub(totalBdvFromDeposits);

      if (rootTotalSupply.eq(0)) {
        return {
          amount: TokenValue.fromBlockchain(
            totalStalkFromDeposits.mul(1e8).toBlockchain(),
            18
          ),
          bdvRatio: TokenValue.fromHuman("1", 18),
          stalkRatio: TokenValue.fromHuman("1", 18),
          seedsRatio: TokenValue.fromHuman("1", 18),
          min: TokenValue.fromHuman("1", 18),
        };
      } else if (isDeposit) {
        const bdvRatio = PRECISION.mulDiv(
          rootUnderlyingBdvAfter,
          rootUnderlyingBdvBefore,
          "down"
        );
        const stalkRatio = PRECISION.mulDiv(
          rootStalkAfter,
          rootStalkBefore,
          "down"
        );
        const seedsRatio = PRECISION.mulDiv(
          rootSeedsAfter,
          rootSeedsBefore,
          "down"
        );

        // Root minting uses the minimum of the increase in bdv/stalk/seeds.
        const min = TokenValue.min(bdvRatio, stalkRatio, seedsRatio);
        const amount = rootTotalSupply
          .mulDiv(min, PRECISION, "down")
          .sub(rootTotalSupply);

        return {
          amount, // 18 (ROOT)
          bdvRatio, // 18 (PRECISION)
          stalkRatio, // 18 (PRECISION)
          seedsRatio, // 18 (PRECISION)
          min, // 18 (PRECISION)
        };
      }

      const bdvRatio = PRECISION.mulDiv(
        rootUnderlyingBdvAfter,
        rootUnderlyingBdvBefore,
        "up"
      );
      const stalkRatio = PRECISION.mulDiv(
        rootStalkAfter,
        rootStalkBefore,
        "up"
      );
      const seedsRatio = PRECISION.mulDiv(
        rootSeedsAfter,
        rootSeedsBefore,
        "up"
      );

      // Root burning uses the maximum of the decrease in bdv/stalk/seeds.
      const max = TokenValue.max(bdvRatio, stalkRatio, seedsRatio);
      const amount = rootTotalSupply.mulDiv(max, PRECISION).sub(rootTotalSupply);

      return {
        amount, // 18 (ROOT)
        bdvRatio, // 18 (PRECISION)
        stalkRatio, // 18 (PRECISION)
        seedsRatio, // 18 (PRECISION)
        max, // 18 (PRECISION)
      };
    } catch (err) {
      console.log(err);
    }
  };