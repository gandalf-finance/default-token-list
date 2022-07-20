const NFT_REG = /[A-Z]{2}[0-9]{9}$/;

function isNFT(symbol) {
  return NFT_REG.test(symbol);
}

module.exports = {
  isNFT,
};
