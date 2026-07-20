const stack = [
  "FastAPI",
  "SQLAlchemy 2.0",
  "PostgreSQL",
  "Anthropic Claude API",
  "HTML / Tailwind",
];

const timeline = [
  {
    week: "Week 1",
    title: "CRUD skeleton",
    detail: "Schema and endpoints for customers, quotes, and line items.",
    accent: "var(--color-glass-blue)",
  },
  {
    week: "Week 2",
    title: "AI estimate",
    detail:
      "A vision call turns a photo + description into structured, defensively-parsed JSON — verbatim raw response stored alongside for auditability.",
    accent: "var(--color-glass-violet)",
  },
  {
    week: "Week 3",
    title: "Frontend scaffolding",
    detail:
      "Static HTML/Tailwind UI for quotes, customers, and estimate review — no build step.",
    accent: "var(--color-glass-amber)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          Now building
        </h2>

        <div className="mt-8 rounded-2xl border border-border p-8 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                Portfolio project 2 of 4 — backend/API focus
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                Stained Glass Quote Tool
              </h3>
            </div>
          </div>

          <p className="mt-4 max-w-2xl leading-relaxed text-foreground-muted">
            Backend that turns a customer&apos;s photo and project
            description into a structured, editable price quote. An LLM
            vision call produces the first-pass estimate —{" "}
            <span className="font-medium text-foreground">
              a human always reviews before it&apos;s sent
            </span>
            . Built for a real small stained-glass business.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {timeline.map((entry) => (
              <li key={entry.week} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full"
                  style={{ background: entry.accent }}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                  {entry.week}
                </p>
                <p className="mt-1 font-medium">{entry.title}</p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground-muted">
                  {entry.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="https://github.com/elsjeslothower/stained-glass-api"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-glass-blue px-5 py-2.5 text-white transition-colors hover:bg-glass-violet"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
