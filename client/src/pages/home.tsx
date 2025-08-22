import Header from '@/components/header';
import Hero from '@/components/hero';
import CommunityFeatures from '@/components/community-features';
import FloorPlans from '@/components/floor-plans';
import Location from '@/components/location';
import Gallery from '@/components/gallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <Hero />
      <CommunityFeatures />
      <FloorPlans />
      <Location />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
