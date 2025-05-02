"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Category, Location } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
// const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Il titolo deve contenere almeno 3 caratteri.",
  }),
  description: z.string().min(10, {
    message: "La descrizione deve contenere almeno 10 caratteri.",
  }),
  category_id: z.string().min(1, {
    message: "Seleziona una categoria.",
  }),
  featured: z.boolean().optional(),
  image: z.string().min(1, { message: "È richiesta un'immagine." }),
  location_id: z.string().min(1, {
    message: "Il luogo è obbligatorio.",
  }),
  start_time: z.string().optional(),
  end_time: z.string().optional(),
  date: z.date(),
});

type FormValues = z.infer<typeof formSchema>;

interface CreaEventoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreaEventoDialog({
  open,
  onOpenChange,
}: CreaEventoDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [uploading, setUploading] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category_id: "",
      featured: false,
      image: "samples/prova/ppeb2xytr1ssswtg8r44",
      location_id: "",
      start_time: "",
      end_time: "",
      date: undefined,
    },
  });

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch(`${API_URL}/api/locations`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Errore nel recuperare le location");

        const data = await res.json();
        setLocations(data);
      } catch (error) {
        console.error(error);
        toast.error("Errore durante il recupero delle location.");
      }
    }

    async function fetchCategories() {
      try {
        const res = await fetch(`${API_URL}/api/categories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        });

        if (!res.ok) throw new Error("Errore nel recuperare le categorie");

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
        toast.error("Errore durante il recupero delle categorie.");
      }
    }

    fetchLocations();
    fetchCategories();
  }, []);

  // Gestione caricamento immagine su Cloudinary
  // async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   setUploading(true);
  //   try {
  //     // Carica direttamente su Cloudinary utilizzando il preset
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", "my-preset"); // Usa il preset di upload preconfigurato
  //     formData.append("folder", "samples/prova");

  //     const res = await fetch(
  //       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const result = await res.json();

  //     if (res.ok) {
  //       // Salva l'ID immagine ricevuto da Cloudinary nel form
  //       form.setValue("image", result.public_id);
  //       toast.success("Immagine caricata con successo.");
  //     } else {
  //       throw new Error(
  //         result.error?.message || "Errore durante il caricamento"
  //       );
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Errore durante il caricamento dell'immagine.");
  //   } finally {
  //     setUploading(false);
  //   }
  // }

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    console.log(data);

    try {
      const res = await fetch("/api/eventi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.error || "Errore durante la creazione dell'evento."
        );
      }

      const newEvent = await res.json();
      console.log("Evento creato:", newEvent);

      toast.success("Evento creato con successo!");

      // Chiudi la modale e resetta il form
      onOpenChange(false);
      form.reset();
    } catch {
      toast.error(
        "Si è verificato un errore durante la creazione dell'evento."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Crea nuovo evento</DialogTitle>
          <DialogDescription>
            Inserisci i dettagli per creare un nuovo evento sulla piattaforma.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 py-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Titolo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Inserisci il titolo dell'evento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Descrizione</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descrivi l'evento..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleziona una categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="featured"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                    <FormLabel>Evento in evidenza</FormLabel>
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="image"
                render={() => (
                  <FormItem>
                    <FormLabel>Immagine evento</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        // onChange={(e) => {
                        //   handleImageUpload(e); // Gestisce l'upload separatamente
                        // }}
                        disabled={uploading}
                      />
                    </FormControl>
                    <FormDescription>
                      Carica una copertina per l&apos;evento.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="location_id"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Luogo</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleziona una location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((loc) => (
                            <SelectItem key={loc.id} value={loc.id}>
                              {loc.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="start_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Orario Inizio</FormLabel>
                    <FormControl>
                      <Input placeholder="Es: 18:00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Orario Fine</FormLabel>
                    <FormControl>
                      <Input placeholder="Es: 22:00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Data</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              field.value.toLocaleDateString("it-IT")
                            ) : (
                              <span>Seleziona data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Annulla
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isSubmitting ? "Creazione in corso..." : "Crea evento"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
