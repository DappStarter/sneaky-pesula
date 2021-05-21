require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict industry flame street name return noise huge hockey another army genius'; 
let testAccounts = [
"0xe92c0ef9eb597fc50d4cac0eb75b5310b51cd26b779a347f55ae250e7880e0f3",
"0x8428aa9f6988e22c7de5347897a2b7f87ba8acf1f9e4381e7f9937a960d89f86",
"0xe559219a666719deafdf5b5770fc99027f674f892c2d8277be0229b7f813bf60",
"0x392d14a18cbeaa20fe53a427c48030d435fccd1d8e1fd31e5352ed1cb4edb14c",
"0x5256f015d821ce773f4c22bde3bd37f1073227b90df35f2928bab4c22d89a2f8",
"0x1fd119524d3078c11ee25741e1a9aa46c0a7f63a007ba30be00bba00f1b47884",
"0xebca96357031e2dc0482023026ba9ea585491aae33b2791393156661ce948504",
"0xba080cc50abe32d940da8ba493e0e24a3ad5ba3a0de1f517b093d7e3ff790020",
"0xcf4c2a2931431ddf3a130cf555a8b96dc1b4b6e4d27dfe2504401904c838f075",
"0x3e1d3decd1a50e069a62de1ba2b610ab4270bdfe4f52d8d5a31c1dfb32000487"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

