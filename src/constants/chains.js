export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42,
};

export const routerAddress = new Map()
routerAddress.set(ChainId.ROPSTEN, "0xF401364ADf12BAc5d95583058445458a82e859D7")

export const wethAddress = new Map()
wethAddress.set(ChainId.ROPSTEN, "0xc778417E063141139Fce010982780140Aa0cD5Ab")

export const factoryAddress = new Map()
factoryAddress.set(ChainId.ROPSTEN, "0x37845Bc0c0FfA115746c2e77F50799101d1D791B")

