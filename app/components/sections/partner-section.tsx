import Image from "next/image";
import { FC } from "react";

const PartnerSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-6">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-fuchsia-400">
          I nostri partners
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Collaboriamo con artisti, locali ed esperti del settore per offrirti
          solo il meglio. Scopri chi rende possibile tutto questo.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <Image
            src={"/The_One.webp"}
            alt=""
            className="mx-auto"
            width={500}
            height={500}
          />
          <p className="my-3">San Fior</p>
        </div>
        <div className="text-center">
          <Image
            src={"/galloway.webp"}
            alt=""
            className="mx-auto"
            width={500}
            height={500}
          />
          <p className="my-3">Bassano del Grappa</p>
        </div>
        <div className="text-center">
          <Image
            src={"/galivm.webp"}
            alt=""
            className="mx-auto"
            width={500}
            height={500}
          />
          <p className="my-3">Vittorio Veneto</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
