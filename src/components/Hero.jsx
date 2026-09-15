import { ArrowRight } from "lucide-react";
import aboutMeImg from "../assets/images/Tanik.webp";

export default function Hero() {
  return (
    <section className="pt-36 pb-10 md:pt-32 md:pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        {/* Text Content */}
        <div className="lg:col-span-7 z-10">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.8rem] font-['Anton'] leading-[1.05] md:leading-[1.1] uppercase tracking-tighter"
          >
            WEB DESIGNER <span className="text-red-600">|</span><br />
            FRONT END DEVELOPER
          </h1>

          <div className="mt-10 max-w-lg">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight mb-4">
              I'M <span className="text-red-600">TANIK SHARMA</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              I create successful responsive websites that are fast, easy to use, and built with best practices. Specialized in front-end development, HTML, CSS, JS, custom plugins, and interactive web layouts.
            </p>
            
            <a 
              href="#portfolio" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase group-hover:text-red-600 transition-colors">View My Work</span>
            </a>
          </div>
        </div>

        {/* Image Composition */}
        <div className="lg:col-span-5 relative flex justify-end">
          {/* Red background element */}
          <div className="absolute right-0 top-0 w-3/4 h-[120%] bg-red-600" />
          
          <div className="relative z-10 w-full">
            <img 
              src={aboutMeImg} 
              alt="Tanik Portfolio Portrait"
              width={976}
              height={976}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full object-cover aspect-[4/5] shadow-2xl rounded-sm"
            />
            
            {/* Location Tag */}
            <div className="absolute top-8 right-8 text-white text-[10px] font-bold tracking-widest text-right">
              BASED IN<br />HAMIRPUR, HIMACHAL PRADESH
            </div>
          </div>

          {/* Rotating Badge */}
          <div className="absolute -left-14 md:-left-16 bottom-16 md:bottom-20 z-20 hidden md:block">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center p-2 shadow-2xl relative border border-gray-100">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="heroBadgePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text fill="#111827" fontSize="5.8" fontWeight="700" className="uppercase">
                  <textPath href="#heroBadgePath" startOffset="0%" textLength="232.5" lengthAdjust="spacing">
                    • AVAILABLE FOR FREELANCE • WEB DESIGN • UI/UX • BRANDING 
                  </textPath>
                </text>
              </svg>
              {/* Center Dot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
