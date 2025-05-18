import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">🔞 Age Verification</h1>
      <p className="mb-4">You must be 18+ to continue to this site.</p>
      <Button onClick={() => localStorage.setItem('age_verified', 'true')} asChild>
        <Link href="/dashboard">I am 18 or older</Link>
      </Button>
    </main>
  );
}