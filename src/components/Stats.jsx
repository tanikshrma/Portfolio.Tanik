import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const stats = [
    { value: 2, suffix: "+ YEAR", label: "TOTAL EXPERIENCE" },
    { value: 20, suffix: "+", label: "PROJECTS COMPLETED" },
    { value: 100, suffix: "%", label: "CLIENT SATISFACTION" },
    { value: 10, suffix: "+", label: "SKILLS MASTERED" },
  ];
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [displayValues, setDisplayValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const startCounting = () => setHasStarted(true);

    if (!("IntersectionObserver" in window)) {
      startCounting();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    let frameId;

    const updateCounters = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValues(stats.map((stat) => Math.round(stat.value * easedProgress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounters);
      }
    };

    frameId = requestAnimationFrame(updateCounters);

    return () => cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className="bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start md:border-r border-white/10 last:border-0 md:pl-8 first:pl-0"
            >
              <span className="text-4xl md:text-6xl font-['Anton'] text-red-600 mb-2">{displayValues[index]}{stat.suffix}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-400 text-center md:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
