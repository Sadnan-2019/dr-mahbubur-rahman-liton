import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaBuildingColumns,
  FaUserGroup,
  FaCircleCheck,
  FaComments,
} from "react-icons/fa6";

// Office Location Data tailored for a Bangladeshi MP
const officeLocations = [
  {
    id: "constituency",
    title: "Constituency Public Office",
    subtitle: "For local public hearings, DO letters & regional matters",
    icon: <FaUserGroup className="text-emerald-600" />,
    address: "Constituency Office Road, Main Bazar Area, Ward No. 04, Bangladesh",
    phone: "+880 1700-000000",
    email: "constituency@mp-office.gov.bd",
    hours: "Sat - Thu: 9:00 AM - 5:00 PM (Public Hearing: Sun & Tue 10 AM - 1 PM)",
    highlight: "Primary Constituent Hub",
  },
  {
    id: "parliament",
    title: "Jatiya Sangsad Bhaban Office",
    subtitle: "For parliamentary committees, policy & official delegations",
    icon: <FaBuildingColumns className="text-amber-600" />,
    address: "Room #412, Block-B, Jatiya Sangsad Bhaban, Sher-e-Bangla Nagar, Dhaka-1207",
    phone: "+880 2-99999999",
    email: "parliament@mp-office.gov.bd",
    hours: "Sun - Thu: 10:00 AM - 4:00 PM (By Official Appointment)",
    highlight: "National Secretariat",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    inquiryType: "Local Development",
    unionOrWard: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        inquiryType: "Local Development",
        unionOrWard: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 font-semibold text-xs sm:text-sm border border-emerald-800/50">
            <FaComments className="text-emerald-400" />
            Constituent Communication
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Connect with Your{" "}
            <span className="text-emerald-400 block sm:inline">
              Member of Parliament
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Reach out directly for local constituency issues, official DO recommendation letters, 
            public hearing schedules, or parliamentary submissions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details Cards (5 Cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {officeLocations.map((office) => (
              <div
                key={office.id}
                className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/70 shadow-xl hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-700/80 flex items-center justify-center text-xl">
                    {office.icon}
                  </div>
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40">
                    {office.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{office.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{office.subtitle}</p>

                <hr className="my-5 border-slate-700/60" />

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <FaLocationDot className="text-emerald-400 mt-1 shrink-0 text-base" />
                    <span>{office.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="text-emerald-400 shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-emerald-400 transition-colors">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-emerald-400 shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-emerald-400 transition-colors">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 pt-1 text-slate-400">
                    <FaClock className="text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-xs leading-relaxed">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Interactive Form (7 Cols) */}
          <motion.div
            className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Your inquiry will be logged into the MP Secretariat portal for review and response.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center"
              >
                <FaCircleCheck className="text-5xl text-emerald-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white">Message Submitted Successfully</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A confirmation has been sent to your contacts, and our constituency team will review your submission promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., Rahat Chowdhury"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mobile Number <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., 01712345678"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., rahat@example.com"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    />
                  </div>

                  {/* Union / Ward / Upazila */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Union / Ward / Upazila <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="unionOrWard"
                      required
                      value={formData.unionOrWard}
                      onChange={handleInputChange}
                      placeholder="e.g., Ward 03, Central Union"
                      className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Category of Issue <span className="text-emerald-400">*</span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                  >
                    <option value="Local Development">Local Development (Roads, Drainage, Power)</option>
                    <option value="DO Letter Request">DO Recommendation Letter Request</option>
                    <option value="Emergency Aid">Emergency Aid & Medical Assistance</option>
                    <option value="Public Hearing Appointment">Public Hearing Appointment Request</option>
                    <option value="General Inquiry">General Parliamentary Inquiry</option>
                  </select>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message / Request Details <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your request or issue in detail..."
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/50 border border-emerald-500/40 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Submit Message to MP Secretariat</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;