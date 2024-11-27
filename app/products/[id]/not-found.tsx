import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Produit non trouvé</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Le produit que vous recherchez n'existe pas.
      </p>
      <Link href="/products" className="mt-8">
        <Button>Voir tous les produits</Button>
      </Link>
    </div>
  );
}