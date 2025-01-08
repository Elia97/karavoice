import HeroSection from "./components/sections/hero-section";
import RegisterSection from "./components/sections/register-section";
import ServiceSection from "./components/sections/service-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <RegisterSection />
    </>
  );
}
