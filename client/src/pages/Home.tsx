/**
 * Shaabi Screenprint Parade — an effects-first, photo-free Egyptian wedding invitation built as a lively vertical celebration.
 */
import { CalendarDays, ChevronDown, Clock3, Heart, MapPin, Music2, Sparkles } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

const lightBulbs = [
  { left: "7%", color: "#F5D90A", delay: "0s" },
  { left: "16%", color: "#2AB7A9", delay: "0.8s" },
  { left: "26%", color: "#EA416C", delay: "0.2s" },
  { left: "37%", color: "#F28C19", delay: "1.2s" },
  { left: "63%", color: "#F5D90A", delay: "0.5s" },
  { left: "74%", color: "#EA416C", delay: "1.5s" },
  { left: "84%", color: "#2AB7A9", delay: "0.4s" },
  { left: "93%", color: "#F28C19", delay: "1.1s" },
];

const confetti = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 5) % 96}%`,
  top: `${(index * 31 + 11) % 86}%`,
  delay: `${(index % 6) * -0.65}s`,
  duration: `${5.3 + (index % 5) * 0.62}s`,
  rotate: `${index % 2 === 0 ? 30 : -30}deg`,
  color: ["#F5D90A", "#E64428", "#2AB7A9", "#EA416C"][index % 4],
}));

const marqueeWords = ["YA LEIL YA EIN", "•", "CELEBRATE LOUD", "•", "HELWAN × MENOFIA", "•", "DANCE TILL LATE", "•"];

export default function Home() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const weddingDate = new Date("2026-08-21T19:00:00+03:00");
    const updateCountdown = () => {
      const difference = weddingDate.getTime() - Date.now();
      setDaysLeft(Math.max(0, Math.ceil(difference / 86_400_000)));
    };
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="invite-shell">
      <div className="screenprint-grain" aria-hidden="true" />
      <div className="confetti-pattern" aria-hidden="true" />
      <div className="horizon-glow" aria-hidden="true" />

      <section className="hero-stage" aria-labelledby="invite-title">
        <div className="festoon-strip" aria-hidden="true">
          <img src="/manus-storage/masr-wedding-festoons_cf515008.png" alt="" />
        </div>
        <div className="bulb-wire" aria-hidden="true" />
        {lightBulbs.map((bulb) => (
          <span
            key={bulb.left}
            className="light-bulb"
            style={{ left: bulb.left, backgroundColor: bulb.color, animationDelay: bulb.delay } as CSSProperties}
            aria-hidden="true"
          />
        ))}

        {confetti.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              top: piece.top,
              backgroundColor: piece.color,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              transform: `rotate(${piece.rotate})`,
            } as CSSProperties}
            aria-hidden="true"
          />
        ))}

        <header className="top-line">
          <div className="eyebrow"><Sparkles size={14} strokeWidth={2.7} /> A wedding night invitation <Sparkles size={14} strokeWidth={2.7} /></div>
          {daysLeft !== null && <div className="countdown-pill">{daysLeft === 0 ? "Tonight is the night" : `${daysLeft} days to go`}</div>}
        </header>

        <div className="hero-copy">
          <div className="mark-wrap">
            <img src="/manus-storage/masr-wedding-mark_0fe68b72.png" alt="Two celebratory rings intertwined" />
          </div>
          <p className="kicker">TWO HOMETOWNS. ONE VERY LOUD NIGHT.</p>
          <h1 id="invite-title">
            <span>The only day</span>
            <span>when <em>1 + 1</em> = infinity.</span>
          </h1>
          <div className="location-callout">
            <span className="mini-star">✦</span>
            <p>Helwan + Menofia are here to rule</p>
            <span className="mini-star">✦</span>
          </div>
          <button className="scroll-cta" onClick={scrollToDetails} type="button">
            <span>Mark your calendar</span>
            <ChevronDown size={18} strokeWidth={3} />
          </button>
        </div>

        <div className="bottom-spark" aria-hidden="true">✦</div>
      </section>

      <section className="ticker-band" aria-label="Celebration messages">
        <div className="ticker-track">
          {[...marqueeWords, ...marqueeWords].map((word, index) => (
            <span key={`${word}-${index}`} className={word === "•" ? "ticker-dot" : ""}>{word}</span>
          ))}
        </div>
      </section>

      <section id="details" className="details-stage" aria-labelledby="details-title">
        <div className="section-whisper">SAVE THE DATE / NO EXCUSES ACCEPTED</div>
        <div className="ticket-card">
          <div className="ticket-corner ticket-corner-left" aria-hidden="true" />
          <div className="ticket-corner ticket-corner-right" aria-hidden="true" />

          <div className="ticket-heading">
            <div className="stamp">FRI</div>
            <div>
              <p className="ticket-label">THE BIG NIGHT</p>
              <h2 id="details-title">21 AUGUST</h2>
              <p className="ticket-year">2026</p>
            </div>
            <div className="ticket-glyph" aria-hidden="true">★</div>
          </div>

          <div className="ticket-rule" />

          <div className="detail-list">
            <article className="detail-item">
              <span className="detail-icon"><Clock3 size={19} strokeWidth={2.7} /></span>
              <div>
                <p className="detail-title">Doors open</p>
                <p className="detail-value">7:00 PM</p>
              </div>
            </article>
            <article className="detail-item">
              <span className="detail-icon"><MapPin size={19} strokeWidth={2.7} /></span>
              <div>
                <p className="detail-title">Where we gather</p>
                <p className="detail-value">The Bride&apos;s House</p>
              </div>
            </article>
            <article className="detail-item">
              <span className="detail-icon"><Music2 size={19} strokeWidth={2.7} /></span>
              <div>
                <p className="detail-title">Dress code</p>
                <p className="detail-value">Bring your brightest self</p>
              </div>
            </article>
          </div>

          <button className="details-toggle" onClick={() => setDetailsOpen((open) => !open)} type="button" aria-expanded={detailsOpen}>
            <CalendarDays size={17} strokeWidth={2.8} />
            {detailsOpen ? "See you there" : "One more thing"}
            <span className={detailsOpen ? "plus-sign is-open" : "plus-sign"}>+</span>
          </button>

          <div className={detailsOpen ? "secret-note visible" : "secret-note"} aria-hidden={!detailsOpen}>
            <Heart size={17} fill="currentColor" />
            <p>Bring your loudest clap. We&apos;ll bring the night.</p>
          </div>
        </div>
      </section>

      <footer className="invite-footer">
        <p>With love, music, and a proper Egyptian celebration.</p>
        <span className="footer-sparkles">✦ ✦ ✦</span>
      </footer>
    </main>
  );
}
