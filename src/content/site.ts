export const site = {
  name: "FitBite",
  domain: "fitbite.com",
  tagline: "A month of protein. One incredible price.",
  price: 49,
  retailEach: 4,
  barsPerDay: 2,
  days: 30,
  barGrams: 30,
  get barsPerBox() {
    return this.barsPerDay * this.days;
  },
  get retailBox() {
    return this.barsPerBox * this.retailEach;
  },
  get savings() {
    return this.retailBox - this.price;
  },
  get pricePerBar() {
    return this.price / this.barsPerBox;
  },
};

export const nav = [
  { href: "#features", label: "Why FitBite" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const hero = {
  eyebrow: "Monthly subscription · Delivery included",
  headline: "Sixty organic protein bars. Thirty days. $49.",
  subhead:
    "FitBite is a near-complete food supplement built from organic ingredients. Two 30g bars a day — a protein-packed meal on the go for every age.",
  primaryCta: "Get a month of FitBite",
  secondaryCta: "See what’s in the box",
};

export const quotes = [
  {
    quote:
      "Two bars and I’m actually full. That’s lunch sorted on teaching days.",
    name: "Maya R.",
    role: "Primary teacher",
  },
  {
    quote: "I keep a box in the car for the kids and one at my desk. Same bars, no fuss.",
    name: "Daniel K.",
    role: "Parent of two",
  },
  {
    quote: "Organic, filling, and cheaper than grabbing a $4 bar twice a day.",
    name: "Priya S.",
    role: "Physio",
  },
];

export const features = [
  {
    title: "Near-complete food",
    body: "Each bar is built as a protein-packed meal supplement — not a candy bar with a gym label.",
  },
  {
    title: "Organic ingredients",
    body: "We start with organic whole-food ingredients so you can eat two a day without a second thought.",
  },
  {
    title: "Two bars, every day",
    body: "Your box holds 60 × 30g bars: two a day for thirty days. Breakfast, commute, training, or a late meeting.",
  },
  {
    title: "For every age",
    body: "Kids after school, students between lectures, parents on the school run, grandparents who skip meals — one box covers the household.",
  },
  {
    title: "Delivery included",
    body: "The $49 is the whole number. Shipping is already in. No surprise checkout line.",
  },
  {
    title: "Retail would be $240",
    body: "The same 60 bars at $4 each is $240. FitBite is $49 a month on subscription — about 82¢ a bar.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Subscribe once",
    body: "$49 a month. We lock in two bars a day for thirty days and include delivery.",
  },
  {
    n: "02",
    title: "Your box arrives",
    body: "Sixty 30g organic FitBite bars, packed for the month. Open it. That’s lunch, sorted.",
  },
  {
    n: "03",
    title: "Eat two a day",
    body: "A complete protein-packed meal on the go. Next month’s box ships before you run out.",
  },
];

export const faqs = [
  {
    q: "What exactly arrives each month?",
    a: "A 30-day supply: 60 organic 30g FitBite bars (two a day). Delivery is included in the $49 subscription.",
  },
  {
    q: "How is this $49 when bars are $4 each?",
    a: "Retail at $4 a bar, 60 bars would be $240. FitBite is a monthly subscription that sells a full month’s supply at one bundled price — about 82¢ per bar, shipping in.",
  },
  {
    q: "Is this a snack or a meal?",
    a: "FitBite is a near-complete food supplement. Two bars are meant to stand in for a protein-packed meal when you cannot sit down to cook.",
  },
  {
    q: "Who is it for?",
    a: "All ages who need real food on the go — school, work, training, travel, and anyone who otherwise skips a proper meal.",
  },
  {
    q: "Are the ingredients organic?",
    a: "Yes. FitBite is built from organic ingredients. We’ll publish the full recipe and macros as we add more content.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. It’s a monthly subscription. Pause or cancel before the next box ships — we’ll add the full account flow next.",
  },
];
