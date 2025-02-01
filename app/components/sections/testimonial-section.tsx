"use client";

import { FC, useState, useEffect, useRef } from "react";
import { TestimonialCard } from "../cards/testimonial-card";

const testimonials = [
  { quote: "Una serata unica! Non vedo l'ora di tornare.", author: "Anna R." },
  {
    quote: "Organizzazione perfetta e atmosfera fantastica.",
    author: "Marco P.",
  },
  {
    quote: "Ho scoperto eventi incredibili che non avrei mai immaginato.",
    author: "Sara L.",
  },
];

const TestimonialSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Funzione per iniziare lo scroll automatico
  const startAutoScroll = () => {
    stopAutoScroll(); // Assicurati di fermare qualsiasi intervallo attivo prima
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      ); // Avanza al prossimo testimonial ogni 3 secondi
    }, 3000);
  };

  // Funzione per fermare lo scroll automatico
  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Ferma l'intervallo attuale se esiste
  };

  // Imposta lo scorrimento automatico quando il componente è montato
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Pulisci l'intervallo quando il componente si smonta
  });

  return (
    <section className="mx-auto max-w-screen-md px-4 py-6">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-fuchsia-400">
          Cosa dicono di noi?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Ascolta le voci di chi ha già vissuto una serata indimenticabile. Le
          loro esperienze possono ispirarti per il tuo prossimo evento!
        </p>
      </div>

      <div className="relative overflow-hidden">
        <TestimonialCard
          quote={testimonials[currentIndex].quote}
          author={testimonials[currentIndex].author}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
