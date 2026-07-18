import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `font-medium transition duration-300 ${
      isActive ? "text-primary" : "text-slate-700 hover:text-primary"
    }`;

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        {
          name: "Home Physiotherapy",
          path: "/services/home-physiotherapy",
        },
        {
          name: "Sports Injury",
          path: "/services/sports-injury",
        },
        {
          name: "Stroke Rehabilitation",
          path: "/services/stroke-rehabilitation",
        },
        {
          name: "Back Pain Treatment",
          path: "/services/back-pain-treatment",
        },
        {
          name: "Knee Pain Treatment",
          path: "/services/knee-pain-treatment",
        },
      ],
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 h-20">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold text-primary">
            LOGO
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) =>
              item.dropdown ? (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-primary transition">
                    {item.name}
                    <FiChevronDown
                      className={`transition ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-5 w-64 rounded-xl bg-white shadow-xl border overflow-hidden transition-all duration-300 ${
                      serviceOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.dropdown.map((service) => (
                      <NavLink
                        key={service.path}
                        to={service.path}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-sm transition ${
                            isActive
                              ? "bg-primary text-white"
                              : "hover:bg-base-200"
                          }`
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink to={item.path} className={navLinkClass}>
                    {item.name}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Appointment */}
        <div className="navbar-end hidden lg:flex">
          <a
            href="tel:+8801700000000"
            className="btn btn-primary rounded-full px-6"
          >
            Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-ghost btn-circle"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <ul className="flex flex-col">
            {menuItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="border-b">
                  <button
                    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                    className="flex justify-between items-center w-full px-6 py-4 font-medium"
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      className={`transition ${
                        mobileServiceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileServiceOpen && (
                    <div className="bg-base-100">
                      {item.dropdown.map((service) => (
                        <NavLink
                          key={service.path}
                          to={service.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block pl-10 pr-6 py-3 text-sm ${
                              isActive
                                ? "bg-primary text-white"
                                : "hover:bg-base-200"
                            }`
                          }
                        >
                          {service.name}
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
                      `block px-6 py-4 ${
                        isActive ? "bg-primary text-white" : "hover:bg-base-200"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ),
            )}

            <div className="p-4">
              <a href="tel:+8801700000000" className="btn btn-primary w-full">
                Appointment
              </a>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
