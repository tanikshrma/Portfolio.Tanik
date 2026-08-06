/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Resume from "./components/Resume";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { motion, useScroll, useSpring, Variants } from "motion/react";
import Lenis from "lenis";

// Staggered entrance animation variants for sections
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1.0],
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-['Plus_Jakarta_Sans'] selection:bg-red-600 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Stats />
      </SectionWrapper>

      <SectionWrapper>
        <Work />
      </SectionWrapper>

      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <About />
      </SectionWrapper>

      <SectionWrapper>
        <Resume />
      </SectionWrapper>

      <SectionWrapper>
        <Logos />
      </SectionWrapper>

      <SectionWrapper>
        <Footer />
      </SectionWrapper>

      <BackToTop />
    </main>
  );
}

