import { Headphones, Mic, Music, Search } from "lucide-react";
import Link from "next/link";
import { Category } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default async function CategoriePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold">
          Errore durante il recupero delle categorie
        </h1>
      </div>
    );
  }

  const categories: Category[] = await res.json();

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Esplora le Categorie</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Trova eventi che corrispondono ai tuoi interessi tra le nostre diverse
          categorie
        </p>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cerca categorie..."
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="overflow-hidden hover:shadow-md transition-shadow py-0"
          >
            <div className="relative h-48">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">
                      {category.icon === "mic" ? (
                        <Mic />
                      ) : category.icon === "headphones" ? (
                        <Headphones />
                      ) : (
                        <Music />
                      )}
                    </span>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  <p className="text-white/80 text-sm">
                    {category.eventCount} eventi
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              <Link href={`/eventi?categoria=${category.name.toLowerCase()}`}>
                <Button className="w-full">Esplora {category.name}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
