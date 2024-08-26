"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FirstSection = () => {
  const [randomIndices, setRandomIndices] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * "creativestudio".length);
      setRandomIndices((prevIndices) => {
        if (prevIndices.includes(randomIndex)) {
          return prevIndices.filter((index) => index !== randomIndex);
        } else {
          return [...prevIndices, randomIndex];
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pl-[180px] mt-[80px] w-full flex items-end pr-[20px] justify-between pb-[80px] ">
      <div>
        <p className="font-major pl-10 text-8xl">fullstack</p>
        <motion.p className="font-major pl-10 text-8xl text-[#9680ff] font-bold transition-all ease-in-out">
          {Array.from("creative").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{
                y: 0,
                textTransform: randomIndices.includes(index) ? "uppercase" : "none",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
        <p className="font-major pl-10 text-8xl">studios</p>
      </div>
      <div className="w-[30%] text-2xl">
        NexGen é especializada em websites, e-commerces, SaaS, Web Softwares e soluções web com desenvolvimento do 0 ao 100%
      </div>
    </section>
  );
};

export default FirstSection;
