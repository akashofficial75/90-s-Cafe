import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    text: "Amazing rooftop vibe for birthday celebrations. Perfect for groups and evening hangouts.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tanvir Ahmed",
    text: "The neon aesthetic is spot on. Best place in Dhamrai to chill with friends. Food is top notch!",
    rating: 5,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    text: "Loved the Szechuan Chicken and the Hazelnut Latte. The view at night is absolutely stunning.",
    rating: 4,
  },
  {
    id: 4,
    name: "Rakib Hasan",
    text: "Premium feel without the Gulshan price tag. Highly recommend booking in advance for weekends.",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.h2 
          className="font-heading text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Guest <span className="text-neon-purple text-glow-purple">Stories</span>
        </motion.h2>
      </div>

      {/* Auto-scrolling slider */}
      <div className="relative w-full flex overflow-x-hidden">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {/* Duplicate reviews for seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={`${review.id}-${idx}`}
              className="w-[350px] shrink-0 glass p-8 rounded-2xl flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "text-neon-amber fill-neon-amber" : "text-white/20"} 
                  />
                ))}
              </div>
              <p className="font-sans text-white/80 italic leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-orange flex items-center justify-center font-heading font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <span className="font-heading font-medium text-white">{review.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
