import React from "react";

const testimonials = [
  {
    id: 1,
    review:
      "Absolutely love the quality and fit. Everything feels thoughtfully designed and beautifully made.",
    name: "Sophia Williams",
    role: "Verified Customer",
  },
  {
    id: 2,
    review:
      "The pieces are even better in person. Elegant, comfortable, and incredibly easy to style.",
    name: "Emma Johnson",
    role: "Verified Customer",
  },
  {
    id: 3,
    review:
      "Fast delivery and beautiful packaging. The quality exceeded my expectations. I'll definitely shop again.",
    name: "Olivia Martin",
    role: "Verified Customer",
  },
];

const Testimonials = () => {
  return (
    <section
      className="
        w-full
        bg-[#f7f7f5]
        py-[55px]
        sm:py-[70px]
        md:py-[85px]
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
        {/* Heading */}
        <div
          className="
            mb-[35px]
            text-center
            sm:mb-[45px]
            md:mb-[50px]
            lg:mb-[60px]
          "
        >
          <p
            className="
              font-zurixFont
              text-[10px]
              uppercase
              tracking-[1.5px]
              text-[#de5922]
              sm:text-[11px]
              sm:tracking-[2px]
              md:text-[12px]
              lg:text-[13px]
            "
          >
            Testimonials
          </p>

          <h2
            className="
              mt-[10px]
              font-zurixFont
              text-[28px]
              uppercase
              leading-[1.05]
              tracking-[-0.5px]
              text-black
              sm:mt-[12px]
              sm:text-[34px]
              md:text-[44px]
              md:tracking-[-1px]
              lg:mt-[15px]
              lg:text-[52px]
            "
          >
            Over 500 Happy Reviews
          </h2>
        </div>

        {/* Testimonials */}
        <div
          className="
            grid
            grid-cols-1
            gap-[18px]
            sm:gap-[22px]
            md:grid-cols-2
            md:gap-[20px]
            lg:grid-cols-3
            lg:gap-[24px]
          "
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                flex
                min-h-[250px]
                flex-col
                justify-between
                border
                border-black/10
                bg-white
                p-[22px]
                transition-all
                duration-300
                sm:min-h-[270px]
                sm:p-[26px]
                md:min-h-[280px]
                md:p-[30px]
                lg:p-[32px]
                lg:hover:-translate-y-1
              "
            >
              {/* Stars */}
              <div
                className="
                  flex
                  gap-[3px]
                  text-[12px]
                  sm:gap-[4px]
                  sm:text-[13px]
                  md:text-[14px]
                "
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Review */}
              <p
                className="
                  mt-[25px]
                  text-[14px]
                  leading-[1.6]
                  text-black/70
                  sm:mt-[30px]
                  sm:text-[15px]
                  sm:leading-[1.65]
                  md:mt-[32px]
                  md:text-[16px]
                  md:leading-[1.7]
                "
              >
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div
                className="
                  mt-[25px]
                  border-t
                  border-black/10
                  pt-[15px]
                  sm:mt-[28px]
                  sm:pt-[18px]
                  md:mt-[30px]
                  md:pt-[20px]
                "
              >
                <h3
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.8px]
                    sm:text-[12px]
                    sm:tracking-[1px]
                    md:text-[13px]
                    lg:text-[14px]
                  "
                >
                  {testimonial.name}
                </h3>

                <p
                  className="
                    mt-[4px]
                    text-[9px]
                    uppercase
                    tracking-[0.8px]
                    text-black/40
                    sm:mt-[5px]
                    sm:text-[10px]
                    sm:tracking-[1px]
                    md:text-[11px]
                    lg:text-[12px]
                  "
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
