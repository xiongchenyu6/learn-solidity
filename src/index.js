var Web3 = require('web3');
var provider = 'https://thrumming-muddy-sun.rinkeby.discover.quiknode.pro/0af9c5f8fecc2e27608d1bbd54acd9da5a41a3ca/';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ",result);
});
