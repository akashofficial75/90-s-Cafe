import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Taste the 90's. Feel the Sky.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f0f0f] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop" 
          alt="Rooftop Night View" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-retro text-6xl md:text-8xl lg:text-9xl text-white mb-6 tracking-wider">
            <span className="text-neon-orange text-glow-orange">90's</span> Cafe
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-12"
        >
          <p className="font-heading text-xl md:text-3xl font-light text-white/90 tracking-wide">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a 
            href="https://wa.me/8801327240031?text=Hello%2C%20I%20want%20to%20book%20a%20table%20at%2090%E2%80%99s%20Cafe."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-neon-orange text-black font-heading font-bold text-lg hover:bg-neon-amber transition-all box-glow-orange hover:scale-105"
          >
            Book a Table
          </a>
          <a 
            href="#menu"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-heading font-medium text-lg hover:bg-white/10 transition-all hover:border-white/60 backdrop-blur-sm"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/50 font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-neon-orange" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
