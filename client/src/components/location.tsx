import { ShoppingBag, Car, Zap, Waves } from 'lucide-react';

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
                  <div className="bg-pb-blue text-white rounded-full p-2 mr-4">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Shopping Outlets</h4>
                    <p className="text-gray-600">Adjacent to premium outlet shopping</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pb-green text-white rounded-full p-2 mr-4">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Highway Access</h4>
                    <p className="text-gray-600">Near I-95 & Palm Beach Lakes Blvd</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-pb-orange text-white rounded-full p-2 mr-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Golf Club</h4>
                    <p className="text-gray-600">Across from Bear Lakes Country Club</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full p-2 mr-4">
                    <Waves className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Palm Beach Lakes</h4>
                    <p className="text-gray-600">Conveniently located near Lake Mangonia and Clear Lake</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative p-8">
                <div className="text-center">
                  <h4 className="font-bold text-pb-gray mb-6">Location Overview</h4>
                </div>
                
                {/* Woodstock Community - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pb-blue text-white px-4 py-2 rounded-lg font-semibold text-center shadow-lg">
                  <svg className="w-5 h-5 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  Woodstock<br />Community
                </div>
                
                {/* I-95 Highway */}
                <div className="absolute top-8 left-8 bg-gray-700 text-white px-3 py-1 rounded text-sm">
                  <Car className="w-3 h-3 inline mr-1" />
                  I-95
                </div>
                
                {/* Outlets */}
                <div className="absolute top-1/4 right-8 bg-pb-orange text-white px-3 py-1 rounded text-sm">
                  <ShoppingBag className="w-3 h-3 inline mr-1" />
                  Outlets
                </div>
                
                {/* Golf Club */}
                <div className="absolute bottom-1/4 left-8 bg-pb-green text-white px-3 py-1 rounded text-sm">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Golf Club
                </div>
                
                {/* Palm Beach Lakes */}
                <div className="absolute bottom-8 right-8 bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  <Waves className="w-3 h-3 inline mr-1" />
                  Palm Beach Lakes
                </div>
                
                {/* Palm Beach Lakes Blvd */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white px-3 py-1 rounded text-sm">
                  Palm Beach Lakes Blvd
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
