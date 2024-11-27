import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, Info } from "lucide-react";

const regions = [
  {
    name: "Île-de-France",
    subsidy: "jusqu'à 1300€",
    conditions: "Pour les installations < 3kW",
    link: "#",
  },
  {
    name: "Occitanie",
    subsidy: "jusqu'à 1500€",
    conditions: "Pour les résidents principaux",
    link: "#",
  },
  {
    name: "Nouvelle-Aquitaine",
    subsidy: "jusqu'à 1200€",
    conditions: "Selon conditions de ressources",
    link: "#",
  },
  {
    name: "Auvergne-Rhône-Alpes",
    subsidy: "jusqu'à 1000€",
    conditions: "Pour les installations éligibles",
    link: "#",
  },
];

export default function Subsidies() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold">Subventions Disponibles</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Découvrez les aides financières disponibles dans votre région pour votre projet solaire.
        </p>
      </div>

      <div className="mb-16">
        <Card className="bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-primary" />
              <div>
                <h2 className="mb-2 text-xl font-semibold">À savoir</h2>
                <p className="text-muted-foreground">
                  Les subventions varient selon votre région et votre situation. Contactez-nous pour une
                  estimation personnalisée des aides auxquelles vous pouvez prétendre.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {regions.map((region) => (
          <Card key={region.name}>
            <CardContent className="p-6">
              <Euro className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{region.name}</h3>
              <p className="mb-2 text-2xl font-bold text-primary">{region.subsidy}</p>
              <p className="mb-4 text-sm text-muted-foreground">{region.conditions}</p>
              <Button variant="outline" className="w-full" asChild>
                <a href={region.link}>En savoir plus</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}