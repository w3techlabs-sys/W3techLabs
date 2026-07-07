import Navbar from "../../components/common/Navbar"
import Herobanner from "../../components/ui/HeroBanner"
// import About from "../../components/About/About"
// import Hero from "../../components/ui/Hero"
import ServicesMarquee from "../../components/ServicesMarquee/ServicesMarquee"
import Services from "../../components/Services/Services";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
export default function Home() {
  return (
    <>
      < Navbar />
       {/* <Hero /> */}
       <Herobanner />
       <ServicesMarquee />
       {/* <About/> */}
       <Services/>
       <Clients/>
        <Contact/>
        <Footer />
       
    </>
  )
}