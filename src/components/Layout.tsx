import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  ShoppingBasket as Basketball,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  X,
} from "lucide-react";
import FooterSection from "./FooterSection";
import { motion, AnimatePresence } from "framer-motion";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useScrollToTop();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/", text: "Home" },
    { to: "/products", text: "Products" },
    { to: "/about", text: "About Us" },
    { to: "/blog", text: "Blog" },
    { to: "/admin", text: "Admin" },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <header className="fixed top-0  z-50 flex justify-center container">
        <div
          className={`container transition-all duration-300 rounded-[40px] bg-[#ffffff0d] backdrop-blur-[8px] ${
            isScrolled ? "shadow-lg shadow-dark-950/20 py-3 mt-4" : "py-4 mt-6"
          }`}
        >
          <div className="px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <Basketball className="h-8 w-8 text-[#CC73F8]" />
                <span className="text-xl font-bold text-white">EliteHoops</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-gray-300 hover:text-[#CC73F8] transition-colors duration-300 text-sm font-medium"
                  >
                    {item.text}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-5 py-2 rounded-full text-sm font-medium hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300 shadow-lg hover:shadow-[#CC73F8]/20"
                >
                  Contact
                </Link>
              </nav>
              <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-xl bg-dark-850 shadow-lg border border-gray-800/30 backdrop-blur-lg"
          >
            <nav className="py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-6 py-3 text-gray-300 hover:text-[#CC73F8] hover:bg-white/5 transition-colors duration-300"
                >
                  {item.text}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-6 mt-4 bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] text-white px-5 py-2 rounded-lg text-center hover:from-[#B561E5] hover:to-[#C87AF6] transition-all duration-300"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />

      {/* Footer */}
      <footer className="bg-dark-950 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC73F8]/5 to-transparent opacity-50"></div>
        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            <FooterSection delay={0} direction="left">
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Basketball className="h-6 w-6 text-[#CC73F8]" />
                  <span className="text-lg font-bold">EliteHoops</span>
                </motion.div>
                <p className="text-gray-400">
                  Crafting premium basketballs for champions worldwide.
                </p>
                <div className="flex space-x-4 pt-4">
                  {[Facebook, Twitter, Instagram].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-[#CC73F8]"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FooterSection>

            <FooterSection delay={0.2} direction="left">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#CC73F8] to-[#D68DF9]">
                  Contact
                </h4>
                <div className="space-y-2">
                  {[
                    "123 Sports Avenue",
                    "New York, NY 10001",
                    "contact@elitehoops.com",
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      className="text-gray-400 cursor-pointer"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
            </FooterSection>

            <FooterSection delay={0.2} direction="right">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#CC73F8] to-[#D68DF9]">
                  Quick Links
                </h4>
                <div className="flex flex-col space-y-2">
                  {menuItems.map((link, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FooterSection>

            <FooterSection delay={0.4} direction="right">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#CC73F8] to-[#D68DF9]">
                  Newsletter
                </h4>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-dark-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC73F8] transition-all duration-300"
                  />
                  <motion.button
                    className="absolute right-0 top-0 h-full bg-gradient-to-r from-[#CC73F8] to-[#D68DF9] px-4 rounded-r-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              </div>
            </FooterSection>
          </div>

          <FooterSection delay={0.6}>
            <motion.div
              className="border-t border-gray-800/30 mt-8 pt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-400">
                &copy; 2024 EliteHoops. All rights reserved.
              </p>
            </motion.div>
          </FooterSection>
        </div>
      </footer>
    </div>
  );
}
