/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouteMeta from './components/RouteMeta';
import Home from './pages/Home';
import FloorPlans from './pages/FloorPlans';
import SitePlan from './pages/SitePlan';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // A link like /floor-plans#wentworth (used by the Site Plan's lot table) should land on
    // that design, not the top of the page. The target page renders in the same commit, so
    // wait one tick for its sections to exist before looking for the anchor.
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteMeta />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/floor-plans" element={<FloorPlans />} />
            <Route path="/site-plan" element={<SitePlan />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
