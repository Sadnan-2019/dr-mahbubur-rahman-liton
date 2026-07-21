import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBuildingColumns,
  FaBars,
  FaXmark,
  FaChevronDown,
  FaPhone,
  FaFileSignature,
  FaLanguage,
} from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  // Track specifically WHICH menu item is open (stores item name string or null)
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  
  const [lang, setLang] = useState("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "BN" : "EN"));
  };

  const navLinkClass = ({ isActive }) =>
    `font-semibold text-sm transition-colors duration-200 ${
      isActive ? "text-emerald-700 font-bold" : "text-slate-700 hover:text-emerald-600"
    }`;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About MP", path: "/about" },
    {
      name: "Constituency",
      path: "/constituency",
      dropdown: [
        { name: "Constituency Profile & Map", path: "/constituency/profile" },
        { name: "Development Projects", path: "/constituency/projects" },
        { name: "Union & Ward Representation", path: "/constituency/unions" },
        { name: "Public Hearing Schedule", path: "/constituency/hearings" },
      ],
    },
    {
      name: "Services & Aid",
      path: "/services",
      dropdown: [
        { name: "DO Recommendation Letter", path: "/services/do-letter" },
        { name: "Educational Stipends", path: "/services/stipends" },
        { name: "Emergency Medical Aid", path: "/services/medical-aid" },
        { name: "Character Certificate", path: "/services/certificate" },
      ],
    },
    { name: "Parliamentary Speeches", path: "/speeches" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
      
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <FaPhone className="text-[10px]" />
              Helpline: <a href="tel:+8801700000000" className="hover:underline text-white">+880 1700-000000</a>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">
              Constituency Secretariat Office
            </span>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 hover:bg-emerald-900 text-slate-200 hover:text-emerald-300 transition-colors border border-slate-700"
          >
            <FaLanguage className="text-sm text-emerald-400" />
            <span className="font-bold">{lang === "EN" ? "বাংলা" : "English"}</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-emerald-800 text-emerald-100 flex items-center justify-center text-xl shadow-md group-hover:bg-emerald-700 transition-colors">
            <FaBuildingColumns />
          </div>
          <div>
            <span className="block text-lg font-black text-slate-900 leading-none">
              Office of the MP
            </span>
            <span className="text-[11px] font-bold text-emerald-700 tracking-wider uppercase">
              Constituency Portal
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {menuItems.map((item) => {
              const isDropdownOpen = activeDropdown === item.name;

              return item.dropdown ? (
                <li
                  key={item.name}
                  className="relative py-6"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 font-semibold text-sm text-slate-700 hover:text-emerald-700 transition">
                    {item.name}
                    <FaChevronDown
                      className={`text-xs text-slate-400 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {/* Individual Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full -mt-2 w-64 rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden transition-all duration-200 ${
                      isDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="p-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-xl text-xs font-semibold transition ${
                              isActive
                                ? "bg-emerald-50 text-emerald-800"
                                : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink to={item.path} className={navLinkClass}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/services/do-letter"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shadow-emerald-900/20"
          >
            <FaFileSignature />
            <span>Apply for DO Letter</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {open ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <ul className="flex flex-col divide-y divide-slate-100">
            {menuItems.map((item) => {
              const isMobileOpen = activeMobileDropdown === item.name;

              return item.dropdown ? (
                <li key={item.name}>
                  <button
                    onClick={() =>
                      setActiveMobileDropdown(isMobileOpen ? null : item.name)
                    }
                    className="flex justify-between items-center w-full px-6 py-4 font-semibold text-sm text-slate-800 hover:bg-slate-50"
                  >
                    <span>{item.name}</span>
                    <FaChevronDown
                      className={`text-xs text-slate-400 transition-transform ${
                        isMobileOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {isMobileOpen && (
                    <div className="bg-slate-50 px-6 py-2 space-y-1 border-t border-slate-100">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block py-2.5 px-3 rounded-lg text-xs font-semibold ${
                              isActive
                                ? "bg-emerald-600 text-white"
                                : "text-slate-600 hover:text-emerald-700"
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-sm font-semibold ${
                        isActive
                          ? "bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}

            <div className="p-4 bg-slate-50">
              <Link
                to="/services/do-letter"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-5 py-3.5 rounded-xl transition shadow-md"
              >
                <FaFileSignature />
                <span>Apply for DO Letter</span>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;