import HeroSection from "./components/sections/hero-section";
import RegisterSection from "./components/sections/register-section";
import FeatureSection from "./components/sections/feature-section";
import TestimonialSection from "./components/sections/testimonial-section";
// import GallerySection from "./components/sections/gallery-section";
import PartnerSection from "./components/sections/partner-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <RegisterSection />
      {/* <GallerySection /> */}
      <TestimonialSection />
      <PartnerSection />
    </>
  );
}
