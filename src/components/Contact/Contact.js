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

// Dedicated Civic Office Data Metrics
const officeLocations = [
  {
    id: "constituency",
    title: "Constituency Public Office",
    subtitle: "For local public hearings & regional matters",
    icon: <FaUserGroup className="text-emerald-400" />,
    address: "TMC, Zeropoint, Noudhar, Trishal, Mymensingh – 2220",
    phone: "+880 1711 004445",
    email: "mymensingh.7@parliament.gov.bd",
    hours: "Sat - Thu: 9:00 AM - 5:00 PM (Public Hearing: Sun & Tue 10 AM - 1 PM)",
    highlight: "Primary Constituent Hub",
  },
  {
    id: "parliament",
    title: "Jatiya Sangsad Bhaban Office",
    subtitle: "For parliamentary committees, policy & official delegations",
    icon: <FaBuildingColumns className="text-amber-400" />,
    address: "Jatiya Sangsad Bhaban, Sher-e-Bangla Nagar, Dhaka-1207",
    phone: "+880 1711 004445 (PA)",
    email: "mymensingh.7@parliament.gov.bd",
    hours: "Sun - Thu: 10:00 AM - 4:00 PM (By Official Appointment)",
    highlight: "National Secretariat",
  },
];

const Contact = () => {
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

    // Simulated API execution layer
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
    <section className="min-h-screen py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Structural Backdrop Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Semantic Header Block */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 font-semibold text-xs sm:text-sm border border-emerald-800/50">
            <FaComments className="text-emerald-400" />
            Constituent Communication Channels
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Connect with Your{" "}
            <span className="text-emerald-400 block sm:inline">
              Member of Parliament
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Reach out directly for local constituency issues, official DO recommendation letters, 
            public hearing schedules, or parliamentary submissions.
          </p>
        </motion.div>

        {/* Layout Column Matrix Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Details Cards */}
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
                className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-700/70 shadow-xl hover:border-emerald-500/50 transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center text-xl">
                    {office.icon}
                  </div>
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40">
                    {office.highlight}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white tracking-tight">{office.title}</h2>
                <p className="text-xs text-slate-400 mt-1">{office.subtitle}</p>

                <hr className="my-5 border-slate-700/60" />

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <FaLocationDot className="text-emerald-400 mt-1 shrink-0 text-base" />
                    <span className="leading-relaxed">{office.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="text-emerald-400 shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-emerald-400 transition-colors font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-emerald-400 shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-emerald-400 transition-colors font-medium"
                    >
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

          {/* Right Column: Interactive Intake Form */}
          <motion.div
            className="lg:col-span-7 bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white tracking-tight">Send a Direct Message</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Your inquiry will be logged directly into the MP Secretariat portal for systematic review and action response.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center"
              >
                <FaCircleCheck className="text-5xl text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white">Message Submitted Successfully</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for your engagement. Your record has been logged, and the constituency administrative team will verify your query details promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 btn btn-success text-white bg-emerald-600 hover:bg-emerald-500 border-none rounded-xl text-xs px-6 font-semibold shadow-md"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="form-control w-full">
                    <label className="label py-1">
                      <span className="label-text text-xs font-semibold text-slate-300">
                        Full Name <span className="text-emerald-400">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., Rahat Chowdhury"
                      className="input input-bordered w-full bg-slate-900 border-slate-700 text-sm rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="form-control w-full">
                    <label className="label py-1">
                      <span className="label-text text-xs font-semibold text-slate-300">
                        Mobile Number <span className="text-emerald-400">*</span>
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., 01712345678"
                      className="input input-bordered w-full bg-slate-900 border-slate-700 text-sm rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div className="form-control w-full">
                    <label className="label py-1">
                      <span className="label-text text-xs font-semibold text-slate-300">
                        Email Address (Optional)
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., user@example.com"
                      className="input input-bordered w-full bg-slate-900 border-slate-700 text-sm rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>

                  {/* Territorial Location Info */}
                  <div className="form-control w-full">
                    <label className="label py-1">
                      <span className="label-text text-xs font-semibold text-slate-300">
                        Union / Ward / Upazila <span className="text-emerald-400">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="unionOrWard"
                      required
                      value={formData.unionOrWard}
                      onChange={handleInputChange}
                      placeholder="e.g., Ward 03, Central Union"
                      className="input input-bordered w-full bg-slate-900 border-slate-700 text-sm rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                {/* Inquiry Selector */}
                <div className="form-control w-full">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold text-slate-300">
                      Category of Issue <span className="text-emerald-400">*</span>
                    </span>
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="select select-bordered w-full bg-slate-900 border-slate-700 text-sm rounded-xl text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  >
                    <option value="Local Development">Local Development (Roads, Drainage, Infrastructure)</option>
                    <option value="DO Letter Request">DO Recommendation Letter Request</option>
                    <option value="Emergency Aid">Emergency Aid & Medical Assistance</option>
                    <option value="Public Hearing Appointment">Public Hearing Appointment Request</option>
                    <option value="General Inquiry">General Parliamentary Inquiry</option>
                  </select>
                </div>

                {/* Message Context */}
                <div className="form-control w-full">
                  <label className="label py-1">
                    <span className="label-text text-xs font-semibold text-slate-300">
                      Message / Request Details <span className="text-emerald-400">*</span>
                    </span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide full description context concerning your issue or official application parameters..."
                    className="textarea textarea-bordered w-full bg-slate-900 border-slate-700 text-sm rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none h-32"
                  />
                </div>

                {/* Action Controller */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold border-none rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner loading-xs">Submitting Request...</span>
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

export default Contact;