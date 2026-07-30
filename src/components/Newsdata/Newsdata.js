import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaCalendarDays,
  FaClock,
  FaArrowRight,
  FaShareNodes,
  FaXmark,
  FaBullhorn,
  FaTag,
} from "react-icons/fa6";

// News Data tailored for a Bangladeshi MP
const newsData = [
  {
    id: 1,
    title: "Road Paving Work Inaugurated on Kazishimla GPS Road in Trishal",
    category: "Infrastructure",
    date: "July 18, 2026",
    readTime: "4 min read",
    isFeatured: true,
    image: "https://i.ibb.co.com/sp3B2L4f/Roads1.jpg",
    summary:
      "The paving work for the Kazishimala-Kazishimla GPS Road has been officially inaugurated in Trishal, Mymensingh.Implemented by the Local Government Engineering Department (LGED), the development project covers a total distance of 418 meters (0.418 km). The project was formally inaugurated on Friday, July 10, 2026 (26 Ashar 1433 BS), by Dr. Md. Mahabubur Rahman Liton, Honorable Member of Parliament for Mymensingh-7 (Trishal, Constituency 152).",
    content:
      "He marked the official commencement of the road work by unveiling the commemorative plaque. Local residents expressed optimism that the newly paved road will significantly improve transportation, connectivity, and daily commute for the community.",
  },
  {
    id: 2,
    title: "Monthly Free Medical Camp Launched Under the Initiative of MP Dr. Md. Mahabubur Rahman Liton .",
    category: "Healthcare",
    date: "July 10, 2026",
    readTime: "3 min read",
    isFeatured: false,
    image: "https://i.ibb.co.com/gbq9g0Lk/free-medical.jpg",
    summary:
      "Under the direct guidance and sponsorship of Dr. Md. Mahabubur Rahman Liton, Honorable Member of Parliament for Mymensingh-7 (Trishal-152), a free medical camp was hosted at the TMC Diagnostic & Hospital premises in Zero Point, Nazrul Avenue. ",
    content:
      "Leveraging his background as a physician, Dr. Liton spearheaded this healthcare drive to ensure quality medical advice and basic diagnostics reach underserved families across Trishal. Local residents gathered to consult with specialist doctors and receive basic health screenings free of charge. ",
  },
  {
    id: 3,
    title: "MP Dr. Mahabubur Rahman Demands Action in Budget Session to Fix 150 km of Broken Roads in Trishal. ",
    category: "Parliament",
    date: "June 28, 2026",
    readTime: "5 min read",
    isFeatured: false,
    image: "https://i.ibb.co.com/1Y8prcXM/landing3.jpg",
    summary:
      "Speaking during the national budget session in Parliament, Dr. Md. Mahabubur Rahman Liton, Member of Parliament for Mymensingh-7 (Trishal), urged the government to direct funds toward fixing a major infrastructure crisis in his constituency. He called for the immediate repair and paving of 150 kilometers of broken roads across the area.",
    content:
      "While addressing the Speaker of the House during the budget discussions, Dr. Liton highlighted the everyday struggles of local citizens. He pointed out that 150 kilometers of rural roads are currently in severe decay, making movement nearly impossible for vehicles like buses, cars, and rickshaws. He emphasized that these road conditions create immense hardships for school children, daily earners, and emergency patients needing urgent hospital care.",
  },
  {
    id: 4,
    title: "Smart Education and Skilled Human Resource Development",
    category: "Education",
    date: "June 15, 2026",
    readTime: "3 min read",
    isFeatured: false,
    image: "https://i.ibb.co.com/NDVLyBh/schools.jpg",
    summary:
      "The first requirement for building a modern, merit-based society is to create opportunities for up-to-date technical and higher education alongside traditional education.",
    content:
      " The first requirement for building a modern, merit-based society is to create opportunities for up-to-date technical and higher education alongside traditional education. Our main goal is to coordinate local educational institutions with Jatiya Kabi Kazi Nazrul Islam University and ensure international-standard training.",
  },
];

const NewsUpdates = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = newsData.find((item) => item.isFeatured);
  const regularNews = newsData.filter((item) => !item.isFeatured);

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
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
            <FaBullhorn className="text-emerald-700" />
            Official Announcements
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            News & Media{" "}
            <span className="text-emerald-700 block sm:inline">Updates</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Stay informed with the latest press releases, parliamentary
            activities, community developments, and event highlights.
          </p>
        </motion.div>

        {/* Featured Story Spotlight (Hero Layout) */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-12 lg:mt-16 bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid lg:grid-cols-12 items-center group"
          >
            {/* Image Side */}
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
              <span className="absolute top-4 left-4 bg-emerald-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                ⭐ Featured Announcement
              </span>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full font-bold">
                    <FaTag className="text-[10px]" /> {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarDays /> {featuredArticle.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/btn"
                >
                  <span>Read Full Release</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <FaClock /> {featuredArticle.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular News Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((news) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-800 font-bold text-[11px] px-2.5 py-1 rounded-full border border-slate-200">
                    {news.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <FaCalendarDays /> {news.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {news.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(news)}
                  className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 group/link"
                >
                  <span>Read Story</span>
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover/link:bg-emerald-700 group-hover/link:text-white transition-all duration-300">
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Press Releases CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md group"
          >
            <span>Explore Media Archive</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <FaXmark className="text-base" />
              </button>

              {/* Modal Article Image & Header */}
              <div className="mt-2">
                <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-xs px-3 py-1 rounded-full mb-3">
                  {selectedArticle.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h3>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mt-3 mb-5">
                  <span className="flex items-center gap-1">
                    <FaCalendarDays /> {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {selectedArticle.readTime}
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden h-60 sm:h-72 mb-6">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
                  {selectedArticle.content}
                </p>

                {/* Modal Share Actions */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Press Release
                  </span>
                  <button
                    onClick={() => alert("Link copied to clipboard!")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <FaShareNodes /> Share Update
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NewsUpdates;
