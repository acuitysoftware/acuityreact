import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import IndustriesPage from "./pages/Industries";
import PortfolioPage from "./pages/Portfolio";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import AdminLayout from "./admin/layout/AdminLayout";
import Login from "./admin/auth/Login";
import Register from "./admin/auth/Register";
import SiteSettings from "./admin/pages/SiteSettings";
import CmsSettings from "./admin/pages/CmsSettings";
import HomeSettings from "./admin/pages/HomeSettings";
import HeaderManagement from "./admin/pages/menu-settings/HeaderManagement";
import FooterManagement from "./admin/pages/menu-settings/FooterManagement";
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
  return (
    <div>
      <TopBar company={company} />
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

  // Central save function used by every admin panel. Swap the localStorage
  // persistence above for a real API call to your backend/CMS database
  // when you wire this project up to one.
  const save = useCallback((next) => {
    setConfig((prev) => ({ ...prev, ...next }));
  }, []);

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

        {/* Auth pages — standalone, no sidebar/header */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />

        {/* Admin panel: header + sidebar are rendered once by AdminLayout,
            and each tab renders inside its <Outlet />. Props are passed
            through context below once the forms are wired up to an API;
            for now each tab page is a placeholder. */}
        <Route path="/admin" element={<AdminLayout company={company} />}>
          <Route index element={<SiteSettings />} />
          <Route path="site-settings" element={<SiteSettings company={company} save={save} />} />
          <Route path="cms-settings" element={<CmsSettings sections={sections} save={save} />} />
          <Route path="home-settings" element={<HomeSettings sections={sections} save={save} />} />
          <Route path="menu-settings/header" element={<HeaderManagement menu={menu} save={save} />} />
          <Route path="menu-settings/footer" element={<FooterManagement company={company} save={save} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
