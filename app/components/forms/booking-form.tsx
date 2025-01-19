"use client";

import { UUID } from "crypto";
import { X } from "lucide-react";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface BookingFormProps {
  onClose: (success: boolean) => void;
  userId: UUID;
  eventId: UUID;
}

interface FormData {
  user_id: UUID;
  event_id: UUID;
  participants: number;
  notes: string;
}

const BookingForm: FC<BookingFormProps> = ({ onClose, userId, eventId }) => {
  const {
    register, // Registra i campi del form
    handleSubmit, // Gestisce l'invio
    formState: { errors }, // Controlla gli errori
  } = useForm<FormData>({
    defaultValues: {
      user_id: userId,
      event_id: eventId,
      participants: 1,
      notes: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newBooking = await response.json();
        console.log("Prenotazione creata:", newBooking);
        onClose(true); // Chiudi il modulo dopo il successo
      } else {
        const errorData = await response.json();
        onClose(false);
        console.error("Errore nella creazione della prenotazione:", errorData);
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
      onClose(false);
    }
  };

  return (
    <div className="rounded-lg bg-gradient-to-l p-4 dark:from-fuchsia-950 dark:to-sky-950">
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          aria-label="close"
          onClick={() => onClose(false)}
          className="cursor-pointer"
        >
          <X />
        </button>
      </div>
      <h4 className="mb-6 px-4 text-xl font-medium">Crea Prenotazione</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 px-4"
      >
        <div>
          <label htmlFor="participants" className="block text-sm">
            Partecipanti
          </label>
          <input
            type="number"
            id="participants"
            {...register("participants", {
              required: "Il numero di partecipanti è obbligatorio",
              min: { value: 1, message: "Deve esserci almeno 1 partecipante" },
              valueAsNumber: true, // Converte automaticamente il valore in un numero
            })}
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500"
          />
          {errors.participants && (
            <p className="mt-1 text-red-500">{errors.participants.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm">
            Note
          </label>
          <textarea
            id="notes"
            {...register("notes")}
            className="w-full border-b border-neutral-500 bg-transparent pt-1.5 text-white placeholder-neutral-500"
            placeholder="Aggiungi eventuali note"
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded-lg bg-gradient-to-r px-8 py-4 text-base font-medium text-white transition-all dark:from-fuchsia-950 dark:to-sky-950"
        >
          Crea Prenotazione
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
