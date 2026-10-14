import Image from "next/image";
import HeroParallax from "@/components/motion/HeroParallax";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] items-center gap-4 px-4 pb-12 pt-24 sm:gap-8 sm:px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:pb-16 lg:pt-20">
        <div className="relative z-20 min-w-0 max-w-[600px]">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] sm:mb-5 sm:text-xs lg:text-sm lg:tracking-[0.28em] text-[var(--forest)]">
            Product thinking · Interaction design
          </p>

          <h1 className="font-display text-[1.625rem] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--forest)] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
            Designing thoughtful experiences
          </h1>

          <p className="mt-4 max-w-[520px] text-sm leading-6 sm:mt-7 sm:text-base lg:text-lg lg:leading-8 text-[var(--text)]">
            I’m a software engineer and emerging product designer combining
            computer science, psychology, and hands-on prototyping to make
            powerful tools easier to understand and use.
          </p>
          <p className="mt-4 text-xs font-semibold leading-5 sm:text-sm sm:leading-6 text-[var(--forest)]">
            Former Amazon Prime Video software engineer<br />
            BS in Computer Science · AA in Psychology
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--forest)] bg-[var(--mustard)] px-3 py-2 text-xs sm:px-5 sm:text-sm font-semibold text-[var(--text)] transition duration-200 hover:bg-[var(--forest)] hover:text-[var(--paper)]"
            >
              View my work
            </a>

            <a
              href="/resumes/JulianaOBackend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--forest)]/40 bg-white/80 px-3 py-2 text-xs font-semibold text-[var(--forest)] transition hover:bg-white sm:px-5 sm:text-sm"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <HeroParallax>
            <div className="relative mx-auto aspect-[0.84] w-full max-w-[390px] lg:ml-auto lg:mr-2">
              <div className="absolute -bottom-2 -left-2 right-3 top-2 sm:-bottom-5 sm:left-[-24px] sm:right-8 sm:top-5 rounded-[24px] bg-[var(--pink)]" />
              <div className="absolute -bottom-1 left-2 -right-2 top-5 sm:-bottom-2 sm:left-3 sm:right-[-18px] sm:top-10 rounded-[22px] bg-[var(--sky)]" />
              <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:right-[-24px] h-[42%] w-[58%] rounded-[20px] bg-[var(--mustard)]" />

              <div className="absolute inset-0 z-10 overflow-hidden rounded-[20px] border-[3px] border-[var(--forest)] sm:border-[6px] bg-[var(--sky)]">
                <Image
                  src="/images/heroImg.jpg"
                  alt="Portrait of Juliana Oyola-Pabon"
                  fill
                  priority
                  sizes="(max-width: 639px) 34vw, (max-width: 1023px) 38vw, 390px"
                  className="object-cover object-[50%_45%] saturate-[1.15] contrast-[1.03] transition duration-500 hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>

              <span className="absolute -right-2 top-1 z-20 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[var(--cream)] sm:-right-6 sm:top-3">
                <Image
                  src="/illustrations/star.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-5 w-5 sm:h-7 sm:w-7"
                  aria-hidden="true"
                />
              </span>
            </div>
          </HeroParallax>
        </div>
      </div>
    </section>
  );
}