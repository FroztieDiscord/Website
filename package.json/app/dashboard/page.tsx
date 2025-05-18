import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect('/api/auth/login');

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Welcome, {session.user.username}</h2>
      <p className="mb-4">Choose a subscription to unlock roles and exclusive content.</p>
      <a href="/subscribe">
        <Button>View Subscription Tiers</Button>
      </a>
    </div>
  );
}