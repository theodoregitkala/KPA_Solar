import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    title: "Guide complet des mini-installations solaires",
    excerpt: "Découvrez tout ce qu'il faut savoir avant de se lancer dans l'aventure solaire...",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    date: "2024-02-15",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Les avantages du solaire pour les locataires",
    excerpt: "Comment profiter de l'énergie solaire même en location ? Voici nos conseils...",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    date: "2024-02-10",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Optimiser sa production solaire",
    excerpt: "Les meilleures pratiques pour maximiser le rendement de votre installation...",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80",
    date: "2024-02-05",
    readTime: "6 min",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold">Blog</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Découvrez nos derniers articles sur l'énergie solaire et les énergies renouvelables.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardContent className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>{post.readTime} de lecture</span>
              </div>
              <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
              <p className="mb-6 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-auto">
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full">
                    Lire la suite
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}