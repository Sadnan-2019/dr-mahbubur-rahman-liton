import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Demo Images
import slide1 from "../../assets/2026.webp";
import slide2 from "../../assets/lanading6.webp";
import slide3 from "../../assets/landing4.webp";
import "./Slider.css"; // 

// Motion variants for smooth staggered entry
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "Member of Parliament | 152, Mymensingh 7 ( Trishal)",
      title: "Dr. Mahbubur Rahman Liton",
      description:
        "Dedicated to public service, sustainable development, and improving quality of life through transparency, leadership, and community engagement.",
      primaryBtn: "Development Projects",
      primaryLink: "/development-projects",
      secondaryBtn: "Citizen Services",
      secondaryLink: "/services",
    },
    {
      id: 2,
      image: slide2,
      subtitle: "Building a Better Future",
      title: "Together We Create Lasting Development",
      description:
        "Supporting education, healthcare, infrastructure, youth empowerment, and social welfare to build a stronger and more prosperous constituency.",
      primaryBtn: "Our Achievements",
      primaryLink: "/achievements",
      secondaryBtn: "Latest News",
      secondaryLink: "/news",
    },
    {
      id: 3,
      image: slide3,
      subtitle: "Serving the People",
      title: "Committed to Every Citizen",
      description:
        "Working closely with the community to solve local challenges, strengthen public services, and ensure inclusive development for future generations.",
      primaryBtn: "Submit Grievance",
      primaryLink: "/contact",
      secondaryBtn: "Photo Gallery",
      secondaryLink: "/gallery",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-200 group">
      {/* Custom Swiper Controls */}
      <button className="custom-prev absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="custom-next absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex">
        <ChevronRight className="w-6 h-6" />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="heroSwiper"
      >
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={slide.id}>
              <div className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center overflow-hidden">
                {/* Background Image with Subtle Ken Burns Effect */}
                <motion.div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  animate={{ scale: isActive ? 1.08 : 1 }}
                  transition={{ duration: 7, ease: "linear" }}
                />

                {/* Gradient Overlays for High Contrast & Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 z-10" />

                {/* Hero Content Area */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <div className="max-w-3xl">
                        {/* Subtitle Badge */}
                        <motion.div
                          custom={0}
                          variants={textVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="mb-4 sm:mb-6"
                        >
                          <span className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md border border-emerald-400/30 shadow-lg shadow-emerald-950/40">
                            <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                            {slide.subtitle}
                          </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                          custom={1}
                          variants={textVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.15] tracking-tight mb-4 sm:mb-6 drop-shadow-md"
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          custom={2}
                          variants={textVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                          custom={3}
                          variants={textVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5"
                        >
                          <Link
                            to={slide.primaryLink}
                            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-semibold rounded-full px-7 py-3.5 text-sm sm:text-base transition-all duration-300 shadow-xl shadow-emerald-950/50 group/btn"
                          >
                            <span>{slide.primaryBtn}</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>

                          <Link
                            to={slide.secondaryLink}
                            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold rounded-full px-7 py-3.5 text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all duration-300"
                          >
                            {slide.secondaryBtn}
                          </Link>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Bottom Pagination Container */}
      <div className="custom-pagination absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2" />
    </section>
  );
};

export default Hero;
