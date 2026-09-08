import Reveal from "./Reveal";

const iconPaths = {
  dani: ["home", "work", "brush", "flame", "cheese", "paw", "spark"],
  angel: ["home", "atom", "cards", "brick", "chart", "paw", "dice"],
};

// Cuando tengáis las fotos, solo hay que escribir aquí sus rutas dentro de /public.
const characterPhotos = {
  dani: "/images/personajes/danioska-profile.jpg",
  angel: "/images/personajes/angel-profile-close.jpg",
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
    {type === "work" && <><rect x="6" y="10" width="20" height="15" rx="3"/><path d="M12 10V7h8v3M6 16h20"/></>}
    {type === "brush" && <><path d="M24 5 12 17"/><path d="M13 16c-5 0-7 4-7 9 5 0 9-2 9-7"/></>}
    {type === "flame" && <path d="M17 5c2 6-4 7-2 12 1-2 3-3 4-6 4 4 5 7 4 11-1 4-4 6-8 6-5 0-8-3-8-8 0-5 4-8 7-11 0 4 1 5 3 6"/>}
    {type === "cheese" && <><path d="m6 17 16-9 5 6-16 10H6Z"/><circle cx="17" cy="15" r="1.5"/><circle cx="11" cy="19" r="1"/></>}
    {type === "paw" && <><ellipse cx="16" cy="21" rx="6" ry="5"/><circle cx="8" cy="15" r="2.5"/><circle cx="13" cy="10" r="2.5"/><circle cx="20" cy="10" r="2.5"/><circle cx="25" cy="15" r="2.5"/></>}
    {type === "spark" && <><path d="M16 4c0 7-3 10-10 10 7 0 10 3 10 10 0-7 3-10 10-10-7 0-10-3-10-10Z"/><path d="M25 21c0 3-1 4-4 4 3 0 4 1 4 4 0-3 1-4 4-4-3 0-4-1-4-4Z"/></>}
    {type === "atom" && <><circle cx="16" cy="16" r="2"/><ellipse cx="16" cy="16" rx="12" ry="5"/><ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(120 16 16)"/></>}
    {type === "cards" && <><rect x="8" y="7" width="14" height="19" rx="2" transform="rotate(-8 15 16)"/><path d="M18 7h5a2 2 0 0 1 2 2v16M15 13c-3-4-7 1 0 6 7-5 3-10 0-6Z"/></>}
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
