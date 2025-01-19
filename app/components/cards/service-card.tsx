import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="rounded-lg bg-gradient-to-r p-6 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg dark:from-fuchsia-950 dark:to-sky-950">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="mb-2 text-lg font-semibold tracking-wide text-white">
      {title}
    </h3>
    <p className="text-sm tracking-wide text-white">{description}</p>
  </div>
);

export default ServiceCard;
