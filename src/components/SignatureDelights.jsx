import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const SIGNATURE_ITEMS = [
  {
    id: 1,
    name: 'AGLIO E OLIO',
    
    category: 'Artisan Dessert',
    image:
      'src/assets/10003.jpg',
  },
  {
    id: 2,
    name: 'FOLDED PIZZA SANDWICH',
   
    category: 'Fresh Bake',
    image:
      'src/assets/10004.jpg',
  },
  {
    id: 3,
    name: 'SHIITAKE MUSHROOM SANDWICH',
    
    category: 'Savory',
    image:
      'src/assets/10005.jpg',
  },
  {
    id: 4,
    name: 'PECAN PIE',
    
    category: 'House Special',
    image:
      'src/assets/10006.jpg',
  },
  {
    id: 5,
    name: 'MATCHA STRAWBERRY TART',
   
    category: 'Kitchen',
    image:
      'src/assets/10007.jpg',
  },
  {
    id: 6,
    name: 'Cappuccino',
    
    category: 'Savory',
    image:
      'src/assets/10008.jpg',
  },
];

export default function SignatureDelights({
  onSelectDish,
  ambienceImage = 'src/assets/10013.jpg',
}) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? SIGNATURE_ITEMS.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= SIGNATURE_ITEMS.length - visibleCount ? 0 : prev + 1
    );
  };

  const visibleItems = SIGNATURE_ITEMS.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section
      id="menu"
      className="py-16 md:py-24 bg-[#FAF6F0] border-b border-[#1E1611]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Moody Terracotta Interior Ambience Card */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[4px] bg-[#2B1D16] shadow-sm group">
              <img
                src={ambienceImage}
                alt="Cozy warm booth seating inside Daia's Cafe & Bakery"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1611]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#FAF6F0]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E6C7A8]">
                  The Space
                </p>
                <p className="font-serif-editorial text-xl mt-0.5">
                  Slow mornings &amp; warm corners
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Header + Controls + 3-Card Product Grid */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Section Header & Carousel Controls */}
            <div className="flex items-center justify-between mb-7">
              <div>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-[42px] font-medium text-[#1E1611] tracking-tight">
                  Signature Delights
                </h2>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous dishes"
                  className="w-9 h-9 rounded-full border border-[#1E1611]/20 flex items-center justify-center text-[#1E1611] hover:bg-[#1E1611] hover:text-[#FAF6F0] transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} strokeWidth={1.75} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next dishes"
                  className="w-9 h-9 rounded-full border border-[#1E1611]/20 flex items-center justify-center text-[#1E1611] hover:bg-[#1E1611] hover:text-[#FAF6F0] transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} strokeWidth={1.75} />
                </button>
              </div>
            </div>

            {/* Dish Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectDish?.(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Square Dish Image */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-[4px] bg-[#EFE8DD] mb-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle Hover Quick-Order Pill */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#FAF6F0]/95 backdrop-blur-sm text-[#1E1611] text-[11px] font-medium px-3 py-1.5 rounded-[3px] flex items-center gap-1 shadow-sm">
                      <span>Order</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>

                  {/* Dish Title & Price */}
                  <h3 className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.06em] uppercase text-[#1E1611] group-hover:text-[#9E6B43] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-[#6B5D54] mt-1">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}