import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        La page que vous recherchez n'existe pas.
      </p>
      <Link href="/" className="mt-8">
        <Button>Retour à l'accueil</Button>
      </Link>
    </div>
  );
}