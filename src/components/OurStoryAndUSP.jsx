import React from 'react';
import OrderButton from './OrderButton';
import defaultStoryImg from '../assets/10010.png';
import {
  Croissant,
  Coffee,
  Heart,
  Leaf,
  Armchair,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const USP_ITEMS = [
  {
    icon: Croissant,
    title: 'Freshly Baked Daily',
    description:
      'Enjoy soft, flavorful treats made fresh every morning for peak taste and texture.',
  },
  {
    icon: Coffee,
    title: 'Artisan Coffee',
    description:
      'Savor perfectly dialed-in espresso and soulful brews crafted to complement every bite.',
  },
  {
    icon: Heart,
    title: 'Made with Passion',
    description:
      'Every loaf, tart, and pastry is shaped with genuine care and attention to detail.',
  },
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description:
      'Carefully sourced butter, single-origin chocolate, and seasonal produce for pure flavor.',
  },
  {
    icon: Armchair,
    title: 'Cozy Ambience',
    description:
      'Unwind in a warm, sunlit Dalanwala corner designed for slow mornings and easy conversation.',
  },
  {
    icon: Sparkles,
    title: 'Memorable Experience',
    description:
      'Thoughtful crockery, attentive service, and comfort that makes every visit worth returning to.',
  },
];

export default function OurStoryAndUSP({
  onOrderOnlineClick,
  storyImage = defaultStoryImg,
}) {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Part: Editorial Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-[#1E1611]/10">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E6B43] font-semibold">
              Our Story &amp; Craft
            </span>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-medium text-[#1E1611] leading-[1.12]">
              Your Neighborhood Escape in Dehradun
            </h2>

            <p className="text-base text-[#4A3F38] leading-relaxed">
              Daia&apos;s Cafe &amp; Bakery is where freshly baked delights and
              soulful brews come together. Crafted with passion and served with
              warmth, every visit is designed to make you slow down, relax, and
              feel right at home.
            </p>

            <p className="text-base text-[#6B5D54] leading-relaxed">
              Whether you&apos;re stopping by for a quiet morning cappuccino,
              catching up with friends over desserts, or looking for a peaceful
              corner in Dalanwala to unwind, we take pride in creating not just
              food, but moments worth coming back for.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
            <OrderButton>Order Fresh Bakes</OrderButton>

              <div className="border-l border-[#1E1611]/20 pl-5">
                <p className="font-serif-editorial text-2xl font-semibold text-[#1E1611]">
                  100%
                </p>
                <p className="text-xs text-[#6B5D54] tracking-wide">
                  Baked In-House Daily
                </p>
              </div>
            </div>
          </div>

          {/* Right Framed Bakery Craft Photo */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-[#E8DFD3] shadow-md">
                <img
                  src={storyImage}
                  alt="Artisan baker plating fresh pastries at Daia's Cafe & Bakery"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Editorial Quote Card */}
              <div className="hidden sm:block max-w-xs bg-[#F2EBE1] border border-[#1E1611]/10 p-5 rounded-[4px] shadow-sm -mt-12 ml-6 relative z-10">
                <p className="font-serif-editorial italic text-lg text-[#1E1611] leading-snug">
                  &ldquo;Time-honored baking techniques, pure ingredients, and
                  warmth in every cup.&rdquo;
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#9E6B43] mt-2 font-semibold">
                  Our Promise
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: The USP 3x2 Grid */}
        <div className="pt-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E6B43] font-semibold">
              Why Choose Us
            </span>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-medium text-[#1E1611] mt-2">
              Thoughtfully Crafted, Down to Every Detail
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USP_ITEMS.map((usp) => {
              const IconComponent = usp.icon;
              return (
                <div
                  key={usp.title}
                  className="bg-[#F2EBE1]/75 hover:bg-[#F2EBE1] border border-[#1E1611]/8 p-7 rounded-[4px] transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-sm bg-[#FAF6F0] border border-[#1E1611]/10 flex items-center justify-center text-[#9E6B43] group-hover:bg-[#9E6B43] group-hover:text-[#FAF6F0] transition-colors mb-5">
                    <IconComponent size={20} strokeWidth={1.6} />
                  </div>
                  <h4 className="font-serif-editorial text-2xl font-medium text-[#1E1611] mb-2">
                    {usp.title}
                  </h4>
                  <p className="text-sm text-[#6B5D54] leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}