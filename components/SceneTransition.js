export default function SceneTransition({ variant }) {
  const isStory = variant === "story-day";

  return (
    <div className={`scene-transition scene-transition-${variant}`} aria-hidden="true">
      <div className="transition-wash" />
      <div className="transition-path"><span /></div>
      <span className="transition-motif transition-motif-left">{isStory ? "A♥" : "♟"}</span>
      <span className="transition-motif transition-motif-center">{isStory ? "✦" : "🐾"}</span>
      <span className="transition-motif transition-motif-right">{isStory ? "♟" : "A♥"}</span>
      <i className="transition-leaf transition-leaf-one" />
      <i className="transition-leaf transition-leaf-two" />
      <i className="transition-spark transition-spark-one" />
      <i className="transition-spark transition-spark-two" />
      <i className="transition-spark transition-spark-three" />
    </div>
  );
}
