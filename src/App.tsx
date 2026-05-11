import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIdentity from './components/BrandIdentity';
import FeaturedTech from './components/FeaturedTech';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandIdentity />
      <FeaturedTech />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
