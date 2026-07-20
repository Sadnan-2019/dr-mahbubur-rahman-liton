import React from "react";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Icons
import {
  FaArrowRight,
  FaBuildingColumns,
  FaUsers,
  FaRoad,
} from "react-icons/fa6";

// Images
import parliament1 from "../../assets/landing1.jpg";
import parliament2 from "../../assets/landing2.jpg";
import parliament3 from "../../assets/landing2.jpg";

const slides = [
  {
    id: 1,
    image: parliament1,
    badge: "Parliament",
    title: "Representing the Voice of the People",
    highlight: "Responsible National Leadership",
    description:
      "Committed to strengthening democratic values, participating in parliamentary discussions, and supporting legislation that improves healthcare, education, infrastructure, and sustainable national development for every citizen.",
    stats: [
      {
        icon: <FaBuildingColumns />,
        title: "National Policy",
      },
      {
        icon: <FaUsers />,
        title: "Public Representation",
      },
      {
        icon: <FaRoad />,
        title: "Development",
      },
    ],
  },

  {
    id: 2,
    image: parliament2,
    badge: "Healthcare",
    title: "Improving Healthcare for Every Citizen",
    highlight: "Accessible Medical Services",
    description:
      "Promoting quality healthcare, stronger hospitals, better medical education, and equal access to health services to improve the wellbeing of communities throughout Bangladesh.",
    stats: [
      {
        icon: <FaBuildingColumns />,
        title: "Healthcare",
      },
      {
        icon: <FaUsers />,
        title: "Medical Services",
      },
      {
        icon: <FaRoad />,
        title: "Community Care",
      },
    ],
  },

  {
    id: 3,
    image: parliament3,
    badge: "Development",
    title: "Building a Stronger Bangladesh Together",
    highlight: "People First",
    description:
      "Supporting initiatives that enhance education, infrastructure, employment opportunities, youth empowerment, and sustainable community development across the country.",
    stats: [
      {
        icon: <FaBuildingColumns />,
        title: "Education",
      },
      {
        icon: <FaUsers />,
        title: "Youth",
      },
      {
        icon: <FaRoad />,
        title: "Infrastructure",
      },
    ],
  },
];

const Parliament = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-white shadow-2xl">

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="parliamentSwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Part 2 will go here */}

            <div className="relative h-[620px] lg:h-[650px] overflow-hidden">

  {/* Background Image */}

  <img
    src={slide.image}
    alt={slide.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30"></div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

  {/* Content */}

  <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10">

    <div className="flex h-full items-center">

      <div
        className="max-w-3xl"
        data-aos="fade-right"
      >

        {/* Badge */}

        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-white font-medium">

          <FaBuildingColumns className="text-primary" />

          {slide.badge}

        </span>

        {/* Heading */}

        <h2 className="mt-8 text-4xl lg:text-6xl font-bold leading-tight text-white">

          {slide.title}

          <span className="block text-primary mt-3">

            {slide.highlight}

          </span>

        </h2>

        {/* Description */}

        <p className="mt-8 text-lg leading-8 text-slate-200 max-w-2xl">

          {slide.description}

        </p>

        {/* CTA */}

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            to="/parliament"
            className="btn btn-primary rounded-full px-8"
          >
            Explore Parliament

            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-slate-900 rounded-full px-8"
          >
            Contact Office
          </Link>

        </div>

        {/* Features */}

        {/* <div className="grid sm:grid-cols-3 gap-5 mt-14">

          {slide.stats.map((item, index) => (

            <div
              key={index}
              className="
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                p-6
                transition-all
                duration-500
                hover:bg-primary
                hover:border-primary
              "
            >

              <div className="text-3xl text-white mb-5">

                {item.icon}

              </div>

              <h3 className="text-lg font-semibold text-white">

                {item.title}

              </h3>

            </div>

          ))}

        </div> */}

      </div>

    </div>

  </div>

  {/* Bottom Decoration */}

  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>

</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Parliament;