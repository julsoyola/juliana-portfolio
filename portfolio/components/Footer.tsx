export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-6 py-16 lg:px-10"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 rounded-[24px] bg-[var(--forest)] px-6 py-9 text-[var(--paper)] sm:px-10 lg:grid-cols-[0.3fr_0.45fr_0.25fr] lg:items-center lg:gap-10 lg:py-10">
        <div>
          <h2 className="font-display text-5xl leading-tight text-[var(--paper)] sm:text-6xl">
            Let's Connect.
          </h2>

          <div className="mt-4 h-1 w-24 bg-[var(--terracotta)]" />
          <span aria-hidden="true" className="mt-4 inline-block font-display text-2xl text-[var(--terracotta)]">
            ✳
          </span>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-[var(--paper)]/85">
          I'm currently seeking software engineering opportunities where I can build
          reliable systems, grow alongside talented teams, and solve meaningful
          technical problems.
        </p>

        <div className="flex flex-col items-stretch gap-3 lg:ml-auto lg:w-36">
          <a
            href="mailto:julianaaoyola@gmail.com"
            className="flex min-h-11 items-center justify-center rounded-full border border-[var(--paper)]/60 px-3 py-2.5 text-center text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--paper)] hover:text-[var(--forest)]"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/julianaoyola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center rounded-full border border-[var(--paper)]/60 px-3 py-2.5 text-center text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--paper)] hover:text-[var(--forest)]"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/julsoyola"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center rounded-full border border-[var(--paper)]/60 px-3 py-2.5 text-center text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--paper)] hover:text-[var(--forest)]"
          >
            GitHub
          </a>
        </div>
      </div>

    </footer>
  );
}