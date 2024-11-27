"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Kit Solaire Balcon",
    price: "599€",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    description: "Kit complet pour balcon avec panneau solaire 400W",
  },
  {
    id: 2,
    name: "Kit Solaire Terrasse",
    price: "899€",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80",
    description: "Installation solaire optimisée pour terrasse 600W",
  },
  {
    id: 3,
    name: "Kit Solaire Jardin",
    price: "1299€",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
    description: "Solution complète pour jardin avec stockage 800W",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Nos produits phares</h2>
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="mx-2">
                  <CardContent className="p-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold">{product.price}</span>
                        <Link href={`/products/${product.id}`}>
                          <Button>En savoir plus</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}