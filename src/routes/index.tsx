import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import cover from "@/assets/cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "No Escape Here — Isabella Renee McKean | The Varnash-Kalta Saga" },
      {
        name: "description",
        content:
          "A storm leads Ryla to a forgotten movie theater and a hidden world. No Escape Here by Isabella Renee McKean — coming soon.",
      },
      { property: "og:title", content: "No Escape Here — Isabella Renee McKean" },
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
  ["The Song", "#song"],
  ["Giveaways", "#premiere"],
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
            ISABELLA <span className="text-primary">RENEE MCKEAN</span>
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
            ISABELLA RENEE MCKEAN
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
                alt="No Escape Here book cover by Isabella Renee McKean"
                loading="lazy"
                className="h-full w-full object-cover object-right"
              />
            </div>
          </div>
          <div>
            <Eyebrow>The Book</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl">No Escape Here</h2>
            <p className="mt-2 text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Isabella Renee McKean · Book One
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
            <h2 className="font-display text-4xl md:text-5xl">Isabella Renee McKean</h2>
            <Divider />
            <div className="space-y-4 leading-relaxed text-silver">
              <p>53 year old Trans woman. I have 2 dear sons that are precious.</p>
              <p>
                I love to write, read, play video games, Dungeons & Dragons, Magic the Gathering
                trading card game, Final Fantasy, and Second Life.
              </p>
              <p>
                I was inspired by Stephen King, Willow Winters, PC Cast and Kristen Cast, and
                decided it is my turn.
              </p>
            </div>
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

      {/* Soundtrack */}
      <section id="song" className="relative overflow-hidden bg-charcoal py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-[repeating-linear-gradient(90deg,var(--border)_0_18px,transparent_18px_34px)] opacity-60" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-[repeating-linear-gradient(90deg,var(--border)_0_18px,transparent_18px_34px)] opacity-60" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(circle,var(--background)_0_2px,var(--card)_2px_4px)] shadow-[0_0_90px_-10px_var(--amber)] animate-[spin_9s_linear_infinite]">
              <img src={cover.url} alt="" className="absolute inset-[32%] h-[36%] w-[36%] rounded-full object-cover" />
              <span className="absolute inset-[48%] rounded-full bg-background" />
            </div>
          </div>
          <div>
            <Eyebrow>Original Soundtrack</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl">The Song of No Escape Here</h2>
            <p className="mt-6 text-muted-foreground">
              Every story has a score. Isabella wrote an original song inspired by Ryla's journey —
              the storm, the theatre, and the world that won't let her go. Press play and let the
              credits roll.
            </p>
            <div className="mt-8 rounded-sm border border-border bg-card p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">▶</span>
                <div className="flex-1">
                  <p className="font-display text-sm tracking-[0.2em] uppercase">Song Title Coming Soon</p>
                  <p className="text-xs text-muted-foreground">Isabella Renee McKean</p>
                  <div className="mt-3 flex h-6 items-end gap-[3px]" aria-hidden>
                    {Array.from({ length: 40 }).map((_, i) => (
                      <span key={i} className="flex-1 rounded-sm bg-primary/60" style={{ height: `${25 + ((i * 37) % 75)}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section id="premiere" className="relative overflow-hidden py-28">
        <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="mx-auto inline-block border-2 border-primary px-8 py-4 shadow-[0_0_40px_-10px_var(--amber)]">
              <p className="font-display text-xs tracking-[0.5em] text-primary uppercase">Tonight · Premiere Night</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Swag & Giveaways</h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Catch Isabella at Twilight saga fan events, where she'll be previewing No Escape Here
              before release. Grab a ticket stub, claim your keepsake, and enter to win.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Admit One", "Bookmarks", "Collectible bookmarks with art from the New Moon Escape Theatre — free at every event."],
              ["Admit One", "Signed Certificates", "Limited, numbered certificates signed by Isabella for early readers and fans."],
              ["Grand Prize", "Gift Basket", "A themed gift basket full of book goodies — enter at the event table to win."],
            ].map(([tag, t, d]) => (
              <div key={t} className="relative flex rounded-sm border border-dashed border-primary/50 bg-card transition-transform hover:-translate-y-1">
                <div className="flex w-12 shrink-0 items-center justify-center border-r border-dashed border-primary/50">
                  <span className="rotate-[-90deg] whitespace-nowrap font-display text-[10px] tracking-[0.3em] text-primary uppercase">{tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl tracking-wide">{t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-display text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Event dates announced soon — see News & Events below
          </p>
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
          <p className="font-display text-2xl tracking-[0.3em]">ISABELLA RENEE MCKEAN</p>
          <p className="mt-4 text-sm text-muted-foreground">[Placeholder] contact@isabellarenemckean.com</p>
          <div className="mt-6 flex justify-center gap-8 text-xs tracking-[0.25em] text-silver uppercase">
            {["Instagram", "TikTok", "Facebook", "Goodreads"].map((s) => (
              <a key={s} href="#contact" className="hover:text-primary">{s}</a>
            ))}
          </div>
          <p className="mt-12 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Isabella Renee McKean. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
