import { motion } from "motion/react";

export function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Party" 
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8892ebe6bb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Celebration" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop" 
                  alt="DJ Night" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop" 
                  alt="Drinks" 
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Unforgettable <br />
              <span className="text-neon-amber text-glow-orange">Celebrations</span>
            </h2>
            <p className="font-sans text-white/70 text-lg leading-relaxed mb-8">
              Whether it's a birthday bash, a corporate gathering, or a casual hangout with friends, our rooftop provides the perfect cinematic backdrop. Enjoy custom menus, dedicated service, and a vibe that's unmatched in Dhamrai.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Birthday Parties', 'Corporate Events', 'Anniversaries', 'Private Gatherings'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-amber box-glow-orange" />
                  <span className="font-heading text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#booking"
              className="inline-block px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-heading font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Plan Your Event
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
