import Image from "next/image";
export default function StatementBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--forest)] px-6 py-12 text-center text-[var(--paper)] lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          I turn complex systems into reliable, scalable software.
        </p>

        <p className="mt-4 text-base text-[var(--paper)]/85 sm:text-lg">
          My focus is clear architecture, dependable execution, and measurable impact.
        </p>
      </div>

     <Image
        src="/illustrations/star.svg"
        alt=""
        width={64}
        height={64}
        className="float-slow absolute right-8 top-6 opacity-90 sm:right-14"
        />
    </section>
  );
}