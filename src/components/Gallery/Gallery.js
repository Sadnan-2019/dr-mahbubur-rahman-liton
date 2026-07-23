import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCamera,
  FaLocationDot,
  FaCalendarDays,
  FaExpand,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaArrowRight,
} from "react-icons/fa6";


 

 
// Gallery Items tailored for a Bangladeshi MP
const galleryItems = [
  {
    id: 1,
    title: "Parliamentary Debate on Flood Embankment Protection",
    category: "parliament",
    categoryLabel: "Parliament",
    date: "July 12, 2026",
    location: "Jatiya Sangsad Bhaban, Dhaka",
    image:
      "https://i.ibb.co.com/23HpXmKS/Dev-work1.webp",
    caption:
      "Addressing the National Parliament during the budget discussion session to demand allocations for riverbank protection in rural unions.",
  },
  {
    id: 2,
    title: "Inauguration of New 4-Lane Upazila Connecting Highway",
    category: "projects",
    categoryLabel: "Projects",
    date: "June 25, 2026",
    location: "Central Upazila Junction",
    image:
      "https://i.ibb.co.com/6J0B1TPv/landing4.webp",
    caption:
      "Laying the foundation stone and inspecting the ongoing 14 km asphalt road development project for better local connectivity.",
  },
  {
    id: 3,
    title: "Grassroots Townhall & Open Grievance Meeting",
    category: "constituency",
    categoryLabel: "Constituency Visits",
    date: "June 18, 2026",
    location: "Union Parishad Auditorium",
    image:
      "https://i.ibb.co.com/LWPRCKt/landing2.webp",
    caption:
      "Direct listening session with local ward members and residents to address local utility and public healthcare complaints.",
  },
  {
    id: 4,
    title: "Distribution of Agricultural Seedlings & Fertilizer",
    category: "relief",
    categoryLabel: "Relief & Aid",
    date: "May 30, 2026",
    location: "Agricultural Growth Center",
    image:
      "https://i.ibb.co.com/6c8G2m2L/treeplantation.jpg",
    caption:
      "Handing over subsidized high-yield seeds, fertilizers, and solar pump accessories to 500+ small-scale Boro farmers.",
  },
  {
    id: 5,
    title: "Inauguration of High School ICT & Computer Lab",
    category: "projects",
    categoryLabel: "Projects",
    date: "May 14, 2026",
    location: "Model Girls High School",
    image:
      "https://i.ibb.co.com/vCW8ky4b/US-CAUCUS.jpg",
    caption:
      "Unveiling the new digital classroom lab equipped with high-speed internet and modern computers for female students.",
  },
  {
    id: 6,
    title: "Youth Sports Championship Trophy Handover",
    category: "events",
    categoryLabel: "Public Events",
    date: "April 28, 2026",
    location: "District Stadium Ground",
    image:
      "https://i.ibb.co.com/q3H0qG2B/sports.jpg",
    caption:
      "Awarding trophies and sports kits to winning union teams at the annual Inter-Union Football Championship final.",
  },
];

// Categories
const filterCategories = [
  { id: "all", label: "All Photos" },
  { id: "parliament", label: "Parliament" },
  { id: "constituency", label: "Constituency Visits" },
  { id: "projects", label: "Projects" },
  { id: "relief", label: "Relief & Aid" },
  { id: "events", label: "Public Events" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Lightbox Keyboard Navigation
  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredPhotos.length - 1 : prev - 1
      );
    }
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

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
            <FaCamera className="text-emerald-700" />
            Visual Documentation
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Photo Gallery &{" "}
            <span className="text-emerald-700 block sm:inline">
              Activities
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            A visual archive documenting public engagements, parliamentary sessions, 
            development projects, and community relief efforts across the constituency.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap justify-center items-center bg-slate-100/80 p-1.5 rounded-2xl gap-1.5 border border-slate-200/60 max-w-4xl">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 z-10 ${
                    isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryFilter"
                      className="absolute inset-0 bg-emerald-700 rounded-xl shadow-md z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Photo Grid */}
        <motion.div layout className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative bg-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-slate-200/80 aspect-[4/3]"
              >
                {/* Photo Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-emerald-800 font-bold text-[11px] px-3 py-1 rounded-full border border-slate-200">
                  {photo.categoryLabel}
                </span>

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-emerald-600">
                  <FaExpand className="text-xs" />
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center gap-3 text-[11px] text-slate-300 mb-1.5">
                    <span className="flex items-center gap-1">
                      <FaCalendarDays className="text-amber-400" /> {photo.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 truncate">
                      <FaLocationDot className="text-amber-400" /> {photo.location}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                    {photo.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Archive Footer Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveFilter("all")}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md group"
          >
            <FaImages className="text-xs" />
            <span>View All Media Archives</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8">
            
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>

              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaXmark className="text-lg" />
              </button>
            </div>

            {/* Lightbox Image Stage with Arrows */}
            <div className="relative max-w-5xl mx-auto w-full flex-1 flex items-center justify-center my-4">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors z-20 border border-slate-700 shadow-lg"
              >
                <FaChevronLeft className="text-base" />
              </button>

              {/* Main Lightbox Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-slate-800"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors z-20 border border-slate-700 shadow-lg"
              >
                <FaChevronRight className="text-base" />
              </button>
            </div>

            {/* Lightbox Footer Metadata */}
            <div className="max-w-3xl mx-auto w-full text-center text-white bg-slate-900/80 p-5 rounded-2xl border border-slate-800/80 backdrop-blur-md z-10">
              <h3 className="text-lg sm:text-xl font-bold">
                {filteredPhotos[lightboxIndex].title}
              </h3>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mt-2">
                <span className="flex items-center gap-1">
                  <FaCalendarDays className="text-amber-400" /> {filteredPhotos[lightboxIndex].date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FaLocationDot className="text-amber-400" /> {filteredPhotos[lightboxIndex].location}
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;