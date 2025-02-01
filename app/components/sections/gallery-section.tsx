import { FC } from "react";
import Image from "next/image";

const GallerySection: FC = () => {
  return (
    <section className="mx-auto min-h-screen max-w-screen-xl px-4 py-6">
      <div className="grid auto-rows-[250px] grid-cols-3 gap-8 *:relative *:overflow-hidden *:rounded-lg">
        <div className="col-span-3 xl:col-span-2">
          <Image
            src="/concert-background.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1 lg:row-span-2">
          <Image
            src="/karavoice-marica-mey.webp"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 xl:col-span-1">
          <Image
            src="/Karaoke_1.webp"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Image
            src="/Karaoke_2.webp"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-3 lg:col-span-1">
          <Image
            src="/Karaoke_3.webp"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-3 xl:col-span-2">
          <Image
            src="/placeholder.svg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
