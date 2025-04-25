import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4 text-center mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Pronto a Scoprire Nuovi Eventi?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Registrati gratuitamente e inizia subito a esplorare gli eventi più
          interessanti vicino a te
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/auth?tab=register"}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:cursor-pointer"
            >
              Registrati Ora
            </Button>
          </Link>
          <Link href="/eventi">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10 hover:cursor-pointer"
            >
              Esplora Eventi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
