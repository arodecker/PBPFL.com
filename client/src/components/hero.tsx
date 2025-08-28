import { Home, Phone, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import exteriorImg from '@assets/PXL_20250115_163738473.MP_1756246222394.jpg';
import interiorImg from '@assets/PXL_20250115_164034355_1756246222400.jpg';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-16 bg-gradient-to-br from-pb-blue to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to the<br />
            <span className="text-pb-orange">Woodstock</span> Community
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Premier rental community near Palm Beach Lakes, Florida - where comfort meets convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Exterior */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={exteriorImg}
                alt="Exterior view of Woodstock Community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pb-blue rounded-full mr-3"></span>
                  3 bed / 3 bath
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pb-blue rounded-full mr-3"></span>
                  1624 Sq. ft.
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pb-blue rounded-full mr-3"></span>
                  Private patio / balconies
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('floorplans')}
                className="w-full bg-pb-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
                data-testid="button-view-floorplans"
              >
                <Home className="mr-2 h-5 w-5" />
                View Floor Plans
              </button>
            </div>
          </div>

          {/* Card 2 - Interior */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={interiorImg}
                alt="Interior view of Woodstock Community unit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pb-green rounded-full mr-3"></span>
                  Inside laundry
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pb-green rounded-full mr-3"></span>
                  PB Lakes / I95
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-pb-green rounded-full mr-3"></span>
                  $2,500 - 2800 / month
                </li>
              </ul>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    style={{ backgroundColor: '#808080b3', color: 'white' }}
                    className="w-full bg-transparent border-2 border-gray-400 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                    data-testid="button-contact-dropdown"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem asChild>
                    <a href="tel:7144584377" className="w-full cursor-pointer" data-testid="contact-phone">
                      (714) 458-4377
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="mailto:jon@pbpfl.com" className="w-full cursor-pointer" data-testid="contact-email">
                      jon@pbpfl.com
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
