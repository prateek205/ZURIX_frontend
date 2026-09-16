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
    <section
      className="
        w-full
        py-[50px]

        sm:py-[65px]

        md:py-[80px]

        lg:py-[100px]
      "
    >
      <div
        className="
          mx-auto
          w-[92%]

          sm:w-[90%]

          md:w-[88%]

          lg:w-[85%]
        "
      >
        {/* =========================
            COLLECTION GRID
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[12px]

            sm:gap-[16px]

            md:grid-cols-3
            md:gap-[18px]

            lg:gap-[20px]
          "
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="
                group
                relative
                h-[400px]
                overflow-hidden

                sm:h-[440px]

                md:h-[450px]

                lg:h-[520px]
              "
            >
              {/* =========================
                  IMAGE
              ========================== */}

              <img
                src={collection.image}
                alt={collection.title}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* =========================
                  OVERLAY
              ========================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/25
                  transition-all
                  duration-500
                  group-hover:bg-black/40
                "
              />

              {/* =========================
                  CONTENT
              ========================== */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-[20px]
                  text-white

                  sm:p-[24px]

                  md:p-[25px]

                  lg:p-[32px]
                "
              >
                {/* Subtitle */}

                <p
                  className="
                    mb-[6px]
                    text-[10px]
                    uppercase
                    tracking-[1.5px]

                    sm:mb-[7px]
                    sm:text-[11px]
                    sm:tracking-[1.8px]

                    md:text-[12px]

                    lg:mb-[8px]
                    lg:text-[13px]
                    lg:tracking-[2px]
                  "
                >
                  {collection.subtitle}
                </p>

                {/* Title */}

                <h2
                  className="
                    font-zurixFont
                    text-[27px]
                    uppercase
                    leading-none
                    tracking-[-0.5px]

                    sm:text-[29px]

                    md:text-[30px]

                    lg:text-[32px]
                  "
                >
                  {collection.title}
                </h2>

                {/* Button */}

                <button
                  type="button"
                  className="
                    mt-[18px]
                    border-b
                    border-white
                    pb-[4px]
                    text-[10px]
                    uppercase
                    tracking-[1.2px]
                    transition-all
                    duration-300
                    hover:opacity-60

                    sm:mt-[20px]
                    sm:text-[11px]

                    md:mt-[22px]

                    lg:mt-[24px]
                    lg:pb-[5px]
                    lg:text-[13px]
                    lg:tracking-[1.5px]
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
