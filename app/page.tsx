import Link from "next/link";
import SiteHeader from "./site-header";
import { CASES } from "./cases";
import { asset } from "./assets";

const PROCESS = [
  {
    icon: "📍",
    title: "Discovery & Strategy",
    sub: "Business focused",
    body:
      "First things first. Understanding and strategy means getting to know where your business and product stand today, and where we should be heading next to achieve your goals and drive growth. I focus on business goals, align expectations with stakeholders, and look at the market for a competitive analysis. This phase also defines success metrics and KPIs upfront, so we have clear criteria to evaluate decisions throughout the process.",
  },
  {
    icon: "🔍",
    title: "Discovery & Research",
    sub: "User experience focused",
    body:
      "I get to know your clients and users — their needs, goals, and mental models — so we can match those to your business goals. I may also analyse current content and product through the lens of best practices, so we can build hypotheses, validate them, and gain enough certainty to define what to do next. Methods: interviews, surveys, contextual observation, usability testing, and analytics review — chosen based on time and resources.",
  },
  {
    icon: "🎨",
    title: "Define, Wireframe & Prototype",
    sub: "Structure and interaction",
    body:
      "Now that we know where your business is heading and what your users need, I create information architecture, user flows, and wireframes to validate that the idea makes sense for the target audience. I think several steps ahead to avoid rework. Depending on time and level of certainty, I work across fidelity levels, from sketches to detailed mockups, and prepare a prototype ready for testing. This phase includes a design system check or creation.",
  },
  {
    icon: "📝",
    title: "User Testing",
    sub: "Validate with real people",
    body:
      "As soon as the prototype is ready, we test with real users to check if we're actually solving their problems, moderated or unmoderated, whichever fits best. Depending on results we either move to final adjustments and handoff, or step back, redesign what wasn't clear, and test again until we're confident. I document all findings and share them with the broader team so everyone is aligned before handoff.",
  },
  {
    icon: "📊",
    title: "Handoff, Follow-up & Iterate",
    sub: "Ship and improve",
    body:
      "My main goal here is to make sure PMs, BAs, Devs, and QAs have everything they need, well documented, to move forward. I stay in close communication so everything runs smoothly, and when it doesn't, we get back on track together. Where it makes sense, I create a metric follow-up strategy (or propose A/B tests, feature flags, or phased rollouts if uncertainty is still high) and use analytics to iterate and keep improving the product.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="page">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-headline">
              Natalia L&apos;Abbate
            </h1>
            <div className="hero-foot">
              <p className="hero-sub">
                Senior Product Designer based in São Paulo, working with teams
                worldwide. I combine research, strategy, and craft to build
                products that fit the people who use them.
              </p>
              <a href="#work" className="hero-scroll" aria-label="Scroll to work">
                <span>Scroll to explore</span>
                <span className="hero-scroll__dot" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div id="work" className="projects" aria-label="Selected work">
            {CASES.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="project"
                aria-label={`${c.title} — ${c.tag}`}
              >
                <span
                  className="project__media"
                  aria-hidden
                  style={
                    c.heroImage
                      ? {
                          backgroundImage: `url(${asset(c.heroImage)})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                />
                <span className="project__num mono">{c.number}</span>
                <span className="project__year mono">{c.year}</span>
                <span className="project__caption">
                  <span className="project__title">{c.title}</span>
                  <span className="project__tag mono">{c.tag}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="section container" aria-labelledby="about-title">
          <header className="section-head">
            <h2 id="about-title" className="section-title">
              About
            </h2>
            <p className="section-lede">
              Former photographer and fashion designer turned Product Designer.
              Same eye for detail, now applied to products.
            </p>
          </header>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                As a former photographer and fashion designer, I&apos;ve always
                been passionate about framing things correctly and understanding
                people. As a Product Designer, I bring that same eye to solving
                business problems through human-centred design, focusing not just
                on the final deliverable, but on delivering value throughout the
                entire process: from framing the right problem and aligning user
                needs with business goals, to prototyping, testing, and iterating
                to improve outcomes.
              </p>
              <p>
                With 6 years delivering high-impact products across Healthcare,
                AI, Real Estate, Financial Services, Retail, and Transportation,
                I combine user research, competitive analysis, and strategic
                thinking to build solutions that scale as businesses grow. Working
                in dual-track discovery, I lead cross-functional collaboration
                across design, product, and engineering, shipping on time and
                within budget while anticipating future needs, reducing technical
                debt, and maximizing ROI for startups and enterprises.
              </p>
              <p>
                My work spans the full product design cycle: design strategy,
                problem framing, design systems, interaction design,
                accessibility, and developer handoff, always with a focus on
                measurable impact and long-term product thinking.
              </p>
            </div>

            <aside className="about-facts" aria-label="Quick facts">
              <span className="about-fact">
                <span className="about-fact__dot" /> 6+ years shipping product
              </span>
              <span className="about-fact">
                <span className="about-fact__dot" /> Based in São Paulo, BR
              </span>
              <span className="about-fact">
                <span className="about-fact__dot" /> Works with teams worldwide
              </span>
              <span className="about-fact">
                <span className="about-fact__dot" /> Healthcare · AI · FinTech ·
                Real Estate
              </span>
              <span className="about-fact">
                <span className="about-fact__dot" /> Dual-track discovery &
                delivery
              </span>
            </aside>
          </div>
        </section>

        <section id="process" className="section container" aria-labelledby="process-title">
          <header className="section-head">
            <h2 id="process-title" className="section-title">
              Process
            </h2>
            <p className="section-lede">
              An iterative process that can start from any step. Add, remove,
              and explore other methodologies as the problem demands.
            </p>
          </header>

          <div className="process" role="list">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="process-row reveal" role="listitem">
                <div className="process-row__num mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="process-row__title">{step.title}</h3>
                  <span className="process-row__sub">{step.sub}</span>
                </div>
                <p className="process-row__body">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact container" aria-labelledby="contact-title">
          <div className="contact-card reveal">
            <h2 id="contact-title" className="contact-headline">
              Let&apos;s work together.
            </h2>
            <p className="contact-body">
              Available for new product design work. Reach out and let&apos;s
              talk.
            </p>
            <div className="contact-links">
              <a
                className="contact-link contact-link--primary"
                href="mailto:natalia.chiota@gmail.com"
              >
                natalia.chiota@gmail.com
              </a>
              <a
                className="contact-link"
                href="https://wa.me/5511981934182"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4c0 1.4 1 2.8 1.2 3 .2.2 2.1 3.2 5.1 4.5 1.9.8 2.7.9 3.7.7.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.4C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                +55 11 98193-4182
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/natalialabbate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Natalia L&apos;Abbate</span>
        <span>Senior Product Designer · São Paulo, BR</span>
      </footer>
    </>
  );
}
