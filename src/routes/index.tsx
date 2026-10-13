import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import cover from "@/assets/cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "No Escape Here — Aubrey Renee | The Varnash-Kalta Saga" },
      {
        name: "description",
        content:
          "A storm leads Ryla to a forgotten movie theater and a hidden world. No Escape Here by Aubrey Renee — coming soon.",
      },
      { property: "og:title", content: "No Escape Here — Aubrey Renee" },
      {
        property: "og:description",
        content: "Dark secrets. Forbidden love. Supernatural power. Revenge. Coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#home"],
  ["The Book", "#book"],
  ["About the Author", "#author"],
  ["Trailer", "#trailer"],
  ["News & Events", "#news"],
  ["Contact", "#contact"],
] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-4 font-display text-xs tracking-[0.4em] text-primary uppercase">{children}</p>
  );
}

function Divider() {
  return (
    <div className="my-8 flex items-center gap-4 text-primary" aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/60" />
      <span>☾</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}

const btn =
  "inline-flex items-center justify-center rounded-sm px-7 py-3 font-display text-xs tracking-[0.25em] uppercase transition-all focus-visible:outline-2 focus-visible:outline-ring";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:shadow-[0_0_30px_var(--amber)]`;
const btnGhost = `${btn} border border-silver/40 text-foreground hover:border-primary hover:text-primary`;

function Index() {
  const [open, setOpen] = useState(false);
  const [joined, setJoined] = useState(false);
  const onJoin = (e: FormEvent) => {
    e.preventDefault();
    setJoined(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg tracking-[0.3em] text-foreground">
            AUBREY <span className="text-primary">RENEE</span>
          </a>
          <nav className="hidden gap-8 lg:flex" aria-label="Main">
            {nav.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            className="text-xs tracking-[0.2em] uppercase lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border/40 px-6 py-6 lg:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-sm tracking-widest uppercase">
                {l}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={hero}
          alt="A rain-soaked highway leading to a glowing movie theater beneath a stormy sky"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-[45%_center]"
        />
        <div className="fog pointer-events-none absolute inset-0" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 md:pb-32">
          <Eyebrow>The Varnash-Kalta Saga</Eyebrow>
          <h1 className="font-display text-5xl leading-none font-bold md:text-8xl">
            No <span className="flicker text-blood glow-blood">Escape</span> Here
          </h1>
          <p className="mt-4 font-display text-lg tracking-[0.5em] text-silver md:text-2xl">
            AUBREY RENEE
          </p>
          <p className="mt-6 max-w-xl font-serif text-2xl text-foreground/90 italic">
            Her past found her. Now it is time for her to find herself.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#book" className={btnPrimary}>Discover the Book</a>
            <a href="#trailer" className={btnGhost}>Watch the Trailer</a>
          </div>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="bg-charcoal py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[2fr_3fr]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm shadow-[0_30px_80px_-20px_var(--blood)]">
            <div className="aspect-[2/3] w-full">
              <img
                src={cover.url}
                alt="No Escape Here book cover by Aubrey Renee"
                loading="lazy"
                className="h-full w-full object-cover object-right"
              />
            </div>
          </div>
          <div>
            <Eyebrow>The Book</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl">No Escape Here</h2>
            <p className="mt-2 text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Aubrey Renee · Book One
            </p>
            <p className="mt-8 font-serif text-2xl text-primary italic">
              A storm. A forgotten theater. A secret she was never meant to remember.
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-silver">
              <p>
                After years of abuse, manipulation, and control, Ryla flees with nothing but the
                clothes on her back and a desperate hope for freedom.
              </p>
              <p>
                A storm leads her to a forgotten movie theater, where she discovers the
                impossible—a hidden world of vampires, werewolves, witches, and a family willing to
                protect her. For the first time in her life, she feels safe, loved, and free.
              </p>
              <p>But her past is not finished with her.</p>
              <p>
                As her former captors come searching, strange memories begin to surface, revealing
                that Ryla's life is built on a secret far more powerful than she ever imagined.
              </p>
            </div>
            <p className="mt-8 font-display text-xl tracking-[0.35em] text-blood">SHE IS A QUEEN.</p>
            <p className="mt-2 font-serif text-xl text-primary italic">They are meant to reign.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <span className="border border-primary/40 px-4 py-2 font-display text-xs tracking-[0.3em] text-primary uppercase">
                Release: Coming Soon
              </span>
              <a href="#news" className={btnGhost}>Get Release Updates</a>
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section id="author" className="bg-card py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1fr_2fr]">
          <div className="mx-auto flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-sm border border-dashed border-silver/30 bg-muted text-center text-xs tracking-widest text-muted-foreground uppercase">
            Author photo
            <br />
            coming soon
          </div>
          <div>
            <Eyebrow>About the Author</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl">Aubrey Renee</h2>
            <Divider />
            <p className="leading-relaxed text-silver">
              [Placeholder] Aubrey's biography, writing background, and personal inspiration will
              appear here. Share the story behind the storm, the theater, and the Varnash-Kalta
              Saga.
            </p>
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section id="trailer" className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Eyebrow>Now Showing</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl">The Trailer</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Step inside the New Moon Escape Theatre. The show is about to begin.
          </p>
          <div className="group relative mt-12 aspect-video overflow-hidden rounded-sm border border-border shadow-[0_0_80px_-20px_var(--amber)]">
            <img src={hero} alt="" loading="lazy" className="h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary text-2xl text-primary transition-transform group-hover:scale-110">
                ▶
              </span>
              <span className="font-display text-xs tracking-[0.4em] text-foreground uppercase">
                Trailer Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-charcoal py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Eyebrow>News & Events</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl">Coming Soon</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Release Announcement", "Publication date and formats will be revealed here."],
              ["Exclusive Excerpt", "A first look inside the theater doors — coming soon."],
              ["Events & Giveaways", "Signings, bookmarks, merch and giveaways to be announced."],
            ].map(([t, d]) => (
              <article key={t} className="border border-border bg-card p-8 transition-colors hover:border-primary/60">
                <p className="font-display text-xs tracking-[0.3em] text-primary uppercase">Soon</p>
                <h3 className="mt-3 font-display text-xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
          <form onSubmit={onJoin} className="mx-auto mt-16 max-w-xl text-center">
            <p className="font-serif text-2xl italic">Be the first to know when the doors open.</p>
            {joined ? (
              <p className="mt-6 text-primary">Thank you — you're on the list.</p>
            ) : (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <button className={btnPrimary}>Join</button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Eyebrow>Contact</Eyebrow>
          <p className="font-display text-2xl tracking-[0.3em]">AUBREY RENEE</p>
          <p className="mt-4 text-sm text-muted-foreground">[Placeholder] contact@aubreyrenee.com</p>
          <div className="mt-6 flex justify-center gap-8 text-xs tracking-[0.25em] text-silver uppercase">
            {["Instagram", "TikTok", "Facebook", "Goodreads"].map((s) => (
              <a key={s} href="#contact" className="hover:text-primary">{s}</a>
            ))}
          </div>
          <p className="mt-12 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aubrey Renee. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
