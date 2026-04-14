import { motion } from "motion/react";
import { Calendar, Clock, Users } from "lucide-react";

export function Booking() {
  return (
    <section id="booking" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Reserve Your <span className="text-neon-orange text-glow-orange">Table</span>
          </motion.h2>
          <p className="font-sans text-white/60">
            Secure your spot under the stars.
          </p>
        </div>

        <motion.div 
          className="glass-dark rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date */}
              <div className="space-y-2">
                <label className="font-sans text-sm text-white/70 flex items-center gap-2">
                  <Calendar size={16} className="text-neon-orange" /> Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="font-sans text-sm text-white/70 flex items-center gap-2">
                  <Clock size={16} className="text-neon-orange" /> Time
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors appearance-none">
                  <option value="" className="bg-[#0f0f0f]">Select Time</option>
                  <option value="18:00" className="bg-[#0f0f0f]">6:00 PM</option>
                  <option value="19:00" className="bg-[#0f0f0f]">7:00 PM</option>
                  <option value="20:00" className="bg-[#0f0f0f]">8:00 PM</option>
                  <option value="21:00" className="bg-[#0f0f0f]">9:00 PM</option>
                  <option value="22:00" className="bg-[#0f0f0f]">10:00 PM</option>
                </select>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="font-sans text-sm text-white/70 flex items-center gap-2">
                  <Users size={16} className="text-neon-orange" /> Guests
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors appearance-none">
                  <option value="2" className="bg-[#0f0f0f]">2 People</option>
                  <option value="3" className="bg-[#0f0f0f]">3 People</option>
                  <option value="4" className="bg-[#0f0f0f]">4 People</option>
                  <option value="5" className="bg-[#0f0f0f]">5 People</option>
                  <option value="6+" className="bg-[#0f0f0f]">6+ People</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-sans text-sm text-white/70">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-sm text-white/70">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+880 1..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-orange transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-neon-orange text-black font-heading font-bold text-lg hover:bg-neon-amber transition-all box-glow-orange mt-4"
            >
              Confirm Reservation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
