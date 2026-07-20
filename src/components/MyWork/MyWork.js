import React, { useState } from "react";
import {
  FaLandmark,
  FaPeopleGroup,
  FaTrophy,
} from "react-icons/fa6";
import Parliament from "./Parliament";
import Constituency from "./Constituency";

const MyWork = () => {
  const [activeTab, setActiveTab] = useState("parliament");

  const tabs = [
    {
      id: "parliament",
      title: "Parliament",
      icon: <FaLandmark />,
    },
    {
      id: "constituency",
      title: "Constituency",
      icon: <FaPeopleGroup />,
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      {/* Background Shape */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"></div>

      <div className="absolute -bottom-52 right-0 w-[420px] h-[420px] rounded-full bg-blue-300/20 blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section Heading */}

        <div
          className="max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold">
            Public Service & Leadership
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            My Work as a
            <span className="text-primary block mt-2">
              Member of Parliament
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dedicated to serving the nation through responsible legislation,
            constituency development, and initiatives that improve the lives of
            citizens across Bangladesh.
          </p>
        </div>

        {/* Tab Navigation */}

        <div
          className="mt-14 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="inline-flex flex-wrap justify-center rounded-2xl bg-white shadow-xl p-2 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}

         <div
  className="mt-16"
  data-aos="zoom-in"
>
  {activeTab === "parliament" && <Parliament />}

  {activeTab === "constituency" && <Constituency />}

  {activeTab === "achievements" && <Parliament />}
</div>
      </div>
    </section>
  );
};

export default MyWork;