"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SecondSection = () => {
  const [dots, setDots] = useState<number[]>([]);

  useEffect(() => {
    // Definindo o número de pontos com base no tamanho da tela (reduzido)
    const numberOfDots = Math.floor((window.innerWidth / 40) * (window.innerHeight / 40));
    setDots(Array.from({ length: numberOfDots }, (_, i) => i));
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-[80px]">
      {dots.map((dot) => (
        <motion.div
          key={dot}
          className="absolute bg-black rounded-full"
          style={{
            width: "2px", // Aumentei o tamanho para manter a visibilidade com menos pontos
            height: "2px",
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            willChange: "transform", // Adicionado para otimização
          }}
          animate={{
            x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SecondSection;
