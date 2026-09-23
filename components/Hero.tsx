import Image from "next/image";
import HeroParallax from "@/components/HeroParallax";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 pt-24 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-16 lg:pt-20">
        <div className="relative z-20 max-w-[600px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--terracotta)]">
            Backend · Platform · Cloud
          </p>

          <h1 className="font-display text-[3.75rem] font-bold leading-[0.94] tracking-[-0.04em] text-[var(--forest)] sm:text-[4.5rem] lg:text-[clamp(4rem,6vw,5rem)]">
            Building reliable
            <br />
            <span className="text-[var(--terracotta)]">software</span>
            <br />
            at scale.
          </h1>

          <p className="mt-9 max-w-[520px] text-lg leading-8 text-[var(--text)]">
            Former Amazon Prime Video software engineer specializing in backend
            systems, cloud infrastructure, and production-ready services.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="rounded-[12px] border border-[var(--forest)] bg-[var(--mustard)] px-7 py-4 text-sm font-semibold text-[var(--text)] transition duration-200 hover:bg-[var(--terracotta)] hover:text-[var(--paper)]"
            >
              View my work
            </a>

            <a
              href="/resumes/JulianaOBackend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[12px] border border-[var(--forest)] px-6 py-3.5 text-sm font-semibold text-[var(--forest)] transition hover:bg-[var(--cream)]"
            >
              View resume
            </a>
          </div>
        </div>

        <div className="lg:self-center">
          <HeroParallax>
            <div className="relative mx-auto mt-2 aspect-[0.84] w-[72%] max-w-[250px] sm:mt-3 sm:w-full sm:max-w-[280px] lg:mx-0 lg:ml-auto lg:mt-0 lg:mr-2 lg:max-w-[390px]">
              <div className="absolute -bottom-5 left-[-24px] right-8 top-5 rounded-[24px] bg-[var(--pink)]" />
              <div className="absolute -bottom-2 left-3 right-[-18px] top-10 rounded-[22px] bg-[var(--sky)]" />
              <div className="absolute -bottom-8 right-[-24px] h-[42%] w-[58%] rounded-[20px] bg-[var(--mustard)]" />

              <div className="absolute inset-0 z-10 overflow-hidden rounded-[20px] border-[6px] border-[var(--forest)] bg-[var(--sky)]">
                <Image
                  src="/images/heroImg.jpg"
                  alt="Portrait of Juliana Oyola-Pabon"
                  fill
                  priority
                  sizes="(max-width: 1023px) 80vw, 390px"
                  className="object-cover object-[50%_45%] saturate-[1.15] contrast-[1.03] transition duration-500 hover:scale-[1.025]"
                />
              </div>

              <span className="absolute -right-5 top-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cream)] sm:-right-6 sm:top-3">
                <Image
                  src="/illustrations/star.svg"
                  alt=""
                  width={28}
                  height={28}
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