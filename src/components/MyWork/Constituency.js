import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import parliament1 from "../../assets/landing1.jpg";
import {
  FaRoad,
  FaHospital,
  FaSchool,
  FaSeedling,
} from "react-icons/fa6";
const Constituency = () => {
  return (
    <section className="relative overflow-hidden bg-white rounded-[32px] shadow-2xl border border-slate-100">
      {/* Background Decoration */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-[120px]"></div>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-300/10 blur-[150px]"></div>

      <div className="relative px-6 py-16 lg:px-12 lg:py-20">
        {/* Section Header */}

        <div
          className="max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          {/* Badge */}

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-5 py-2 font-semibold">
            <FaPeopleGroup />

            Constituency Development
          </span>

          {/* Heading */}

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Working Together for a
            <span className="block text-primary mt-2">
              Better Community
            </span>
          </h2>

          {/* Description */}

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dedicated to improving healthcare, education, roads,
            agriculture, youth empowerment, and essential public
            services through sustainable development, community
            engagement, and responsible leadership for every citizen.
          </p>
        </div>

        {/* Step 2: Two-column layout will start here */}

        {/* Step 2 : Two Column Layout */}

<div className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
  {/* Left Side - Image */}

  <div
    className="lg:col-span-5"
    data-aos="fade-right"
  >
    <div className="relative group overflow-hidden rounded-[30px] shadow-2xl">

      <img
        src={parliament1}
        alt="Constituency Development"
        className="w-full h-[500px] object-cover duration-700 group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>

      {/* Floating Card */}

      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">

        <span className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
          Community First
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">
          Serving Every Citizen with Commitment
        </h3>

        <p className="mt-2 text-slate-600">
          Listening to people, understanding local needs, and
          delivering meaningful development initiatives.
        </p>

      </div>

    </div>
  </div>

  {/* Right Side */}

  <div
    className="lg:col-span-7"
    data-aos="fade-left"
  >
    <div className="grid sm:grid-cols-2 gap-6">

      {/* Card 1 */}

      <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary hover:-translate-y-2 duration-500">

        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6">
          🛣️
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Roads & Infrastructure
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Developing safer roads, bridges, drainage systems,
          and modern infrastructure to improve daily life.
        </p>

      </div>

      {/* Card 2 */}

      <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary hover:-translate-y-2 duration-500">

        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6">
          🏥
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Healthcare
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Expanding healthcare access, supporting medical
          facilities, and improving community wellbeing.
        </p>

      </div>

      {/* Card 3 */}

      <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary hover:-translate-y-2 duration-500">

        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6">
          🎓
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Education
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Supporting schools, colleges, youth development,
          scholarships, and quality education opportunities.
        </p>

      </div>

      {/* Card 4 */}

      <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-primary hover:-translate-y-2 duration-500">

        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6">
          🌾
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Agriculture
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Empowering farmers through sustainable agriculture,
          modern techniques, and rural development initiatives.
        </p>

      </div>

    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Constituency;