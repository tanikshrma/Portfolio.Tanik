/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

function SectionWrapper({ children, className = "" }) {
  return <div className={`scroll-mt-20 ${className}`}>{children}</div>;
}

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black font-['Plus_Jakarta_Sans'] selection:bg-red-600 selection:text-white">
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

