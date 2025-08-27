import { ShoppingBag, Car, Zap, Waves, Coffee, MapPin } from 'lucide-react';
import poiMap from '@assets/POI-map_1756253610159.jpg';

export default function Location() {
  return (
    <>
      {/* Community Layout Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">Community Layout</h2>
            <p className="text-xl text-gray-600">Discover our thoughtfully designed community spaces</p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="bg-white rounded-lg shadow-md p-12 inline-block">
              <div className="w-16 h-16 mx-auto mb-4 bg-pb-blue rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p className="text-gray-600 text-lg">Community Layout Map</p>
              <p className="text-sm text-gray-500 mt-2">(Community layout image will be provided)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">Prime Location</h2>
            <p className="text-xl text-gray-600">Conveniently located near everything you need</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-pb-gray mb-6">You're Close to Everything</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-pb-green text-white rounded-full p-2 mr-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Bear Lakes Country Club</h4>
                    <p className="text-gray-600">World-class golf course nearby</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pb-blue text-white rounded-full p-2 mr-4">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Shopping & Retail</h4>
                    <p className="text-gray-600">PetSmart, Victoria's Secret & more</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pb-orange text-white rounded-full p-2 mr-4">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Dining Options</h4>
                    <p className="text-gray-600">Red Robin Gourmet Burgers & more</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full p-2 mr-4">
                    <Waves className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Lake Mangonia</h4>
                    <p className="text-gray-600">Beautiful lakeside location</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gray-600 text-white rounded-full p-2 mr-4">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Highway Access</h4>
                    <p className="text-gray-600">Easy access to major roads</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-pb-gray text-xl">Location Overview</h4>
                  <p className="text-gray-600">See nearby points of interest</p>
                </div>
                
                <div className="relative">
                  <img 
                    src={poiMap} 
                    alt="Woodstock Community location map showing nearby amenities" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                  
                  {/* Woodstock Location Marker */}
                  <div className="absolute top-[20%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-red-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-pb-blue text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                      Woodstock
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">Walking distance to Bear Lakes Country Club, shopping, dining, and Lake Mangonia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
