import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Programs from '@/components/Programs';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import Gallery from '@/components/Gallery';
import Franchise from '@/components/Franchise';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider from="navy" to="card" />
      <About />
      <SectionDivider from="card" to="navy" flip />
      <Benefits />
      <SectionDivider from="navy" to="card" />
      <Programs />
      <SectionDivider from="card" to="navy" flip />
      <Testimonials />
      <SectionDivider from="navy" to="card" />
      <Locations />
      <SectionDivider from="card" to="navy" flip />
      <ContactForm />
      <SectionDivider from="navy" to="card" />
      <Gallery />
      <SectionDivider from="card" to="navy" flip />
      <Franchise />
      <Footer />
    </main>
  );
}
