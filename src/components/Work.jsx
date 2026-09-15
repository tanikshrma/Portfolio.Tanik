import { memo, useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";

import industrialPowerupImg from "../assets/images/Industrial Powerup.webp";
import jyotishNowImg from "../assets/images/JyotishNow.webp";
import littleNotesImg from "../assets/images/Little Notes.webp";
import pankajTailorImg from "../assets/images/Pankaj Tailor.webp";
import royalHaveliImg from "../assets/images/Royal Haveli.webp";
import sashasHolidayVillageImg from "../assets/images/Sashas Holiday Village.webp";
import theArtiquetteImg from "../assets/images/The Artiquette.webp";
import vivedaEssentialsImg from "../assets/images/Viveda Essentials.webp";
import worldsportsgroupImg from "../assets/images/WSG Website.webp"
import luminaDentalImg from "../assets/images/Lumina Dental.webp";
import cardinalHotelsImg from "../assets/images/Cardinal Hotels & Resorts.webp";

const avifImages = import.meta.glob("../assets/images/avif/*.avif", {
  eager: true,
  query: "?url",
  import: "default",
});

const getAvifImage = (name) => avifImages[`../assets/images/avif/${name}`];

const LazyProjectImage = memo(function LazyProjectImage({ project }) {
  return (
    <div className="absolute inset-0">
      <picture>
        <source
          type="image/avif"
          srcSet={`${project.imageAvifSmall} 480w, ${project.imageAvifLarge} 960w`}
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
        />
        <img
          src={project.image}
          alt={project.title}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100"
        />
      </picture>
    </div>
  );
});

const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-gray-950 overflow-hidden aspect-[4/5] border border-gray-800 shadow-xl rounded-sm"
      data-cursor="view"
    >
      <LazyProjectImage project={project} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-red-600 text-white px-3 py-1 mb-4 shadow-md">
            {project.categoryLabel}
          </span>
          <h3 className="text-3xl lg:text-4xl font-['Anton'] text-white leading-tight uppercase mb-2 group-hover:text-red-500 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-300">
            <span>{project.type}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </a>
  );
});

