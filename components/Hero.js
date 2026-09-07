"use client";
import site from "@/content/site.json";
import WatercolorMark from "./WatercolorMark";

export default function Hero() {
  return (
    <section id="inicio" className="hero-scene relative min-h-[100svh] overflow-hidden px-5 pb-10 pt-24 text-center">
      <div className="hero-wash hero-wash-left" aria-hidden="true" />
      <div className="hero-wash hero-wash-right" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8.5rem)] max-w-5xl flex-col items-center justify-center">
        <p className="hero-kicker animate-fadeUp">Para celebrar la boda de</p>

        <h1 className="hero-names animate-fadeUp">
          <span>Danioska</span>
          <span className="hero-ampersand">&amp;</span>
          <span>Ángel</span>
        </h1>

        <WatercolorMark className="mt-1 h-8 w-24 text-[#8a6aaa]" />

        <div className="hero-art-wrap" aria-hidden="true">
          <img
            src="/images/decor/ermita-otto-hero.png"
            alt=""
            className="hero-art"
            fetchPriority="high"
          />
        </div>

        <div className="hero-date animate-fadeUp">
          <span>02</span><i /> <span>04</span><i /> <span>2027</span>
        </div>
        <p className="hero-place">Madrid · España</p>

        <a href="#rsvp" className="wedding-button mt-6">
          Confirmar asistencia
        </a>

        <a href="#historia" className="hero-scroll mt-8" aria-label="Descubrir la invitación">
          <span>Descubre nuestra historia</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
