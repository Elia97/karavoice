"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RegisterForm from "../forms/register-form";
import LoginForm from "../forms/login-form";

const AuthSection: FC = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <section className="mx-auto mt-16 h-screen max-w-screen-xl px-4 py-12">
      <div className="w-full overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <AnimatePresence initial={false} mode="wait">
            {isRegistering ? (
              <motion.div
                key="register"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                className="w-full md:w-1/2"
              >
                <RegisterForm />
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                className="w-full md:w-1/2"
              >
                <LoginForm />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 lg:px-12">
            <h3 className="my-8 text-2xl font-medium md:text-3xl lg:text-4xl xl:text-5xl">
              {isRegistering ? "Hai già un account?" : "Non hai un account?"}
            </h3>
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600 md:text-lg lg:text-xl xl:text-2xl"
            >
              {isRegistering ? "Accedi" : "Registrati"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
