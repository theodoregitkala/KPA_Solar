import { Card, CardContent } from "@/components/ui/card";
import { Package2, Wrench, Sun, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Package2,
    title: "1. Commandez votre kit",
    description: "Choisissez le kit adapté à vos besoins et votre espace",
  },
  {
    icon: Wrench,
    title: "2. Installation facile",
    description: "Suivez notre guide d'installation pas à pas",
  },
  {
    icon: Sun,
    title: "3. Branchez et produisez",
    description: "Connectez votre installation et commencez à produire",
  },
  {
    icon: Sparkles,
    title: "4. Profitez des économies",
    description: "Réduisez votre facture d'électricité dès le premier jour",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <step.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}