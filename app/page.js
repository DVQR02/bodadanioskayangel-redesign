import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import Countdown from "@/components/Countdown";
import FAQAccordion from "@/components/FAQAccordion";
import MapaLugares from "@/components/MapaLugares";
import CulturalDictionary from "@/components/CulturalDictionary";
import Playlist from "@/components/Playlist";
import CouplePortrait from "@/components/CouplePortrait";
import OurStory from "@/components/OurStory";
import SceneTransition from "@/components/SceneTransition";
import WeddingPartyCarousel from "@/components/WeddingPartyCarousel";
import DressCode from "@/components/DressCode";
import site from "@/content/site.json";
import historia from "@/content/historia.json";
import evento from "@/content/evento.json";
import viaje from "@/content/viaje.json";
import faq from "@/content/faq.json";
import cortejo from "@/content/cortejo.json";
import cultural from "@/content/cultural.json";
import dresscode from "@/content/dresscode.json";
import galeria from "@/content/galeria.json";

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

      {/* DICCIONARIO VENEKOESPAÑOL */}
      <Section id="culturas" elementId="two_cultures" className="culture-scene" title="Aprende a hablar como nosotros" subtitle="Un pequeño diccionario para venezolanos, españoles y todo lo demás">
        <CulturalDictionary content={cultural} />
      </Section>

      <SceneTransition variant="culture-dress" />

      {/* DRESS CODE */}
      <Section id="dresscode" elementId="color_guide" className="dresscode-scene">
        <DressCode content={dresscode} />
      </Section>

      {/* CORTEJO */}
      <Section id="cortejo" elementId="wedding_party" title={cortejo.titulo} subtitle={cortejo.subtitulo}>
        <WeddingPartyCarousel padres={cortejo.padres} personas={cortejo.personas} />
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
