import Image from "next/image";
import HeroParallax from "@/components/HeroParallax";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-4 lg:px-10 lg:pb-20 lg:pt-28">
        {/* Text */}
        <div className="relative z-20 max-w-[620px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--sage)]">
            Backend · Platform · Cloud
          </p>

          <div className="relative">
            <h1 className="font-display text-[3.8rem] font-bold leading-[0.9] tracking-[-0.05em] text-[var(--forest)] sm:text-[5.2rem] lg:text-[5.9rem]">
              Building reliable
              <br />
              <span className="text-[var(--terracotta)]">software</span>
              <br />
              at scale.
            </h1>

            <Image
              src="/illustrations/orange-squiggle.svg"
              alt=""
              width={220}
              height={70}
              className="wiggle-line absolute -bottom-14 left-12 w-[150px] sm:left-28 sm:w-[220px]"
            />
          </div>

          <p className="mt-16 max-w-md text-base leading-7 text-[var(--text)] sm:text-lg">
            Former Amazon Prime Video software engineer specializing in backend
            systems, cloud infrastructure, and production-ready services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="rounded-full bg-[var(--mustard)] px-7 py-4 text-sm font-semibold text-[var(--text)] transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              View my work ↗
            </a>

            <a
              href="/resumes/JulianaOBackend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--forest)] underline decoration-1 underline-offset-4"
            >
              View resume ↗
            </a>
          </div>
        </div>

        {/* Collage */}
        <HeroParallax>
          <div className="relative mx-auto h-[420px] w-full max-w-[560px] -translate-x-4 sm:h-[470px] lg:h-[500px] lg:-translate-x-10">
            {/* Yellow shape */}
            <Image
              src="/illustrations/yellow-blob.svg"
              alt=""
              width={340}
              height={340}
              className="float-slower absolute left-4 top-4 z-0 w-[240px] sm:left-2 sm:w-[300px]"
            />

            {/* Paper shape */}
            <Image
              src="/illustrations/paper-blob.svg"
              alt=""
              width={460}
              height={460}
              className="absolute right-0 top-14 z-[1] w-[350px] sm:w-[410px]"
            />

            {/* Grid */}
            <Image
              src="/illustrations/grid.svg"
              alt=""
              width={120}
              height={120}
              className="absolute right-0 top-8 z-[2] w-[90px] sm:-right-1 sm:w-[110px]"
            />

            {/* Portrait */}
            <div className="absolute right-5 top-[105px] z-10 h-[275px] w-[300px] rotate-[1deg] overflow-hidden rounded-[30px] border-[5px] border-[var(--paper)] shadow-[0_12px_28px_rgba(0,0,0,0.10)] sm:right-8 sm:top-[100px] sm:h-[330px] sm:w-[370px]">
              <Image
                src="/images/heroImg.jpg"
                alt="Portrait of Juliana Oyola-Pabon"
                fill
                priority
                sizes="(max-width: 640px) 300px, 370px"
                className="object-cover object-[50%_45%] saturate-[1.15] contrast-[1.03] transition duration-500 hover:scale-[1.025]"
              />
            </div>

            {/* Pink flower */}
            <Image
              src="/illustrations/flower.svg"
              alt=""
              width={110}
              height={110}
              className="float-slow absolute bottom-[82px] left-[58px] z-20 w-[82px] sm:bottom-[78px] sm:left-[72px] sm:w-[100px]"
            />

            {/* Blue flower */}
            <Image
              src="/illustrations/blue-flower.svg"
              alt=""
              width={85}
              height={85}
              className="float-fast absolute bottom-[34px] right-[28px] z-20 w-[58px] sm:bottom-[28px] sm:right-[34px] sm:w-[68px]"
            />
          </div>
        </HeroParallax>
      </div>
    </section>
  );
}