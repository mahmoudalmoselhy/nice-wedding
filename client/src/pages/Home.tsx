/**
 * Flare-lit wedding invitation — cinematic hero plus a playful, friend-to-friend night-rules section.
 */
import { ArrowDown, CalendarPlus, Check, MapPin, Music2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [flareVisible, setFlareVisible] = useState(false);

  useEffect(() => {
    const weddingDate = new Date("2026-08-21T19:00:00+03:00");
    const updateCountdown = () => setDaysLeft(Math.max(0, Math.ceil((weddingDate.getTime() - Date.now()) / 86_400_000)));
    updateCountdown();
    const interval = window.setInterval(updateCountdown, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setFlareVisible(true), 5000);
    return () => window.clearTimeout(revealTimer);
  }, []);

  const scrollToDetails = () => document.getElementById("details")?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <main className="minimal-invite">

      <section className={flareVisible ? "hero is-lit" : "hero"} aria-labelledby="invite-title">
        <div className={flareVisible ? "hero-flare-video is-visible" : "hero-flare-video"} aria-hidden="true">
          <video autoPlay loop muted playsInline preload="auto">
            <source src="/manus-storage/realistic-red-flare-hero-loop_3816664d.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-blackout" aria-hidden="true" />
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

      <section id="details" className="details night-rules" aria-labelledby="details-title">
        <div className="rules-head">
          <div>
            <p className="overline">THE NIGHT&apos;S VERY SERIOUS AGENDA</p>
            <p className="rules-whisper">Read this like your aunt is watching.</p>
          </div>
          <h2 id="details-title">THREE THINGS.<br /><i>ZERO EXCUSES.</i></h2>
        </div>

        <div className="rule-list">
          <article className="rule-row rule-row-date">
            <span className="rule-number">01</span>
            <div className="rule-label"><CalendarPlus size={18} strokeWidth={2.1} /> TIME CHECK</div>
            <div className="rule-main">
              <p>FRIDAY, <strong>21 AUGUST.</strong></p>
              <small>Doors open at 7 PM. Arrive before the playlist judges you.</small>
            </div>
            <span className="rule-side-note">NO FASHIONABLY LATE<br />BEHAVIOUR, PLEASE.</span>
          </article>

          <article className="rule-row rule-row-place">
            <span className="rule-number">02</span>
            <div className="rule-label"><MapPin size={18} strokeWidth={2.1} /> LOCATION</div>
            <div className="rule-main">
              <p>THE <strong>BRIDE&apos;S HOUSE.</strong></p>
              <small>Follow the family group. Google Maps has not been invited.</small>
            </div>
            <span className="rule-side-note">IF LOST, CALL<br />YOUR FAVORITE COUSIN.</span>
          </article>

          <article className="rule-row rule-row-vibe">
            <span className="rule-number">03</span>
            <div className="rule-label"><Music2 size={18} strokeWidth={2.1} /> VIBE CHECK</div>
            <div className="rule-main">
              <p>ARRIVE CUTE.<br /><strong>LEAVE HOARSE.</strong></p>
              <small>Singing optional. Clapping is absolutely not.</small>
            </div>
            <span className="rule-side-note">BRING THE ENERGY.<br />WE&apos;LL HANDLE THE REST.</span>
          </article>
        </div>

        <div className="action-row rules-action">
          <button type="button" className="liquid-button" onClick={() => setDetailsOpen((open) => !open)} aria-expanded={detailsOpen}>
            {detailsOpen ? <Check size={17} strokeWidth={2.2} /> : <Sparkles size={17} strokeWidth={2.2} />}
            <span>{detailsOpen ? "Good. You got the memo." : "Okay, I’m emotionally prepared"}</span>
          </button>
          <div className={detailsOpen ? "note is-open" : "note"} aria-hidden={!detailsOpen}>
            <Sparkles size={15} strokeWidth={1.9} /><p>Excellent. Your attendance has been spiritually noted.</p>
          </div>
        </div>
      </section>

      <footer className="footer-line">
        <span>MADE FOR A VERY GOOD NIGHT</span><span className="footer-mark" aria-hidden="true"><i /><b>✦</b></span><i /><span>WITH LOVE</span>
      </footer>
    </main>
  );
}
