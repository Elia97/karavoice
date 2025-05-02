import {
  HeroSection,
  CategorieSection,
  EventiInEvidenzaSection,
  FunzionalitàSection,
  TestimonianzeSection,
  CtaSection,
} from "@/components/sections/homepage";

export default async function HomePage() {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategorieSection />
      <EventiInEvidenzaSection />
      <FunzionalitàSection />
      <CtaSection />
      <TestimonianzeSection />
    </div>
  );
}
