import { Home, Phone } from 'lucide-react';
import mainImg from '@assets/main.jpg';
export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-pb-blue to-blue-800 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('" + mainImg + "')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to the<br />
            <span className="text-pb-orange">Woodstock</span> Community
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Premier rental community near Palm Beach Lakes, Florida - where comfort meets convenience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('floorplans')}
              className="bg-pb-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              View Floor Plans
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              style={{ backgroundColor: '#808080b3', color: 'white' }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-pb-blue transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
