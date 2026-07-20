export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          About
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground-muted">
          <p>
            I&apos;m a developer working through a series of portfolio
            projects, each one shipped in short, resumable sessions and
            documented as I build — the wins, the roadmap, and the parts
            still marked &ldquo;not yet verified.&rdquo;
          </p>
          <p>
            Currently deep in{" "}
            <a
              href="#projects"
              className="font-medium text-foreground underline decoration-glass-amber decoration-2 underline-offset-4"
            >
              a stained-glass quoting tool
            </a>
            : a FastAPI backend that turns a photo and description into a
            structured, human-reviewed price estimate using Claude&apos;s
            vision API.
          </p>
        </div>
      </div>
    </section>
  );
}
