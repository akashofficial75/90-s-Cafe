import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["All", "Chinese", "Fast Food", "Drinks", "Coffee"];

const menuItems = [
  { id: 1, name: "Szechuan Chicken", price: "৳ 450", category: "Chinese", popular: true, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Classic Beef Burger", price: "৳ 350", category: "Fast Food", popular: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Neon Mojito", price: "৳ 220", category: "Drinks", popular: false, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Hazelnut Latte", price: "৳ 280", category: "Coffee", popular: true, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Crispy Fried Wontons", price: "৳ 300", category: "Chinese", popular: false, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Loaded Fries", price: "৳ 250", category: "Fast Food", popular: false, image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, name: "Blue Lagoon", price: "৳ 200", category: "Drinks", popular: true, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, name: "Espresso Macchiato", price: "৳ 180", category: "Coffee", popular: false, image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1000&auto=format&fit=crop" },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Curated <span className="text-neon-orange text-glow-orange">Menu</span>
          </motion.h2>
          <p className="font-sans text-white/60 max-w-2xl mx-auto">
            Experience a fusion of classic 90's comfort food and premium dining.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-heading text-sm transition-all duration-300",
                activeCategory === category 
                  ? "bg-neon-orange text-black font-semibold box-glow-orange" 
                  : "glass text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative glass rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      Quick View
                    </button>
                  </div>
                  {item.popular && (
                    <div className="absolute top-3 right-3 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(181,55,242,0.5)]">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading font-semibold text-lg text-white group-hover:text-neon-orange transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-white/50 text-sm">{item.category}</span>
                    <span className="font-retro text-neon-amber text-xl">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
