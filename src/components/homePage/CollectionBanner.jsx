import React from "react";

const CollectionBanner = () => {
  return (
    <section
      className="
        w-full
        px-[4%]
        py-[50px]

        sm:px-[5%]
        sm:py-[65px]

        md:px-[6%]
        md:py-[80px]

        lg:px-[7.5%]
        lg:py-[100px]
      "
    >
      <div
        className="
          group
          relative
          h-[420px]
          overflow-hidden
          rounded-[16px]

          sm:h-[480px]
          sm:rounded-[18px]

          md:h-[530px]
          md:rounded-[20px]

          lg:h-[600px]
          lg:rounded-[24px]
        "
      >
        {/* =========================
            BACKGROUND IMAGE
        ========================== */}

        <img
          src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2000&auto=format&fit=crop"
          alt="New collection"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
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
            bg-black/30
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
            inset-0
            flex
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
              max-w-[650px]
            "
          >
            {/* Small Heading */}

            <p
              className="
                font-zurixFont
                text-[10px]
                font-medium
                uppercase
                tracking-[2.5px]

                sm:text-[12px]
                sm:tracking-[3px]

                md:text-[14px]
                md:tracking-[4px]
              "
            >
              The New Collection
            </p>

            {/* Main Heading */}

            <h2
              className="
                mt-[12px]
                font-zurixFont
                text-[40px]
                font-bold
                leading-[1]
                tracking-[-1px]

                sm:mt-[15px]
                sm:text-[50px]

                md:mt-[18px]
                md:text-[60px]
                md:tracking-[-1.5px]

                lg:text-[64px]
              "
            >
              On Fire
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-[15px]
                max-w-[330px]
                text-[12px]
                leading-[1.6]

                sm:mt-[18px]
                sm:max-w-[430px]
                sm:text-[13px]

                md:mt-[20px]
                md:max-w-[500px]
                md:text-[15px]
                md:leading-[1.7]
              "
            >
              Discover statement pieces designed to bring effortless confidence
              to every look.
            </p>

            {/* Button */}

            <button
              type="button"
              className="
                mt-[22px]
                rounded-full
                bg-white
                px-[22px]
                py-[11px]
                text-[10px]
                font-semibold
                uppercase
                tracking-[1.2px]
                text-black
                transition-all
                duration-300
                hover:bg-black
                hover:text-white

                sm:mt-[25px]
                sm:px-[26px]
                sm:py-[12px]
                sm:text-[11px]

                md:mt-[30px]
                md:px-[30px]
                md:py-[13px]
                md:text-[12px]
                md:tracking-[1.5px]
              "
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;
