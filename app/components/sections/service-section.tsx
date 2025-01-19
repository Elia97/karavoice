"use client";

import { FC } from "react";
import { Mic, Headphones, Music } from "lucide-react";
import Link from "next/link";
import ServiceCard from "../cards/service-card";

const ServiceSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12" id="events">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-semibold">
          Cerca l&apos;Evento che Vuoi
        </h2>
        <p className="mb-8 text-lg">
          Scegli la tipologia di evento che meglio si adatta a te e ai tuoi
          amici per rendere ogni occasione speciale.
        </p>
        <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
          <Link href={"/karaoke"}>
            <ServiceCard
              title="Karaoke"
              description="Canta a squarciagola con amici e sconosciuti nelle nostre sale."
              icon={Mic}
            />
          </Link>
          <Link href={"/dj-set"}>
            <ServiceCard
              title="DJ Set"
              description="Vivi i migliori beat dei più grandi DJ in un'atmosfera elettrizzante."
              icon={Headphones}
            />
          </Link>
          <Link href={"/live-music"} className="md:col-span-2 lg:col-span-1">
            <ServiceCard
              title="Live Music"
              description="Goditi performance intime di musicisti talentuosi di diversi generi."
              icon={Music}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
