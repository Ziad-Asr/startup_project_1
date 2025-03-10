import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TechnologyCard from "../components/TechnologyCard";
import TestimonialCard from "../components/TestimonialCard";
import RevealOnScroll from "../components/RevealOnScroll";
import { Award, Check, Users, Target, Medal } from "lucide-react";
import { BasketballModelDisplay } from "../components/BasketballModelDisplay";

export default function Home() {
  const technologies = [
    {
      title: "Precision Grip™",
      description:
        "Advanced micro-texture surface pattern enhances ball control in all conditions.",
    },
    {
      title: "Perfect Balance Core",
      description:
        "Symmetrically weighted core ensures consistent bounce and true flight path.",
    },
    {
      title: "Moisture-Lock",
      description:
        "Premium composite leather maintains grip excellence in any weather.",
    },
    {
      title: "Impact Cushioning",
      description:
        "Specialized internal layer absorbs shock for better ball control.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Player",
      image: "photo-1628890923662-2cb23c2e0cfe",
      quote:
        "The grip and control of EliteHoops basketballs are unmatched. It's given me the confidence to perform at my best in every game.",
    },
    {
      name: "Marcus Chen",
      role: "College Athlete",
      image: "photo-1566492031773-4f4e44671857",
      quote:
        "These balls maintain their quality even after intense practice sessions. The consistency in performance is remarkable.",
    },
    {
      name: "David Thompson",
      role: "Team Coach",
      image: "photo-1548372290-8d01b6c8e78c",
      quote:
        "As a coach, I've seen how quality equipment impacts player development. EliteHoops provides the perfect tools for success.",
    },
  ];

  const professionalSeries = [
    {
      name: "Pro Elite Championship",
      description: "Official game ball with premium composite leather",
      price: 89.99,
      image: "photo-1519861531473-9200262188bf",
      features: ["FIBA Approved", "Perfect Balance"],
      highlights: ["Premium composite leather", "Advanced grip pattern"],
    },
    {
      name: "Street Master Pro",
      description: "Engineered for outdoor performance",
      price: 49.99,
      image: "photo-1518063319789-7217e6706b04",
      features: ["All-Weather", "Durable"],
      highlights: ["Weather-resistant coating", "Reinforced construction"],
    },
    {
      name: "Elite Competition",
      description: "Tournament-grade basketball",
      price: 79.99,
      image: "photo-1546519638-68e109498ffc",
      features: ["Competition Spec", "Pro Touch"],
      highlights: ["Tournament-grade materials", "Superior consistency"],
    },
  ];

  const journeyMilestones = [
    {
      year: "2000",
      title: "Global Expansion",
      description: "Expanded to international markets across 20 countries",
      icon: Target,
    },
    {
      year: "2010",
      title: "Innovation Era",
      description: "Launched revolutionary Precision Grip™ technology",
      icon: Award,
    },
    {
      year: "2015",
      title: "Community Impact",
      description: "Started youth development programs worldwide",
      icon: Users,
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the industry with smart basketball technology",
      icon: Medal,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=2000&q=80"
            alt="Basketball Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/80"></div>
        </div>

        {/* Content + 3D Model */}
        <div className="relative h-full container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="max-w-2xl text-white space-y-6 md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CC73F8] to-[#E2B0FB]">
              Crafted for Champions
            </h1>
            <p className="text-xl text-gray-300">
              Experience unmatched quality and precision with our
              professional-grade basketballs, designed for peak performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-8 py-4 rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className=" rounded-lg shadow-xl p-4 w-[400px] md:w-[400px]">
              <BasketballModelDisplay />
              {/* <ModelDisplay /> */}
              {/* <ModelJumpDisplay /> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-12 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC73F8]/5 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Timeline */}
            <RevealOnScroll>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Journey
                </h2>
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#CC73F8] to-[#D68DF9]"></div>
                  {journeyMilestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      className="relative pl-16 pb-6 last:pb-0"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: false }}
                    >
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-dark-850 border-2 border-[#CC73F8] flex items-center justify-center">
                        <milestone.icon className="w-5 h-5 text-[#CC73F8]" />
                      </div>
                      <div className="bg-dark-850 rounded-lg p-4 glossy-card">
                        <span className="text-[#CC73F8] font-bold text-sm">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1 mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* 3D Text Model */}
            <RevealOnScroll delay={0.3}>
              <div className="relative h-[500px] perspective-[1500px]">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative text-center">
                    <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] leading-[1.1] transform-style-3d">
                      ELITE
                    </h2>
                    <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] mt-4 leading-[1.1] transform-style-3d">
                      HOOPS
                    </h2>
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#CC73F8]/20 to-[#D68DF9]/20 blur-3xl -z-10"></div>
                  </div>
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#080808] section-bg-pattern relative overflow-hidden">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">
              Advanced Ball Technology
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={tech.title}
                title={tech.title}
                description={tech.description}
                index={index}
                total={technologies.length}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Customer Success Stories Section */}
      <section className="py-20 bg-dark-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC73F8]/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold glow-text mb-4">
                Trusted by Champions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From professional athletes to rising stars, hear what players
                say about EliteHoops basketballs
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard {...testimonial} index={index} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.8}>
            <div className="text-center">
              <Link
                to="/experience"
                className="inline-flex items-center bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-8 py-4 rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20 group"
              >
                Experience the Difference
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Professional Series Section */}
      <section className="py-20 bg-[#080808] section-bg-pattern relative overflow-hidden">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold glow-text mb-4">
                Professional Series
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our premium collection of professional-grade
                basketballs
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {professionalSeries.map((product, index) => (
              <RevealOnScroll key={product.name} delay={index * 0.1}>
                <div className="flex-1 glossy-card bg-dark-850 rounded-lg shadow-xl overflow-hidden group">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={product.name}
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-850 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#CC73F8]/10 text-[#CC73F8] px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1 mb-3">
                      {product.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center text-xs text-gray-300"
                        >
                          <Check className="w-3 h-3 text-[#CC73F8] mr-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                      <span className="text-lg font-bold text-[#CC73F8]">
                        ${product.price}
                      </span>
                      <Link
                        to="/products"
                        className="bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-3 py-1.5 text-sm rounded-lg hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                View All Products
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
