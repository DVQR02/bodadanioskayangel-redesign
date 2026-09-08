"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";

export default function WeddingPartyCarousel({ padres = [], personas = [] }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const person = personas[active];

  const move = (direction) => {
    setActive((current) => (current + direction + personas.length) % personas.length);
  };

  const finishSwipe = (clientX) => {
    if (touchStart.current === null) return;
    const distance = clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
  };

  return (
    <div className="wedding-party">
      {padres.length > 0 && (
        <div className="party-parents">
          <Reveal className="party-subheading">
            <p>Los que hicieron posible el comienzo</p>
            <h3>Nuestros padres</h3>
          </Reveal>

          <div className="party-parents-grid">
            {padres.map((parent, index) => (
              <Reveal key={parent.nombre} delay={index * 120}>
                <article className={`party-parent-card party-parent-${index + 1}`}>
                  <div className="party-parent-photo">
                    <img loading="lazy" decoding="async" src={parent.imagen} alt={parent.nombre} />
                  </div>
                  <div className="party-parent-copy">
                    <span>{parent.rol}</span>
                    <h4>{parent.nombre}</h4>
                    <p>{parent.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {person && (
        <div className="party-carousel-wrap">
          <Reveal className="party-subheading party-carousel-heading">
            <p>El equipo que completa la aventura</p>
            <h3>Padrinos, damas, caballeros y el bichón</h3>
          </Reveal>

          <div
            className="party-carousel"
            tabIndex={0}
            aria-label="Carrusel del cortejo"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") move(1);
              if (event.key === "ArrowLeft") move(-1);
            }}
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
            onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}
          >
            <article key={active} className={`party-person-card party-tone-${active % 2 ? "sage" : "lavender"}`} aria-live="polite">
              <div className="party-person-photo">
                <img loading="eager" decoding="async" src={person.imagen} alt={person.nombre} />
                <span aria-hidden="true">{String(active + 1).padStart(2, "0")}</span>
              </div>
              <div className="party-person-copy">
                <p className="party-person-role">{person.rol}</p>
                <h4>{person.nombre}</h4>
                <div className="party-person-flourish" aria-hidden="true"><i /><b>♥</b><i /></div>
                <p className="party-person-bio">{person.bio}</p>
                <p className="party-swipe-hint">Desliza para conocer al resto</p>
              </div>
            </article>

            <div className="party-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Ver persona anterior">
                <span aria-hidden="true">←</span> Anterior
              </button>
              <p><strong>{String(active + 1).padStart(2, "0")}</strong><span>/</span>{String(personas.length).padStart(2, "0")}</p>
              <button type="button" onClick={() => move(1)} aria-label="Ver siguiente persona">
                Siguiente <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="party-dots" role="tablist" aria-label="Elegir persona del cortejo">
              {personas.map((item, index) => (
                <button
                  key={item.nombre}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-label={`Ver a ${item.nombre}`}
                  className={active === index ? "is-active" : ""}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
