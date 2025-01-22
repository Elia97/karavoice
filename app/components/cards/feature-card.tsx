import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="rounded-lg bg-gradient-to-r from-fuchsia-300 to-sky-300 p-6 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg dark:from-fuchsia-950 dark:to-sky-950">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="mb-2 text-2xl font-semibold tracking-wider">{title}</h3>
    <p className="text-lg">{description}</p>
  </div>
);

export default FeatureCard;
