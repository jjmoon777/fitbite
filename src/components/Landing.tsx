import { Logo } from "@/components/Logo";
import { ButtonLink, Container, Section } from "@/components/ui";
import {
  faqs,
  features,
  hero,
  quotes,
  site,
  steps,
} from "@/content/site";

function BarStack() {
  return (
    <div className="relative mx-auto h-72 w-full max-w-sm" aria-hidden>
      <div className="absolute inset-x-8 top-8 rotate-[-8deg] rounded-2xl bg-cocoa p-4 shadow-lg">
        <div className="rounded-xl bg-honey/90 px-4 py-8 text-center">
          <p className="font-display text-2xl text-cocoa">FitBite</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cocoa/70">
            30g · organic
          </p>
        </div>
      </div>
      <div className="absolute inset-x-8 top-24 rotate-[6deg] rounded-2xl bg-leaf p-4 shadow-lg">
        <div className="rounded-xl bg-card px-4 py-8 text-center">
          <p className="font-display text-2xl text-leaf">Protein</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
            two a day
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <Section className="pb-10 pt-12 sm:pt-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">
            {hero.eyebrow}
          </p>
          <h1 className="font-display mt-4 max-w-xl text-4xl leading-tight text-cocoa sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            {hero.subhead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#pricing">{hero.primaryCta}</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-muted">
            {site.barsPerBox} bars · ${site.retailBox} at retail · you pay $
            {site.price} with delivery
          </p>
        </div>
        <BarStack />
      </Container>
    </Section>
  );
}

export function SocialProof() {
  return (
    <Section className="pt-4">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Built for people who skip meals, not protein
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {quotes.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <blockquote className="text-cocoa">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                {item.name} · {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-cocoa sm:text-4xl">
            Real food. Ridiculous price.
          </h2>
          <p className="mt-3 text-muted">
            FitBite is a monthly box of organic, protein-packed bars — a
            near-complete supplement you can eat anywhere.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="font-display text-xl text-cocoa">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-cocoa text-card">
      <Container>
        <h2 className="font-display text-3xl sm:text-4xl">What’s in the box</h2>
        <p className="mt-3 max-w-xl text-card/75">
          Two 30g bars daily for thirty days. Organic ingredients. Delivery
          already paid.
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n}>
              <p className="text-honey font-display text-sm">{step.n}</p>
              <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-card/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section id="pricing">
      <Container className="max-w-3xl text-center">
        <h2 className="font-display text-3xl text-cocoa sm:text-4xl">
          One plan. One price.
        </h2>
        <p className="mt-3 text-muted">
          No tiers. A month of FitBite is ${site.price}, delivery included.
        </p>
        <article className="mt-10 rounded-3xl border border-leaf/30 bg-card p-8 text-left shadow-[0_20px_60px_-30px_rgba(47,93,61,0.45)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Monthly subscription
          </p>
          <p className="font-display mt-3 text-5xl text-cocoa">
            ${site.price}
            <span className="text-lg text-muted"> / month</span>
          </p>
          <ul className="mt-6 space-y-3 text-sm text-cocoa">
            <li>{site.barsPerBox} × {site.barGrams}g organic FitBite bars</li>
            <li>
              {site.barsPerDay} bars a day for {site.days} days
            </li>
            <li>Near-complete protein-packed meal on the go</li>
            <li>Delivery included</li>
            <li>
              Avoid ${site.retailBox} if you paid ${site.retailEach} each at
              retail — save ${site.savings}
            </li>
          </ul>
          <div className="mt-8">
            <ButtonLink href="#subscribe">Start your monthly box</ButtonLink>
          </div>
        </article>
      </Container>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq">
      <Container className="max-w-3xl">
        <h2 className="font-display text-3xl text-cocoa sm:text-4xl">
          Questions
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-cocoa focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-muted group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="subscribe" className="pt-8">
      <Container>
        <div className="rounded-3xl bg-leaf px-6 py-12 text-center text-white sm:px-12">
          <h2 className="font-display text-3xl sm:text-4xl">
            Put 30 days of protein on the calendar.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Checkout and flavours come next. For now, this is the FitBite
            offer: ${site.price} a month, {site.barsPerBox} organic bars,
            delivery included.
          </p>
          <p className="mt-6 font-display text-2xl">${site.price} · {site.barsPerBox} bars · free delivery</p>
        </div>
      </Container>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-sm text-muted">
          © 2026 {site.domain} · Organic protein, by the month.
        </p>
      </Container>
    </footer>
  );
}
