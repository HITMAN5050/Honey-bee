import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheGap from "@/components/TheGap";
import ProductDetails from "@/components/ProductDetails";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Founders from "@/components/Founders";
import TrustedBy from "@/components/TrustedBy";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <TheGap />
        <ProductDetails />
        <WhyChooseUs />
        <Pricing />
        <Founders />
        <TrustedBy />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
