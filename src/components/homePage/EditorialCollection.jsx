import React from "react";

const collections = [
  {
    id: 1,
    title: "On Fire",
    subtitle: "Street Obsession",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Just Dropped",
    subtitle: "Off-Duty Vibes",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Statement Piece",
    subtitle: "Clean & Confident",
    button: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
];

const EditorialCollections = () => {
  return (
    <section className="w-full py-[100px]">
      <div className="mx-auto w-[85%]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative h-[520px] overflow-hidden"
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="mb-2 text-[13px] uppercase tracking-[2px]">
                  {collection.subtitle}
                </p>

                <h2 className="font-zurixFont text-[32px] uppercase leading-none">
                  {collection.title}
                </h2>

                <button
                  className="
                    mt-6
                    border-b
                    border-white
                    pb-1
                    text-[13px]
                    uppercase
                    tracking-[1.5px]
                    transition-all
                    duration-300
                    hover:opacity-60
                  "
                >
                  {collection.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialCollections;
