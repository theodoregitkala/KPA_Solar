import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Battery, PiggyBank, Leaf } from "lucide-react";
import ProductShowcase from "@/components/home/product-showcase";
import HowItWorks from "@/components/home/how-it-works";
import Newsletter from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            L'énergie solaire accessible à tous
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Découvrez nos mini-installations solaires flexibles et faciles à installer.
            La solution idéale pour les propriétaires et locataires.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products">
              <Button size="lg">Découvrir nos produits</Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Comment ça marche
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Pourquoi choisir Solarista ?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sun,
                title: "Installation facile",
                description: "Montage DIY simple et rapide, sans expertise requise",
              },
              {
                icon: Battery,
                title: "Économies immédiates",
                description: "Réduisez votre facture d'électricité dès le premier jour",
              },
              {
                icon: PiggyBank,
                title: "Rentabilité rapide",
                description: "Retour sur investissement en quelques années",
              },
              {
                icon: Leaf,
                title: "Écologique",
                description: "Contribuez à la transition énergétique",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <benefit.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductShowcase />
      <HowItWorks />
      <Newsletter />
    </>
  );
}