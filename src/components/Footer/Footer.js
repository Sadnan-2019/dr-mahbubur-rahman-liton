import React from "react";
import {
  FaBuildingColumns,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaHeart,
  FaArrowUp,
  FaShieldHalved,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative border-t border-slate-800/80 overflow-hidden">
      {/* Decorative Top Green Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500" />

      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-emerald-600/5 blur-3xl pointer-events-none" />

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-xl shadow-lg shadow-emerald-950">
                <FaBuildingColumns />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-wide">
                  Office of the MP
                </h3>
                <p className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  Constituency No. 182
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Official digital portal of the Member of Parliament, dedicated to transparent governance, constituent empowerment, and regional development under the Parliament of Bangladesh.
            </p>

            {/* Social Connect Links */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Official Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-500 flex items-center justify-center transition-all duration-300"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-sm" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-600 flex items-center justify-center transition-all duration-300"
                  aria-label="X Twitter"
                >
                  <FaXTwitter className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {["Biography", "Development Works", "Constituency News", "Parliament Speeches", "Photo Gallery", "Media Kit"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-block py-0.5"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Citizen Portals (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Citizen Portals
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  DO Recommendation Request
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Educational Stipend Application
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Emergency Medical Aid Request
                </a>
              </li>
              <li>
                <a href="https://bangladesh.gov.bd" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  National Web Portal (bangladesh.gov.bd)
                </a>
              </li>
              <li>
                <a href="https://parliament.gov.bd" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Bangladesh Parliament Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Emergency Contacts & Secretariat (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Secretariat Helpline
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <FaLocationDot className="text-emerald-400 mt-1 shrink-0" />
                <span>Constituency Public Office, Main Bazar Road, Ward 04</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="text-emerald-400 shrink-0" />
                <span>+880 1700-000000 (Hotline)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-emerald-400 shrink-0" />
                <span>contact@mp-office.gov.bd</span>
              </div>
            </div>

            {/* National Emergency Services Badge */}
            <div className="pt-2">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3">
                <FaShieldHalved className="text-2xl text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[11px] font-bold text-white">National Helplines</span>
                  <span className="text-[10px] text-slate-400">Emergency: 999 | Info: 333</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-slate-800/80" />

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} Office of the Member of Parliament. All Rights Reserved. 
            <span className="block sm:inline sm:ml-2 text-slate-600">
              Designed for Public Service & Transparency.
            </span>
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-all duration-300 text-xs font-semibold"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;