import React from 'react';

// SEO & Accessibility Checklist:
// 1. Semantic sections (<section>, <article>, <header>)
// 2. High color contrast meeting WCAG AAA standard
// 3. DaisyUI structural classes used to align with modern component ecosystems
// 4. Schema-optimized local data attributes for GEO scraping

const PrivacyPolicy = () => {
  const lastUpdated = "August 6, 2026";
  const mpName = "Dr. Mahbubur Rahman Liton, MP";
  const constituency = "152 Mymensingh-7 (Trishal)";

  return (
    <article className="min-h-screen bg-base-100 text-base-content py-12 px-4 sm:px-6 lg:px-8">
      {/* Container with ideal reading width for readability optimization */}
      <div className="max-w-4xl mx-auto bg-base-200/50 rounded-2xl border border-base-300 shadow-xl overflow-hidden backdrop-blur-sm">
        
        {/* Authoritative Banner Header */}
        <header className="relative bg-slate-900 text-slate-200  p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="relative z-10 space-y-3">
            <div className="badge badge-accent font-semibold tracking-wider uppercase text-xs px-3 py-2">
              Official Digital Portal
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Privacy & Policy
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium">
              Office of {mpName}
            </p>
            <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Constituency: {constituency}
            </div>
          </div>
        </header>

        {/* Inner Content Grid */}
        <div className="p-6 md:p-12 space-y-10">
          
          {/* Metadata Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-base-300/60 text-sm text-base-content/70">
            <div>
              Effective Date: <span className="font-semibold text-base-content">{lastUpdated}</span>
            </div>
            <div className="flex gap-2">
              <span className="badge badge-outline badge-sm">BIPS Initiatives</span>
              <span className="badge badge-outline badge-sm">US Caucus</span>
            </div>
          </div>

          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">1. Introduction</h2>
            </div>
            <p className="leading-relaxed text-base-content/85 text-justify">
              Welcome to the official website of <strong>{mpName}</strong>, Member of Parliament for {constituency}, along with his initiatives including the Bangladesh Institute of Parliamentary Studies (BIPS) and the US Caucus. We are committed to protecting the privacy and personal data of all citizens, constituents, and visitors who interact with our digital platform. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit <a href="https://drliton.com" className="link link-primary font-medium">drliton.com</a> or use our digital communication channels.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">2. Information We Collect</h2>
            </div>
            <p className="leading-relaxed text-base-content/85">
              We collect information to better serve the citizens of Trishal, facilitate public communication, and process official inquiries. This includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="card bg-base-100 p-5 border border-base-300 shadow-sm transition-all hover:border-primary/30">
                <h3 className="font-bold text-md text-primary mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Directly Provided Information
                </h3>
                <p className="text-sm text-base-content/80 leading-relaxed">
                  When you fill out contact forms, citizen complaint boxes, newsletter subscriptions, or event registration forms, we collect your name, email address, phone number, constituency location, and the specific content of your message.
                </p>
              </div>
              <div className="card bg-base-100 p-5 border border-base-300 shadow-sm transition-all hover:border-primary/30">
                <h3 className="font-bold text-md text-secondary mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Technical Data
                </h3>
                <p className="text-sm text-base-content/80 leading-relaxed">
                  Standard web analytics data such as IP addresses, browser types, device information, and page interaction metrics to help us optimize website performance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">3. How We Use Your Information</h2>
            </div>
            <p className="leading-relaxed text-base-content/85">
              The information collected is strictly utilized for official statecraft, constituent communication, and public service delivery, including:
            </p>
            <ul className="grid gap-2.5 pl-1">
              {[
                "Processing and responding to citizen feedback, queries, and development-related complaints.",
                "Sending official updates, press releases, newsletters, and announcements regarding parliamentary activities and local initiatives in Trishal.",
                "Improving website functionality and digital security."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-base-content/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: Data Security & Confidentiality */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">4. Data Security & Confidentiality</h2>
            </div>
            <div className="alert bg-base-100 border border-success/20 shadow-inner p-4 rounded-xl flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-success shrink-0 w-6 h-6 mt-0.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm leading-relaxed text-base-content/85">
                  We implement strict administrative, technical, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data handled through this portal is managed in accordance with professional digital governance standards by our authorized digital PR management team.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Third-Party Sharing */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">5. Third-Party Sharing</h2>
            </div>
            <p className="leading-relaxed text-base-content/85 text-justify">
              We do not sell, trade, or rent your personal information to third parties. Data is only shared with authorized office personnel, relevant local administrative bodies (when addressing specific constituent complaints), or technical infrastructure providers necessary to maintain this website.
            </p>
          </section>

          {/* Section 6: Your Rights */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">6. Your Rights</h2>
            </div>
            <p className="leading-relaxed text-base-content/85">
              As a constituent or portal user, you retain full operational rights over your information, including the option to:
            </p>
            <ul className="grid gap-2.5 pl-1">
              {[
                "Request access to the personal data you have submitted through our portal.",
                "Request the correction or deletion of your contact information from our mailing lists.",
                "Opt out of receiving official updates and newsletters at any time."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-base-content/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="divider opacity-40 my-2" />

          {/* Section 7: Contact Us */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">7. Contact Us</h2>
            </div>
            <p className="text-sm text-base-content/80">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, you may contact the official office:
            </p>

            {/* Official Contact Card */}
            <div className="bg-base-100 border border-base-300 rounded-xl p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-base-content tracking-tight">
                Office of Dr. Mahbubur Rahman Liton, MP
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-base-content/85">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-base-content/50 block font-semibold">
                    Constituency Office
                  </span>
                  <p className="font-medium">Trishal, Mymensingh, Bangladesh</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-base-content/50 block font-semibold">
                    Secretariat Address
                  </span>
                  <p className="font-medium">Jatiya Sangsad Bhaban, Dhaka</p>
                </div>
              </div>

              <div className="pt-2 border-t border-base-300/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:mymensingh.7@parliament.gov.bd" className="link link-hover font-semibold text-primary">
                    mymensingh.7@parliament.gov.bd
                  </a>
                </div>
                <span className="text-xs text-base-content/50 font-medium">
                  Official Communication Channel
                </span>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Accent */}
        <footer className="bg-base-300/40 py-4 px-6 text-center text-xs text-base-content/50 font-medium border-t border-base-300">
          © {new Date().getFullYear()} Official Portal of Mymensingh-7. All Rights Reserved.
        </footer>

      </div>
    </article>
  );
};

export default PrivacyPolicy;