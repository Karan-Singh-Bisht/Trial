import React from "react";

const Page5 = () => {
  const testimonials = [
    {
      id: 1,
      text: "I time-travelled from mythic battles to futuristic warfare - all in one game.",
      image: "/image/6_1.png",
    },
    {
      id: 2,
      text: "I time-travelled from mythic battles to futuristic warfare - all in one game.",
      image: "/image/6_2.png",
    },
    {
      id: 3,
      text: "I time-travelled from mythic battles to futuristic warfare - all in one game.",
      image: "/image/6_3.png",
    },
    {
      id: 4,
      text: "I time-travelled from mythic battles to futuristic warfare - all in one game.",
      image: "/image/6_4.png",
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen p-6 sm:p-8">
      <h1 className="text-[8vw] sm:text-[5.5vw] leading-tight font-tiltWarp sm:px-16 py-6 sm:py-8 font-light text-center sm:text-left">
        Voices from <br className="hidden sm:block" /> the Chronoverse
      </h1>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-stretch justify-center sm:justify-start gap-10 sm:gap-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`w-[80vw] sm:w-[40vw] md:w-[20vw] ${
              testimonial.id % 2 === 0 ? "sm:mt-32" : ""
            } text-center flex flex-col gap-4`}
          >
            <div className="w-full aspect-square flex items-center justify-center rounded-2xl bg-[#CB806A]">
              <img
                src={testimonial.image}
                className="w-full h-full rounded-2xl object-cover"
                alt="image"
              />
            </div>
            <h4 className="opacity-50 font-madimi text-base sm:text-sm md:text-[0.95rem]">
              {testimonial.text}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
