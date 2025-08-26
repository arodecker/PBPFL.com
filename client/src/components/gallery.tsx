import { useState } from 'react';
import { Camera, Building, Trees, Car, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import gallery images
import img1 from '@assets/PXL_20250115_163738473.MP_1756246222394.jpg';
import img2 from '@assets/PXL_20250115_163800832_1756246222395.jpg';
import img3 from '@assets/PXL_20250115_163834987_1756246222395.jpg';
import img4 from '@assets/PXL_20250115_163851401_1756246222396.jpg';
import img5 from '@assets/PXL_20250115_163859604_1756246222396.jpg';
import img6 from '@assets/PXL_20250115_163922018_1756246222397.jpg';
import img7 from '@assets/PXL_20250115_163927106_1756246222397.jpg';
import img8 from '@assets/PXL_20250115_163934048.MP_1756246222398.jpg';
import img9 from '@assets/PXL_20250115_164007505_1756246222398.jpg';
import img10 from '@assets/PXL_20250115_164021825_1756246222399.jpg';
import img11 from '@assets/PXL_20250115_164023079_1756246222399.jpg';
import img12 from '@assets/PXL_20250115_164034355_1756246222400.jpg';
import img13 from '@assets/PXL_20250115_164048867_1756246222400.jpg';
import img14 from '@assets/PXL_20250115_164100779_1756246222401.jpg';
import img15 from '@assets/PXL_20250115_164111260_1756246222401.jpg';
import img16 from '@assets/PXL_20250115_164116573_1756246222402.jpg';
import img17 from '@assets/PXL_20250115_164131277_1756246222402.jpg';
import img18 from '@assets/PXL_20250115_164142815_1756246222403.jpg';
import img19 from '@assets/PXL_20250115_164155969_1756246319951.jpg';
import img20 from '@assets/PXL_20250115_164206186_1756246319952.jpg';
import img21 from '@assets/PXL_20250115_164213164_1756246319952.jpg';
import img22 from '@assets/PXL_20250115_164224903_1756246319953.jpg';
import img23 from '@assets/PXL_20250115_164232134_1756246319953.jpg';
import img24 from '@assets/PXL_20250115_164242374_1756246319954.jpg';
import img25 from '@assets/PXL_20250115_164248676_1756246319955.jpg';
import img26 from '@assets/PXL_20250115_164255867_1756246319955.jpg';
import img27 from '@assets/PXL_20250115_164300690_1756246319956.jpg';
import img28 from '@assets/PXL_20250115_164307082_1756246319956.jpg';
import img29 from '@assets/PXL_20250115_164320355_1756246319957.jpg';
import img30 from '@assets/PXL_20250115_164328646_1756246319957.jpg';
import img31 from '@assets/PXL_20250115_164334229_1756246319958.jpg';
import img32 from '@assets/PXL_20250115_164339985_1756246319958.jpg';
import img33 from '@assets/PXL_20250115_164346686_1756246319959.jpg';
import img34 from '@assets/PXL_20250115_164453396_1756246319960.jpg';
import parkingMap from '@assets/Woodstock Parking Lot Map_1756246319961.jpg';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Unit Interior Photos
  { src: img1, alt: "Unit interior view 1", category: "interior" },
  { src: img2, alt: "Unit interior view 2", category: "interior" },
  { src: img3, alt: "Unit interior view 3", category: "interior" },
  { src: img4, alt: "Unit interior view 4", category: "interior" },
  { src: img5, alt: "Unit interior view 5", category: "interior" },
  { src: img6, alt: "Unit interior view 6", category: "interior" },
  { src: img7, alt: "Unit interior view 7", category: "interior" },
  { src: img8, alt: "Unit interior view 8", category: "interior" },
  { src: img9, alt: "Unit interior view 9", category: "interior" },

  // Exterior Views
  { src: img10, alt: "Building exterior view 1", category: "exterior" },
  { src: img11, alt: "Building exterior view 2", category: "exterior" },
  { src: img12, alt: "Building exterior view 3", category: "exterior" },
  { src: img13, alt: "Building exterior view 4", category: "exterior" },
  { src: img14, alt: "Building exterior view 5", category: "exterior" },
  { src: img15, alt: "Building exterior view 6", category: "exterior" },
  { src: img16, alt: "Building exterior view 7", category: "exterior" },
  { src: img17, alt: "Building exterior view 8", category: "exterior" },
  { src: img18, alt: "Building exterior view 9", category: "exterior" },

  // Community Spaces
  { src: img19, alt: "Community space 1", category: "community" },
  { src: img20, alt: "Community space 2", category: "community" },
  { src: img21, alt: "Community space 3", category: "community" },
  { src: img22, alt: "Community space 4", category: "community" },
  { src: img23, alt: "Community space 5", category: "community" },
  { src: img24, alt: "Community space 6", category: "community" },
  { src: img25, alt: "Community space 7", category: "community" },
  { src: img26, alt: "Community space 8", category: "community" },
  { src: img27, alt: "Community space 9", category: "community" },

  // Parking & Grounds
  { src: img28, alt: "Parking and grounds 1", category: "parking" },
  { src: img29, alt: "Parking and grounds 2", category: "parking" },
  { src: img30, alt: "Parking and grounds 3", category: "parking" },
  { src: img31, alt: "Parking and grounds 4", category: "parking" },
  { src: img32, alt: "Parking and grounds 5", category: "parking" },
  { src: img33, alt: "Parking and grounds 6", category: "parking" },
  { src: img34, alt: "Parking and grounds 7", category: "parking" },
  { src: parkingMap, alt: "Parking lot map", category: "parking" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('interior');

  const categories = [
    { id: 'interior', name: 'Unit Interior Photos', icon: Camera, color: 'text-pb-blue' },
    { id: 'exterior', name: 'Exterior Views', icon: Building, color: 'text-pb-green' },
    { id: 'community', name: 'Community Spaces', icon: Trees, color: 'text-pb-orange' },
    { id: 'parking', name: 'Parking & Grounds', icon: Car, color: 'text-pb-orange' },
  ];

  const filteredImages = galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pb-gray mb-4">Community Gallery</h2>
          <p className="text-xl text-gray-600">See what makes Woodstock special</p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-pb-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                data-testid={`gallery-tab-${category.id}`}
              >
                <IconComponent className={`w-5 h-5 ${activeCategory === category.id ? 'text-white' : category.color}`} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(image)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                data-testid="lightbox-close"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                data-testid="lightbox-prev"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                data-testid="lightbox-next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
                data-testid="lightbox-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
