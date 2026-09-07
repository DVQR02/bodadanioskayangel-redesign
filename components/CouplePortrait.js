import Reveal from "./Reveal";

function PersonNotes({ name, eyebrow, facts, align = "left" }) {
  return (
    <Reveal className={`person-notes person-notes-${align}`}>
      <p className="person-eyebrow">{eyebrow}</p>
      <h3 className="person-name">{name}</h3>
      <div className="person-rule" aria-hidden="true" />
      <ol className="person-facts">
        {facts.map((fact, index) => (
          <li key={fact.texto}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{fact.texto}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function CouplePortrait({ historia }) {
  return (
    <div id="fun-facts" data-element-id="fun_facts" className="couple-portrait">
      <Reveal className="couple-heading">
        <p className="couple-overline">Dos mundos, una misma historia</p>
        <h2>Un poquito sobre nosotros</h2>
        <p>
          Una artista que convierte cualquier idea en proyecto y un científico
          que intenta ordenarlo todo en columnas. Sorprendentemente, funciona.
        </p>
      </Reveal>

      <div className="couple-layout">
        <PersonNotes
          name="Danioska"
          eyebrow="Creatividad · Venezuela · Queso"
          facts={historia.funFacts.dani}
        />

        <Reveal className="couple-monogram" delay={120}>
          <span className="couple-d">D</span>
          <span className="couple-and">&amp;</span>
          <span className="couple-a">A</span>
          <svg viewBox="0 0 180 310" aria-hidden="true">
            <path d="M98 292C48 235 40 178 69 125c18-32 57-49 79-87" />
            <path d="M70 126c-24-20-43-17-57-7 13 22 32 26 57 7Z" />
            <path d="M88 91c-7-26 4-44 23-55 11 25 2 44-23 55Z" />
            <path d="M56 174c-24-14-42-7-54 6 17 18 37 17 54-6Z" />
            <path d="M90 218c25-16 46-11 59 1-16 22-38 22-59-1Z" />
          </svg>
        </Reveal>

        <PersonNotes
          name="Ángel"
          eyebrow="Ciencia · Córdoba · Magia"
          facts={historia.funFacts.angel}
          align="right"
        />
      </div>
    </div>
  );
}
