const links = [
  {
    label: "Email",
    href: "mailto:slothowerelsje@gmail.com",
    value: "slothowerelsje@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/elsjeslothower",
    value: "github.com/elsjeslothower",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          Contact
        </h2>
        <p className="mt-6 max-w-xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
          Building something interesting? I&apos;d like to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                {link.label}
              </span>
              <span className="mt-1 font-medium underline decoration-glass-amber decoration-2 underline-offset-4 transition-colors group-hover:text-glass-blue dark:group-hover:text-glass-amber">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
