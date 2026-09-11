import React from "react";

const CollectionBanner = () => {
  return (
    <section className="w-full px-[7.5%] py-[100px]">
      <div className="group relative h-[600px] overflow-hidden rounded-[24px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2000&auto=format&fit=crop"
          alt="New collection"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/35" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-white">
          <div className="max-w-[650px]">
            <p className="font-zurixFont text-[14px] uppercase tracking-[4px]">
              The New Collection
            </p>

            <h2 className="mt-[18px] font-zurixFont text-[48px] font-bold leading-[1.05] tracking-[-1.5px] md:text-[64px]">
              On Fire
            </h2>

            <p className="mx-auto mt-[20px] max-w-[500px] text-[15px] leading-[1.7]">
              Discover statement pieces designed to bring effortless
              confidence to every look.
            </p>

            <button className="mt-[30px] rounded-full bg-white px-[30px] py-[13px] text-[12px] font-semibold uppercase tracking-[1.5px] text-black transition-all duration-300 hover:bg-black hover:text-white">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;