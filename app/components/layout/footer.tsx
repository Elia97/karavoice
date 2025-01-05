import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="px-4 py-12">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 uppercase">Risorse</h2>
            <ul className="space-y-4">
              <li>Eventi</li>
              <li>Contattaci</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 uppercase">Seguici su</h2>
            <ul className="space-y-4">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="col-span-2 w-full sm:col-span-1">
            <h2 className="mb-6 uppercase">Legale</h2>
            <ul className="space-y-4">
              <li>Privacy Policy</li>
              <li>Termini e condizioni</li>
            </ul>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="space-y-4 sm:flex sm:items-center sm:justify-between">
          <span className="text-primary-500 dark:text-primary-400 text-sm sm:text-center">
            © 2025 <span className="hover:underline">KaraVoice™</span>. Tutti i
            diritti riservati.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
