import Image from "next/image";
import HeroParallax from "@/components/HeroParallax";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-16">
        {/* Text */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--sage)]">
            Backend · Platform · Cloud
          </p>

          <div className="relative">
            <h1 className="font-display text-[4.2rem] font-bold leading-[0.86] tracking-[-0.05em] text-[var(--forest)] sm:text-[6.5rem] lg:text-[7.8rem]">
            Building reliable
            <br />
            <span className="text-[var(--terracotta)]">software</span>
            <br />
            at scale.
          </h1>

            <Image
              src="/illustrations/orange-squiggle.svg"
              alt=""
              width={200}
              height={70}
              className="wiggle-line absolute -bottom-18 left-10 w-35 sm:left-35 sm:w-70"
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
          <div className="relative flex min-h-[460px] items-center justify-center sm:min-h-[540px] lg:min-h-[620px]">
          <Image
            src="/illustrations/yellow-blob.svg"
            alt=""
            width={340}
            height={340}
            className="float-slower absolute -left-10 top-0 w-[270px] sm:-left-6 sm:w-[340px]"
          />

          <Image
            src="/illustrations/paper-blob.svg"
            alt=""
            width={460}
            height={460}
            className="absolute right-[-40px] top-8 w-[360px] sm:right-0 sm:w-[460px]"
          />

          <div className="absolute right-[18px] top-[72px] z-10 h-[285px] w-[230px] rotate-[1deg] overflow-hidden rounded-[36px] border-[6px] border-[var(--paper)] shadow-xl sm:right-[52px] sm:top-[82px] sm:h-[360px] sm:w-[290px]">
            <Image
              src="/images/heroImg.jpg"
              alt="Portrait of Juliana Oyola-Pabon"
              fill
              priority
              sizes="(max-width: 640px) 230px, 290px"
              className="object-cover object-[58%_40%] transition duration-500 hover:scale-[1.04] hover:-rotate-1"
            />
          </div>

          <Image
            src="/illustrations/grid.svg"
            alt=""
            width={120}
            height={120}
            className="absolute right-[-34px] top-[20px] w-24 sm:right-[-10px] sm:top-[30px] sm:w-[120px]"
          />

          <Image
            src="/illustrations/flower.svg"
            alt=""
            width={110}
            height={110}
            className="float-slow absolute left-4 top-[290px] z-20 w-20 sm:left-[22px] sm:top-[330px] sm:w-[110px]"
          />

          <Image
            src="/illustrations/blue-flower.svg"
            alt=""
            width={85}
            height={85}
            className="float-fast absolute bottom-4 right-5 w-16 sm:bottom-[35px] sm:right-[35px] sm:w-[85px]"
          />
         </div>
      </HeroParallax>
      </div>
    </section>
  );
}