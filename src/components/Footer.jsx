import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white">
      {/* Full Width CTA Banner */}
      <div className="w-full bg-black relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-red-500 uppercase">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-['Anton'] text-white leading-[1] uppercase tracking-tight mb-8">
            LET'S CREATE <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#71717a] sm:[-webkit-text-stroke:2px_#71717a] hover:text-white transition-colors cursor-default">SOMETHING GREAT</span> <br />
            TOGETHER.
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-16">
            Whether you need a custom website, front-end development, or a WordPress theme build, I'm ready to bring your ideas to life.
          </p>
          
          <a 
            href="https://api.whatsapp.com/send/?phone=918628819766&text&type=phone_number&app_absent=0" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 bg-red-600 text-white hover:bg-white hover:text-black px-8 py-4 md:px-10 md:py-5 rounded-full transition-colors"
          >
            <span className="text-lg md:text-xl font-['Anton'] tracking-widest uppercase mt-1">SAY HELLO</span>
            <div className="w-10 h-10 rounded-full bg-black/20 group-hover:bg-black/10 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-6">// GET IN TOUCH</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:taniksharma2000@gmail.com" className="font-semibold hover:text-red-600 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                taniksharma2000@gmail.com
              </a>
              <a href="tel:+918628819766" className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                +91 8628819766
              </a>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                Hamirpur, Himachal Pradesh, India
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-6">// CONNECT</h4>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
              <a 
                href="https://www.linkedin.com/in/tanik-sharma-a47542308" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/____tanik___shrma_________?igsh=MTU0N2oxdzUwbXhmMg%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/people/Tanik-Sharma/pfbid09uVyZaKrqnDbZKaBJKa2q6UrxvymxoFQ7Ewkg8GPKHuQRhfLGYCjrWMWSGgfJNURl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                Facebook
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=918628819766&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                WhatsApp
              </a>
              <a 
                href="https://github.com/taniksharma29" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors flex items-center gap-1.5"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-bold text-red-600 tracking-widest uppercase">
              THANKS FOR VISITING!
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 text-xs sm:text-sm text-gray-600 font-normal">
          <span>
            © {new Date().getFullYear()}{" "}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-red-600 hover:underline font-semibold transition-colors"
            >
              Tanik's Portfolio
            </a>
            . All rights reserved.
          </span>
          <span>
            Designed & Developed by{" "}
            <span className="text-red-600 font-semibold">Tanik Sharma</span>.
          </span>
        </div>
      </div>
    </footer>
  );
}
