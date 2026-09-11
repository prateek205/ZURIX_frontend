import React from "react";

const collections = [
  {
    id: 1,
    title: "Work Collection",
    subtitle: "Tailored for Every Meeting",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Weekend Collection",
    subtitle: "Unhurried, Effortlessly Dressed",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Evening Collection",
    subtitle: "After Dark, Effortlessly Yours",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Travel Collection",
    subtitle: "Pack Light, Arrive Elegant",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
];

const CuratedCollections = () => {
  return (
    <section className="mx-auto w-[85%] py-[100px]">
      {/* =========================
          SECTION HEADING
      ========================= */}
      <div className="mb-[50px]">
        <h1 className="font-zurixFont text-[16px] font-normal uppercase tracking-[3px] text-[rgb(222,89,34)]">
          Curated Collections
        </h1>

        <h2 className="mt-[15px] font-zurixFont text-[46px] font-bold leading-none tracking-[-1.5px]">
          Outfit for every moment
        </h2>
      </div>

      {/* =========================
          COLLECTION CARDS
      ========================= */}
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group relative h-[520px] overflow-hidden rounded-[20px]"
          >
            {/* Image */}
            <img
              src={collection.image}
              alt={collection.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-[30px] text-white">
              <h3 className="font-zurixFont text-[24px] font-semibold">
                {collection.title}
              </h3>

              <p className="mt-[8px] max-w-[220px] text-[15px] leading-[1.4]">
                {collection.subtitle}
              </p>

              <button className="mt-[25px] border-b border-white pb-[5px] text-[12px] font-semibold uppercase tracking-[1.5px] transition-all duration-300 group-hover:pb-[8px]">
                Discovery Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedCollections;
