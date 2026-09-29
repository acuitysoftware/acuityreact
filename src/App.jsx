import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import ServicesPage from "./pages/services/Services";
import IndustriesPage from "./pages/industries/Industries";
import PortfolioPage from "./pages/portfolio/Portfolio";
import BlogPage from "./pages/blog/Blog";
import ContactPage from "./pages/contact/Contact";
import { DEFAULT_MENU, DEFAULT_COMPANY, DEFAULT_SECTIONS } from "./data/defaultData";

const STORAGE_KEY = "acuity_site_config";

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    /* ignore */
  }
  return { menu: DEFAULT_MENU, company: DEFAULT_COMPANY, sections: DEFAULT_SECTIONS };
}

function SiteLayout({ menu, company, children }) {
  const initialPixelRatio = useRef(null);
  const [zoomCompensation, setZoomCompensation] = useState(1);

  useEffect(() => {
    initialPixelRatio.current = window.devicePixelRatio || 1;

    const matchInitialZoom = () => {
      const currentPixelRatio = window.devicePixelRatio || 1;
      setZoomCompensation(initialPixelRatio.current / currentPixelRatio);
    };

    window.addEventListener("resize", matchInitialZoom);
    return () => window.removeEventListener("resize", matchInitialZoom);
  }, []);

  return (
    <div style={{ zoom: zoomCompensation }}>
      <Header menu={menu} company={company} />
      {children}
      <Footer company={company} menu={menu} />
    </div>
  );
}

export default function App() {
  const [config, setConfig] = useState(loadConfig);
  const { menu, company, sections } = config;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} newestOnTop />
      <Routes>
        <Route path="/" element={<SiteLayout menu={menu} company={company}><Home sections={sections} /></SiteLayout>} />
        <Route path="/about" element={<SiteLayout menu={menu} company={company}><AboutPage company={company} /></SiteLayout>} />
        <Route path="/services" element={<SiteLayout menu={menu} company={company}><ServicesPage /></SiteLayout>} />
        <Route path="/industries" element={<SiteLayout menu={menu} company={company}><IndustriesPage /></SiteLayout>} />
        <Route path="/portfolio" element={<SiteLayout menu={menu} company={company}><PortfolioPage /></SiteLayout>} />
        <Route path="/blog" element={<SiteLayout menu={menu} company={company}><BlogPage /></SiteLayout>} />
        <Route path="/contact" element={<SiteLayout menu={menu} company={company}><ContactPage company={company} /></SiteLayout>} />

      </Routes>
    </BrowserRouter>
  );
}
