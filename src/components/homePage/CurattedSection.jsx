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
    <section
      className="
        mx-auto
        w-[92%]
        py-[50px]

        sm:w-[90%]
        sm:py-[65px]

        md:w-[88%]
        md:py-[80px]

        lg:w-[85%]
        lg:py-[100px]
      "
    >
      {/* =========================
          SECTION HEADING
      ========================== */}

      <div
        className="
          mb-[30px]

          sm:mb-[38px]

          md:mb-[45px]

          lg:mb-[50px]
        "
      >
        {/* Small Heading */}

        <h1
          className="
            font-zurixFont
            text-[11px]
            font-normal
            uppercase
            tracking-[2px]
            text-[rgb(222,89,34)]

            sm:text-[12px]
            sm:tracking-[2.5px]

            md:text-[14px]
            md:tracking-[3px]

            lg:text-[16px]
          "
        >
          Curated Collections
        </h1>

        {/* Main Heading */}

        <h2
          className="
            mt-[10px]
            max-w-[350px]
            font-zurixFont
            text-[30px]
            font-bold
            leading-[1.05]
            tracking-[-1px]

            sm:mt-[12px]
            sm:max-w-[500px]
            sm:text-[36px]

            md:mt-[14px]
            md:max-w-[600px]
            md:text-[42px]

            lg:mt-[15px]
            lg:max-w-none
            lg:text-[46px]
            lg:tracking-[-1.5px]
          "
        >
          Outfit for every moment
        </h2>
      </div>

      {/* =========================
          COLLECTION CARDS
      ========================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-[12px]

          sm:grid-cols-2
          sm:gap-[15px]

          md:gap-[18px]

          lg:grid-cols-4
          lg:gap-[20px]
        "
      >
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="
              group
              relative
              h-[420px]
              overflow-hidden
              rounded-[16px]

              sm:h-[430px]
              sm:rounded-[18px]

              md:h-[480px]

              lg:h-[520px]
              lg:rounded-[20px]
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
                absolute
                inset-0
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
                DARK OVERLAY
            ========================== */}

            <div
              className="
                absolute
                inset-0
                bg-black/25
                transition-all
                duration-500
                group-hover:bg-black/45
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
                p-[18px]
                text-white

                sm:p-[20px]

                md:p-[25px]

                lg:p-[30px]
              "
            >
              {/* Collection Title */}

              <h3
                className="
                  font-zurixFont
                  text-[20px]
                  font-semibold
                  leading-[1.1]

                  sm:text-[21px]

                  md:text-[22px]

                  lg:text-[24px]
                "
              >
                {collection.title}
              </h3>

              {/* Subtitle */}

              <p
                className="
                  mt-[6px]
                  max-w-[190px]
                  text-[12px]
                  leading-[1.4]

                  sm:mt-[7px]
                  sm:max-w-[210px]
                  sm:text-[13px]

                  md:mt-[8px]
                  md:max-w-[220px]
                  md:text-[14px]

                  lg:text-[15px]
                "
              >
                {collection.subtitle}
              </p>

              {/* Button */}

              <button
                type="button"
                className="
                  mt-[18px]
                  border-b
                  border-white
                  pb-[4px]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[1.2px]
                  transition-all
                  duration-300
                  group-hover:pb-[7px]

                  sm:mt-[20px]
                  sm:text-[11px]

                  md:mt-[22px]

                  lg:mt-[25px]
                  lg:text-[12px]
                  lg:tracking-[1.5px]
                "
              >
                Discover Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedCollections;
