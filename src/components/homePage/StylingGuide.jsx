import React from "react";

const stylingSteps = [
  {
    id: 1,
    number: "01",
    title: "Anchor",
    description: "Start with one timeless piece and build your look around it.",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    number: "02",
    title: "Volume",
    description: "Balance relaxed silhouettes with refined proportions.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    number: "03",
    title: "Detail",
    description: "Finish your look with the details that make it yours.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
  },
];

const StylingGuide = () => {
  return (
    <section className="mx-auto w-[85%] py-[100px]">
      {/* =================================
          HEADER
      ================================= */}
      <div className="mb-[50px]">
        <p className="font-zurixFont text-[16px] uppercase tracking-[3px] text-[rgb(222,89,34)]">
          Styling Guide
        </p>

        <div className="mt-[15px] flex items-end justify-between">
          <h2 className="max-w-[700px] font-zurixFont text-[46px] font-bold leading-[1.05] tracking-[-1.5px]">
            Build your signature look
          </h2>

          <button className="border-b border-black pb-[5px] text-[13px] font-semibold uppercase tracking-[1px]">
            Discover More
          </button>
        </div>
      </div>

      {/* =================================
          STYLING CARDS
      ================================= */}
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
        {stylingSteps.map((step) => (
          <article key={step.id} className="group cursor-pointer">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-gray-100">
              <img
                src={step.image}
                alt={step.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Number */}
              <div className="absolute left-[20px] top-[20px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white text-[12px] font-semibold">
                {step.number}
              </div>
            </div>

            {/* Content */}
            <div className="mt-[20px]">
              <h3 className="font-zurixFont text-[25px] font-semibold">
                {step.title}
              </h3>

              <p className="mt-[8px] max-w-[320px] text-[14px] leading-[1.6] text-gray-600">
                {step.description}
              </p>

              <button className="mt-[18px] border-b border-black pb-[4px] text-[11px] font-semibold uppercase tracking-[1.5px]">
                Explore
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StylingGuide;
