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
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

// Project Data with image URLs added for all items
const projectsData = [
  // 1. Education
  {
    id: 1,
    category: "education",
    categoryLabel: "Education",
    title: "Smart Education and Skilled Human Resource Development",
    location: "Trishal",
    status: "In Progress",
    image:
      "https://i.ibb.co.com/NDVLyBh/schools.jpg",
    description:
      "The first requirement for building a modern, merit-based society is to create opportunities for up-to-date technical and higher education alongside traditional education. Our main goal is to coordinate local educational institutions with Jatiya Kabi Kazi Nazrul Islam University and ensure international-standard training.",
    impact: "12,000+ Students Benefited",
  },
  // {
  //   id: 2,
  //   category: "education",
  //   categoryLabel: "Education",
  //   title: "Girls' Higher Education Scholarship",
  //   location: "Constituency-wide",
  //   status: "In Progress",
  //   image:
  //     "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  //   description:
  //     "Providing annual financial stipends and learning materials to meritorious female students from low-income families to ensure equal access to higher education and mitigate dropout rates.",
  //   impact: "1,500 Scholars Supported",
  // },

  // 2. Healthcare
  {
    id: 3,
    category: "healthcare",
    categoryLabel: "Healthcare",
    title: "Affordable and Modern Medical Care for All",
    location: "Central Upazila Hospital",
    status: "In Progress",
    image:
      "https://i.ibb.co.com/k6Jq9WBH/Dev-work2.webp",
    description:
      "As a physician, I believe healthcare is not a privilege—it is a fundamental human right. By combining professional experience with national policy-making, we are working tirelessly to bring modern medical care to the doorstep of Trishal's marginalized people.",
    impact: "500+ Daily Patients Served",
  },
  // {
  //   id: 4,
  //   category: "healthcare",
  //   categoryLabel: "Healthcare",
  //   title: "Union Mobile Health Clinics",
  //   location: "Remote Riverine Unions",
  //   status: "In Progress",
  //   image:
  //     "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  //   description:
  //     "Deploying weekly mobile medical units with qualified doctors and free basic medications to underserved rural areas, bringing essential healthcare directly to doorstep communities.",
  //   impact: "8 Unions Covered",
  // },

  // 3. Infrastructure
  {
    id: 5,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    title: "Sustainable Infrastructure and a Modern Communication Hub",
    location: "Union Connecting Roads",
    status: "In Progress",
    image:
      "https://i.ibb.co.com/V41QfDF/communication.jpg",
    description:
      " Sustainable infrastructure is the key driver of the regional economy. Trishal is being developed into Mymensingh's main economic corridor through 100% transparency in work and completion of contract work within fixed timelines.",
    impact: "42 km Paved",
  },
  // {
  //   id: 6,
  //   category: "infrastructure",
  //   categoryLabel: "Infrastructure",
  //   title: "Solar Street Light Installation",
  //   location: "Key Growth Centers & Bazaars",
  //   status: "Completed",
  //   image:
  //     "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  //   description:
  //     "Installed eco-friendly solar streetlights across public markets, intersection roads, and village centers to enhance evening safety and promote renewable energy adoption.",
  //   impact: "650+ Solar Lights Live",
  // },

  // 4. Agriculture
  {
    id: 7,
    category: "agriculture",
    categoryLabel: "Agriculture",
    title: "Protecting Farmers' Rights and Modern Agricultural Technology",
    location: "Agricultural Blocks",
    status: "In Progress",
    image:
      "https://i.ibb.co.com/23HpXmKS/Dev-work1.webp",
    description:
      " Honoring the sweat and labor of farmers is our moral responsibility in the politics of soil and people. Steps have been taken, in coordination with Bangladesh Agricultural University and the local agriculture department, to make Trishal's agriculture technology-based and profitable.",
    impact: "3,200 Farmers Empowered",
  },

  // 5. Youth
  {
    id: 8,
    category: "youth",
    categoryLabel: "Youth",
    title: "MP Dr. Mahabubur Rahman Liton Pledges Support for Sports and Youth Development in Trishal",
    location: "District Technical Hub",
    status: "In Progress",
    image:
      "https://i.ibb.co.com/q3H0qG2B/sports.jpg",
    description:
      "  To encourage health, sportsmanship, and leadership among the younger generation, Dr. Md. Mahabubur Rahman Liton, Honorable Member of Parliament for Mymensingh-7 (Trishal), attended the grand final of a local primary school football tournament as the chief guest.",
    impact: "800+ Youth Enrolled",
  },

  // 6. Social Development
  {
    id: 9,
    category: "social",
    categoryLabel: "Social Development",
    title: "An Inclusive Society and Accountable Governance",
    location: "All Ward Communities",
    status: "In Progress",
    image:
      "https://i.ibb.co.com/S70hxtcm/Socail.jpg",
    description:
      "As part of the national social safety net initiative, the official distribution of Family Cards was held in Trishal to support local low-income families. Dr. Md. Mahabubur Rahman Liton, Honorable Member of Parliament for Mymensingh-7 (Trishal), attended as the chief guest and distributed the smart cards directly to women heads of households. Speaking at the event, Dr. Liton emphasized that true social development begins at the family level. He noted that the initiative aims to provide direct financial assistance and food security to vulnerable households without any middleman involvement.",
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

        {/* Filter Bar */}
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
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
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
                className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 group"
              >
                <div>
                  {/* Card Header Image Frame */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    {/* Floating Badges over Image */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-white bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                        {project.categoryLabel}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-sm ${
                          project.status === "Completed"
                            ? "bg-emerald-500/90 text-white"
                            : "bg-amber-500/90 text-white"
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

                    {/* Location overlay tag */}
                     
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Complete Untruncated Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Impact Link */}
                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <Link
                    to={`/projects/${project.id}`}
                    className="pt-4 border-t border-slate-100 flex items-center justify-between group/link"
                  >
                    {/* <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Targeted Impact
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover/link:text-emerald-700 transition-colors">
                        {project.impact}
                      </span>
                    </div> */}

                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover/link:bg-emerald-700 group-hover/link:text-white transition-all duration-300 shadow-sm">
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProjects;