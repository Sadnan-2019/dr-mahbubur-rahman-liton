import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaAward, FaBuildingColumns } from "react-icons/fa6";

// Update the import path as needed for your assets
import drLiton from "../../assets/welcome.jpg";

// Motion Container Variants (orchestrates children stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Child Motion Variants for text and elements
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// Image Reveal Variant
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const WelcomeMessage = () => {
  return (
    <section className="relative bg-slate-50 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Blur Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Animated Image & Floating Experience Card */}
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // once: false allows animation to repeat on every scroll
            variants={imageVariants}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white group">
              <img
                src={drLiton}
                alt="Dr. Mahbubur Rahman Liton"
                className="w-full h-[450px] sm:h-[550px] lg:h-[600px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }} // Repeats on scroll
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 sm:p-6 border border-white/60 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-2xl font-bold">
                <FaAward />
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                  40+
                </h4>
                <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  Years of Dedicated Service
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Animated Text Content */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Repeats on scroll whenever 20% of section is visible
            variants={containerVariants}
          >
            {/* Section Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-emerald-300/40">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Welcome Message
              </span>
            </motion.div>

            {/* Headline Header */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight"
            >
              Dedicated to Building a{" "}
              <span className="text-emerald-700">Smarter & Stronger</span> Nation
            </motion.h2>

            {/* Decorative Divider Line */}
            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-emerald-600 rounded-full my-6"
            />

            {/* Main Message Block with Quote Icon */}
            <motion.div variants={itemVariants} className="relative pl-6 sm:pl-8">
              <FaQuoteLeft className="text-emerald-600/15 text-5xl sm:text-6xl absolute -top-3 -left-2 sm:-left-3 pointer-events-none" />

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 space-y-4">
                <strong className="block text-xl font-bold text-slate-900 mb-2">
                  Assalamu Alaikum.
                </strong>
                Welcome to my official digital portal. It is an extraordinary privilege 
                and solemn responsibility to serve our citizens with absolute honesty, 
                dedication, and transparent accountability.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 mt-4">
                My ongoing mission remains focused on ensuring sustainable economic 
                development, quality educational institutions, modernized healthcare 
                access, resilient infrastructure, expanding youth employment, and 
                providing equitable access to all public services.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 mt-4">
                Together—through unity, structural transparency, and active community 
                participation—we continue to pave the way for a prosperous, smarter, 
                and progressive Bangladesh.
              </p>
            </motion.div>

            {/* Author Signature & Credentials Block */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4"
            >
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Dr. Mahbubur Rahman Liton
                </h4>
                <p className="text-emerald-700 font-semibold text-sm sm:text-base mt-0.5">
                  Member of Parliament Mymensingh-7 (Trishal)
                </p>
                <p className="text-slate-500 text-xs sm:text-sm">
                  People's Republic of Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-2 text-slate-400 bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-sm text-xs font-medium">
                <FaBuildingColumns className="text-emerald-600 text-base" />
                <span>Jatiya Sangsad Bhaban</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;  