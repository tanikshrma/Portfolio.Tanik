import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { value: "2+ YEAR", label: "TOTAL EXPERIENCE" },
    { value: "20+", label: "PROJECTS COMPLETED" },
    { value: "100%", label: "CLIENT SATISFACTION" },
    { value: "10+", label: "SKILLS MASTERED" },
  ];

  return (
    <div className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start md:border-r border-white/10 last:border-0 md:pl-8 first:pl-0"
            >
              <span className="text-4xl md:text-6xl font-['Anton'] text-red-600 mb-2">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
