import { FC } from "react";
import Link from "next/link";

const RegisterSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-md px-4 py-6 lg:py-12">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-semibold">
          Registrati una volta, prenota senza sforzi
        </h2>
        <p className="mb-8">
          Basta una sola registrazione per accedere a un mondo di serate uniche.
          Tieni i tuoi dati al sicuro e goditi un processo di prenotazione
          semplice e veloce.
        </p>
        <button
          type="button"
          className="rounded-lg bg-gradient-to-r from-fuchsia-300 to-sky-300 px-8 py-4 text-base font-medium transition-all duration-500 hover:scale-105 hover:bg-gradient-to-l dark:from-fuchsia-950 dark:to-sky-950"
        >
          <Link href={"/auth"}>Registrati ora</Link>
        </button>
      </div>
    </section>
  );
};

export default RegisterSection;
