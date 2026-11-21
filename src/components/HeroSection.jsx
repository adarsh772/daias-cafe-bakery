import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import defaultHeroImage from '../assets/10012.jpg';
import OrderButton from './OrderButton';

export default function HeroSection({
  onOrderOnlineClick,
  onExploreMenuClick,
  heroImage = defaultHeroImage,
}) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[620px] h-[88vh] max-h-[900px] flex flex-col justify-end items-center overflow-hidden bg-[#18110D] pb-16 sm:pb-20 md:pb-24"
    >
      {/* Background Photography Positioned Slightly Higher to Keep Signage Visible */}
      <img
        src={heroImage}
        alt="Daia's Cafe & Bakery warm interior and fresh artisan pastries"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[center_28%] md:object-[center_22%] transition-transform duration-1000"
      />

      {/* Lighter Top Gradient (Reveals Storefront Name) + Rich Bottom Gradient (Protects Text Contrast) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#16100C]/25 via-[#16100C]/45 to-[#16100C]/92"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_35%,rgba(22,16,12,0.55)_100%)]"
        aria-hidden="true"
      />

      {/* Bottom-Aligned Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Location Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-6 sm:w-10 bg-[#E6C7A8]/60" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E6C7A8] font-medium">
            Dalanwala &bull; Dehradun
          </span>
          <span className="h-[1px] w-6 sm:w-10 bg-[#E6C7A8]/60" aria-hidden="true" />
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium text-[#FAF6F0] leading-[1.08] tracking-tight drop-shadow-md">
          Baked with Love,
          <br />
          <span className="italic font-normal text-[#F3E5D5]">Served with Warmth</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#EAE0D5]/90 max-w-lg font-normal leading-relaxed">
          Every loaf, pastry, and cup is crafted fresh each morning with care and heart.
        </p>

        {/* Action Buttons */}
       <div className="mt-7 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4  w-full max-w-md mx-auto [&>*]:w-full [&>*]:h-12">
  <OrderButton />

  <a
    href="#menu"
    onClick={(e) => {
      if (onExploreMenuClick) {
        e.preventDefault();
        onExploreMenuClick();
      }
    }}
    className="w-full h-12 inline-flex items-center justify-center border border-[#FAF6F0]/55 hover:border-[#FAF6F0] bg-[#16100C]/45 hover:bg-[#FAF6F0]/12 active:scale-[0.98] backdrop-blur-xs text-[#FAF6F0] text-sm font-medium tracking-wide rounded-[4px] transition-all duration-200 whitespace-nowrap"
  >
    Explore Menu
  </a>
</div>
      </div>

      {/* Subtle Scroll Cue */}
      <a
        href="#story"
        aria-label="Scroll to our story"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#EAE0D5]/60 hover:text-[#FAF6F0] transition-colors duration-200 flex items-center gap-1.5"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}