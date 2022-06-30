# anotherblock web3 test


## install

```
cd smart-contracts && yarn install
cd web && yarn install
```

## steps
* Finalize the tests in smart-contracts/test/lfg.test.ts
* Connect with metamask
* Connect to Rinkeby network
* Deployed contract address is found in smart-contracts/deployments/rinkeby/LFG.json
* Fetch current `gmCount` from contract on Rinkeby
* Trigger `gm` call from the app
* Listen to `Wagmi` event and only display the one connected to logged in user
- Install tailwind css in next.js project and do very basic styling


## recommendation
You are free to use any web3 library to help you out. In anotherblock we use `wagmi`, `ethers` and `rainbowkit`
