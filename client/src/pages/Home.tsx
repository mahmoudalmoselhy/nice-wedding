/**
 * Minimal Flare Afterparty — English wedding copy framed by generous black space and one continuously burning red flare.
 */
import { ArrowDown, CalendarPlus, Check, MapPin, Music2, Sparkles } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

const sparks = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  angle: `${-72 + ((index * 37) % 144)}deg`,
  distance: `${32 + ((index * 23) % 122)}px`,
  delay: `${(index % 10) * -0.42}s`,
  duration: `${1.2 + (index % 5) * 0.22}s`,
  size: `${2 + (index % 3)}px`,
}));

export default function Home() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const weddingDate = new Date("2026-08-21T19:00:00+03:00");
    const updateCountdown = () => setDaysLeft(Math.max(0, Math.ceil((weddingDate.getTime() - Date.now()) / 86_400_000)));
    updateCountdown();
    const interval = window.setInterval(updateCountdown, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const scrollToDetails = () => document.getElementById("details")?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <main className="minimal-invite">
      <div className="ambient-noise" aria-hidden="true" />
      <div className="persistent-flare" aria-hidden="true">
        <div className="flare-haze" />
        <div className="flare-smoke smoke-one" />
        <div className="flare-smoke smoke-two" />
        <div className="flare-fire"><span /><span /><span /></div>
        <div className="flare-core" />
        <div className="flare-handle" />
        <div className="flare-sparks">
          {sparks.map((spark) => (
            <i
              key={spark.id}
              style={{
                "--spark-angle": spark.angle,
                "--spark-distance": spark.distance,
                "--spark-delay": spark.delay,
                "--spark-duration": spark.duration,
                "--spark-size": spark.size,
              } as CSSProperties}
            />
          ))}
        </div>
      </div>

      <section className="hero" aria-labelledby="invite-title">
        <header className="nav-line">
          <p className="nav-label"><span className="brand-mark" aria-hidden="true"><i /><b>✦</b></span> HELWAN × MENOFIA</p>
          <p className="nav-date">FRI / 21 AUG / 2026</p>
        </header>

        <div className="hero-content">
          <p className="overline">NOT A QUIET NIGHT.</p>
          <h1 id="invite-title">
            <span>The only day</span>
            <span>when <i>1 + 1</i> = infinity.</span>
          </h1>
          <div className="hero-divider"><span /><b>✦</b><span /></div>
          <p className="statement">Helwan + Menofia are here to rule. Egyptian energy, no volume limit.</p>
          <button type="button" className="liquid-button hero-button" onClick={scrollToDetails}>
            <span>Save the night</span><ArrowDown size={17} strokeWidth={2.1} />
          </button>
        </div>

        <div className="flare-caption" aria-hidden="true"><span /> ONE RED FLARE. ALL NIGHT. <span /></div>
      </section>

      <section id="details" className="details" aria-labelledby="details-title">
        <div className="details-intro">
          <p className="overline">THE NIGHT&apos;S RULES</p>
          <h2 id="details-title">Show up. Stay loud.</h2>
        </div>

        <div className="info-grid">
          <article className="glass-panel featured-panel">
            <span className="panel-number">01</span>
            <p className="panel-label">THE WHEN</p>
            <p className="date-line">Friday <strong>21 August</strong></p>
            <p className="panel-meta">2026 · The night opens at 7:00 PM</p>
          </article>
          <article className="glass-panel">
            <span className="panel-number">02</span>
            <MapPin size={18} strokeWidth={1.8} className="panel-icon" />
            <p className="panel-label">THE WHERE</p>
            <p className="panel-copy">The Bride&apos;s House</p>
            <p className="panel-meta">Directions shared with the family only</p>
          </article>
          <article className="glass-panel">
            <span className="panel-number">03</span>
            <Music2 size={18} strokeWidth={1.8} className="panel-icon" />
            <p className="panel-label">THE ENERGY</p>
            <p className="panel-copy">No soft-launching.</p>
            <p className="panel-meta">Bring your brightest self—and your loudest clap.</p>
          </article>
        </div>

        <div className="action-row">
          <button type="button" className="liquid-button" onClick={() => setDetailsOpen((open) => !open)} aria-expanded={detailsOpen}>
            {detailsOpen ? <Check size={17} strokeWidth={2.2} /> : <CalendarPlus size={17} strokeWidth={2.2} />}
            <span>{detailsOpen ? "See you there" : "One more thing"}</span>
          </button>
          <div className={detailsOpen ? "note is-open" : "note"} aria-hidden={!detailsOpen}>
            <Sparkles size={15} strokeWidth={1.9} /><p>We’ll bring the night. You bring the people.</p>
          </div>
        </div>
      </section>

      <footer className="footer-line">
        <span>MADE FOR A VERY GOOD NIGHT</span><i /><span>WITH LOVE</span>
      </footer>
    </main>
  );
}
