import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import OrderButton from './OrderButton';
import logoImg from '../assets/1.png';

const NAV_LINKS = [
  { name: 'Home', href: '#home', active: true },
  { name: 'Our Story', href: '#story', active: false },
  { name: 'Menu', href: '#menu', active: false },
  { name: 'Reservations', href: '#reservations', active: false },
  { name: 'Contact Us', href: '#contact', active: false },
];

export default function Navbar({ onBookTableClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-[#FAF6F0] py-5'
      } border-b border-[#1E1611]/10`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col leading-none group">
          <span className="font-serif-editorial text-3xl md:text-4xl font-semibold tracking-tight text-[#8C5E35] group-hover:text-[#1E1611] transition-colors">
             <img src={logoImg} alt="logo"  className='h-12.5'/>
          </span>
          
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive
                    ? 'text-[#1E1611]'
                    : 'text-[#6B5D54] hover:text-[#1E1611]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#9E6B43]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
  <OrderButton />
</div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1E1611] hover:bg-[#F2EBE1] rounded-md"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-t border-[#1E1611]/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium py-1 ${
                  activeTab === link.name
                    ? 'text-[#9E6B43]'
                    : 'text-[#1E1611]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookTableClick?.();
            }}
            className="w-full bg-[#9E6B43] text-[#FAF6F0] text-sm font-medium py-3 rounded-[4px]"
          >
            Book a Table
          </button>
        </div>
      )}
    </header>
  );
}