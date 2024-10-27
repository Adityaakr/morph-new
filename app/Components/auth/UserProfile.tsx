'use client';

import { usePrivy } from '@privy-io/react-auth';

export default function UserProfile() {
  const { user, ready } = usePrivy();

  if (!ready) return null;

  return user ? (
    <div className="p-6 rounded-lg shadow text-center font-bold text-green-400 text-3xl">
      <p className='m-5'>Wallet Address: {user.wallet?.address}</p>
      {user.email && <p>Email: {String(user.email)}</p>}
    </div>
  ) : null;
}
