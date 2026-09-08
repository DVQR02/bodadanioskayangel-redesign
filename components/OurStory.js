"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

function StoryIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    water: <><path d="M9 5.5h6l-.8 13h-4.4L9 5.5Z"/><path d="M9.3 9.2c1.9-.8 3.8.8 5.4 0"/><path d="M11 3.2h2"/></>,
    heart: <path d="M12 19.2S4.8 15 4.8 9.5A3.7 3.7 0 0 1 12 8.2a3.7 3.7 0 0 1 7.2 1.3C19.2 15 12 19.2 12 19.2Z"/>,
    rose: <><path d="M8 18.8h9M9.5 17V9.7h6V17M10.5 8.2c-1.8-1.9-.1-4.5 2.1-2.7.8-2.8 4.3-1.8 3.5.8 2.7.3 2.2 3.5-.1 3.4"/><path d="M12.4 10.2c.2-2.2 1.3-3.7 3.2-4.2"/></>,
    toothbrush: <><path d="M6 17 16.8 6.2M14.9 4.3l4.8 4.8M16.2 5.6l1.7-1.7M17.7 7.1l1.7-1.7M5.8 17.2 4.4 19.6l2.4-1.4"/></>,
    coffee: <><path d="M4.5 9h6.8v6.4a3 3 0 0 1-3 3h-.8a3 3 0 0 1-3-3V9ZM11.3 10.4h1a2 2 0 0 1 0 4h-1M13.8 9h5.7v5.5a2.6 2.6 0 0 1-2.6 2.6h-.5a2.6 2.6 0 0 1-2.6-2.6V9ZM19.5 10.3h.7a1.7 1.7 0 0 1 0 3.4h-.7M7 6.8c-1.2-1.2.9-1.7 0-3M16 6.8c-1.2-1.2.9-1.7 0-3"/></>,
    map: <><circle cx="12" cy="12" r="8.2"/><path d="M4 12h16M12 3.8c2.6 2.5 3.4 5.2 3.4 8.2s-.8 5.7-3.4 8.2M12 3.8C9.4 6.3 8.6 9 8.6 12s.8 5.7 3.4 8.2"/><path d="m16.7 16.8 2.6 2.6"/></>,
    music: <><path d="M9.5 17.2V7l8-1.8v10.1"/><ellipse cx="7.3" cy="17.5" rx="2.2" ry="1.5"/><ellipse cx="15.3" cy="15.6" rx="2.2" ry="1.5"/><path d="M9.5 10.2l8-1.8"/></>,
    ring: <><circle cx="12" cy="14.2" r="5.4"/><path d="m9.1 8.9 2.9-4.3 2.9 4.3M10.2 5h3.6M18.3 4.5v2.2M17.2 5.6h2.2"/></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>{icons[type]}</svg>;
}

function StoryPhoto({ chapter, index }) {
  const chapterClass = index === 1
    ? "story-photo-cuenca"
    : index === 3
      ? "story-photo-otto"
      : index === 7
        ? "story-photo-proposal"
        : "";

  return (
    <figure className={`story-photo story-photo-${(index % 4) + 1} ${chapterClass}`}>
      <span className="story-tape" aria-hidden="true" />
      {chapter.imagen ? (
        <img src={chapter.imagen} alt={chapter.alt || chapter.titulo} loading="lazy" decoding="async" />
      ) : (
        <div className="story-photo-placeholder">
          <span>Fotografía pendiente</span>
          <small>{chapter.fotoIdeal}</small>
        </div>
      )}
      {chapter.imagenSecundaria && (
        <span className="story-proposal-polaroid">
          <img src={chapter.imagenSecundaria} alt={chapter.altSecundaria || ""} loading="lazy" decoding="async" />
        </span>
      )}
    </figure>
  );
}

function ChapterHeading({ chapter, index }) {
  return (
    <header className="story-copy-heading">
      <p className="story-number">{String(index + 1).padStart(2, "0")} · Capítulo</p>
      <h3>{chapter.titulo}</h3>
    </header>
  );
}

function ChapterBody({ chapter }) {
  return (
    <div className="story-paragraphs">
      {chapter.parrafos.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function OurStory({ items }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const finalNode = timeline.querySelector(".story-finale .story-node");
      const timelineRect = timeline.getBoundingClientRect();
      const finalNodeRect = finalNode?.getBoundingClientRect();
      const lineTop = 32;
      const lineHeight = finalNodeRect
        ? finalNodeRect.top - timelineRect.top + finalNodeRect.height / 2 - lineTop
        : timeline.offsetHeight;
      timeline.style.setProperty("--story-line-height", `${Math.max(0, lineHeight)}px`);
      if (reducedMotion.matches) {
        timeline.style.setProperty("--story-progress", "1");
        return;
      }
      const start = window.innerHeight * 0.78;
      const distance = lineHeight + window.innerHeight * 0.28;
      const progress = Math.max(0, Math.min(1, (start - timelineRect.top) / distance));
      timeline.style.setProperty("--story-progress", progress.toFixed(3));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener?.("change", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener?.("change", requestUpdate);
    };
  }, []);

  return (
    <section className="our-story" aria-labelledby="our-story-title">
      <Reveal className="story-heading">
        <p className="story-overline">Un nosotros, poco a poco</p>
        <h2 id="our-story-title">Nuestra historia</h2>
        <p className="story-chapters">en 8 capítulos</p>
        <p className="story-intro">Cómo estos dos seres, uno creativo y otro analítico, pasaron a ser un “nosotros”.</p>
        <div className="story-botanical" aria-hidden="true"><i/><span/><i/></div>
      </Reveal>

      <div ref={timelineRef} className="story-timeline">
        <div className="story-line" aria-hidden="true"><span /></div>
        {items.map((chapter, index) => {
          const isFinal = index === items.length - 1;
          return (
            <article key={chapter.titulo} className={`story-chapter ${isFinal ? "story-finale" : ""}`}>
              <Reveal className="story-node"><StoryIcon type={chapter.icono} /></Reveal>
              {isFinal ? (
                <Reveal className="story-finale-content">
                  <ChapterHeading chapter={chapter} index={index} />
                  <ChapterBody chapter={chapter} />
                  <StoryPhoto chapter={chapter} index={index} />
                  <div className="story-ending">
                    <p>Dani dijo que sí.</p>
                    <span>Y, bueno…</span>
                    <strong>por eso estáis leyendo esta web.</strong>
                  </div>
                </Reveal>
              ) : (
                <>
                  <Reveal className="story-title"><ChapterHeading chapter={chapter} index={index} /></Reveal>
                  <Reveal className="story-visual"><StoryPhoto chapter={chapter} index={index} /></Reveal>
                  <Reveal className="story-body" delay={100}><ChapterBody chapter={chapter} /></Reveal>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
