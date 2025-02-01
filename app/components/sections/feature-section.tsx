"use client";

import { FC } from "react";
import { Mic, Headphones, Music } from "lucide-react";
import Link from "next/link";
import FeatureCard from "../cards/feature-card";

const FeatureSection: FC = () => {
  return (
    <section
      className="mx-auto max-w-screen-xl px-4 pb-6 pt-3 lg:pb-12"
      id="events"
    >
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-fuchsia-400">
          Cerca l&apos;Evento che Vuoi
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Sperimenta eventi su misura per te. Che tu voglia cantare, ballare o
          semplicemente ascoltare, troverai la serata perfetta per te e i tuoi
          amici.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
        <Link href={"/events"}>
          <FeatureCard
            title="Karaoke"
            description="Canta a squarciagola con amici e sconosciuti nelle nostre sale."
            icon={Mic}
          />
        </Link>
        <Link href={"/events"}>
          <FeatureCard
            title="DJ Set"
            description="Immergiti nel ritmo e vivi l'energia elettrizzante della pista."
            icon={Headphones}
          />
        </Link>
        <Link href={"/events"} className="md:col-span-2 lg:col-span-1">
          <FeatureCard
            title="Live Music"
            description="Goditi performance e assapora l'autenticità di un concerto dal vivo."
            icon={Music}
          />
        </Link>
      </div>
    </section>
  );
};

export default FeatureSection;
