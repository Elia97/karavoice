"use client";

import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const HeroSection: FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-fuchsia-300 via-sky-300 to-background px-4 dark:from-fuchsia-950 dark:via-sky-950">
        <div className="mb-8 max-w-screen-lg text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
            className="mb-8 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl"
          >
            Rendi Uniche le Tue Serate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.4,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            className="mb-8 text-lg sm:text-2xl"
          >
            Trasforma un venerdì qualunque in una serata speciale. Lasciati
            ispirare dai nostri eventi musicali, pensati per regalarti emozioni,
            divertimento e ricordi indimenticabili.
          </motion.p>

          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4, // Durata aumentata per maggiore fluidità
              delay: 0.6,
              ease: [0.42, 0, 0.58, 1], // Cubic bezier per animazioni più naturali
            }}
            onHoverStart={() => {
              if (buttonRef.current) {
                buttonRef.current.style.transform = "scale(1.05)";
                buttonRef.current.style.transition = "transform 0.3s ease-out";
              }
            }}
            onHoverEnd={() => {
              if (buttonRef.current) {
                buttonRef.current.style.transform = "scale(1)";
                buttonRef.current.style.transition = "transform 0.2s ease-in";
              }
            }}
            className="rounded-lg bg-gradient-to-r from-fuchsia-300 to-sky-300 px-8 py-4 text-base font-medium dark:from-fuchsia-950 dark:to-sky-950"
            onClick={() =>
              window.scroll({
                top: (document.getElementById("events")?.offsetTop ?? 0) - 64,
                behavior: "smooth",
              })
            }
          >
            Inizia ora
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/karavoice1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaFacebook size={60} />
            </a>
            <a
              href="https://instagram.com/karavoice1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaInstagram size={60} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
