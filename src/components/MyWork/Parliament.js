import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBuildingColumns,
  FaUsers,
  FaRoad,
  FaFileContract,
  FaMicroscope,
} from "react-icons/fa6";

// Assets
import parliament1 from "../../assets/landing1.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const Parliament = () => {
  const pillars = [
    {
      id: 1,
      icon: <FaFileContract />,
      title: "Legislative Oversight",
      description:
        "Actively participating in parliamentary debates, shaping national policy, and introducing key bills for public welfare.",
    },
    {
      id: 2,
      icon: <FaMicroscope />,
      title: "Healthcare Reform",
      description:
        "Advocating for increased national healthcare budget allocations and modernized medical facilities nationwide.",
    },
    {
      id: 3,
      icon: <FaRoad />,
      title: "Infrastructure Development",
      description:
        "Securing government grants for major regional road networks, digital connectivity, and public transport infrastructure.",
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: "Public Representation",
      description:
        "Ensuring the direct concerns of grassroots constituents are clearly voiced on the National Parliament floor.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="space-y-8"
    >
      {/* Top Banner Box */}
      <motion.div
        variants={itemVariants}
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 min-h-[380px] flex items-center"
      >
        <img
          src={parliament1}
          alt="Parliamentary Leadership"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 p-8 sm:p-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-4 py-1.5 text-emerald-300 font-semibold text-xs sm:text-sm">
            <FaBuildingColumns />
            National Parliament (Jatiya Sangsad)
          </span>

          <h3 className="mt-4 text-2xl sm:text-4xl font-black text-white leading-tight">
            Representing the Voice & Future of the People
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Committed to strengthening democratic values, participating in policy discussions,
            and supporting legislation that improves healthcare, education, and infrastructure.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/parliament"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-lg shadow-emerald-950/50"
            >
              <span>Explore Parliamentary Work</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* 4 Pillars Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-xl font-bold mb-4">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Parliament;  