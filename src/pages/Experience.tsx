import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Trophy, Users, Target, ThumbsUp } from "lucide-react";
import BallTechnologyAnimation from "../components/BallTechnologyAnimation";

export default function Experience() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The EliteHoops Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of athletes who have elevated their game with
            EliteHoops. Discover why champions choose our professional-grade
            basketballs.
          </p>
        </motion.div>

        {/* Ball Technology Animation */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Advanced Ball Technology
          </h2>
          <div className="glossy-card bg-dark-850/50 rounded-2xl overflow-hidden">
            <BallTechnologyAnimation />
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Trophy, value: "50+", text: "Championships Won" },
            { icon: Users, value: "10K+", text: "Active Players" },
            { icon: Target, value: "95%", text: "Accuracy Rate" },
            { icon: ThumbsUp, value: "98%", text: "Satisfaction Rate" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glossy-card bg-dark-850/50 p-8 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation triggers when 20% of the box is visible
            >
              <item.icon className="w-12 h-12 text-[#CC73F8] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.value}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            What Champions Say
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="glossy-card bg-dark-850/50 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1628890923662-2cb23c2e0cfe",
                        "1566492031773-4f4e44671857",
                        "1548372290-8d01b6c8e78c",
                        "1590086782957-93c06ef21604",
                        "1517849845537-4d257902454a",
                        "1564564321837-a57b7070c4e5",
                      ][index]
                    }?auto=format&fit=crop&w=200&q=80`}
                    alt={`Athlete ${index + 1}`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-white font-semibold">
                      {
                        [
                          "Sarah Johnson",
                          "Marcus Chen",
                          "David Thompson",
                          "Emma Rodriguez",
                          "Michael Chang",
                          "Lisa Parker",
                        ][index]
                      }
                    </h3>
                    <p className="text-[#CC73F8]">
                      {
                        [
                          "Professional Player",
                          "College Athlete",
                          "Team Coach",
                          "Olympic Athlete",
                          "Basketball Trainer",
                          "Youth Coach",
                        ][index]
                      }
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#CC73F8]/20" />
                  <p className="text-gray-300 mb-4">
                    {
                      [
                        "The grip and control of EliteHoops basketballs are unmatched. It's given me the confidence to perform at my best in every game.",
                        "These balls maintain their quality even after intense practice sessions. The consistency in performance is remarkable.",
                        "As a coach, I've seen how quality equipment impacts player development. EliteHoops provides the perfect tools for success.",
                        "The perfect balance and feel of these basketballs have helped me maintain precision in crucial moments.",
                        "For training purposes, these basketballs are exceptional. They help players develop proper technique.",
                        "The durability and performance of EliteHoops basketballs make them perfect for young athletes learning the game.",
                      ][index]
                    }
                  </p>
                </div>
                <div className="flex text-[#CC73F8]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of champions and elevate your game with EliteHoops
            professional basketballs.
          </p>
          <a
            href="/products"
            className="inline-flex items-center bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-8 py-4 rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
          >
            Shop Premium Basketballs
          </a>
        </motion.div>
      </div>
    </div>
  );
}
