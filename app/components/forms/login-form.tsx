"use client";

import { FC, FormEvent, useState, useContext } from "react";
import { UserContext } from "@/app/context-api/contexts";
import { useRouter } from "next/navigation";
interface FormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { authEvents } = useContext(UserContext);

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
        authEvents?.dispatchEvent(new Event("authChange"));
        router.push("/");
      }
    } catch (error) {
      console.log(`Errore: ${(error as Error).message}`);
    }
  };

  return (
    <div className="md:p-8">
      <h4 className="mb-6 text-xl font-medium md:text-2xl lg:text-3xl xl:text-4xl">
        Accedi al tuo account
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label htmlFor="login-email" className="block text-sm md:text-base">
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
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500 outline-none transition-colors autofill:bg-transparent autofill:text-white focus:border-neon-pink focus:ring-0"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="login-password"
            className="block text-sm md:text-base"
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
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500 outline-none transition-colors focus:border-neon-pink focus:ring-0"
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded-lg bg-gradient-to-r px-8 py-4 text-base font-medium text-white transition-all hover:scale-105 md:text-lg lg:text-xl xl:text-2xl dark:from-fuchsia-950 dark:to-sky-950"
        >
          Accedi
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
