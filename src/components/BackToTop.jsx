import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const firstSection = document.querySelector("main > div > section");
    if (!firstSection || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });
    observer.observe(firstSection);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 bg-black text-white hover:bg-red-600 border border-zinc-800 rounded-full shadow-lg transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
