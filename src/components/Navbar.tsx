import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "WORK", href: "#portfolio" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT", href: "#about" },
    { name: "RESUME", href: "#resume" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#"
          onClick={(e) => handleNavClick(e, "body")}
          className="text-2xl font-black flex items-center gap-1 group"
        >
          T<span className="text-red-600 group-hover:scale-125 transition-transform">.</span>
        </a>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold tracking-widest hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button (Visible on Mobile & Desktop) */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="https://api.whatsapp.com/send/?phone=918628819766&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-5 sm:px-6 py-2.5 flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest hover:bg-black transition-colors"
          data-cursor="view"
        >
          LET'S TALK <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>
    </nav>
  );
}


