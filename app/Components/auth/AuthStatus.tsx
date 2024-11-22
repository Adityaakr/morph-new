'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function AuthButton() {
  const { login, logout, authenticated, ready } = usePrivy();

  if (!ready) return null;

  return (
    <button
      onClick={authenticated ? logout : login}
    >
    <p className='bg-green-700 text-white rounded-lg p-5'>  {authenticated ? 'Disconnect' : 'Connect Wallet'}</p>
    </button>
  );
}