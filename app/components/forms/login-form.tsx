"use client";

import { FC, FormEvent, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login riuscito:", data);
        // Puoi reindirizzare l'utente o salvare ulteriori dati qui
      }
    } catch {
      console.log("errore");
    }
  };

  return (
    <div className="md:p-8">
      <h4 className="mb-6 text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl">
        Accedi al tuo account
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="login-email"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
          >
            Email
          </label>
          <input
            id="login-email"
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
            htmlFor="login-password"
            className="block text-sm md:text-base lg:text-lg xl:text-xl"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full rounded-md border px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600 md:text-lg lg:text-xl xl:text-2xl"
        >
          Accedi
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
