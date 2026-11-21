import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react';
import OrderButton from './OrderButton';
import defaultReservationBg from '../assets/10013.jpg';

const REVIEWS = [
  {
    id: 1,
    name: 'Sheetal Babra',
    tag: 'Regular Guest • Dehradun',
    quote:
      "Loved the experience at Daia's—now it's going to be our go-to spot in Dehradun. Every dish is curated with thought to bring authentic taste to our tastebuds, and the presentation is lovely.",
  },
  {
    id: 2,
    name: 'Shubhanshu Jaiswal',
    tag: 'Dessert Lover',
    quote:
      'The food, service, aesthetics, and ambience are great. Their desserts are mind-blowing. Must try: tiramisu bathtub, strawberry tart, and eclair.',
  },
  {
    id: 3,
    name: 'Aviral Jain',
    tag: 'Coffee & Bakes',
    quote:
      "If you appreciate well-crafted desserts, Daia's Cafe & Bakery is absolutely worth a visit. The space has a calm, cozy vibe, simple yet thoughtfully done, and perfect for slowing down over good coffee.",
  },
  {
    id: 4,
    name: 'Aarzoo Jain',
    tag: 'Verified Diner',
    quote:
      'The food is absolutely delicious and the crockery is such that you feel like looking at it more than eating it—perfection in everything, something new and different.',
  },
  {
    id: 5,
    name: 'Prateek Garg',
    tag: 'Dalanwala Local',
    quote:
      "Daia's is the new cozy spot in Dalanwala for your fresh bakes, exquisite desserts, and great coffee.",
  },
];

export default function TestimonialsAndBooking({
  zomatoUrl = 'https://www.zomato.com',
  reservationBg = defaultReservationBg,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-[#F2EBE1]/60 border-t border-[#1E1611]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {/* Part 1: Editorial Guest Reviews */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E6B43] font-semibold">
            Guest Stories
          </span>

          {/* 5 Minimal Gold Stars */}
          <div className="flex items-center justify-center gap-1.5 mt-4 mb-7 text-[#9E6B43]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#9E6B43" strokeWidth={0} />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-serif-editorial italic text-2xl sm:text-3xl md:text-[34px] text-[#1E1611] leading-relaxed min-h-[130px] flex items-center justify-center transition-opacity duration-300">
            &ldquo;{currentReview.quote}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E1611]">
              {currentReview.name}
            </p>
            <p className="text-xs text-[#6B5D54] mt-1">{currentReview.tag}</p>
          </div>

          {/* Controls & Dots */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-[#1E1611]/20 flex items-center justify-center text-[#1E1611] hover:bg-[#1E1611] hover:text-[#FAF6F0] transition-colors cursor-pointer"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex items-center gap-2">
              {REVIEWS.map((review, idx) => (
                <button
                  key={review.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex
                      ? 'w-6 bg-[#9E6B43]'
                      : 'w-1.5 bg-[#1E1611]/20 hover:bg-[#1E1611]/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-[#1E1611]/20 flex items-center justify-center text-[#1E1611] hover:bg-[#1E1611] hover:text-[#FAF6F0] transition-colors cursor-pointer"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Part 2: Reserve Your Table Card */}
        <div
          id="reservations"
          className="relative overflow-hidden rounded-[6px] bg-[#807168] text-[#FAF6F0] shadow-lg"
        >
          <img
            src={reservationBg}
            alt="Warm table setting at Daia's Cafe & Bakery"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18110D]/95 via-[#18110D]/80 to-[#18110D]/55" />

          <div className="relative z-10 px-8 py-14 sm:px-14 md:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#E6C7A8] font-medium mb-3">
                <Calendar size={14} />
                <span>Table Reservations</span>
              </div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-medium text-[#FAF6F0]">
                Reserve Your Table
              </h3>

              <p className="text-sm sm:text-base text-[#EAE0D5]/85 mt-3 leading-relaxed">
                Planning a slow morning coffee or an evening dessert date? Book your table ahead for a relaxed, unhurried experience at Daia's.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <OrderButton>Reserve Your Table</OrderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}