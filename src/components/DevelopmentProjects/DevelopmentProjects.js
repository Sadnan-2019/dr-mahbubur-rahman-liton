import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaHospital,
  FaRoad,
  FaSeedling,
  FaUserGroup,
  FaHandsHoldingChild,
  FaClock,
  FaCompass,
  FaArrowRight,
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa"; // Imported from /fa instead of /fa6
import { Link } from "react-router-dom";
// Project Data for all 6 Sub-sections
const projectsData = [
  // 1. Education
  {
    id: 1,
    category: "education",
    categoryLabel: "Education",
    title: "ICT Lab & Digital Classroom Setup",
    location: "Upazila Model High Schools",
    status: "Completed",
    description:
      "Equipped 15 local secondary schools with modern computer labs, high-speed internet, and multimedia classrooms to promote digital literacy.",
    impact: "12,000+ Students Benefited",
  },
  {
    id: 2,
    category: "education",
    categoryLabel: "Education",
    title: "Girls' Higher Education Scholarship",
    location: "Constituency-wide",
    status: "In Progress",
    description:
      "Providing annual financial stipends and learning materials to meritorious female students from low-income families.",
    impact: "1,500 Scholars Supported",
  },

  // 2. Healthcare
  {
    id: 3,
    category: "healthcare",
    categoryLabel: "Healthcare",
    title: "Upazila Health Complex Modernization",
    location: "Central Upazila Hospital",
    status: "Completed",
    description:
      "Installed new emergency oxygen supply systems, modern pathology equipment, and doubled bed capacity for maternity wards.",
    impact: "500+ Daily Patients Served",
  },
  {
    id: 4,
    category: "healthcare",
    categoryLabel: "Healthcare",
    title: "Union Mobile Health Clinics",
    location: "Remote Riverine Unions",
    status: "In Progress",
    description:
      "Deploying weekly mobile medical units with qualified doctors and free basic medications to underserved rural areas.",
    impact: "8 Unions Covered",
  },

  // 3. Infrastructure
  {
    id: 5,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    title: "Rural Connectivity Road Paving",
    location: "Union Connecting Roads",
    status: "In Progress",
    description:
      "Upgrading 42 kilometers of mud roads into all-weather paved roads to facilitate smooth transportation for goods and commuters.",
    impact: "42 km Paved",
  },
  {
    id: 6,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    title: "Solar Street Light Installation",
    location: "Key Growth Centers & Bazaars",
    status: "Completed",
    description:
      "Installed eco-friendly solar streetlights across public markets, intersection roads, and village centers to enhance evening safety.",
    impact: "650+ Solar Lights Live",
  },

  // 4. Agriculture
  {
    id: 7,
    category: "agriculture",
    categoryLabel: "Agriculture",
    title: "Solar-Powered Irrigation Canal System",
    location: "Agricultural Blocks",
    status: "Completed",
    description:
      "Re-excavated local canals and introduced subsidized solar irrigation pumps to reduce farming costs during the Boro season.",
    impact: "3,200 Farmers Empowered",
  },

  // 5. Youth
  {
    id: 8,
    category: "youth",
    categoryLabel: "Youth",
    title: "Youth Technical Training Center",
    location: "District Technical Hub",
    status: "In Progress",
    description:
      "Offering certified courses in electrical work, IT support, motor mechanics, and digital marketing to curb youth unemployment.",
    impact: "800+ Youth Enrolled",
  },

  // 6. Social Development
  {
    id: 9,
    category: "social",
    categoryLabel: "Social Development",
    title: "Safety Net Allowance Expansion",
    location: "All Ward Communities",
    status: "Completed",
    description:
      "Ensured transparent, direct digital disbursement of old-age, widow, and disability allowances to local beneficiaries without intermediaries.",
    impact: "10,000+ Families Covered",
  },
];

// Categories definition
const categories = [
  { id: "all", label: "All Projects", icon: <FaCompass /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "healthcare", label: "Healthcare", icon: <FaHospital /> },
  { id: "infrastructure", label: "Infrastructure", icon: <FaRoad /> },
  { id: "agriculture", label: "Agriculture", icon: <FaSeedling /> },
  { id: "youth", label: "Youth", icon: <FaUserGroup /> },
  { id: "social", label: "Social Development", icon: <FaHandsHoldingChild /> },
];

const DevelopmentProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-xs sm:text-sm border border-emerald-300/40">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Transparent Governance
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Development Initiatives &{" "}
            <span className="text-emerald-700 block sm:inline">Progress</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Track key constituency projects focused on sustainable growth,
            social welfare, and infrastructure development across all 6 main
            pillars.
          </p>
        </motion.div>

        {/* Filter Bar (Horizontal Pill Tabs) */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center items-center bg-slate-100/80 p-2 rounded-2xl gap-2 border border-slate-200/60 max-w-5xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 z-10 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-emerald-700 rounded-xl shadow-md z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
              >
                <div>
                  {/* Category & Status Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300/40">
                      {project.categoryLabel}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        project.status === "Completed"
                          ? "bg-emerald-600/10 text-emerald-700"
                          : "bg-amber-500/10 text-amber-700"
                      }`}
                    >
                      {project.status === "Completed" ? (
                        <FaCheckCircle className="text-xs" />
                      ) : (
                        <FaClock className="text-xs" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Location */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    📍 {project.location}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Impact Badge */}
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between group/link"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Targeted Impact
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover/link:text-emerald-700 transition-colors">
                      {project.impact}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover/link:bg-emerald-700 group-hover/link:text-white transition-all duration-300">
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProjects;
