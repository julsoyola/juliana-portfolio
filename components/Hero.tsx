import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--paper)]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-16">
        {/* Text */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--sage)]">
            Software Engineer
          </p>

          <div className="relative">
            <h1 className="font-display text-[4.2rem] font-bold leading-[0.86] tracking-[-0.05em] text-[var(--forest)] sm:text-[6.5rem] lg:text-[7.8rem]">
              Building
              <br />
              <span className="text-[var(--terracotta)]">thoughtful</span>
              <br />
              software.
            </h1>

            <Image
              src="/illustrations/orange-squiggle.svg"
              alt=""
              width={230}
              height={70}
              className="absolute -bottom-12 left-6 w-40 sm:left-14 sm:w-56"
            />
          </div>

          <p className="mt-16 max-w-sm text-base leading-7 text-[var(--text)] sm:text-lg">
            Former Amazon Prime Video engineer designing dependable systems
            with care, curiosity, and intention.
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

          <div className="absolute right-[18px] top-[72px] flex h-[285px] w-[230px] items-center justify-center rounded-[32px] bg-[#F3EEE6] text-center shadow-lg sm:right-[52px] sm:top-[82px] sm:h-[360px] sm:w-[290px]">
            <span className="text-sm uppercase tracking-[0.15em] text-[var(--muted)]">
              Hero image
            </span>
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
            className="float-slow absolute left-2 top-[300px] w-20 sm:left-[10px] sm:top-[340px] sm:w-[110px]"
          />

          <Image
            src="/illustrations/blue-flower.svg"
            alt=""
            width={85}
            height={85}
            className="float-slower absolute bottom-4 right-5 w-16 sm:bottom-[35px] sm:right-[35px] sm:w-[85px]"
          />
        </div>
      </div>
    </section>
  );
}