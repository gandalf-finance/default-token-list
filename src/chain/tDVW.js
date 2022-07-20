const { default: axios } = require("axios");
const { isNFT } = require("../utils/reg");
const issueChainId = "tDVW";
const API = "https://wallet-test.aelf.io/api";
module.exports = async function getList() {
  try {
    const list = await axios(`${API}/contract/contracts?limit=1000&page=0`);
    return list.data.transactions
      .filter(
        ({ issue_chain_id, symbol }) =>
          issue_chain_id === issueChainId && !isNFT(symbol)
      )
      .map(({ issue_chain_id, name, decimals, symbol }) => ({
        name,
        symbol,
        address: symbol,
        chainId: issue_chain_id,
        decimals,
        logoURI: "",
      }));
  } catch (error) {
    return [];
  }
};
