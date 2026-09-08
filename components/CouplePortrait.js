import Reveal from "./Reveal";

const iconPaths = {
  dani: ["home", "gear", "brush", "candle", "cheese", "paw", "spark"],
  angel: ["home", "radiation", "wand", "brick", "chart", "paw", "dice"],
};

// Cuando tengáis las fotos, solo hay que escribir aquí sus rutas dentro de /public.
const characterPhotos = {
  dani: "/images/personajes/danioska-profile.jpg",
  angel: "images/personajes/Angel-closeup.jpg",
};

const characterProfiles = {
  dani: {
    className: "Hada Artesana",
    ability: "Yo puedo hacer eso",
    abilityDetail: "Si existe, puede hacerlo; si no sabe, aprenderá. El coste y los viajes a la tienda son irrelevantes.",
  },
  angel: {
    className: "Coleccionista de reliquias",
    ability: "Esto no se tira",
    abilityDetail: "Acumula toda clase de artefactos: juegos, monedas, barajas, LEGO y cajas vacías.",
  },
};

function TraitIcon({ type }) {
  return <svg viewBox="0 0 32 32" aria-hidden="true" className="trait-icon">
    {type === "home" && <><path d="M6 15 16 7l10 8"/><path d="M9 14v11h14V14M13 25v-7h6v7"/></>}
    {type === "gear" && <><circle cx="16" cy="16" r="5"/><path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.9 2.9M20.9 20.9l2.9 2.9M23.8 8.2l-2.9 2.9M11.1 20.9l-2.9 2.9"/><path d="M12 6.2 13.5 9M20 6.2 18.5 9M25.8 12 23 13.5M25.8 20 23 18.5M20 25.8 18.5 23M12 25.8 13.5 23M6.2 20 9 18.5M6.2 12 9 13.5"/></>}
    {type === "brush" && <><path d="M25.5 5.5c-1.4-1.4-3.4-.8-4.7.5L11 15.8l5.2 5.2 9.7-9.8c1.3-1.3 1-4.2-.4-5.7Z"/><path d="m11 15.8-2.4 2.4 5.2 5.2 2.4-2.4M8.7 18.3c-4.1.7-4.9 4.3-4.7 8.7 4.4.2 8-.6 8.7-4.7"/><path d="M6.5 23.8c1.3.1 2.1-.3 2.8-1"/></>}
    {type === "candle" && <><path d="M11 14h10v12H11zM9 26h14"/><path d="M13 14v3l2-1.5 2 1.5 2-3"/><path d="M16 4c3 3 3.1 5.5 0 8-3.1-2.5-3-5 0-8Z"/><path d="M16 12v2"/></>}
    {type === "cheese" && <><path d="M5 15 21 7l6 7-16 11H5Z"/><path d="M5 15h22M11 15v10"/><circle cx="18.5" cy="11.5" r="1.5"/><circle cx="20" cy="19" r="1.8"/><circle cx="8" cy="19" r="1.2"/></>}
    {type === "paw" && <><ellipse cx="16" cy="21" rx="6" ry="5"/><circle cx="8" cy="15" r="2.5"/><circle cx="13" cy="10" r="2.5"/><circle cx="20" cy="10" r="2.5"/><circle cx="25" cy="15" r="2.5"/></>}
    {type === "spark" && <><path d="M16 4c0 7-3 10-10 10 7 0 10 3 10 10 0-7 3-10 10-10-7 0-10-3-10-10Z"/><path d="M25 21c0 3-1 4-4 4 3 0 4 1 4 4 0-3 1-4 4-4-3 0-4-1-4-4Z"/></>}
    {type === "radiation" && <><circle cx="16" cy="16" r="2.4"/><circle cx="16" cy="16" r="11.5"/><path d="M14.5 12.7C10 11.2 8 8.5 8.2 6.8c4-2.5 8-1.6 8.8 4.8M19 14.2c2.3-4.1 5.4-5.3 7-4.5 1.2 4.5-.8 8.1-5.6 7.5M18.5 19.2c2.1 4.2 1.4 7.3-.1 8.2-4.7-.7-7.3-3.9-5-8.2"/></>}
    {type === "wand" && <><path d="m7 25 13-13M5.5 26.5l3-3"/><path d="M23 4c0 3.4-1.6 5-5 5 3.4 0 5 1.6 5 5 0-3.4 1.6-5 5-5-3.4 0-5-1.6-5-5ZM10 5c0 2-1 3-3 3 2 0 3 1 3 3 0-2 1-3 3-3-2 0-3-1-3-3ZM25 19c0 1.7-.8 2.5-2.5 2.5 1.7 0 2.5.8 2.5 2.5 0-1.7.8-2.5 2.5-2.5-1.7 0-2.5-.8-2.5-2.5Z"/></>}
    {type === "brick" && <><rect x="5" y="7" width="22" height="18" rx="2"/><path d="M5 14h22M5 21h22M12 7v7M21 7v7M9 14v7M19 14v7"/></>}
    {type === "chart" && <><path d="M6 26V7M6 26h21"/><rect x="10" y="18" width="3" height="5"/><rect x="16" y="13" width="3" height="10"/><rect x="22" y="8" width="3" height="15"/></>}
    {type === "dice" && <><rect x="6" y="6" width="20" height="20" rx="4"/><circle cx="11" cy="11" r="1.4"/><circle cx="21" cy="11" r="1.4"/><circle cx="16" cy="16" r="1.4"/><circle cx="11" cy="21" r="1.4"/><circle cx="21" cy="21" r="1.4"/></>}
  </svg>;
}

function CharacterPhoto({ name, src }) {
  return <div className="character-photo">
    {src ? <img src={src} alt={`Retrato de ${name}`} /> : <span>Foto</span>}
  </div>;
}

function CharacterSheet({ id, name, origin, facts, delay = 0 }) {
  const profile = characterProfiles[id];
  return <Reveal className={`character-sheet character-sheet-${id}`} delay={delay}>
    <div className="character-wash" aria-hidden="true"/>
    <header className="character-header">
      <CharacterPhoto name={name} src={characterPhotos[id]}/>
      <div className="character-identity">
        <p className="character-origin">{origin}</p>
        <h3>{name}</h3>
        <p className="character-class"><span>Clase:</span> {profile.className}</p>
      </div>
    </header>
    <div className="character-special">
      <span>Habilidad especial</span>
      <p><strong>{profile.ability}</strong><em> — {profile.abilityDetail}</em></p>
    </div>
    <div className="character-divider"><span>Rasgos</span></div>
    <ul className="character-traits">
      {facts.map((fact,index) => <li key={fact.texto}>
        <span className="trait-medallion"><TraitIcon type={iconPaths[id][index]}/></span><p>{fact.texto}</p>
      </li>)}
    </ul>
  </Reveal>;
}

export default function CouplePortrait({ historia }) {
  return <div id="fun-facts" data-element-id="fun_facts" className="couple-portrait">
    <Reveal className="couple-heading">
      <p className="couple-overline">Dos mundos, una misma partida</p>
      <h2>Conoce a los personajes</h2>
      <p>Una artista que convierte cualquier idea en proyecto y un científico que intenta ordenarlo todo en columnas. Sorprendentemente, funciona.</p>
    </Reveal>
    <div className="character-grid">
      <CharacterSheet id="dani" name="Danioska" origin="Venezuela · Madrid" facts={historia.funFacts.dani}/>
      <CharacterSheet id="angel" name="Ángel" origin="Córdoba · Madrid" facts={historia.funFacts.angel} delay={120}/>
    </div>
  </div>;
}
