import Navbar from "../../components/common/Navbar"
import Herobanner from "../../components/ui/HeroBanner"
import AboutSection from "../../components/About/AboutSection/AboutSection";
import CompanyStory from "../../components/About/CompanyStory/CompanyStory";
import MissionVision from "../../components/About/MissionVision/MissionVision";
// import About from "../../components/About/About"
// import Hero from "../../components/ui/Hero"
import ServicesMarquee from "../../components/ServicesMarquee/ServicesMarquee"
import Services from "../../components/Services/Services";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import WhatsAppButton from "../../components/common/WhatsAppButton";
export default function Home() {
  return (
    <>
      < Navbar />
       {/* <Hero /> */}
       <Herobanner />
           <AboutSection />
            <CompanyStory />
            <MissionVision />
       <ServicesMarquee />
       {/* <About/> */}
       <Services/>
       <Clients/>
        <Contact/>
        <Footer />
        <WhatsAppButton />
       
    </>
  )
}