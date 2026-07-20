import React from "react";
import {
  FaUserGraduate,
  FaBriefcase,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

import profile from "../../assets/welcome.jpg";

const About = () => {
  const timeline = [
    {
      id: 1,
      icon: <MdOutlineHealthAndSafety />,
      title: "Biography",
      description:
        "Dr. Mahbubur Rahman Liton was born into a respected Muslim family in Kanthal Union, Trishal. His father, Alhaj Md. Habibur Rahman, is an agriculturist, while his late mother, Farida Akhter, was a renowned teacher. He believes public service begins with honesty, compassion, and accountability.",
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
    <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-50">
      {/* Background Decoration */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold">
            About Dr. Mahbubur Rahman Liton
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Leadership Rooted in
            <span className="text-primary block mt-2">
              Service, Education & Public Trust
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Discover the inspiring journey of Dr. Mahbubur Rahman Liton—
            physician, educator, political leader, and dedicated public servant
            committed to building a healthier, stronger, and more prosperous
            Bangladesh.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left */}

         <div
  className="lg:col-span-5 sticky top-28"
  data-aos="fade-right"
>
  <div className="relative">
    {/* Profile Image */}
    <div className="relative overflow-hidden rounded-[35px] shadow-2xl">
      <img
        src={profile}
        alt="Dr. Mahbubur Rahman Liton"
        className="w-full object-cover duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
    </div>

    {/* Left Floating Badge */}
    <div className="absolute -bottom-8 left-6 md:left-8 bg-white rounded-3xl shadow-xl border border-slate-100 backdrop-blur-md px-6 md:px-8 py-5 flex items-center">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-primary">MBBS</h3>
        <p className="text-sm md:text-base text-slate-600 font-medium">
             Dhaka Medical College
        </p>
      </div>
    </div>

    {/* Right Floating Badge */}
    
  </div>

  {/* Achievement Cards */}
  <div className="grid grid-cols-2 gap-5 mt-20">
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 duration-300">
      <h3 className="text-3xl font-bold text-primary">MSc</h3>
      <p className="text-sm text-slate-600 mt-2">
        University of London
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 duration-300">
      <h3 className="text-3xl font-bold text-primary">Director</h3>
      <p className="text-sm text-slate-600 mt-2">
        State University Of Bangladesh
      </p>
    </div>
  </div>
</div>

          {/* RIGHT SIDE STARTS HERE */}
          {/* Continue in Part 2 */}

          <div className="lg:col-span-7">
            {/* Timeline */}

            <div className="relative">
              {/* Vertical Line */}

              <div className="absolute left-6 top-5 bottom-5 w-[3px] bg-gradient-to-b from-primary via-primary/40 to-transparent"></div>

              {timeline.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-left"
                  data-aos-delay={index * 150}
                  className="relative flex gap-6 mb-10 group"
                >
                  {/* Icon */}

                  <div className="relative z-10 shrink-0">
                    <div
                      className="
          w-12 h-12
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          text-xl
          shadow-xl
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-12
        "
                    >
                      {item.icon}
                    </div>

                    <span
                      className="
          absolute
          inset-0
          rounded-full
          border-4
          border-primary/20
          animate-ping
        "
                    ></span>
                  </div>

                  {/* Content Card */}

                  <div
                    className="
        flex-1
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        p-8
        shadow-lg
        border
        border-slate-100
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-primary/30
      "
                  >
                    <span className="text-primary font-semibold uppercase tracking-widest text-xs">
                      Section {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Quote Card */}

           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
