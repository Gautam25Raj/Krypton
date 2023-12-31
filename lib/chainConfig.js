export const ChainConfig = [
  {
    factory: "0x3A470fCebd81A05d323d287fFB9f20631D39ee80",
    name: "Mumbai",
    chainId: 80001,
    rpc: `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
    explorer: "https://mumbai.polygonscan.com/",
    color: "#8836c6",
    symbol: "MATIC",
    decimals: 18,
    isTestnet: true,
    tokens: [
      {
        name: "MATIC",
        isNative: true,
        address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
        feedId: "MATICUSDT",
        icon: "polygon",
        nativeName: "Polygon",
        decimals: 18,
      },
      {
        name: "USDC",
        isNative: false,
        address: "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1",
        feedId: "USDCUSDT",
        icon: "usdc",
        nativeName: "USD Coin",
        decimals: 18,
      },
    ],
    pimlicoChainName: "mumbai",
    covalentChainName: "matic-mumbai",
  },
  {
    factory: "0xFe63A667419bD8c663637765100A38f8a3e5B4C9",
    name: "Base Goerli",
    chainId: 84531,
    rpc: `https://base-goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
    explorer: "https://goerli.basescan.org/",
    color: "#044ffd",
    symbol: "ETH",
    decimals: 18,
    isTestnet: true,
    tokens: [
      {
        name: "ETH",
        isNative: true,
        address: "00x44d627f900da8adac7561bd73aa745f132450798",
        feedId: "ETHUSDT",
        icon: "ethereum",
        nativeName: "Ethereum",
        decimals: 18,
      },
      {
        name: "USDC",
        isNative: false,
        address: "0x50d701659571cdf44d21b5da16460853fb52781a",
        feedId: "USDCUSDT",
        icon: "usdc",
        nativeName: "USD Coin",
        decimals: 18,
      },
    ],
    pimlicoChainName: "base-goerli",
    covalentChainName: "base-testnet",
  },
  {
    factory: "0x66D1FFCEeE03709e7850f14311a5d255bCF666bE",
    name: "Alfajores",
    chainId: 44787,
    rpc: `https://celo-alfajores.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
    explorer: "https://explorer.celo.org/alfajores/",
    color: "#f5f231",
    symbol: "CELO",
    decimals: 18,
    isTestnet: true,
    tokens: [
      {
        name: "CELO",
        isNative: true,
        address: "0x0f7f961648ae6db43c75663ac7e5414eb79b5704",
        feedId: "CELOUSDT",
        icon: "celo",
        nativeName: "Celo",
        decimals: 18,
      },
      {
        name: "cUSD",
        isNative: false,
        address: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        feedId: "USDCUSDT",
        icon: "cusd",
        nativeName: "Celo Dollar",
        decimals: 18,
      },
    ],
    pimlicoChainName: "celo-alfajores-testnet",
    covalentChainName: "celo-alfajores",
  },
  {
    factory: "0x66D1FFCEeE03709e7850f14311a5d255bCF666bE",
    name: "Scroll Sepolia",
    chainId: 534351,
    rpc: "https://rpc.ankr.com/scroll_sepolia_testnet",
    explorer: "https://sepolia-blockscout.scroll.io/",
    color: "#fad7aa",
    symbol: "ETH",
    decimals: 18,
    isTestnet: true,
    tokens: [
      {
        name: "ETH",
        isNative: true,
        address: "0x0f7f961648ae6db43c75663ac7e5414eb79b5704",
        feedId: "ETHUSDT",
        icon: "ethereum",
        nativeName: "Ethereum",
        decimals: 18,
      },
      {
        name: "USDC",
        isNative: false,
        address: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        feedId: "USDCUSDT",
        icon: "usdc",
        nativeName: "USD Coin",
        decimals: 18,
      },
    ],
    pimlicoChainName: "scroll-sepolia-testnet",
    covalentChainName: "scroll-sepolia-testnet",
  },
  {
    factory: "0x66D1FFCEeE03709e7850f14311a5d255bCF666bE",
    name: "Arb Goerli",
    chainId: 421613,
    rpc: `https://arbitrum-goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
    explorer: "https://goerli.arbiscan.io/",
    color: "#12AAFF",
    symbol: "AGOR",
    decimals: 18,
    isTestnet: true,
    tokens: [
      {
        name: "AGOR",
        isNative: true,
        address: "0x0f7f961648ae6db43c75663ac7e5414eb79b5704",
        feedId: "ARBUSDT",
        icon: "arbitrum",
        nativeName: "Arbitrum",
        decimals: 18,
      },
      {
        name: "USDC",
        isNative: false,
        address: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
        feedId: "USDCUSDT",
        icon: "usdc",
        nativeName: "USD Coin",
        decimals: 18,
      },
    ],
    pimlicoChainName: "arbitrum-goerli",
    covalentChainName: "arbitrum-goerli",
  },
];
