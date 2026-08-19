import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import VideoSection from "./components/VideoSection.jsx";
import Services from "./components/Services.jsx";
import Plans from "./components/Plans.jsx";
import Benefits from "./components/Benefits.jsx";
import Transformations from "./components/Transformations.jsx";
import Testimonials from "./components/Testimonials.jsx";
import GymFinder from "./components/GymFinder.jsx";
import LeadForm from "./components/LeadForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <Services />
      <Plans />
      <Benefits />
      <Transformations />
      <Testimonials />
      <GymFinder />
      <LeadForm />
      <Footer />
    </>
  );
}