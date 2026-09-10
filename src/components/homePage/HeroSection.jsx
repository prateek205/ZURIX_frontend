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
    <section className="w-full h-[700px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full">
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
                <div>
                  <p className="mb-4 text-sm uppercase tracking-[3px]">
                    {slide.smallText}
                  </p>

                  <h1 className="text-6xl font-light md:text-8xl">
                    {slide.title}
                  </h1>

                  <button className="mt-8 border border-white px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black">
                    {slide.buttonText || "Discover Now"}
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
