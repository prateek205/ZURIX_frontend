import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const slider = [
    {
      id: 1,
      image: "image-four.jpg",
      smallText: "SS26 Collection — Paris & Milan",
      title: "Dressed",
      title2: "in Light",
    },
    {
      id: 2,
      image: "image-three.jpg",
      smallText: "New Arrivals — Atelier Edit",
      title: "Quietly",
      title2: "Refined",
    },
  ];

  return (
    <section
      className="
        relative
        h-[550px]
        w-full

        sm:h-[600px]

        md:h-[650px]

        lg:h-[700px]

        xl:h-[750px]
      "
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="h-full w-full"
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full w-full">
            {/* =========================
                SLIDE
            ========================== */}

            <div
              className="
                relative
                h-full
                w-full
                bg-cover
                bg-center

                sm:bg-center

                md:bg-center
              "
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* =========================
                  DARK OVERLAY
              ========================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/20

                  sm:bg-black/15
                "
              />

              {/* =========================
                  CONTENT
              ========================== */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  items-center
                  justify-center
                  px-5
                  text-center
                  text-white

                  sm:px-8

                  md:px-10
                "
              >
                <div
                  className="
                    w-full
                    max-w-[800px]
                  "
                >
                  {/* Small Text */}

                  <p
                    className="
                      mb-[12px]
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[2px]

                      sm:mb-[15px]
                      sm:text-[11px]
                      sm:tracking-[2.5px]

                      md:mb-[18px]
                      md:text-[13px]
                      md:tracking-[3px]

                      lg:mb-[20px]
                      lg:text-[14px]
                      lg:tracking-[3px]
                    "
                  >
                    {slide.smallText}
                  </p>

                  {/* =========================
                      MAIN TITLE
                  ========================== */}

                  <h1
                    className="
                      font-zurixFont
                      text-[52px]
                      font-light
                      leading-[0.95]
                      tracking-[-2px]

                      sm:text-[64px]
                      sm:tracking-[-2.5px]

                      md:text-[80px]

                      lg:text-[100px]
                      lg:tracking-[-4px]

                      xl:text-[110px]
                    "
                  >
                    {slide.title}

                    <br />

                    <span className="font-normal">{slide.title2}</span>
                  </h1>

                  {/* =========================
                      BUTTON
                  ========================== */}

                  <button
                    type="button"
                    className="
                      mt-[25px]
                      border
                      border-white
                      px-[22px]
                      py-[10px]
                      text-[10px]
                      uppercase
                      tracking-[1.5px]
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black

                      sm:mt-[28px]
                      sm:px-[26px]
                      sm:py-[11px]
                      sm:text-[11px]

                      md:mt-[32px]
                      md:px-[30px]
                      md:py-[12px]
                      md:text-[12px]

                      lg:mt-[35px]
                      lg:px-[32px]
                      lg:py-[13px]
                    "
                  >
                    Discover Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
