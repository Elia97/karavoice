import { FC, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string; // Aggiunto per gestire la conferma password
}

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null); // Per gestire errori

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Controllo lato client
    if (formData.password !== formData.confirmPassword) {
      setError("Le password non coincidono."); // Mostra un messaggio di errore
      return;
    }

    setError(null); // Resetta l'errore

    // Preparazione dei dati da inviare al backend
    const { name, email, password } = formData; // Escludi confirmPassword
    const payload = { name, email, password };

    try {
      const response = await fetch("api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registrazione riuscita:", data);
      }
    } catch {
      console.log("errore");
    }
  };

  return (
    <div className="md:p-8">
      <h4 className="mb-6 text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl">
        Crea un account
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block text-sm md:text-base">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500 outline-none transition-colors focus:border-neon-pink focus:ring-0"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm md:text-base">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500 outline-none transition-colors focus:border-neon-pink focus:ring-0"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm md:text-base">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500 outline-none transition-colors focus:border-neon-pink focus:ring-0"
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm md:text-base"
          >
            Conferma Password
          </label>
          <input
            id="confirm-password"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500 outline-none transition-colors focus:border-neon-pink focus:ring-0"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="mt-4 rounded-lg bg-gradient-to-r px-8 py-4 text-base font-medium text-white transition-all hover:scale-105 md:text-lg lg:text-xl xl:text-2xl dark:from-fuchsia-950 dark:to-sky-950"
        >
          Registrati
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
