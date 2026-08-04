export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[var(--mustard)] px-6 py-20 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="font-display text-5xl leading-tight text-[var(--forest)] sm:text-6xl">
          Let&apos;s build something meaningful.
        </h2>

        <div className="mx-auto mt-4 h-1.5 w-48 rounded-full bg-[var(--terracotta)]" />

        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text)]">
          I&apos;m always open to thoughtful projects and conversations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:julianaaoyola@gmail.com"
            className="rounded-full border border-[var(--forest)] px-6 py-3 font-semibold text-[var(--forest)] transition hover:-translate-y-1 hover:bg-[var(--paper)]"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/julianaoyola"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--forest)] px-6 py-3 font-semibold text-[var(--forest)] transition hover:-translate-y-1 hover:bg-[var(--paper)]"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/julsoyola"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--forest)] px-6 py-3 font-semibold text-[var(--forest)] transition hover:-translate-y-1 hover:bg-[var(--paper)]"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute -bottom-28 -left-24 h-44 w-64 rotate-[-8deg] rounded-[45%_55%_40%_60%] bg-[var(--forest)] sm:-bottom-16 sm:-left-10" />

      <div className="absolute -bottom-28 -right-24 h-52 w-52 rounded-[55%_45%_60%_40%] bg-[var(--sky)] sm:-bottom-20 sm:-right-8" />

      <div className="absolute -bottom-2 left-4 grid grid-cols-4 gap-1.5 sm:bottom-5 sm:left-8">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-5 w-5 bg-[var(--terracotta)]"
          />
        ))}
      </div>
    </footer>
  );
}