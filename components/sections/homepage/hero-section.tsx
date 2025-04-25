import { Search } from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        <img
          src="/karavoice-logo.webp"
          alt="Eventi background"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="container relative z-20 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Scopri Eventi Straordinari
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Trova e partecipa agli eventi più interessanti nella tua città e in
          tutta Italia
        </p>
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-3">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-white/70" />
              <Input
                type="search"
                placeholder="Cerca eventi..."
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
              />
            </div>
            <Button className="h-12 px-8 cursor-pointer">Cerca</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
