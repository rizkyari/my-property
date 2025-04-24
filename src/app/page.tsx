import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import TestimonySection from "@/components/TestimonySection"
import FAQSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <FeaturesSection/>
      <ProjectSection/>
      <AboutSection/>
      <TestimonySection/>
      <FAQSection/>
      <BookingSection/>
      <Footer/>
    </main>
  );
}
