var TotosList = artifacts.require("./TotosList.sol");

module.exports = function(deployer) {
  deployer.deploy(TotosList);
};