import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VoiceActors from "@/components/VoiceActors";
import AppShowcase from "@/components/AppShowcase";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
        <Hero  />
        <Services />
        <VoiceActors />
        <AppShowcase />
        <FAQ />
        <Footer />


    </div>
  );
};

export default Index;
