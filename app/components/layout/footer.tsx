import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-background via-sky-300 to-sky-300 px-4 py-12 dark:via-sky-950 dark:to-sky-950">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h3 className="mb-4 text-2xl font-semibold tracking-wider">
              Risorse
            </h3>
            <ul className="space-y-2">
              <li>Eventi</li>
              <li>Contattaci</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold tracking-wider">
              Seguici su
            </h3>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="col-span-2 w-full sm:col-span-1">
            <h3 className="mb-4 text-2xl font-semibold tracking-wider">
              Legale
            </h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Termini e condizioni</li>
            </ul>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="space-y-4 sm:flex sm:items-center sm:justify-between">
          <p className="text-primary-500 dark:text-primary-400 text-sm sm:text-center">
            © 2025 <span className="hover:underline">KaraVoice™</span>. Tutti
            i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
