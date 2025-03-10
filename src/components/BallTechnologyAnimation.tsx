import React from 'react';
import { motion } from 'framer-motion';

export default function BallTechnologyAnimation() {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#CC73F8]/10 to-[#D68DF9]/10"></div>
      
      {/* Ball Outline */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#CC73F8]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Technology Points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-[#CC73F8] rounded-full"
          style={{
            top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 6)}%`,
            left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 6)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Center Ball */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-[#CC73F8] to-[#D68DF9]"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=200&q=80')] bg-cover bg-center opacity-30"></div>
      </motion.div>
      
      {/* Rotating Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#CC73F8]/20 to-[#D68DF9]/20"
          style={{
            transformOrigin: 'center',
            rotate: `${i * 60}deg`,
          }}
          animate={{
            rotate: [`${i * 60}deg`, `${i * 60 + 360}deg`],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}