export default function Work() {
  const [filter, setFilter] = useState('all');

  const projects = useMemo(() => [
    {
      id: "1",
      title: "JyotishNow",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://jyotishnow.com/",
      image: jyotishNowImg,
      imageAvifSmall: getAvifImage("JyotishNow-480.avif"),
      imageAvifLarge: getAvifImage("JyotishNow-960.avif"),
      imageWidth: 1200,
      imageHeight: 6897,
    },
    {
      id: "2",
      title: "Royal Haveli",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://royalhavelisj.com/",
      image: royalHaveliImg,
      imageAvifSmall: getAvifImage("Royal-Haveli-480.avif"),
      imageAvifLarge: getAvifImage("Royal-Haveli-960.avif"),
      imageWidth: 1200,
      imageHeight: 4542,
    },
    {
      id: "3",
      title: "Industrial Powerup",
      category: "graphic",
      categoryLabel: "FIGMA UI DESIGN",
      type: "Figma UI Design",
      url: "https://www.figma.com",
      image: industrialPowerupImg,
      imageAvifSmall: getAvifImage("Industrial-Powerup-480.avif"),
      imageAvifLarge: getAvifImage("Industrial-Powerup-960.avif"),
      imageWidth: 1200,
      imageHeight: 4613,
    },
    {
      id: "4",
      title: "Sasha's Holiday Village",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://sashasholidayvillage.com/",
      image: sashasHolidayVillageImg,
      imageAvifSmall: getAvifImage("Sashas-Holiday-Village-480.avif"),
      imageAvifLarge: getAvifImage("Sashas-Holiday-Village-960.avif"),
      imageWidth: 1200,
      imageHeight: 8578,
    },
    {
      id: "5",
      title: "The Artiquette",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://theartiquette.com/",
      image: theArtiquetteImg,
      imageAvifSmall: getAvifImage("The-Artiquette-480.avif"),
      imageAvifLarge: getAvifImage("The-Artiquette-960.avif"),
      imageWidth: 1200,
      imageHeight: 4576,
    },
    {
      id: "6",
      title: "Pankaj Tailor",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://pankajtailor.in/",
      image: pankajTailorImg,
      imageAvifSmall: getAvifImage("Pankaj-Tailor-480.avif"),
      imageAvifLarge: getAvifImage("Pankaj-Tailor-960.avif"),
      imageWidth: 1200,
      imageHeight: 4347,
    },
    {
      id: "7",
      title: "Little Notes",
      category: "graphic",
      categoryLabel: "FIGMA DESIGN",
      type: "Figma Design",
      url: "https://www.figma.com/design/Ez4Bbr1HnnO2q2ZMbz7FJ2/Little-Notes?node-id=0-1&p=f&t=4m9BpI6WIQuWICxc-0",
      image: littleNotesImg,
      imageAvifSmall: getAvifImage("Little-Notes-480.avif"),
      imageAvifLarge: getAvifImage("Little-Notes-960.avif"),
      imageWidth: 1200,
      imageHeight: 5365,
    },
    {
      id: "8",
      title: "Viveda Essentials",
      category: "graphic",
      categoryLabel: "FIGMA DESIGN",
      type: "Figma Design",
      url: "https://www.figma.com/design/XP8t7QZRBzCnfZi23sx2HD/Viveda-Essentials?t=4m9BpI6WIQuWICxc-0",
      image: vivedaEssentialsImg,
      imageAvifSmall: getAvifImage("Viveda-Essentials-480.avif"),
      imageAvifLarge: getAvifImage("Viveda-Essentials-960.avif"),
      imageWidth: 1200,
      imageHeight: 4399,
    },
    {
      id: "9",
      title: "Sasha's Holiday Village",
      category: "graphic",
      categoryLabel: "FIGMA DESIGN",
      type: "Figma Design",
      url: "https://www.figma.com/design/KvCO76r9j5NmkqotHuqL42/Sashas-Website?t=4m9BpI6WIQuWICxc-0",
      image: sashasHolidayVillageImg,
      imageAvifSmall: getAvifImage("Sashas-Holiday-Village-480.avif"),
      imageAvifLarge: getAvifImage("Sashas-Holiday-Village-960.avif"),
      imageWidth: 1200,
      imageHeight: 8578,
    },
    {
      id: "10",
      title: "World Sports Group",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://wsg-website-xi.vercel.app/",
      image: worldsportsgroupImg,
      imageAvifSmall: getAvifImage("WSG-Website-480.avif"),
      imageAvifLarge: getAvifImage("WSG-Website-960.avif"),
      imageWidth: 1200,
      imageHeight: 5961,
    },
    {
      id: "11",
      title: "Lumina Dental",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Live Website",
      url: "https://luminadentalmohali.com/",
      image: luminaDentalImg,
      imageAvifSmall: getAvifImage("Lumina-Dental-480.avif"),
      imageAvifLarge: getAvifImage("Lumina-Dental-960.avif"),
      imageWidth: 1200,
      imageHeight: 6866,
    },
    {
      id: "12",
      title: "Cardinal Hotels & Resorts",
      category: "web",
      categoryLabel: "WEBSITE DEVELOPMENT",
      type: "Luxury Hospitality Website",
      url: "https://cardinalhotels.com/",
      image: cardinalHotelsImg,
      imageAvifSmall: getAvifImage("Cardinal-Hotels-Resorts-480.avif"),
      imageAvifLarge: getAvifImage("Cardinal-Hotels-Resorts-960.avif"),
      imageWidth: 1200,
      imageHeight: 8881,
    },
  ], []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div id="work" className="scroll-mt-24" />
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-2 block">PROJECT HIGHLIGHTS</span>
          <h2 className="text-5xl md:text-7xl font-['Anton'] uppercase">PORTFOLIO</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {[
            { key: 'all', label: 'ALL' },
            { key: 'graphic', label: 'FIGMA DESIGNS' },
            { key: 'web', label: 'WEBSITE DEVELOPMENT' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-5 py-2.5 text-xs font-bold tracking-widest transition-colors ${
                filter === tab.key 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
