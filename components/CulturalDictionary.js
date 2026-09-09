import Reveal from "@/components/Reveal";

export default function CulturalDictionary({ content }) {
  return (
    <div id="frases" data-element-id="bilingual_phrases" className="culture-dictionary">
      <div className="culture-dictionary-heading">
        <span aria-hidden="true">🇻🇪</span>
        <div><p>Diccionario</p><h3>Venekospañol</h3></div>
        <span aria-hidden="true">🇪🇸</span>
      </div>

      <div className="culture-entries">
        {content.frases.map((phrase, index) => (
          <Reveal className={`culture-entry culture-tone-${(index % 5) + 1}`} delay={(index % 3) * 70} key={phrase.venezolana}>
            <div className="culture-expression culture-expression-ve">
              <span>🇻🇪 Venezuela</span><strong>{phrase.venezolana}</strong>
            </div>
            <div className="culture-exchange" aria-hidden="true"><i />↔<i /></div>
            <div className="culture-expression culture-expression-es">
              <span>España 🇪🇸</span><strong>{phrase.espanola}</strong>
            </div>
            {phrase.significado && <p>{phrase.significado}</p>}
          </Reveal>
        ))}
      </div>

      <Reveal className="culture-quick">
        <p className="culture-eyebrow">Para conversaciones a toda velocidad</p>
        <div className="culture-quick-grid">
          {content.rapidas.map((phrase) => (
            <p key={phrase.venezolana}><span>🇻🇪 {phrase.venezolana}</span><b aria-hidden="true">→</b><span>🇪🇸 {phrase.espanola}</span></p>
          ))}
        </div>
      </Reveal>

      <Reveal className="culture-diplomacy">
        <p className="culture-eyebrow">Reservado para cuando perdemos la diplomacia</p>
        <div><strong>🇻🇪 {content.diplomacia.venezolana}</strong><span aria-hidden="true">↔</span><strong>🇪🇸 {content.diplomacia.espanola}</strong></div>
        <small>Pronunciar únicamente bajo vuestra propia responsabilidad.</small>
      </Reveal>
    </div>
  );
}
