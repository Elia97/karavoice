"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Social from "../social-icons";

const HeroSection: FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/concert-background.jpg"
        alt="Live concert with crowd"
        fill
        className="object-cover"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content */}
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1200}
        transitionSpeed={2000}
        scale={1.05}
        gyroscope={true}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="px-4">
          <div className="mb-8 max-w-screen-md text-center">
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
              className="mb-8 text-5xl font-bold tracking-tight drop-shadow sm:text-6xl lg:text-7xl"
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
              className="mb-8 text-xl drop-shadow sm:text-2xl"
            >
              Stanco delle solite serate nei locali? Scopri come trasformarle in
              eventi indimenticabili.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.6,
                ease: "easeInOut",
              }}
              className="rounded-lg bg-neon-pink px-8 py-4 text-base font-medium text-white transition-all hover:scale-105"
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
            className="flex justify-center space-x-6"
          >
            <Social />
          </motion.div>
        </div>
      </Tilt>
    </section>
  );
};

export default HeroSection;
