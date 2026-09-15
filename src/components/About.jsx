import { Download } from "lucide-react";
import aboutPortraitImg from "../assets/images/Tanik.webp";

export default function About() {
  const skills = [
    { label: "WEB DESIGN & WORDPRESS", value: 95 },
    { label: "FRONT-END DEV (HTML/CSS/JS)", value: 92 },
    { label: "UI/UX & FIGMA PROTOTYPING", value: 90 },
    { label: "RESPONSIVE LAYOUTS & ANIMATIONS", value: 88 },
  ];

  return (
    <section id="about" className="py-12 md:py-24 max-w-7xl mx-auto px-4 md:px-8 overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Biography */}
        <div className="lg:col-span-4">
          <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-4 block">INTRODUCTION</span>
          <h2 className="text-6xl md:text-7xl font-['Anton'] uppercase tracking-tight leading-[1.05] mb-10 whitespace-nowrap">
            ABOUT ME
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed mb-10">
            <p>
              I'm Tanik Sharma, a web designer and front-end developer with a passion for minimal design, bold typography, and meaningful interactions.
            </p>
            <p>
              I partner with brands and businesses to turn ideas into digital experiences that make a lasting impact.
            </p>
          </div>
          <div className="text-4xl font-['Playfair_Display'] italic text-gray-300 mb-12 lg:mb-0">Tanik Sharma</div>
        </div>

        {/* Center Image */}
        <div
          className="lg:col-span-4 relative group"
        >
          <div className="absolute right-0 top-0 w-2/3 h-full bg-red-600 -z-10" />
          <img 
            src={aboutPortraitImg} 
            alt="About Tanik"
            width={976}
            height={976}
            loading="lazy"
            decoding="async"
            className="w-full object-cover aspect-[3/4] shadow-lg"
          />
        </div>

        {/* Skills */}
        <div className="lg:col-span-4 flex flex-col justify-center h-full pt-12 lg:pt-0">
          <div className="space-y-8 mb-12">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase mb-2">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-[2px] bg-gray-100 w-full relative overflow-hidden">
                  <div style={{ width: `${skill.value}%` }} className="absolute top-0 left-0 h-full bg-red-600" />
                </div>
              </div>
            ))}
          </div>

          <a 
            href="#resume" 
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#resume");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-gray-200 px-8 py-4 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors group cursor-pointer"
          >
            VIEW FULL RESUME <Download className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
