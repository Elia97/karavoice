import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/types";
import { Mic, Headphones, Music } from "lucide-react";
import Link from "next/link";

export default async function CategorieSection() {
  const res = await fetch("http://localhost:3001/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Esplora per Categoria</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trova eventi che corrispondono ai tuoi interessi tra le nostre
            diverse categorie
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              href={`/eventi?categoria=${category.name}`}
              key={category.name}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-4xl mb-3">
                    {category.icon === "mic" ? (
                      <Mic />
                    ) : category.icon === "headphones" ? (
                      <Headphones />
                    ) : (
                      <Music />
                    )}
                  </div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.eventCount} eventi
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
