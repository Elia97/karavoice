import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container px-6 text-center mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">
          Pronto a Scoprire Nuovi Eventi?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
          Registrati gratuitamente e inizia subito a esplorare gli eventi più
          interessanti vicino a te.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth?tab=register">
            <Button
              size="lg"
              className="bg-primary text-background font-semibold hover:bg-primary/90 cursor-pointer"
            >
              Registrati Ora
            </Button>
          </Link>
          <Link href="/eventi">
            <Button
              variant="outline"
              size="lg"
              className="border border-white text-foreground hover:text-background font-semibold hover:bg-secondary cursor-pointer"
            >
              Esplora Eventi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
