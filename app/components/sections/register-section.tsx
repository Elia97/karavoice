import { FC } from "react";
import RegisterButton from "../register-button";

const RegisterSection: FC = () => {
  return (
    <section className="mx-auto max-w-screen-md px-4 py-6">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold text-fuchsia-400">
          Registrati una volta, prenota senza sforzi
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Basta una sola registrazione per accedere a un mondo di serate uniche.
          Tieni i tuoi dati al sicuro e goditi un processo di prenotazione
          semplice e veloce.
        </p>
        <RegisterButton />
      </div>
    </section>
  );
};

export default RegisterSection;
