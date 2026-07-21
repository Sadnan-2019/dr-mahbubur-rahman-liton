import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserGear,
  FaFileSignature,
  FaBuildingColumns,
  FaIdCard,
  FaGraduationCap,
  FaHospitalUser,
  FaFilePdf,
  FaArrowUpRightFromSquare,
  FaMagnifyingGlass,
  FaXmark,
} from "react-icons/fa6";

// Services Data structured for a Bangladeshi Constituency
const servicesData = [
  // 1. Direct MP Office Services (Certificates & DO Letters)
  {
    id: 1,
    title: "MP Recommendation Letter (DO)",
    category: "Office of the MP",
    icon: <FaFileSignature />,
    description: "Request a formal 'Demi Official' recommendation letter from the Honorable MP for official purposes.",
    formUrl: "/forms/do-letter-request.pdf", // Placeholder local path
    type: "download",
  },
  {
    id: 2,
    title: "Character Certificate (MP)",
    category: "Office of the MP",
    icon: <FaIdCard />,
    description: "Apply for a character certificate attested by the MP's office for job applications or admissions.",
    formUrl: "/forms/character-certificate.pdf", // Placeholder local path
    type: "download",
  },
  {
    id: 3,
    title: "Family Succession Certificate",
    category: "Office of the MP",
    icon: <FaBuildingColumns />,
    description: "Witnessing/attestation of family succession documents by the MP for local legal matters.",
    formUrl: "/forms/succession-attestation.pdf", // Placeholder local path
    type: "download",
  },

  // 2. Constituency Welfare Applications
  {
    id: 4,
    title: "Educational Stipend Application",
    category: "Welfare Aid",
    icon: <FaGraduationCap />,
    description: "Apply for the constituency-specific financial aid program for meritorious students.",
    formUrl: "/forms/education-stipend.pdf",
    type: "download",
  },
  {
    id: 5,
    title: "Emergency Medical Aid Request",
    category: "Welfare Aid",
    icon: <FaHospitalUser />,
    description: "Request financial assistance for critical medical treatments and hospitalizations.",
    formUrl: "/forms/medical-aid.pdf",
    type: "download",
  },

  // 3. Digital Bangladesh Portal Links (External Gov Services)
  {
    id: 6,
    title: "E-Passport Application Portal",
    category: "Gov Portals",
    icon: <FaUserGear />,
    description: "Direct link to the official Bangladesh E-Passport application and tracking system.",
    portalUrl: "https://www.epassport.gov.bd/",
    type: "portal",
  },
  {
    id: 7,
    title: "NID Services Portal",
    category: "Gov Portals",
    icon: <FaIdCard />,
    description: "Direct link to Bangladesh Election Commission’s NID registration, correction, and download services.",
    portalUrl: "https://nidw.gov.bd/",
    type: "portal",
  },
  {
    id: 8,
    title: "Online Utility Bill Payments",
    category: "Gov Portals",
    icon: <FaBuildingColumns />,
    description: "Links to official portals for Dhaka WASA, DESCO, DPDC, and PDB online bill payments.",
    portalUrl: "https://www.bangladesh.gov.bd/site/page/876c19a9-3d77-497d-949e-b816075c1a84", // Generic Pay Bill page
    type: "portal",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const CitizenServices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-xs sm:text-sm border border-emerald-300/40">
            <FaUserGear className="text-emerald-700" />
            Digital Empowerment
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Citizen Services &{" "}
            <span className="text-emerald-700 block sm:inline">
              Application Portal
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed mx-auto max-w-2xl">
            Streamlined access to official application forms, MP recommendation requests, 
            constituent aid programs, and direct links to Digital Bangladesh government portals.
          </p>
        </motion.div>

        {/* Search Bar - Crucial for UX */}
        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto">
          <div className="relative">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              type="text"
              placeholder="Search services (e.g., Passport, DO Letter, Stipend)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.e.target.value)}
              className="w-full bg-white rounded-2xl p-4 pl-12 text-sm sm:text-base text-slate-800 border border-slate-200 shadow-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 outline-none transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 w-7 h-7 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <FaXmark className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid with Framer Motion Stagger */}
        <motion.div
          layout
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-xl font-bold">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-full border border-emerald-300/40">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Call to Action Button based on Type */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  {service.type === "download" ? (
                    <a
                      href={service.formUrl}
                      download
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-100 hover:bg-emerald-600 hover:text-white text-emerald-800 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-300 group/btn"
                    >
                      <FaFilePdf className="text-base text-emerald-700 group-hover/btn:text-white transition-colors" />
                      Download Official Application Form
                    </a>
                  ) : (
                    <a
                      href={service.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all duration-300 shadow-md group/btn"
                    >
                      Visit Official Gov Portal
                      <FaArrowUpRightFromSquare className="text-xs text-slate-400 group-hover/btn:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Fallback */}
        <AnimatePresence>
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-16 text-center bg-white rounded-3xl p-12 border border-slate-200 shadow-xl max-w-xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-3xl mx-auto mb-6">
                <FaXmark />
              </div>
              <h4 className="text-xl font-bold text-slate-900">No Matching Service Found</h4>
              <p className="mt-2 text-sm text-slate-600">
                Please try a different keyword or contact the MP’s constituency office directly for personalized assistance.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default CitizenServices;