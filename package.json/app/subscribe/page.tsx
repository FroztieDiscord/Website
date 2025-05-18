'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const tiers = [
  { name: 'Bronze', priceId: 'price_123', roleId: 'role_123', price: '$5/month' },
  { name: 'Silver', priceId: 'price_456', roleId: 'role_456', price: '$10/month' },
  { name: 'Gold', priceId: 'price_789', roleId: 'role_789', price: '$20/month' },
];

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);

  const subscribe = async (priceId: string, roleId: string) => {
    setLoading(true);
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId, roleId }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    setLoading(false);
  };

  return (
    <main className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Choose a Subscription Tier</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map(tier => (
          <div key={tier.name} className="border border-gray-700 rounded-2xl p-6 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">{tier.name}</h2>
            <p className="mb-4">{tier.price}</p>
            <Button disabled={loading} onClick={() => subscribe(tier.priceId, tier.roleId)}>
              Subscribe
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}