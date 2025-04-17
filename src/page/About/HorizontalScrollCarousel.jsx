import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-4">
          <div className="w-[30vw] p-4">
            <h1 className="font-bold text-[4vw]">
              Why is Chronoverse Special?
            </h1>
          </div>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      style={{ backgroundColor: card.bgColor }}
      className={`group relative rounded-3xl items-center p-5 h-[450px] flex justify-between w-[40vw] overflow-hidden `}
    >
      <div className="w-1/2 text-xl">
        <h1 className="font-semibold">{card.title}</h1>
        <p className="font-semibold">{card.para}</p>
      </div>
      <img src={card.url} alt="content" className="object-cover" />
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/image/2_1.png",
    title: "Live Mythology:",
    para: "Play through legendary battles, divine encounters, and ancient secrets.",
    bgColor: "#FFFAF2",
    id: 1,
  },
  {
    url: "/image/2_1.png",
    title: "Cultural & Festival Hub:",
    para: "Celebrate Diwali, Navratri, Kumbh Mela, and futuristic space festivals.",
    bgColor: "#D8EFFF",
    id: 2,
  },
  {
    url: "/image/2_1.png",
    title: "Time-Travel Storytelling:",
    para: "Change the past, rewrite the future, and experience alternate histories.",
    bgColor: "#EEFFED",
    id: 3,
  },
  {
    url: "/image/2_1.png",
    title: "Karma-Based Gameplay:",
    para: "Every action affects your destiny across multiple lifetimes.",
    bgColor: "#DCF7F1",
    id: 4,
  },
  {
    url: "/image/2_1.png",
    title: "Immersive Technologies",
    para: "Experience AR, VR, and AI-driven narratives.",
    bgColor: "#F7F6FF",
    id: 5,
  },
];
