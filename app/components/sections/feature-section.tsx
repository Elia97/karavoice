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
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="mb-4 text-4xl font-semibold">
          Cerca l&apos;Evento che Vuoi
        </h2>
        <p className="mb-8">
          Sperimenta eventi su misura per te. Che tu voglia cantare, ballare o
          semplicemente ascoltare, troverai la serata perfetta per te e i tuoi
          amici.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
        <Link href={"/karaoke"}>
          <FeatureCard
            title="Karaoke"
            description="Canta a squarciagola con amici e sconosciuti nelle nostre sale."
            icon={Mic}
          />
        </Link>
        <Link href={"/dj-set"}>
          <FeatureCard
            title="DJ Set"
            description="Vivi i migliori beat dei più grandi DJ in un'atmosfera elettrizzante."
            icon={Headphones}
          />
        </Link>
        <Link href={"/live-music"} className="md:col-span-2 lg:col-span-1">
          <FeatureCard
            title="Live Music"
            description="Goditi performance intime di musicisti talentuosi di diversi generi."
            icon={Music}
          />
        </Link>
      </div>
    </section>
  );
};

export default FeatureSection;
