import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteHeader from "../../site-header";
import { CASES, type CaseSection } from "../../cases";
import { ZoomableHero, ZoomableGallery, ZoomableInline } from "../../zoomable";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return {};
  const description = c.tagline ?? `${c.title}, case study by Natalia L'Abbate.`;
  return {
    title: c.title,
    description,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: {
      title: `${c.title} · Natalia L'Abbate`,
      description,
      url: `/work/${c.slug}`,
      type: "article",
    },
  };
}

function Section({ section }: { section: CaseSection }) {
  return (
    <section className="case-section reveal">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((p, i) => (
        <p key={`p-${i}`}>{p}</p>
      ))}
      {section.bullets && (
        <ul className="case-list">
          {section.bullets.map((b, i) => (
            <li key={`b-${i}`}>{b}</li>
          ))}
        </ul>
      )}
      {section.images && section.images.length > 0 && (
        <ZoomableInline images={section.images} />
      )}
      {section.subsections?.map((sub, i) => (
        <div className="case-sub" key={`sub-${i}`}>
          {sub.heading && <h3>{sub.heading}</h3>}
          {sub.paragraphs?.map((p, pi) => (
            <p key={`sp-${pi}`}>{p}</p>
          ))}
          {sub.bullets && (
            <ul className="case-list">
              {sub.bullets.map((b, bi) => (
                <li key={`sb-${bi}`}>{b}</li>
              ))}
            </ul>
          )}
          {sub.images && sub.images.length > 0 && (
            <ZoomableInline images={sub.images} />
          )}
        </div>
      ))}
    </section>
  );
}

export default async function CasePage({ params }: Params) {
  const { slug } = await params;
  const idx = CASES.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const c = CASES[idx];
  const prev = CASES[(idx - 1 + CASES.length) % CASES.length];
  const next = CASES[(idx + 1) % CASES.length];

  return (
    <>
      <SiteHeader variant="case" />
      <main className="page">
        <article className="case container">
          <div className="case-hero">
            <h1 className="case-title">{c.title}</h1>
            {c.tagline && <p className="case-summary">{c.tagline}</p>}

            <dl className="case-metaline" aria-label="Project meta">
              <div className="case-metaline__item">
                <dt>Year</dt>
                <dd>{c.year}</dd>
              </div>
              <span className="case-metaline__sep" aria-hidden>◆</span>
              <div className="case-metaline__item">
                <dt>Timeline</dt>
                <dd>{c.timeline ?? c.duration}</dd>
              </div>
              <span className="case-metaline__sep" aria-hidden>◆</span>
              <div className="case-metaline__item">
                <dt>Tools</dt>
                <dd>{c.tools?.length ? c.tools.join(", ") : "None"}</dd>
              </div>
              <span className="case-metaline__sep" aria-hidden>◆</span>
              <div className="case-metaline__item">
                <dt>Category</dt>
                <dd>{c.industry}</dd>
              </div>
            </dl>
          </div>

          {c.heroImage ? (
            <ZoomableHero src={c.heroImage} alt={c.heroAlt ?? c.title} />
          ) : (
            <div className="case-hero-media case-hero-media--placeholder reveal" aria-hidden />
          )}

          {c.disclaimer && <p className="case-disclaimer">{c.disclaimer}</p>}

          {c.tags && c.tags.length > 0 && (
            <div className="case-tags" aria-label="Disciplines">
              {c.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          )}

          {c.goals && c.goals.length > 0 && (
            <section className="case-goals reveal" aria-labelledby="goals-title">
              <h2 id="goals-title">Product goals</h2>
              <ol className="case-goals-list">
                {c.goals.map((g, i) => (
                  <li key={i}>
                    <span className="case-goals-num mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {c.sections && c.sections.length > 0 && (
            <div className="case-body">
              {c.sections.map((s, i) => (
                <Section key={i} section={s} />
              ))}
            </div>
          )}

          {c.results && c.results.length > 0 && (
            <section className="case-results reveal" aria-labelledby="results-title">
              <h2 id="results-title">Results</h2>
              <ul className="case-results-list">
                {c.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {c.gallery && c.gallery.length > 0 && (
            <section className="case-gallery" aria-labelledby="gallery-title">
              <h2 id="gallery-title">App preview</h2>
              <ZoomableGallery images={c.gallery} layout={c.galleryLayout} />
            </section>
          )}

          {c.testimonials && c.testimonials.length > 0 && (
            <section className="case-quotes reveal" aria-labelledby="quotes-title">
              <h2 id="quotes-title">What the team said</h2>
              <div className="case-quote-grid">
                {c.testimonials.map((t, i) => (
                  <figure key={i} className="case-quote">
                    <blockquote>
                      <p>&ldquo;{t.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption>
                      <span className="case-quote__author">{t.author}</span>
                      {t.role && (
                        <span className="case-quote__role"> · {t.role}</span>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {(!c.sections || c.sections.length === 0) && (
            <div className="case-body">
              <p className="case-empty">
                Full case content coming soon. Reach out if you&apos;d like the
                deck in the meantime.
              </p>
            </div>
          )}

          <nav className="case-nav" aria-label="Case navigation">
            <Link href={`/work/${prev.slug}`}>← {prev.title}</Link>
            <Link href={`/work/${next.slug}`}>{next.title} →</Link>
          </nav>
        </article>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Natalia L&apos;Abbate</span>
        <Link href="/#contact">Get in touch</Link>
      </footer>
    </>
  );
}
