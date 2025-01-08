import { FC, FormEvent, useState } from "react";

interface FormData {
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string; // Aggiunto per gestire la conferma password
}

const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    phone: "",
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
    const { username, phone, email, password } = formData; // Escludi confirmPassword
    const payload = { username, phone, email, password };

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
          >
            Nome
          </label>
          <input
            id="username"
            type="text"
            required
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
          >
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            placeholder="### #######"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
          >
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
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
          >
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
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="confirm-password"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
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
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600 md:text-lg lg:text-xl xl:text-2xl"
        >
          Registrati
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
