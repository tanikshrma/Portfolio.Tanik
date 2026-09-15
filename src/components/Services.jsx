import { motion } from "motion/react";
import { Monitor, PenTool, Code2, Cpu, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "WEBSITE DESIGN",
      description: "Crafting visually stunning, brand-focused, and fully responsive websites engineered for speed and maximum user engagement.",
      tags: ["Figma Layouts", "Responsive Web", "Brand Identity", "Wireframing"],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      number: "02",
      title: "WORDPRESS DEVELOPMENT",
      description: "Building custom WordPress themes, tailored plugins, WooCommerce stores, and content management systems designed for effortless client control.",
      tags: ["Custom Themes", "WooCommerce", "Elementor", "Speed Optimization"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      number: "03",
      title: "UI / UX DESIGN",
      description: "Designing intuitive user interfaces, design systems, and smooth interactive prototypes that elevate user experience across all digital devices.",
      tags: ["Figma Prototypes", "Design Systems", "User Experience", "Interactive Flow"],
      icon: <PenTool className="w-6 h-6" />
    },
    {
      number: "04",
      title: "FRONT-END DEVELOPMENT",
      description: "Developing clean, performant, and accessible web interfaces using modern HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.",
      tags: ["React.js", "Tailwind CSS", "JS Animations", "Performance & SEO"],
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16 border-b border-gray-200 pb-8">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-2 block">// WHAT I DO</span>
          <h2 className="text-5xl md:text-7xl font-['Anton'] uppercase tracking-tight">SERVICES & EXPERTISE</h2>
        </div>
        <p className="max-w-md text-gray-600 text-sm md:text-base leading-relaxed">
          Combining creative design thinking with clean, efficient code to build web experiences that leave a lasting impression.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gray-50 hover:bg-black text-gray-900 hover:text-white p-8 md:p-10 transition-all duration-300 border border-gray-200 hover:border-black flex flex-col justify-between shadow-sm hover:shadow-2xl"
          >
            {/* Top Bar: Number & Icon */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-['Anton'] text-red-600 group-hover:text-red-500 transition-colors">
                  {service.number}
                </span>
                <div className="w-12 h-12 rounded-full border border-gray-300 group-hover:border-gray-700 bg-white group-hover:bg-red-600 text-gray-800 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-['Anton'] uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm md:text-base leading-relaxed mb-8 transition-colors">
                {service.description}
              </p>
            </div>

            {/* Deliverable Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 group-hover:border-gray-800 transition-colors">
              {service.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 bg-white group-hover:bg-gray-900 text-gray-700 group-hover:text-gray-300 border border-gray-200 group-hover:border-gray-800 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

