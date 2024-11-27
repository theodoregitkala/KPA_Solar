"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscription réussie !",
      description: "Vous recevrez bientôt nos dernières actualités.",
    });
    setEmail("");
  };

  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Restez informé</h2>
          <p className="mb-8 text-muted-foreground">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités
            et offres spéciales.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">S'inscrire</Button>
          </form>
        </div>
      </div>
    </section>
  );
}