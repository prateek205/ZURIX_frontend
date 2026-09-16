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
          HEADER
      ========================== */}

      <div
        className="
          mb-[30px]

          sm:mb-[38px]

          md:mb-[45px]

          lg:mb-[50px]
        "
      >
        {/* Small Label */}

        <p
          className="
            font-zurixFont
            text-[11px]
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
          Styling Guide
        </p>

        {/* Heading + Button */}

        <div
          className="
            mt-[10px]
            flex
            flex-col
            items-start
            gap-[15px]

            sm:mt-[12px]
            sm:gap-[18px]

            md:mt-[15px]
            md:flex-row
            md:items-end
            md:justify-between

            lg:gap-[20px]
          "
        >
          {/* Main Heading */}

          <h2
            className="
              max-w-[350px]
              font-zurixFont
              text-[30px]
              font-bold
              leading-[1.05]
              tracking-[-1px]

              sm:max-w-[500px]
              sm:text-[36px]

              md:max-w-[600px]
              md:text-[42px]

              lg:max-w-[700px]
              lg:text-[46px]
              lg:tracking-[-1.5px]
            "
          >
            Build your signature look
          </h2>

          {/* Discover Button */}

          <button
            type="button"
            className="
              border-b
              border-black
              pb-[3px]
              text-[10px]
              font-semibold
              uppercase
              tracking-[1px]
              transition-opacity
              duration-300
              hover:opacity-50

              sm:text-[11px]

              md:text-[12px]

              lg:pb-[5px]
              lg:text-[13px]
            "
          >
            Discover More
          </button>
        </div>
      </div>

      {/* =========================
          STYLING CARDS
      ========================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-[35px]

          sm:gap-[40px]

          md:grid-cols-3
          md:gap-[18px]

          lg:gap-[20px]
        "
      >
        {stylingSteps.map((step) => (
          <article
            key={step.id}
            className="
              group
              cursor-pointer
            "
          >
            {/* =========================
                IMAGE
            ========================== */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[15px]
                bg-gray-100

                sm:rounded-[17px]

                md:rounded-[18px]

                lg:rounded-[20px]
              "
            >
              <img
                src={step.image}
                alt={step.title}
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
                  NUMBER
              ========================== */}

              <div
                className="
                  absolute
                  left-[10px]
                  top-[10px]
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[9px]
                  font-semibold
                  shadow-sm

                  sm:left-[14px]
                  sm:top-[14px]
                  sm:h-[38px]
                  sm:w-[38px]
                  sm:text-[10px]

                  md:left-[15px]
                  md:top-[15px]
                  md:h-[40px]
                  md:w-[40px]
                  md:text-[11px]

                  lg:left-[20px]
                  lg:top-[20px]
                  lg:h-[42px]
                  lg:w-[42px]
                  lg:text-[12px]
                "
              >
                {step.number}
              </div>
            </div>

            {/* =========================
                CONTENT
            ========================== */}

            <div
              className="
                mt-[14px]

                sm:mt-[16px]

                md:mt-[17px]

                lg:mt-[20px]
              "
            >
              {/* Title */}

              <h3
                className="
                  font-zurixFont
                  text-[21px]
                  font-semibold
                  leading-[1.1]

                  sm:text-[22px]

                  md:text-[23px]

                  lg:text-[25px]
                "
              >
                {step.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-[6px]
                  max-w-[300px]
                  text-[12px]
                  leading-[1.55]
                  text-gray-600

                  sm:mt-[7px]
                  sm:text-[13px]

                  md:mt-[8px]
                  md:max-w-[320px]
                  md:text-[14px]
                  md:leading-[1.6]
                "
              >
                {step.description}
              </p>

              {/* Explore */}

              <button
                type="button"
                className="
                  mt-[14px]
                  border-b
                  border-black
                  pb-[3px]
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[1.2px]
                  transition-opacity
                  duration-300
                  hover:opacity-50

                  sm:mt-[16px]
                  sm:text-[10px]

                  md:mt-[17px]
                  md:text-[11px]

                  lg:mt-[18px]
                  lg:pb-[4px]
                  lg:tracking-[1.5px]
                "
              >
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
