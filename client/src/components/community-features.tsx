import { Home, Leaf, Wrench, Snowflake, Hammer, MapPin } from 'lucide-react';

export default function CommunityFeatures() {
  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">Why Choose Woodstock?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located near Palm Beach Lakes, Florida, we are adjacent to the outlets, near the 95 Fwy & Palm Beach Lakes Blvd and across from Dutchman's Pipe Golf Club.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-pb-blue mb-4">
              <Home className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pb-gray mb-3">Spacious Living</h3>
            <p className="text-gray-600">Large 1,624 square foot floor plans with 3 bedrooms, 3 bathrooms, and plenty of closet space.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-pb-green mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pb-gray mb-3">Private Outdoor Space</h3>
            <p className="text-gray-600">All units feature private, fenced patio areas as well as balconies for your personal enjoyment.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-pb-orange mb-4">
              <Wrench className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pb-gray mb-3">Recent Renovations</h3>
            <p className="text-gray-600">Many units remodeled with quartz countertops, porcelain floors, and beautifully appointed bathrooms.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-pb-blue mb-4">
              <Snowflake className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pb-gray mb-3">Climate Comfort</h3>
            <p className="text-gray-600">Central air conditioning and inside laundry facilities in every unit for maximum convenience.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-pb-green mb-4">
              <Hammer className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pb-gray mb-3">Community Updates</h3>
            <p className="text-gray-600">All roofs replaced recently, buildings painted, and new parking lot coming September 2025.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-pb-orange mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pb-gray mb-3">Prime Location</h3>
            <p className="text-gray-600">Near outlets, I-95 highway access, and across from Dutchman's Pipe Golf Club.</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-pb-blue to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">A Community on the Rise</h3>
          <p className="text-lg text-blue-100 mb-6 max-w-4xl mx-auto">
            All of our units are large (1,624 Square Feet) floor plans with 3 bedrooms, 3 bathrooms, a separate laundry area, a main floor bath and plenty of closet space. All have private, fenced patios areas as well as balconies, inside laundry and central air conditioning. Many have been remodeled with quartz countertops, porcelain floors, beautifully appointed bathrooms, spacious living areas and plenty of light.
          </p>
          <p className="text-blue-100 max-w-4xl mx-auto">
            Outside you will find a community on the rise. All of the roofs were replaced just a few years ago and this included the tile mansards. All buildings have been (or are still being) painted and as of September, 2025 we will be starting on our latest update yet - a completely new parking lot, driveway and curb system.
          </p>
        </div>
      </div>
    </section>
  );
}
