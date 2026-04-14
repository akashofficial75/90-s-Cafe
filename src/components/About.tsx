import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-orange/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Elevate Your <br />
              <span className="text-neon-purple text-glow-purple">Evening</span>
            </h2>
            <p className="font-sans text-white/70 text-lg leading-relaxed mb-8">
              Located in the heart of Dhamrai on Kalampur Bazar Road, 90's Cafe brings a premium Dhaka rooftop lounge experience to your neighborhood. We blend retro nostalgia with modern luxury, creating the perfect atmosphere for unforgettable nights.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="font-retro text-3xl text-neon-orange mb-1">500+</div>
                <div className="font-sans text-sm text-white/50 uppercase tracking-wider">Events Hosted</div>
              </div>
              <div>
                <div className="font-retro text-3xl text-neon-orange mb-1">10k+</div>
                <div className="font-sans text-sm text-white/50 uppercase tracking-wider">Happy Guests</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden glass p-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop" 
              alt="Cafe Interior" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-heading text-xl font-medium text-white">Perfect for Birthday Parties & Group Hangouts</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
