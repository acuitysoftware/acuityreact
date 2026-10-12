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
import { DEFAULT_COMPANY, DEFAULT_SECTIONS } from "./data/defaultData";
import { getHeaderList } from "./api/header/header";
import { getSiteSettings } from "./api/site";

const STORAGE_KEY = "acuity_site_config";

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const savedConfig = JSON.parse(raw);
      return {
        company: savedConfig.company || DEFAULT_COMPANY,
        sections: savedConfig.sections || DEFAULT_SECTIONS,
      };
    }
  } catch (e) {
    /* ignore */
  }
  return { company: DEFAULT_COMPANY, sections: DEFAULT_SECTIONS };
}

const toPathSegment = (label) =>
  label
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const KNOWN_MENU_PATHS = {
  Home: "/",
  "About Us": "/about",
  Services: "/services",
  Industries: "/industries",
  Portfolio: "/portfolio",
  Blog: "/blog",
  "Contact Us": "/contact",
};

function mapHeaderMenus(apiMenus) {
  return apiMenus.map((item) => {
    const link = KNOWN_MENU_PATHS[item.name] || `/${toPathSegment(item.name || "")}`;
    const children = Array.isArray(item.child_menus) ? item.child_menus : [];

    return {
      id: item.id,
      label: item.name,
      link,
      enabled: true,
      children: children.map((child) => ({
        id: child.id,
        label: child.name,
        link: `${link}/${toPathSegment(child.name || "")}`,
      })),
    };
  });
}

function SiteLayout({ menu, company, logo, children }) {
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
      <Header menu={menu} company={company} logo={logo} />
      {children}
      <Footer company={company} menu={menu} />
    </div>
  );
}

export default function App() {
  const [config, setConfig] = useState(loadConfig);
  const [menu, setMenu] = React.useState([]);
  const [siteSettings, setSiteSettings] = React.useState(null);
  const { company, sections } = config;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    let isMounted = true;

    async function loadHeaderMenu() {
      try {
        const response = await getHeaderList();
        if (response?.status !== true || !Array.isArray(response.data)) {
          throw new Error("Unexpected header menu response");
        }

        if (isMounted) {
          setMenu(mapHeaderMenus(response.data));
        }
      } catch (error) {
        console.error("Unable to load header menu:", error);
      }
    }

    loadHeaderMenu();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadSettings() {
      try {
        const response = await getSiteSettings();
        if (response?.status !== true || !response.data || typeof response.data !== "object") {
          throw new Error("Unexpected site settings response");
        }

        if (isMounted) {
          setSiteSettings(response.data);
        }
      } catch (error) {
        console.error("Unable to load site settings:", error);
      }
    }

    loadSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!siteSettings?.favicon_path) {
      return;
    }

    let favicon = document.querySelector('link[rel~="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.href = siteSettings.favicon_path;
  }, [siteSettings?.favicon_path]);

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} newestOnTop />
      <Routes>
        <Route path="/" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><Home sections={sections} /></SiteLayout>} />
        <Route path="/about" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><AboutPage company={company} /></SiteLayout>} />
        <Route path="/services" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><ServicesPage /></SiteLayout>} />
        <Route path="/industries" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><IndustriesPage /></SiteLayout>} />
        <Route path="/portfolio" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><PortfolioPage /></SiteLayout>} />
        <Route path="/blog" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><BlogPage /></SiteLayout>} />
        <Route path="/contact" element={<SiteLayout menu={menu} company={company} logo={siteSettings?.logo_path}><ContactPage company={company} /></SiteLayout>} />

      </Routes>
    </BrowserRouter>
  );
}
