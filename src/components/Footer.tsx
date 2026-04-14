import { motion } from "motion/react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-retro text-3xl text-white mb-4 tracking-wider">
              <span className="text-neon-orange text-glow-orange">90's</span> Cafe
            </h3>
            <p className="font-sans text-white/60 max-w-sm mb-8">
              An unforgettable rooftop experience inspired by the 90's. Premium dining, cinematic views, and nostalgic vibes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-neon-orange transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/akash_official75/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-neon-purple transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-neon-amber transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Events', 'Gallery', 'Reservation'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-sans text-white/60 hover:text-neon-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 font-sans text-white/60">
              <li>01327240031</li>
              <li>akashabdullahalmahmud@gmail.com</li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/90%E2%80%99s+Cafe/@23.9299226,90.1517577,779m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755ef0026b756e3:0xac371ae9bf81781c!8m2!3d23.9299226!4d90.1543326!16s%2Fg%2F11xv1n08t7?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neon-orange transition-colors"
                >
                  Kalampur Bazar Road<br />
                  Dhamrai, Dhaka
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/40 text-sm">
            &copy; {new Date().getFullYear()} 90's Cafe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-sans text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
