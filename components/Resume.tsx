import Image from "next/image";

const resumes = [
  {
    letter: "A",
    title: "Backend Engineering",
    description: "Java, AWS, APIs, and distributed systems",
    pdf: "/resumes/JulianaOBackend.pdf",
    rotation: "md:-rotate-2",
  },
  {
    letter: "B",
    title: "Product Engineering",
    description: "User-focused products and full-stack development",
    pdf: "/resumes/JulianaOProduct.pdf",
    rotation: "md:rotate-1",
  },
  {
    letter: "C",
    title: "Platform & Cloud",
    description: "Infrastructure, reliability, and observability",
    pdf: "/resumes/JulianaOPlatform.pdf",
    rotation: "md:-rotate-1",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#F7B8C8] px-6 py-24 lg:px-10"
    >
      <Image
        src="/illustrations/leaf.svg"
        alt=""
        width={180}
        height={240}
        className="float-slower absolute -left-10 bottom-0 hidden opacity-60 lg:block"
      />

      <Image
        src="/illustrations/orange-squiggle.svg"
        alt=""
        width={220}
        height={80}
        className="absolute -right-8 top-8 w-44 rotate-12 opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--terracotta)]">
            Resume
          </p>

          <h2 className="font-display mt-4 text-5xl text-[var(--forest)] sm:text-6xl">
            Choose the version that fits.
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {resumes.map((resume) => (
            <a
              key={resume.letter}
              href={resume.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`${resume.rotation} group relative min-h-[310px] rounded-[26px] bg-[var(--paper)] p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl`}
            >
              <div className="absolute right-5 top-5 h-4 w-14 rotate-6 bg-[var(--mustard)]/65" />

              <p className="font-display text-5xl font-bold text-[var(--terracotta)]">
                {resume.letter}
              </p>

              <h3 className="font-display mt-8 text-3xl leading-tight text-[var(--forest)]">
                {resume.title}
              </h3>

              <p className="mt-5 max-w-xs leading-7 text-[var(--muted)]">
                {resume.description}
              </p>

              <p className="absolute bottom-8 left-8 font-semibold text-[var(--forest)]">
                View PDF{" "}
                <span className="inline-block transition group-hover:translate-x-1">
                  ↗
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}