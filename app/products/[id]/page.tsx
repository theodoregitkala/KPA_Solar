"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";
import { Battery, Sun, Zap, Package, Tool } from "lucide-react";

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
    specifications: {
      "Puissance": "400W",
      "Dimensions": "1650 x 992 x 35mm",
      "Poids": "19kg",
      "Garantie": "25 ans",
    },
    includes: [
      "1x Panneau solaire 400W",
      "1x Micro-onduleur",
      "1x Kit de fixation balcon",
      "1x Kit de câblage complet",
      "1x Guide d'installation",
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
    specifications: {
      "Puissance": "600W",
      "Dimensions": "1956 x 992 x 35mm",
      "Poids": "23kg",
      "Garantie": "25 ans",
    },
    includes: [
      "1x Panneau solaire 600W",
      "1x Micro-onduleur optimisé",
      "1x Structure autoportante",
      "1x Système de monitoring",
      "1x Guide d'installation",
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
    specifications: {
      "Puissance": "800W",
      "Dimensions": "2384 x 1092 x 35mm",
      "Poids": "29kg",
      "Garantie": "25 ans",
    },
    includes: [
      "1x Panneau solaire 800W",
      "1x Batterie de stockage",
      "1x Structure sur pied",
      "1x Application de suivi",
      "1x Guide d'installation",
    ],
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    toast({
      title: "Produit ajouté au panier !",
      description: `${quantity}x ${product.name} ajouté(s) au panier`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-2xl font-bold text-primary">{product.price}</p>
            <p className="mt-4 text-muted-foreground">{product.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 rounded-md border p-2"
            />
            <Button onClick={handleAddToCart} className="flex-1">
              Ajouter au panier
            </Button>
          </div>

          <Card>
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-primary" />
                <span>Production optimale</span>
              </div>
              <div className="flex items-center gap-2">
                <Battery className="h-5 w-5 text-primary" />
                <span>Stockage efficace</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Installation rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <Tool className="h-5 w-5 text-primary" />
                <span>Support technique</span>
              </div>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="specs">
              <AccordionTrigger>Spécifications techniques</AccordionTrigger>
              <AccordionContent>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-muted-foreground">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="includes">
              <AccordionTrigger>Contenu du kit</AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}