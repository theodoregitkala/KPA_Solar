import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Package2, Wrench, Sun, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Package2,
    title: "1. Commandez votre kit",
    description: "Choisissez le kit adapté à vos besoins et votre espace. Nos experts vous guident dans la sélection du matériel optimal pour votre situation.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
  },
  {
    icon: Wrench,
    title: "2. Installation facile",
    description: "Suivez notre guide d'installation détaillé. Pas besoin d'être un expert, nos kits sont conçus pour être installés facilement en quelques heures.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
  },
  {
    icon: Sun,
    title: "3. Branchez et produisez",
    description: "Une fois installé, connectez simplement votre système à votre réseau électrique. Commencez immédiatement à produire votre propre énergie solaire.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
  },
  {
    icon: Sparkles,
    title: "4. Profitez des économies",
    description: "Réduisez votre facture d'électricité dès le premier jour. Suivez votre production et vos économies via notre application mobile.",
    image: "https://images.unsplash.com/photo-1626266061368-46a8632bac03?w=800&q=80"
  },
];

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold">Comment ça marche ?</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Découvrez comment installer et profiter de votre mini-installation solaire en quelques étapes simples.
        </p>
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <Card>
                <CardContent className="p-6">
                  <step.icon className="mb-4 h-12 w-12 text-primary" />
                  <h2 className="mb-4 text-2xl font-bold">{step.title}</h2>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}