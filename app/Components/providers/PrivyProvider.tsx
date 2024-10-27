'use client';

import { PrivyProvider as Provider } from '@privy-io/react-auth';
import { holesky, mainnet, morphHolesky, sepolia } from 'viem/chains';

interface PrivyProviderProps {
  children: React.ReactNode;
}

export default function PrivyProvider({ children }: PrivyProviderProps) {
  return (
    <Provider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ["wallet", "google"],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          showWalletLoginFirst: false,
          logo: 'https://morph.ghost.io/content/images/2024/09/Morph.logo_Horizontal_Green.png',
        },
         // Create embedded wallets for users who don't have a wallet
         embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: morphHolesky,
        supportedChains: [morphHolesky, sepolia, mainnet, holesky]
      }}
    >
      {children}
    </Provider>
  );
}