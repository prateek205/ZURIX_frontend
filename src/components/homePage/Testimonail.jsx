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
    <section className="w-full bg-[#f7f7f5] py-[100px]">
      <div className="mx-auto w-[85%]">
        {/* Heading */}
        <div className="mb-[60px] text-center">
          <p className="font-zurixFont text-[13px] uppercase tracking-[2px] text-[#de5922]">
            Testimonials
          </p>

          <h2 className="mt-3 font-zurixFont text-[38px] uppercase leading-none text-black md:text-[52px]">
            Over 500 Happy Reviews
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex min-h-[280px] flex-col justify-between border border-black/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[14px]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Review */}
              <p className="mt-8 text-[16px] leading-[1.7] text-black/70">
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div className="mt-8 border-t border-black/10 pt-5">
                <h3 className="text-[14px] font-medium uppercase tracking-[1px]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-[12px] uppercase tracking-[1px] text-black/40">
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
