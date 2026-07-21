import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

// Asset import - update the path if needed
import profile from "../../assets/welcome.jpg";

// Motion Variants
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const leftColVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const timelineCardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const About = () => {
  const timeline = [
    {
      id: 1,
      icon: <MdOutlineHealthAndSafety />,
      title: "Biography",
      description:
        "Dr. Mahbubur Rahman Liton was born into a respected family in Kanthal Union, Trishal. His father, Alhaj Md. Habibur Rahman, is an agriculturist, while his late mother, Farida Akhter, was a renowned teacher. He believes public service begins with honesty, compassion, and accountability.",
    },
    {
      id: 2,
      icon: <FaUserGraduate />,
      title: "Education",
      description:
        "He studied at Dhaka Shaheen School and Notre Dame College before earning his MBBS from Dhaka Medical College. Later, he completed his MSc from the University of London, strengthening both his medical expertise and leadership vision.",
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "Professional Journey",
      description:
        "Currently serving as Director of the State University of Bangladesh and Labaid Group, he has also held important leadership positions in student politics, healthcare organizations, and national political platforms.",
    },
    {
      id: 4,
      icon: <FaBullseye />,
      title: "Vision & Values",
      description:
        "To create a healthier, educated, transparent, and prosperous Bangladesh where every citizen has equal opportunities through sustainable development and responsible leadership.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-slate-50">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold text-xs sm:text-sm border border-emerald-300/40">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            About Dr. Mahbubur Rahman Liton
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Leadership Rooted in{" "}
            <span className="text-emerald-700 block sm:inline">
              Service, Education & Trust
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover the inspiring journey of Dr. Mahbubur Rahman Liton—physician,
            educator, political leader, and dedicated public servant committed to
            building a healthier and stronger Bangladesh.
          </p>
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Sticky Profile Column */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={leftColVariants}
          >
            <div className="relative">
              {/* Profile Image Frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src={profile}
                  alt="Dr. Mahbubur Rahman Liton"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating Primary Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 px-6 py-4 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center text-2xl font-bold">
                  <FaUserGraduate />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                    MBBS
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    Dhaka Medical College
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sub-Stat Cards */}
            <div className="grid grid-cols-2 gap-4 mt-12 sm:mt-14">
              <div className="bg-white rounded-2xl shadow-md border border-slate-200/70 p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                  MSc
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  University of London
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-slate-200/70 p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                  Director
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  State University of BD
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Timeline */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={timelineContainerVariants}
          >
            <div className="relative">
              {/* Continuous Vertical Timeline Accent Line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-600 via-emerald-400/40 to-transparent" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={timelineCardVariants}
                  className="relative flex gap-5 sm:gap-6 mb-8 lg:mb-10 group"
                >
                  {/* Timeline Circle Icon */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl shadow-lg shadow-emerald-900/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300/60">
                    <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">
                      Section {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;