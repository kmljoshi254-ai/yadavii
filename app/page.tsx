import { ToggleSection } from "@/components/ToggleSection";
import { HeroSection } from "../components/sections/HeroSection";
import { DraggableCardBody, DraggableCardContainer } from "@/components/DraggableCards";
import LoveGallery from "@/components/LoveGallery";
import StellarCardGallerySingle from "@/components/NewWorld";
import Book from "@/components/Book";
import { Section } from "lucide-react";
import DoodleBackgroundDemo from "@/components/DoodleBg";
import FloatingNotes from "@/components/Butterfly";
import ShowtimeCountdown from "@/components/Curtain";


export default function Home() {
  return (
    <ShowtimeCountdown
      showPreviewButton={true}
      targetDate={new Date('2026-08-11T00:00:00+05:30')}
    >
      <div id="main-scroll-container" className="h-full min-h-[100dvh] w-full overflow-x-hidden overflow-y-scroll snap-y snap-mandatory bg-zinc-50 dark:bg-black select-none scroll-smooth">
        {/* Section 1: Intro Counter & Watermark Reveal */}
        <section id="section-1" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <iframe
            src="/birthday.html"
            title="Birthday Reveal"
            className="w-full h-full border-none block"
            allow="autoplay"
          />
        </section>

        {/* Section 2: Hero Section */}
        <section id="section-2" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <HeroSection />
        </section>

        {/* Section 3: Floating Notes & Draggable Love Gallery */}
        <section id="section-3" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <FloatingNotes />
          <LoveGallery />
        </section>

        {/* Section 4: Scrapbook Album & Ambient Doodles */}
        <section id="section-4" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <DoodleBackgroundDemo />
        </section>

        {/* Section 5: 3D Galaxy Stellar Gallery */}
        <section id="section-5" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <StellarCardGallerySingle />
        </section>

        {/* Section 6: iMessage Finale */}
        <section id="section-6" className="h-[100dvh] min-h-[100dvh] w-full snap-start snap-always shrink-0 overflow-hidden relative z-10">
          <iframe
            src="/last.html"
            title="Birthday Finale Message"
            className="w-full h-full border-none block"
            allow="autoplay"
          />
        </section>
      </div>
    </ShowtimeCountdown>
  );
}

