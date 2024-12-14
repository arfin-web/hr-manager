import ContactUs from "@/components/landing-page/ContactUs";
import FaqSection from "@/components/landing-page/FaqSection";
import Features from "@/components/landing-page/Feaures";
import Footer from "@/components/landing-page/Footer";
import HeroSection from "@/components/landing-page/HeroSection";
import Navbar from "@/components/landing-page/Navbar";
import WhyChooseUs from "@/components/landing-page/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Features />
        <WhyChooseUs />
        <FaqSection />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
