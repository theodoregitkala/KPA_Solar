"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold">Contactez-nous</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Une question ? Un projet ? Notre équipe est là pour vous aider.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@solarista.fr</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <p className="text-muted-foreground">01 23 45 67 89</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Adresse</h3>
                <p className="text-muted-foreground">
                  123 Avenue du Soleil
                  <br />
                  75001 Paris, France
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}