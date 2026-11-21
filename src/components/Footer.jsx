import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function WhatsAppButton({ phone = '917017885024' }) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hi Daia's Cafe & Bakery! I'd like to place an order / make an inquiry."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-[#FAF6F0] hover:bg-white text-[#1E1611] border border-[#1E1611]/15 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
    >
      <span className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center">
        <MessageCircle size={14} fill="white" />
      </span>
      <span className="text-xs font-semibold tracking-wide">WhatsApp</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#18110D] text-[#EAE0D5] pt-20 pb-10 border-t border-[#FAF6F0]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF6F0]/10">
          {/* Col 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col leading-none">
              <span className="font-serif-editorial text-4xl font-semibold text-[#D6A679]">
                Daia&apos;s
              </span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#EAE0D5]/70 mt-1">
                Cafe &amp; Bakery
              </span>
            </div>
            <p className="text-sm text-[#EAE0D5]/75 leading-relaxed max-w-sm pt-2">
              Your neighborhood escape in Dehradun, where freshly baked
              delights and soulful brews come together. Crafted with passion and
              served with warmth.
            </p>
          </div>

          {/* Col 2: Contact & Location */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#D6A679] font-semibold">
              Visit &amp; Contact
            </h4>

            <ul className="space-y-3.5 text-sm text-[#EAE0D5]/85">
              <li className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="text-[#D6A679] shrink-0 mt-0.5"
                />
                <span>
                  Ground Floor, 4/1, Kumar Tower, Municipal Road, Dalanwala,
                  Dehradun – 248001
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={17} className="text-[#D6A679] shrink-0" />
                <a
                  href="tel:+917017885024"
                  className="hover:text-[#D6A679] transition-colors"
                >
                  +91 70178 85024
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[#D6A679] shrink-0" />
                <a
                  href="mailto:daiasbakerycafe@gmail.com"
                  className="hover:text-[#D6A679] transition-colors"
                >
                  daiasbakerycafe@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours & Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#D6A679] font-semibold">
              Opening Hours
            </h4>

            <div className="flex items-start gap-3 text-sm text-[#EAE0D5]/85">
              <Clock size={17} className="text-[#D6A679] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#FAF6F0]">All Days</p>
                <p className="text-[#EAE0D5]/75 mt-0.5">11:00 AM – 10:00 PM</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-5 text-xs uppercase tracking-[0.16em] text-[#EAE0D5]/70">
              <a
                href="#home"
                className="hover:text-[#D6A679] transition-colors"
              >
                Home
              </a>
              <a
                href="#menu"
                className="hover:text-[#D6A679] transition-colors"
              >
                Menu
              </a>
              <a
                href="#reservations"
                className="hover:text-[#D6A679] transition-colors"
              >
                Book Table
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE0D5]/55">
          <p>© 2026 Daia&apos;s Cafe &amp; Bakery (Butter &amp; Bloom Co.). All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#EAE0D5] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#EAE0D5] transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#refund" className="hover:text-[#EAE0D5] transition-colors">
              Refund &amp; Cancellation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}