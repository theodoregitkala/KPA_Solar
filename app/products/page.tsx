import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Kit Solaire Balcon",
    price: "599€",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    description: "Kit complet pour balcon avec panneau solaire 400W. Idéal pour les petits espaces.",
    features: [
      "Panneau solaire 400W",
      "Micro-onduleur inclus",
      "Support de fixation balcon",
      "Câbles et connecteurs",
    ],
  },
  {
    id: 2,
    name: "Kit Solaire Terrasse",
    price: "899€",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80",
    description: "Installation solaire optimisée pour terrasse 600W. Performance et discrétion.",
    features: [
      "Panneau solaire 600W",
      "Micro-onduleur optimisé",
      "Structure autoportante",
      "Système de monitoring",
    ],
  },
  {
    id: 3,
    name: "Kit Solaire Jardin",
    price: "1299€",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    description: "Solution complète pour jardin avec stockage 800W. Maximisez votre autonomie.",
    features: [
      "Panneau solaire 800W",
      "Batterie de stockage",
      "Structure sur pied",
      "Application de suivi",
    ],
  },
];

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold">Nos Produits</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Découvrez notre gamme de kits solaires adaptés à tous les espaces et budgets.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardContent className="flex flex-1 flex-col p-6">
              <h2 className="mb-2 text-2xl font-bold">{product.name}</h2>
              <p className="mb-4 text-muted-foreground">{product.description}</p>
              <ul className="mb-6 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold">{product.price}</span>
                <Link href={`/products/${product.id}`}>
                  <Button>Commander</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}