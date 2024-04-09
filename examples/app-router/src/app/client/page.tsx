'use client';

import { protectPage } from '@monocloud/nextjs-auth/client';

export default protectPage(function ClientSide({ user }) {
  return (
    <div className="mt-5 ml-5">
      <h1 className="text-2xl font-bold mb-4">Client</h1>
      <h2 className="text-xl font-semibold mb-2">User Profile:</h2>
      <pre className="text-sm">{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  );
});
