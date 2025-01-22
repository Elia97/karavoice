import HeroSection from "./components/sections/hero-section";
import RegisterSection from "./components/sections/register-section";
import FeatureSection from "./components/sections/feature-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <RegisterSection />
    </>
  );
}
