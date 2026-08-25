/**
 * Flare-lit wedding invitation — a three-second blackout before the cinematic flare reveal, with an Excel-and-calculator headline and Arabic night rules.
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
    const revealTimer = window.setTimeout(() => setFlareVisible(true), 3000);
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
          <h1 id="invite-title" className="excel-headline">
            <span>The only relation</span>
            <span>in which all problems</span>
            <span>can be solved using</span>
            <span><i>Excel and a calculator.</i></span>
          </h1>
          <div className="hero-divider"><span /><b>✦</b><span /></div>
          <p className="statement statement-world">Helwan and Menofia are here to rule the world.</p>
          <button type="button" className="liquid-button hero-button" onClick={scrollToDetails}>
            <span>Save the night</span><ArrowDown size={17} strokeWidth={2.1} />
          </button>
        </div>

        <div className="flare-caption" aria-hidden="true"><span /> ONE RED FLARE. ALL NIGHT. <span /></div>
      </section>

      <section id="details" className="details night-rules" aria-labelledby="details-title">
        <div className="rules-head">
          <div className="arabic-copy">
            <p className="overline">أجندة الليلة المهمة جدًا</p>
            <p className="rules-whisper">اقرأ كأن طنط بتراقبك.</p>
          </div>
          <h2 id="details-title" className="arabic-copy arabic-title">3 حاجات.<br /><i>مفيش أعذار.</i></h2>
        </div>

        <div className="rule-list">
          <article className="rule-row rule-row-date">
            <span className="rule-number">01</span>
            <div className="rule-label arabic-copy"><CalendarPlus size={18} strokeWidth={2.1} /> الموعد</div>
            <div className="rule-main arabic-copy">
              <p>الجمعة، <strong>21 أغسطس.</strong></p>
              <small>الباب هيفتح 7. تعالى بدري قبل ما البلايليست تحكم عليك.</small>
            </div>
            <span className="rule-side-note arabic-copy">مفيش تأخير شيك<br />لو سمحت.</span>
          </article>

          <article className="rule-row rule-row-place">
            <span className="rule-number">02</span>
            <div className="rule-label arabic-copy"><MapPin size={18} strokeWidth={2.1} /> المكان</div>
            <div className="rule-main arabic-copy">
              <p>بيت <strong>العروسة.</strong></p>
              <small>امشي ورا جروب العيلة. جوجل مابس مش معزوم.</small>
            </div>
            <span className="rule-side-note arabic-copy">لو اتوهت، كلم<br />ابن خالتك المفضل.</span>
          </article>

          <article className="rule-row rule-row-vibe">
            <span className="rule-number">03</span>
            <div className="rule-label arabic-copy"><Music2 size={18} strokeWidth={2.1} /> المود</div>
            <div className="rule-main arabic-copy">
              <p>تعالى شيك.<br /><strong>وامشي صوتك رايح.</strong></p>
              <small>الغنا اختياري. التصفيق إجباري.</small>
            </div>
            <span className="rule-side-note arabic-copy">هات الطاقة.<br />والباقي علينا.</span>
          </article>
        </div>

        <div className="action-row rules-action">
          <button type="button" className="liquid-button" onClick={() => setDetailsOpen((open) => !open)} aria-expanded={detailsOpen}>
            {detailsOpen ? <Check size={17} strokeWidth={2.2} /> : <Sparkles size={17} strokeWidth={2.2} />}
            <span className="arabic-copy" dir="rtl">{detailsOpen ? "تمام، وصلت الفكرة." : "تمام، أنا جاهز نفسيًا"}</span>
          </button>
          <div className={detailsOpen ? "note is-open" : "note"} aria-hidden={!detailsOpen}>
            <Sparkles size={15} strokeWidth={1.9} /><p className="arabic-copy" dir="rtl">ممتاز. حضورك اتسجل عندنا روحيًا.</p>
          </div>
        </div>
      </section>

      <footer className="footer-line">
        <span>MADE FOR A VERY GOOD NIGHT</span><span className="footer-mark" aria-hidden="true"><i /><b>✦</b></span><i /><span>WITH LOVE</span>
      </footer>
    </main>
  );
}
