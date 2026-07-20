import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

import drLiton from "../../assets/welcome.jpg";

const WelcomeMessage = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={drLiton}
                alt="Dr. Mahbubur Rahman Liton"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-5">
              <h4 className="text-3xl font-bold text-primary">40+</h4>
              <p className="text-sm text-slate-600">
                Years of Public Service
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* <span className="inline-block bg-primary/10 text-primary font-semibold px-5 py-2 rounded-full mb-5">
              Welcome Message
            </span> */}

            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              
              <span className="text-primary block mt-2">
                Dr. Mahbubur Rahman Liton
              </span>
            </h2> */}

            <div className="w-24 h-1 bg-primary rounded-full mt-6 mb-8"></div>

            <div className="relative">
              <FaQuoteLeft className="text-primary text-4xl opacity-20 absolute -top-2 -left-2" />

              <p className="text-lg leading-9 text-slate-600 pl-8">
                Assalamu Alaikum.
                <br />
                <br />
                Welcome to my official website. It is a privilege to serve the
                people with honesty, dedication, and accountability. My mission
                is to ensure sustainable development, quality education,
                improved healthcare, modern infrastructure, employment
                opportunities, and equal access to public services for every
                citizen.
                <br />
                <br />
                Together, through transparency, unity, and active community
                participation, we can build a stronger, smarter, and more
                prosperous Bangladesh for future generations.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-2xl font-bold text-slate-900">
                Dr. Mahbubur Rahman Liton
              </h4>

              <p className="text-primary font-medium mt-2">
                Member of Parliament
              </p>

              <p className="text-slate-500 mt-1">
                People's Republic of Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;