import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Events } from "./components/Events";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { FloatingElements } from "./components/FloatingElements";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-neon-orange/30">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar musicPlaying={musicPlaying} toggleMusic={toggleMusic} />
          <main>
            <Hero />
            <About />
            <Menu />
            <Events />
            <Reviews />
            <Gallery />
            <Location />
          </main>
          <Footer />
          <FloatingElements />
        </>
      )}
    </div>
  );
}

