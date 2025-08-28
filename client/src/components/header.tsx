import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-pb-blue">PBPFL</h1>
              <p className="text-xs text-gray-500">Palm Beach Prime Florida</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('home')} className="text-pb-gray hover:text-pb-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('community')} className="text-pb-gray hover:text-pb-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Community
              </button>
              <button onClick={() => scrollToSection('floorplans')} className="text-pb-gray hover:text-pb-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Floor Plans
              </button>
              <button onClick={() => scrollToSection('location')} className="text-pb-gray hover:text-pb-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Location
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-pb-gray hover:text-pb-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Gallery
              </button>
              {/* <button onClick={() => scrollToSection('contact')} className="bg-pb-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"> */}
              <a href="mailto:jon@pbpfl.com">
                <button onClick={() => { return true }} className="bg-pb-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Contact
                </button>
              </a>
              <button disabled onClick={() => document.location.href = ''} className="bg-pb-orange text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors">
                Apply
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pb-gray hover:text-pb-blue focus:outline-none focus:text-pb-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="text-pb-gray hover:text-pb-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('community')} className="text-pb-gray hover:text-pb-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Community
              </button>
              <button onClick={() => scrollToSection('floorplans')} className="text-pb-gray hover:text-pb-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Floor Plans
              </button>
              <button onClick={() => scrollToSection('location')} className="text-pb-gray hover:text-pb-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Location
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-pb-gray hover:text-pb-blue block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-pb-blue text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
