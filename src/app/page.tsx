import {
  Faq,
  Features,
  FinalCta,
  Footer,
  Hero,
  HowItWorks,
  Pricing,
  SocialProof,
} from "@/components/Landing";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
