import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import Countdown from "@/components/Countdown";
import FAQAccordion from "@/components/FAQAccordion";
import MapaLugares from "@/components/MapaLugares";
import FlagIcon from "@/components/FlagIcon";
import Playlist from "@/components/Playlist";
import CouplePortrait from "@/components/CouplePortrait";
import OurStory from "@/components/OurStory";
import SceneTransition from "@/components/SceneTransition";
import site from "@/content/site.json";
import historia from "@/content/historia.json";
import evento from "@/content/evento.json";
import viaje from "@/content/viaje.json";
import faq from "@/content/faq.json";
import cortejo from "@/content/cortejo.json";
import cultural from "@/content/cultural.json";
import dresscode from "@/content/dresscode.json";
import galeria from "@/content/galeria.json";
import otto from "@/content/otto.json";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="countdown" data-element-id="countdown" className="countdown-scene">
        <div className="countdown-transition" aria-hidden="true">
          <div className="countdown-mist" />
          <div className="magic-particles">
            {Array.from({ length: 11 }).map((_, index) => <i key={index} />)}
          </div>
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,82 C180,18 320,142 525,72 C730,2 910,138 1110,70 C1260,18 1368,54 1440,34 L1440,150 L0,150 Z" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-12 text-center md:pb-32">
          <p className="countdown-script">Cada día un poquito más cerca</p>
          <h2 className="countdown-title">Faltan</h2>
          <Countdown />
          <p className="countdown-ending">para celebrar juntos</p>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <Section id="historia" className="about-scene">
        <CouplePortrait historia={historia} />
        <OurStory items={historia.timeline} />
      </Section>

      <SceneTransition variant="story-day" />

      {/* EVENTO — solo cronograma */}
      <Section id="evento" elementId="ceremony" title={evento.titulo} subtitle={evento.subtitulo}>
        {evento.notaHorarios && (
          <p className="day-schedule-note">
            {evento.notaHorarios}
          </p>
        )}
        <div id="cronograma" data-element-id="day_timeline">
          <Timeline items={evento.timeline} />
        </div>
      </Section>

      <SceneTransition variant="day-places" />

      {/* VIAJE — mapa con puntos de interés + hoteles */}
      <Section id="viaje" elementId="venue_map" title={viaje.titulo} subtitle={viaje.subtitulo}>
        <MapaLugares puntos={viaje.puntosInteres} />

        <div id="hoteles" data-element-id="hotels" className="hotel-guide">
          <p className="hotel-guide-overline">Dónde quedarse</p>
          <h3>Hoteles</h3>
          <p className="hotel-guide-intro">Cuatro opciones cerca de los lugares principales de la boda.</p>
          <div className="hotel-guide-grid">
            {viaje.hoteles.map((h) => (
              <article key={h.nombre} className="hotel-guide-card magic-card">
                <span className="hotel-guide-number">
                  <img src={h.icono} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                </span>
                <div>
                  <h4>{h.nombre}</h4>
                  <p className="hotel-guide-address">{h.direccion}</p>
                  <p className="hotel-guide-note">{h.nota}</p>
                  {h.descuento && (
                    <p className="hotel-guide-discount">
                      <span>Ventaja para invitados</span>{h.descuento}
                    </p>
                  )}
                  <div className="hotel-guide-actions">
                    <a href={h.url} target="_blank" rel="noopener noreferrer">Reservar →</a>
                    <a href={h.direccionesUrl} target="_blank" rel="noopener noreferrer">Ver mapa</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* CULTURAL — solo frases */}
      <Section id="culturas" elementId="two_cultures" title="Aprende a hablar como nosotros" subtitle="Un pequeño diccionario para venezolanos, madrileños y todo lo demás">
        <div id="frases" data-element-id="bilingual_phrases" className="bg-white/60 border border-lavanda-200 rounded-3xl p-6 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {cultural.frases.map((f, i) => (
              <div key={i} className="p-3 rounded-xl bg-lavanda-50">
                <p className="font-medium flex items-center gap-2">
                  {f.venezolana && (
                    <>
                      <FlagIcon country="VE" className="w-5 h-3 rounded-sm shrink-0" />
                      <span>"{f.venezolana}"</span>
                    </>
                  )}
                  {f.espanola && (
                    <>
                      <FlagIcon country="ES" className="w-5 h-3 rounded-sm shrink-0" />
                      <span>"{f.espanola}"</span>
                    </>
                  )}
                </p>
                <p className="text-tinta/70 italic">{f.traduccion}</p>
                <p className="text-xs text-tinta/50 mt-1">{f.uso}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DRESS CODE */}
      <Section id="dresscode" elementId="color_guide" title={dresscode.titulo}>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white/70 border border-lavanda-200 rounded-3xl p-6 md:p-8">
          <img
            loading="lazy"
            decoding="async"
            src={dresscode.imagen}
            alt="Dress code"
            className="w-44 h-44 md:w-52 md:h-52 shrink-0 rounded-2xl object-cover"
          />
          <div className="text-center md:text-left space-y-5">
            <p className="text-lg text-tinta/85">{dresscode.frase}</p>
            <div>
              <p className="text-xs uppercase tracking-widest text-lavanda-700 mb-1">
                Colores a evitar
              </p>
              <p className="text-tinta/75 italic">{dresscode.evitar}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CORTEJO */}
      <Section id="cortejo" elementId="wedding_party" title={cortejo.titulo} subtitle={cortejo.subtitulo}>
        {cortejo.padres && (
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-center text-lavanda-700 mb-6">Nuestros padres</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {cortejo.padres.map((p) => (
                <div key={p.nombre} className="bg-white/70 border border-lavanda-200 rounded-3xl p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-lavanda-200 shrink-0"
                  />
                  <div>
                    <p className="font-serif text-xl text-tinta">{p.nombre}</p>
                    <p className="text-xs uppercase tracking-widest text-lavanda-700 mt-1">{p.rol}</p>
                    <p className="text-sm text-tinta/75 mt-2">{p.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <h3 className="font-serif text-2xl text-center text-lavanda-700 mb-6">
          Padrinos, damas, caballeros y el bichón
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {cortejo.personas.map((p) => (
            <div key={p.nombre} className="text-center">
              <img
                loading="lazy"
                decoding="async"
                src={p.imagen}
                alt={p.nombre}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-lavanda-200 shadow-soft"
              />
              <p className="font-serif text-xl mt-3 text-tinta">{p.nombre}</p>
              <p className="text-xs uppercase tracking-widest text-lavanda-700 mt-1">{p.rol}</p>
              <p className="text-sm text-tinta/75 mt-2">{p.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GALERÍA */}
      <Section id="galeria" elementId="gallery" title={galeria.titulo} subtitle={galeria.subtitulo}>
        <div className="bg-white/70 rounded-3xl border border-lavanda-200 p-8 text-center">
          <h3 className="font-serif text-3xl text-lavanda-700">
            {galeria.albumCompartido.titulo}
          </h3>
          <p className="text-tinta/70 mt-2 max-w-xl mx-auto">
            {galeria.albumCompartido.texto}
          </p>
          <img
            loading="lazy"
            decoding="async"
            src={galeria.albumCompartido.qrUrl}
            alt="QR álbum compartido"
            className="w-40 h-40 mx-auto mt-4 rounded-2xl border border-lavanda-200"
          />
          <a
            href={galeria.albumCompartido.enlaceSubida}
            target="_blank"
            rel="noopener"
            className="inline-block mt-4 px-6 py-2 rounded-full bg-lavanda-600 text-white hover:bg-lavanda-700"
          >
            Abrir álbum compartido
          </a>
        </div>
      </Section>

      {/* OTTO */}
      <Section id="otto" elementId="otto" title={otto.titulo} subtitle={otto.subtitulo}>
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            loading="lazy"
            decoding="async"
            src={otto.imagenPrincipal}
            alt="Otto"
            className="rounded-3xl shadow-soft w-full aspect-square object-cover"
          />
          <div>
            <h3 className="font-serif text-3xl text-tinta mb-2">Ficha de personaje</h3>
            <p className="text-lavanda-700 font-medium mb-4">{otto.cargo}</p>
            <dl className="space-y-2 text-sm">
              {Object.entries(otto.bio).map(([k, v]) => (
                <div key={k} className="flex gap-3 border-b border-lavanda-100 pb-1">
                  <dt className="capitalize font-medium text-tinta w-40">{k.replace(/([A-Z])/g, " $1")}</dt>
                  <dd className="text-tinta/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-3xl text-lavanda-700 text-center mb-6">Reseñas de Otto</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otto.resenas.map((r, i) => (
              <div key={i} className="bg-white/70 border border-lavanda-200 rounded-2xl p-5">
                <p className="font-serif text-xl text-tinta">{r.lugar}</p>
                <p className="text-amber-500">{"🐾".repeat(r.estrellas)}</p>
                <p className="text-sm text-tinta/75 mt-2 italic">"{r.comentario}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* RSVP */}
      <Section
        id="rsvp"
        elementId="rsvp_form"
        title="Confirma tu magia"
        subtitle={`Rellena el formulario antes del ${site.fecha.rsvpLimite}. Menú, alergias, canción y más.`}
      >
        <div className="max-w-3xl mx-auto mb-8 text-center bg-lavanda-100/60 border border-lavanda-300 rounded-2xl px-5 py-4">
          <p className="text-xs uppercase tracking-widest text-lavanda-700">
            Fecha límite
          </p>
          <p className="font-serif text-2xl text-tinta mt-1">
            {site.fecha.rsvpLimite}
          </p>
          <p className="text-xs text-tinta/70 mt-1">
            Después de esta fecha no podremos cerrar el menú, el sitio en la mesa
            ni la plaza en el autobús.
          </p>
        </div>

        <RSVP />

      </Section>

      {/* PLAYLIST */}
      <Section
        id="playlist"
        elementId="spotify_collab"
        title="La Playlist"
        subtitle="La banda sonora de la fiesta la ponéis vosotros: añadid vuestra canción"
      >
        <Playlist />
      </Section>

      {/* FAQ completo */}
      <Section id="faq" elementId="faq" title={faq.titulo} subtitle={faq.subtitulo}>
        <FAQAccordion items={faq.preguntas} />
      </Section>
    </>
  );
}
