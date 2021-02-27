require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn public install clip swift tribe'; 
let testAccounts = [
"0x2624a28c306c6bb6f08b0d152ba21495bbe5b1ce9c099a9dec17b66655200046",
"0xff37c0575b37453ad713e4d6b61e8c345bbbeffc97f69473c5e0b49e2ee31f26",
"0x130a024895928d78ce907a382e8404d99604f1fc6fb4891eddbce39f0ceef9d1",
"0xe6c71ce8950338bc2cf88bbe1e4e999032453ba8d23a9fefd219e5c807185714",
"0x8faf663b3fa3217b748faa71707d5e42dc40ea8a5861a5164ec18334973c0ba7",
"0x91548aeb5b86ed28f5b205afb2d70713001e32166d606e914c820753cf8cdd38",
"0x7963a0039cf31d8283c87d59d6549ce94268271baa4709cd68c8f44a7c2d71c6",
"0x3a61a4d6a3c663da6b9e971976da0d5615dc923cdcb1586c998f5ce314a9218e",
"0x8434c0c75838f2405628d4207a56836eedf928f9d267cf1de616c87a47547837",
"0x3ca45fe83286a52973b040065ffee2f465a9739d4649839c316fbdada48b5bed"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
