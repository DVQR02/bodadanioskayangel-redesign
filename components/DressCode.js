"use client";

import { useEffect, useRef } from "react";

export default function DressCode({ content }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reducedMotion.matches) {
        section.style.setProperty("--scope-progress", "1");
        section.style.setProperty("--scope-open", "1");
        return;
      }

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const distance = rect.height + window.innerHeight * 0.35;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / distance));
      const aperture = Math.max(0, Math.min(1, (progress - 0.58) / 0.32));
      section.style.setProperty("--scope-progress", progress.toFixed(3));
      section.style.setProperty("--scope-open", aperture.toFixed(3));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener?.("change", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener?.("change", schedule);
    };
  }, []);

  return (
    <div ref={sectionRef} className="dresscode-page">
      <div className="dresscode-wash dresscode-wash-left" aria-hidden="true" />
      <div className="dresscode-wash dresscode-wash-right" aria-hidden="true" />

      <header className="dresscode-heading">
        <h2>{content.titulo}</h2>
        <div className="divider-paw" aria-hidden="true">🐾</div>
        <p className="dresscode-formal">{content.codigo}</p>
        <h3>{content.lema}</h3>
        <p className="dresscode-introduction">{content.introduccion}</p>
        <p className="dresscode-principle">{content.principio}</p>
      </header>

      <section className="dresscode-white" aria-labelledby="dresscode-colors-title">
        <img className="dresscode-wine-art dresscode-wine-art-colors" src="/images/wine-stains-watercolor.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="dresscode-rule-heading">
          <span />
          <p id="dresscode-colors-title">{content.colores.titulo}</p>
          <span />
        </div>
        <div className="dresscode-white-copy">
          <h3>{content.colores.regla}</h3>
          <p>{content.colores.detalle}</p>
          <blockquote>{content.colores.excusa}</blockquote>
          <strong>{content.colores.conclusion}</strong>
        </div>
      </section>

      <section className="dresscode-agent" aria-labelledby="dresscode-agent-title">
        <img className="dresscode-wine-art dresscode-wine-art-agent" src="/images/wine-stains-watercolor.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="dresscode-rule-heading">
          <span />
          <p id="dresscode-agent-title">Aviso del cortejo</p>
          <span />
        </div>
        <div className="dresscode-agent-copy">
          <p>{content.advertencia}</p>
          <em>{content.remate[0]}<br />{content.remate[1]}</em>
        </div>
        <div className="otto-scope-track" aria-label="Agente Otto 007, seguridad del dress code">
          <div className="otto-scope">
            <div className="scope-blade scope-blade-1" />
            <div className="scope-blade scope-blade-2" />
            <div className="scope-blade scope-blade-3" />
            <div className="scope-blade scope-blade-4" />
            <div className="scope-blade scope-blade-5" />
            <div className="scope-blade scope-blade-6" />
            <div className="scope-photo">
              <img src={content.imagen} alt="Otto vestido de gala con una pistola de agua" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div className="otto-agent-caption">
          <span>Su elegancia también es letal</span>
          <strong>Agente Otto <b>007</b></strong>
        </div>
      </section>
    </div>
  );
}
