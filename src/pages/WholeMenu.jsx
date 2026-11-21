import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// Strictly loads 6-digit files: 100001 through 100015 from src/assets
const imageModules = import.meta.glob(
  '../assets/1000[0-1][0-9].{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

const ALL_MENU_PAGES = Object.entries(imageModules)
  .map(([path, module]) => {
    const match = path.match(/\/1000(\d{2})\./);
    const num = match ? parseInt(match[1], 10) : 0;

    return {
      id: num,
      section: num <= 8 ? 'food' : 'desserts',
      title:
        num <= 8
          ? `Food Menu - Page ${num}`
          : `Desserts & Beverages - Page ${num - 8}`,
      image: module.default,
    };
  })
  .filter((item) => item.id >= 1 && item.id <= 15)
  .sort((a, b) => a.id - b.id);

export default function WholeMenu() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const foodPages = ALL_MENU_PAGES.filter((p) => p.section === 'food');
  const dessertPages = ALL_MENU_PAGES.filter((p) => p.section === 'desserts');

  const visiblePages =
    activeTab === 'all'
      ? ALL_MENU_PAGES
      : activeTab === 'food'
      ? foodPages
      : dessertPages;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % visiblePages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === 0 ? visiblePages.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, visiblePages.length]);

  const openLightbox = (pageId) => {
    const idx = visiblePages.findIndex((p) => p.id === pageId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C1E16]">
      {/* Breadcrumb & Hero Banner (Matches beta.daiascafebakery.com/menu.html) */}
      <section className="pt-28 pb-12 px-6 bg-[#2C1E16] text-[#FAF6F0] text-center">
        <nav className="text-xs tracking-[0.2em] uppercase text-[#C9A684] mb-3">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Menu</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl mb-3">
          Daia&apos;s Cafe &amp; Bakery
        </h1>
        <p className="text-sm text-[#D6C7B8] max-w-xl mx-auto">
          Tap any menu page below to zoom in and explore our complete food,
          artisan bakery, and beverage selection.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { id: 'all', label: 'All' },
            { id: 'food', label: 'Food Menu' },
            { id: 'desserts', label: 'Desserts & Bakery' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#9C6B43] text-white font-medium shadow-sm'
                  : 'bg-[#3D2B20] text-[#E6D8C8] hover:bg-[#4E382A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Sections (Arranged in 2 Separate Blocks like beta.daiascafebakery.com/menu.html) */}
      <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Section 1: Food Menu (100001 - 100008) */}
        {(activeTab === 'all' || activeTab === 'food') &&
          foodPages.length > 0 && (
            <section>
              {activeTab === 'all' && (
                <div className="text-center mb-8">
                  <p className="text-xs tracking-[0.22em] uppercase text-[#9C6B43] mb-1">
                    SAVOURY &amp; MAINS
                  </p>
                  <h2 className="font-serif text-3xl text-[#2C1E16]">
                    Food Menu
                  </h2>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {foodPages.map((page) => (
                  <div
                    key={page.id}
                    onClick={() => openLightbox(page.id)}
                    className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-[#E5DACB] bg-white transition cursor-zoom-in"
                  >
                    <img
                      src={page.image}
                      alt={page.title}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute bottom-3 right-3 bg-[#2C1E16]/80 text-[#FAF6F0] px-3 py-1.5 rounded-full text-[11px] flex items-center gap-1.5 opacity-85 group-hover:opacity-100 transition">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Zoom</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Section 2: Desserts & Beverages Menu (100009 - 100015) */}
        {(activeTab === 'all' || activeTab === 'desserts') &&
          dessertPages.length > 0 && (
            <section>
              {activeTab === 'all' && (
                <div className="text-center mb-8 pt-4 border-t border-[#E5DACB]">
                  <p className="text-xs tracking-[0.22em] uppercase text-[#9C6B43] mb-1">
                    ARTISAN PASTRIES &amp; BREWS
                  </p>
                  <h2 className="font-serif text-3xl text-[#2C1E16]">
                    Desserts &amp; Bakery Menu
                  </h2>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {dessertPages.map((page) => (
                  <div
                    key={page.id}
                    onClick={() => openLightbox(page.id)}
                    className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-[#E5DACB] bg-white transition cursor-zoom-in"
                  >
                    <img
                      src={page.image}
                      alt={page.title}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute bottom-3 right-3 bg-[#2C1E16]/80 text-[#FAF6F0] px-3 py-1.5 rounded-full text-[11px] flex items-center gap-1.5 opacity-85 group-hover:opacity-100 transition">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Zoom</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
      </main>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && visiblePages[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close zoom view"
            className="fixed top-5 right-5 bg-white text-[#2C1E16] p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === 0 ? visiblePages.length - 1 : prev - 1
              );
            }}
            aria-label="Previous page"
            className="fixed left-4 sm:left-8 bg-white/90 text-[#2C1E16] p-2.5 rounded-full shadow-lg hover:bg-white cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={visiblePages[lightboxIndex].image}
            alt={visiblePages[lightboxIndex].title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded shadow-2xl object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % visiblePages.length);
            }}
            aria-label="Next page"
            className="fixed right-4 sm:right-8 bg-white/90 text-[#2C1E16] p-2.5 rounded-full shadow-lg hover:bg-white cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}