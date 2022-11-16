import axios from "axios";

export const getAPY = async (): Promise<{
  stalk: string;
  seeds: string;
}> => {
  try {
    const data = await axios.post(
      "https://graph.node.bean.money/subgraphs/name/beanstalk",
      {
        operationName: "LatestAPY",
        variables: {},
        query:
          "query LatestAPY {\n  siloYields(first: 1, orderBy: season, orderDirection: desc) {\n    id\n    season\n    twoSeedBeanAPY\n    twoSeedStalkAPY\n    fourSeedBeanAPY\n    fourSeedStalkAPY\n    beansPerSeasonEMA\n    __typename\n  }\n}",
      }
    );
    return {
      seeds: (
        parseFloat(data?.data?.data?.siloYields[0].twoSeedBeanAPY) * 100
      ).toFixed(1),
      stalk: (
        parseFloat(data?.data?.data?.siloYields[0].twoSeedStalkAPY) * 100
      ).toFixed(1),
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};
