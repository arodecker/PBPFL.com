import { Camera, Building, Trees, Sofa, Leaf, Car } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">Community Gallery</h2>
          <p className="text-xl text-gray-600">See what makes Woodstock special</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <Camera className="w-12 h-12 text-pb-blue mb-4 mx-auto" />
            <p className="text-gray-600">Unit Interior Photos</p>
            <p className="text-sm text-gray-500 mt-2">(Images will be provided)</p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <Building className="w-12 h-12 text-pb-green mb-4 mx-auto" />
            <p className="text-gray-600">Exterior Views</p>
            <p className="text-sm text-gray-500 mt-2">(Images will be provided)</p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <Trees className="w-12 h-12 text-pb-orange mb-4 mx-auto" />
            <p className="text-gray-600">Community Spaces</p>
            <p className="text-sm text-gray-500 mt-2">(Images will be provided)</p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <Leaf className="w-12 h-12 text-pb-green mb-4 mx-auto" />
            <p className="text-gray-600">Patio Areas</p>
            <p className="text-sm text-gray-500 mt-2">(Images will be provided)</p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <Car className="w-12 h-12 text-pb-orange mb-4 mx-auto" />
            <p className="text-gray-600">Parking & Grounds</p>
            <p className="text-sm text-gray-500 mt-2">(Images will be provided)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
