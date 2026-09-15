import { ShieldCheck } from "lucide-react";

export default function Logos() {
  const brandProjects = [
    {
      name: "JYOTISH NOW",
      url: "https://jyotishnow.com/",
      tag: "Professional Vedic Astrology",
      category: "Live Website",
      description: "AI-powered astrology & horoscope platform built with responsive React interfaces.",
      type: "live"
    },
    {
      name: "ROYAL HAVELI",
      url: "https://royalhavelisj.com/",
      tag: "Luxury Hotel & Resort",
      category: "Live Website",
      description: "Elegantly crafted hospitality website showcasing heritage rooms, booking, and luxury amenities.",
      type: "live"
    },
    {
      name: "SASHA'S HOLIDAY VILLAGE",
      url: "https://sashasholidayvillage.com/",
      tag: "Hotel & Resort",
      category: "Live Website",
      description: "Immersive beach holiday village experience with interactive photo galleries and room reservations.",
      type: "live"
    },
    {
      name: "THE ARTIQUETTE",
      url: "https://theartiquette.com/",
      tag: "Finishing & Grooming School",
      category: "Live Website",
      description: "Bespoke fashion & artifact store featuring seamless checkout and product showcases.",
      type: "live"
    },
    {
      name: "PANKAJ TAILOR",
      url: "https://pankajtailor.in/",
      tag: "Custom Bespoke Tailoring",
      category: "Live Website",
      description: "Custom tailoring and menswear catalog built with fast loading and high conversion layouts.",
      type: "live"
    },
    {
      name: "SASHA'S WEBSITE DESIGN",
      url: "https://www.figma.com/design/KvCO76r9j5NmkqotHuqL42/Sashas-Website?t=4m9BpI6WIQuWICxc-0",
      tag: "Figma UI/UX System",
      category: "Figma Prototype",
      description: "Full UI design, component hierarchy, and interactive wireframes built in Figma.",
      type: "figma"
    },
    {
      name: "LITTLE NOTES",
      url: "https://www.figma.com/design/Ez4Bbr1HnnO2q2ZMbz7FJ2/Little-Notes?node-id=0-1&p=f&t=4m9BpI6WIQuWICxc-0",
      tag: "Website UI Design",
      category: "Figma Prototype",
      description: "Clean, minimalist mobile productivity app design with dark/light mode UI components.",
      type: "figma"
    },
    {
      name: "VIVEDA ESSENTIALS",
      url: "https://www.figma.com/design/XP8t7QZRBzCnfZi23sx2HD/Viveda-Essentials?t=4m9BpI6WIQuWICxc-0",
      tag: "E-Commerce UI Design",
      category: "Figma Prototype",
      description: "Organic skincare brand identity, packaging visuals, and desktop web layout.",
      type: "figma"
    },
    {
      name: "INDUSTRIAL POWERUP",
      url: "https://www.figma.com",
      tag: "Website",
      category: "Figma Prototype",
      description: "High-density data visualization and machinery control panel prototype.",
      type: "figma"
    }
  ];

  // Quadruple items for silky infinite ticker loop
  const tickerItems = [...brandProjects, ...brandProjects, ...brandProjects, ...brandProjects];

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-12 relative overflow-hidden select-none shadow-inner">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

      {/* Edge Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden group relative z-10">
        <div
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {tickerItems.map((item, idx) => (
            <a
              key={`${item.name}-${idx}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 group/item"
              data-cursor="view"
            >
              <span className="text-3xl md:text-5xl font-['Anton'] tracking-wider uppercase text-gray-800 group-hover/item:text-black transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase px-3 py-1.5 border border-gray-300 rounded group-hover/item:border-black group-hover/item:text-black transition-colors">
                {item.tag}
              </span>
              <ShieldCheck className="w-6 h-6 text-gray-400 group-hover/item:text-black transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



