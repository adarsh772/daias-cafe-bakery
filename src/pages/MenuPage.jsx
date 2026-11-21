import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBannerImg from '../assets/10014.jpg';

// Automatically bundles all 15 menu images from src/assets (supports 10001-100015 or 100001-100015)
const imageModules = import.meta.glob(
  '../assets/1000*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

const MENU_IMAGES = Object.entries(imageModules)
  .map(([path, module]) => {
    const match = path.match(/10+([1-9]\d*)\./);
    const num = match ? parseInt(match[1], 10) : 0;

    return {
      id: num,
      // Pages 1–8 = Food Menu, Pages 9–15 = Desserts & Beverages Menu
      category: num <= 8 ? 'food' : 'desserts',
      title:
        num <= 8
          ? `Food Menu - Page ${num}`
          : `Desserts & Beverages - Page ${num - 8}`,
      url: module.default,
    };
  })
  .filter((item) => item.id >= 1 && item.id <= 15)
  .sort((a, b) => a.id - b.id);

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    activeTab === 'all'
      ? MENU_IMAGES
      : MENU_IMAGES.filter((item) => item.category === activeTab);

  // Keyboard support (Escape, Left Arrow, Right Arrow) inside Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === 0 ? filteredImages.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredImages.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2B170E] font-sans">
      {/* ================= HERO BANNER ================= */}
      <section
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      >
        {/* Dark Warm Overlay */}
        <div className="absolute inset-0 bg-[#23140D]/70" />

        <div className="relative z-10 px-4">
          <p className="text-sm sm:text-base font-serif tracking-wide text-white/90 mb-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Menu</span>
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide drop-shadow">
            Daia&rsquo;s Cafe &amp; Bakery
          </h1>
        </div>
      </section>

      {/* ================= FILTER TABS & MENU GALLERY ================= */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {[
            { id: 'all', label: 'All' },
            { id: 'food', label: 'Food Menu' },
            { id: 'desserts', label: 'Desserts Menu' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedIndex(null);
                }}
                className={`px-6 sm:px-8 py-3 rounded-md font-serif text-base sm:text-lg transition cursor-pointer border ${
                  isActive
                    ? 'bg-[#542714] text-white border-[#542714] shadow-sm'
                    : 'bg-white text-[#542714] border-[#542714] hover:bg-[#FAF4F0]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Responsive 15-Image Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative bg-[#FAF7F2] rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-[#E5D7CC] transition cursor-zoom-in"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-contain block transition duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute bottom-3 right-3 bg-[#542714]/85 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Tap to zoom</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ================= LIGHTBOX MODAL (FOR ZOOMING MENU) ================= */}
      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            aria-label="Close zoom view"
            className="fixed top-5 right-5 bg-white text-[#542714] p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev === 0 ? filteredImages.length - 1 : prev - 1
              );
            }}
            aria-label="Previous page"
            className="fixed left-4 sm:left-8 bg-white/90 text-[#542714] p-2.5 rounded-full shadow-lg hover:bg-white cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={filteredImages[selectedIndex].url}
            alt={filteredImages[selectedIndex].title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded shadow-2xl object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
            }}
            aria-label="Next page"
            className="fixed right-4 sm:right-8 bg-white/90 text-[#542714] p-2.5 rounded-full shadow-lg hover:bg-white cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}