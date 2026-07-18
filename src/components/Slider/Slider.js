import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Demo Images
import slide1 from "../../assets/landing1.jpg";
import slide2 from "../../assets/landing2.jpg";
import slide3 from "../../assets/landing2.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "Member of Parliament",
      title: "Dr. Mahbubur Rahman Liton",
      description:
        "Dedicated to public service, sustainable development, and improving the quality of life for every citizen through transparency, leadership, and community engagement.",
      primaryBtn: "Development Projects",
      secondaryBtn: "Citizen Services",
    },
    {
      id: 2,
      image: slide2,
      subtitle: "Building a Better Future",
      title: "Together We Create Lasting Development",
      description:
        "Supporting education, healthcare, infrastructure, youth empowerment, and social welfare to build a stronger and more prosperous Bangladesh.",
      primaryBtn: "Our Achievements",
      secondaryBtn: "Latest News",
    },
    {
      id: 3,
      image: slide3,
      subtitle: "Serving the People",
      title: "Committed to Every Citizen",
      description:
        "Working closely with the community to solve local challenges, strengthen public services, and ensure inclusive development for future generations.",
      primaryBtn: "Contact",
      secondaryBtn: "Gallery",
    },
  ];

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="heroSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative min-h-[75vh] lg:min-h-[92vh] bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/20"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 min-h-[75vh] lg:min-h-[92vh] flex items-center">
                <div className="max-w-3xl text-white">

                  <span className="inline-block bg-primary text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                    {slide.subtitle}
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-base md:text-lg text-slate-200 leading-8 max-w-2xl mb-8">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/development-projects"
                      className="btn btn-primary rounded-full px-8"
                    >
                      {slide.primaryBtn}
                    </Link>

                    <Link
                      to="/services"
                      className="btn btn-outline text-white border-white hover:border-primary hover:bg-primary rounded-full px-8"
                    >
                      {slide.secondaryBtn}
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;