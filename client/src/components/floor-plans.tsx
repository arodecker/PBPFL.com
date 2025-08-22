import { Check } from 'lucide-react';
import floorPlan1 from '@assets/pbpfl-floorplan2_1755813333936.jpg';
import floorPlan2 from '@assets/pbpfl-floorplan_1755813343429.jpg';

export default function FloorPlans() {
  return (
    <section id="floorplans" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">Floor Plans</h2>
          <p className="text-xl text-gray-600">Spacious 1,624 sq ft layouts designed for comfortable living</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pb-gray mb-4">Layout Option A</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pb-blue">3</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pb-blue">3</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pb-blue">1,624</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4">
              <img src={floorPlan1} alt="Floor Plan Layout A - 3BR/3BA" className="w-full h-auto rounded-lg" />
            </div>
            <div className="p-6">
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Private fenced patio
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Balcony access
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  In-unit laundry
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Central air conditioning
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pb-gray mb-4">Layout Option B</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pb-blue">3</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pb-blue">3</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pb-blue">1,624</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4">
              <img src={floorPlan2} alt="Floor Plan Layout B - 3BR/3BA" className="w-full h-auto rounded-lg" />
            </div>
            <div className="p-6">
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Spacious living areas
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Plenty of natural light
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Ample closet space
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-pb-green mr-2" />
                  Main floor bathroom
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
