import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TechnologyCardProps {
  title: string;
  description: string;
  index: number;
  total: number;
}

export default function TechnologyCard({ title, description, index, total }: TechnologyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    once: false // Changed to false to make it animate every time
  });

  const variants = {
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="glossy-card bg-dark-850/80 p-6 rounded-lg shadow-xl relative transform transition-all duration-300 hover:scale-105"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#CC73F8]/5 to-transparent rounded-lg"></div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#CC73F8] to-[#D68DF9]">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}