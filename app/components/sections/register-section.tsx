import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const RegisterSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-6 lg:py-12">
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        <Image
          src={"/karavoice-marica-mey.webp"}
          alt="karavoice-marica-mey"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="mb-4 text-4xl font-semibold">
            Registrati una volta, prenota senza sforzi
          </h2>
          <p className="mb-6 text-lg">
            La registrazione semplifica il processo di prenotazione salvando i
            tuoi dati. Non dovrai reinserire le informazioni ogni volta:
            registrati una sola volta e sei pronto!
          </p>
          <Link href={"/auth"}>
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r px-8 py-4 text-base font-medium text-white transition-all hover:scale-105 dark:from-fuchsia-950 dark:to-sky-950"
            >
              Registrati ora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
