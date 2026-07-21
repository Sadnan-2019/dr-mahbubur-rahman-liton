import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLandmark,
  FaPeopleGroup,
  FaTrophy,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa6";

import Parliament from "./Parliament";
import Constituency from "./Constituency";

// Fallback achievements component for tab 3
const AchievementsView = () => {
  const stats = [
    { label: "Bills Introduced & Passed", value: "28+", desc: "Legislative contributions in Parliament" },
    { label: "Constituency Projects", value: "140+", desc: "Infrastructure, healthcare & schools" },
    { label: "Public Grievances Resolved", value: "95%", desc: "Direct citizen outreach programs" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-xl font-bold mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
              <h4 className="text-lg font-bold text-slate-800 mt-2">{stat.label}</h4>
            </div>
            <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-100">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const MyWork = () => {
  const [activeTab, setActiveTab] = useState("parliament");

  const tabs = [
    {
      id: "parliament",
      title: "Parliamentary Work",
      icon: <FaLandmark />,
    },
    {
      id: "constituency",
      title: "Constituency Work",
      icon: <FaPeopleGroup />,
    },
    {
      id: "achievements",
      title: "Key Achievements",
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      {/* Background Decorative Blur Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-52 right-0 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-xs sm:text-sm border border-emerald-300/40">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            Public Service & Leadership
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            My Work as a{" "}
            <span className="text-emerald-700 block sm:inline">
              Member of Parliament
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dedicated to serving the nation through responsible legislation,
            constituency development, and initiatives that improve the lives of
            citizens across Bangladesh.
          </p>
        </motion.div>

        {/* Floating Animated Tab Navigation */}
        <motion.div
          className="mt-12 sm:mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="inline-flex flex-wrap justify-center items-center bg-white/80 backdrop-blur-md border border-slate-200/80 p-2 rounded-2xl shadow-lg shadow-slate-200/60 gap-1.5 sm:gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-colors duration-300 z-10 ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Sliding Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeWorkTab"
                      className="absolute inset-0 bg-emerald-700 rounded-xl shadow-md z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content Area with Smooth Cross-Fade */}
        <div className="mt-12 sm:mt-16">
          <AnimatePresence mode="wait">
            {activeTab === "parliament" && (
              <motion.div
                key="parliament"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Parliament />
              </motion.div>
            )}

            {activeTab === "constituency" && (
              <motion.div
                key="constituency"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Constituency />
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <AchievementsView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default MyWork;