import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa"; // FA5 import
import {
  FaPeopleGroup,
  FaRoad,
  FaHospital,
  FaGraduationCap,
  FaSeedling,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa6"; // FA6 imports

import constituencyImg from "../../assets/landing1.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

const Constituency = () => {
  const initiatives = [
    {
      id: 1,
      icon: <FaRoad />,
      title: "Roads & Infrastructure",
      desc: "Developing safer roads, bridges, drainage systems, and modern connectivity to improve daily life across villages.",
      metric: "45+ km Paved",
    },
    {
      id: 2,
      icon: <FaHospital />,
      title: "Healthcare Access",
      desc: "Expanding community health clinics, equipping rural medical centers, and organizing free medical camps.",
      metric: "18 Clinics Built",
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      title: "Education & Youth",
      desc: "Upgrading public schools, sponsoring merit scholarships, and establishing local vocational training hubs.",
      metric: "12,000+ Students Supported",
    },
    {
      id: 4,
      icon: <FaSeedling />,
      title: "Agriculture & Farmers",
      desc: "Empowering rural farmers through fertilizer subsidies, modern irrigation tech, and crop insurance programs.",
      metric: "5,000+ Farmers Assisted",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="relative overflow-hidden bg-white rounded-[32px] shadow-2xl border border-slate-100/80 p-6 sm:p-10 lg:p-14"
    >
      {/* Background Subtle Gradient Flares */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      {/* Header */}

      {/* Main Grid: Feature Spotlight + 4 Pillars */}
      <div className="mt-12 sm:mt-16 grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side - Featured Image & Direct Contact Box */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col"
        >
          <div className="relative group overflow-hidden rounded-3xl shadow-xl flex-1 min-h-[360px] sm:min-h-[440px]">
            <img
              src={constituencyImg}
              alt="Constituency Development"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white font-medium text-xs backdrop-blur-md">
                <FaMapMarkerAlt className="text-amber-300" /> Regional
                Headquarters
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Grassroots Outreach Program
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Regular town halls and open-door office hours to address
                citizens' grievances directly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - 4 Key Priority Cards */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {initiatives.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-500 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-xl font-bold">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-300/40">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Constituent Support Banner */}
      <motion.div
        variants={itemVariants}
        className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="hidden sm:flex w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 items-center justify-center text-xl">
            <FaEnvelope />
          </div>
          <div>
            <h4 className="font-bold text-base">
              Have a Local Issue or Request?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your feedback or schedule a meeting with our local
              representative office.
            </p>
            <Link
              to="/contact"
              className="whitespace-nowrap mt-2 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-md"
            >
              <span>Contact </span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        <Link
          to="/contact"
          className="whitespace-nowrap inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          <span>Explore Constituency </span>
          <FaArrowRight className="text-xs" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Constituency;
