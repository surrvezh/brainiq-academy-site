import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Programs from '@/components/Programs';
import Locations from '@/components/Locations';
import Gallery from '@/components/Gallery';
import Franchise from '@/components/Franchise';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Programs />
      <Locations />
      <Gallery />
      <Franchise />
      <ContactForm />
      <Footer />
    </main>
  );
}
