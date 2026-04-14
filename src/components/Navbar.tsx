import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ 
  musicPlaying, 
  toggleMusic 
}: { 
  musicPlaying: boolean; 
  toggleMusic: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "https://www.google.com/maps/place/90%E2%80%99s+Cafe/@23.9299226,90.1517577,779m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755ef0026b756e3:0xac371ae9bf81781c!8m2!3d23.9299226!4d90.1543326!16s%2Fg%2F11xv1n08t7?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D", external: true },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass-dark" : "py-6 bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-retro text-2xl md:text-3xl tracking-wider text-white">
          <span className="text-neon-orange text-glow-orange">90's</span> Cafe
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-sans text-sm font-medium text-white/80 hover:text-neon-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-4">
            <button 
              onClick={toggleMusic}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              aria-label="Toggle Music"
            >
              {musicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <a 
              href="https://wa.me/8801327240031?text=Hello%2C%20I%20want%20to%20book%20a%20table%20at%2090%E2%80%99s%20Cafe."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-neon-orange text-black font-semibold text-sm hover:bg-neon-amber transition-colors box-glow-orange"
            >
              Book Table
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-lg font-medium text-white/80 hover:text-neon-orange"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <button 
              onClick={toggleMusic}
              className="flex items-center gap-2 text-white/80"
            >
              {musicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
              <span>Music {musicPlaying ? 'On' : 'Off'}</span>
            </button>
            <a 
              href="https://wa.me/8801327240031?text=Hello%2C%20I%20want%20to%20book%20a%20table%20at%2090%E2%80%99s%20Cafe."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-2 rounded-full bg-neon-orange text-black font-semibold text-sm box-glow-orange"
            >
              Book Table
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
