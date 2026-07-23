import React, { useEffect } from 'react';
import logo from './logo.svg';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Slider/Slider';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import DevelopmentProjects from './components/DevelopmentProjects/DevelopmentProjects';
import NewsUpdates from './components/Newsdata/Newsdata';
import Gallery from './components/Gallery/Gallery';
import CitizenServices from './components/CitizenServices/CitizenServices';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Helper to set cookie for Google Translate
    const setLanguageCookie = (langCode) => {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
    };

    // Global callback for Google Translate Script
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    // Inject Google Translate script globally
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addGoogleTranslateScript();
  }, []);

  // Global handler to switch language dynamically across all components
// Global handler to switch language dynamically without page reload
const changeLanguage = (langCode) => {
  // 1. Update the cookie for Google Translate
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${langCode}; path=/;`;

  // 2. Locate the Google Translate select dropdown
  const select = document.querySelector('.goog-te-combo');

  if (select) {
    select.value = langCode;
    // Fire both 'change' and 'input' events so Google Translate registers it immediately
    select.dispatchEvent(new Event('change', { bubbles: true }));
    select.dispatchEvent(new Event('input', { bubbles: true }));
  } else {
    // 3. Fallback: If select isn't ready in DOM yet, attempt iframe trigger
    const iframe = document.querySelector('iframe.goog-te-banner-frame');
    if (iframe) {
      try {
        const selectInside = iframe.contentWindow.document.querySelector('.goog-te-combo');
        if (selectInside) {
          selectInside.value = langCode;
          selectInside.dispatchEvent(new Event('change', { bubbles: true }));
        }
      } catch (e) {
        // Cross-origin restriction fallback
        window.location.reload();
      }
    } else {
      // Soft refresh only if script failed to load entirely
      window.location.reload();
    }
  }
};
  return (
    <div className="relative">
      {/* Container required by Google Translate (Keep offscreen rather than display:none so it initializes) */}
      <div 
        id="google-translate-element" 
        className="absolute top-0 left-0 -z-50 opacity-0 pointer-events-none h-0 w-0 overflow-hidden" 
      />

      {/* Pass changeLanguage function to Navbar */}
      <Navbar onLanguageChange={changeLanguage} />

      <Hero />
      <WelcomeMessage />
      <About />
      <MyWork />
      <DevelopmentProjects />
      <NewsUpdates />
      <Gallery />
      <CitizenServices />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;