import { FC } from "react";
import Logo from "../layout/logo";
import Link from "next/link";

const RegisterSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center pb-12">
          <Logo />
        </div>
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
