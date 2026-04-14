import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Find <span className="text-neon-amber text-glow-orange">Us</span>
            </h2>
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-neon-orange shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-xl font-medium text-white mb-2">90's Cafe</h3>
                <p className="font-sans text-white/70 leading-relaxed">
                  Kalampur Bazar Road,<br />
                  Dhamrai, Dhaka,<br />
                  Bangladesh
                </p>
                <p className="font-sans text-white/50 text-sm mt-4 italic">
                  *Located on the rooftop, offering a panoramic view of the area. Look for the neon sign.
                </p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place/90%E2%80%99s+Cafe/@23.9299226,90.1517577,779m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755ef0026b756e3:0xac371ae9bf81781c!8m2!3d23.9299226!4d90.1543326!16s%2Fg%2F11xv1n08t7?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-heading hover:bg-white/20 transition-colors border border-white/20"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            className="h-[400px] rounded-2xl overflow-hidden glass p-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Placeholder for Google Maps iframe to avoid actual API key requirement */}
            <a 
              href="https://www.google.com/maps/place/90%E2%80%99s+Cafe/@23.9299226,90.1517577,779m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755ef0026b756e3:0xac371ae9bf81781c!8m2!3d23.9299226!4d90.1543326!16s%2Fg%2F11xv1n08t7?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full rounded-xl bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden block group"
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="text-neon-orange mb-2 animate-bounce" size={48} />
                <span className="font-heading text-xl font-bold text-white tracking-widest uppercase">Dhamrai</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
