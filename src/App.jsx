import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SignatureDelights from './components/SignatureDelights';
import OurStoryAndUSP from './components/OurStoryAndUSP';
import TestimonialsAndBooking from './components/TestimonialsAndBooking';
import Footer, { WhatsAppButton } from './components/Footer';

// Menu components
import MenuPage from './pages/MenuPage';
import WholeMenu from './pages/WholeMenu';

// Automatically scrolls to top on route change (or to a #hash section if present)
function ScrollHandler() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Any #menu link goes to WholeMenu (/menu)
    if (hash === '#menu') {
      navigate('/menu', { replace: true });
      return;
    }

    // 2. Any #home link goes to Home (/)
    if (hash === '#home' && pathname !== '/') {
      navigate('/', { replace: true });
      return;
    }

    // 3. If a section hash (#story, #reservations, #contact) is clicked while on /menu,
    // move back to Home (/) with that hash attached
    if (hash && pathname !== '/') {
      navigate(`/${hash}`, { replace: true });
      return;
    }

    // 4. Once on Home (/), wait a tick for sections to mount, then smooth-scroll
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash, navigate]);

  return null;
}

function Home() {
  const navigate = useNavigate();
  const ORDER_URL = 'https://beta.daiascafebakery.com/';
  const ZOMATO_URL = 'https://www.zomato.com';

  const handleOrderOnline = () => {
    window.open(ORDER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main>
      <HeroSection
        onOrderOnlineClick={handleOrderOnline}
        onExploreMenuClick={() => navigate('/menu')}
      />

      {/* Signature Delights / Small Menu Preview on Home */}
      <SignatureDelights
        onSelectDish={handleOrderOnline}
        onViewFullMenu={() => navigate('/menu')}
      />

      {/* Optional: if MenuPage is your small home-page menu preview, uncomment below: */}
      {/* <MenuPage onViewFullMenu={() => navigate('/menu')} /> */}

      <OurStoryAndUSP onOrderOnlineClick={handleOrderOnline} />

      <TestimonialsAndBooking zomatoUrl={ZOMATO_URL} />
    </main>
  );
}

// Inner layout so hooks like useNavigate & useLocation work inside BrowserRouter
function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Works whether the user is currently on Home (/) or WholeMenu (/menu)
  const navigateToSection = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1E1611] selection:bg-[#9E6B43] selection:text-[#FAF6F0]">
      <ScrollHandler />

      {/* Persistent Header across Home and WholeMenu */}
      <Navbar
        onBookTableClick={() => navigateToSection('reservations')}
        onNavigateSection={navigateToSection}
      />

      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Full 15-Image Menu Page */}
        <Route path="/menu" element={<WholeMenu />} />
      </Routes>

      {/* Persistent Footer & WhatsApp Button across all pages */}
      <Footer />
      <WhatsAppButton phone="917017885024" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}