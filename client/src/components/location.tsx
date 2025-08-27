import {
  ShoppingBag,
  Car,
  Zap,
  Waves,
  Coffee,
  MapPin,
  Home,
  Users,
} from "lucide-react";
import poiMap from "@assets/POI-map_1756253610159.jpg";
import communityLayout from "@assets/Woodstock Parking Lot Map_1756253718224.jpg";

export default function Location() {
  return (
    <>
      {/* Community Layout Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">
              Community Layout
            </h2>
            <p className="text-xl text-gray-600">
              Aerial view of our beautifully designed community
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Community Features */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pb-blue text-white rounded-full p-3 mr-4">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-pb-gray">
                    Multiple Buildings
                  </h3>
                </div>
                <p className="text-gray-600">
                  Individual residential buildings spread throughout the
                  community for privacy and comfort
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pb-green text-white rounded-full p-3 mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-pb-gray">
                    Community Pool
                  </h3>
                </div>
                <p className="text-gray-600">
                  Central swimming pool area for relaxation and community
                  gatherings
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pb-orange text-white rounded-full p-3 mr-4">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-pb-gray">
                    Parking Areas
                  </h3>
                </div>
                <p className="text-gray-600">
                  Convenient parking spaces throughout the community with easy
                  access to all units
                </p>
              </div>
            </div>

            {/* Aerial Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-pb-gray mb-4 text-center">
                    Woodstock Community Aerial View
                  </h3>
                  <img
                    src={communityLayout}
                    alt="Aerial view of Woodstock Community showing buildings, roads, parking areas, and central pool"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      Complete overview showing individual buildings, central
                      amenities, and convenient parking areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">
              Prime Location
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located near everything you need
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-pb-gray mb-6">
                You're Close to Everything
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-pb-green text-white rounded-full p-2 mr-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">
                      Bear Lakes Country Club
                    </h4>
                    <p className="text-gray-600">
                      World-class golf course nearby
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-pb-blue text-white rounded-full p-2 mr-4">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">
                      Shopping & Retail
                    </h4>
                    <p className="text-gray-600">
                      PetSmart, Victoria's Secret & more
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-pb-orange text-white rounded-full p-2 mr-4">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">Golf Club</h4>
                    <p className="text-gray-600">
                      Across from Bear Lakes Country Club
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full p-2 mr-4">
                    <Waves className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">
                      Palm Beach Lakes
                    </h4>
                    <p className="text-gray-600">
                      Conveniently located near Lake Mangonia and Clear Lake
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-gray-600 text-white rounded-full p-2 mr-4">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-pb-gray">
                      Highway Access
                    </h4>
                    <p className="text-gray-600">Easy access to major roads</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-pb-gray text-xl">
                    Location Overview
                  </h4>
                  <p className="text-gray-600">See nearby points of interest</p>
                </div>

                <div className="relative">
                  <img
                    src={poiMap}
                    alt="Woodstock Community location map showing nearby amenities"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />

                  {/* Woodstock Location Marker */}
                  <div className="absolute top-[calc(20%+150px)] left-[calc(40%-50px)] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-red-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-pb-blue text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                      Woodstock
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Walking distance to Bear Lakes Country Club, shopping,
                    dining, and Lake Mangonia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
