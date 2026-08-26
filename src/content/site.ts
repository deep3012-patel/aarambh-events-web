export type IconName =
  | "Sparkles"
  | "HeartHandshake"
  | "PartyPopper"
  | "BriefcaseBusiness"
  | "AudioLines"
  | "Flower2"
  | "Music2"
  | "Armchair"
  | "Palette"
  | "UsersRound"
  | "Network"
  | "SlidersHorizontal"
  | "ScanEye";

export type PortfolioCategory =
  | "Weddings"
  | "Decoration"
  | "Stage & Production"
  | "Corporate"
  | "Celebrations"
  | "Rentals";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

const image = (id: string, width = 1600) => {
  const photoId = id.startsWith("photo-") ? id : `photo-${id}`;
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=88`;
};

export const site = {
  name: "Aarambh Events & Production",
  shortName: "Aarambh",
  tagline: "We Create | You Celebrate",
  owners: "Deep & Jay ",
  description:
    "Aarambh Events & Production provides professional event planning, decoration, production and execution services for weddings, celebrations, corporate events and special occasions.",
  contact: {
    phoneDisplay: "+91 7285883168",
    phoneHref: "tel:+917285883168",
    whatsapp: "https://wa.me/917285883168",
    email: "deeppatel30122003@gmail.com",
    instagram: "https://instagram.com/aarambh_events_and_production",
    instagramHandle: "@aarambh_events_and_production",
    location: "Serving celebrations across India",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Why Aarambh", href: "/why-aarambh" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: "Sparkles" as IconName,
    title: "Event Planning",
    summary: "Complete event planning, coordination and execution with every moving part considered.",
    items: ["Concept planning", "Vendor coordination", "Timeline management"],
  },
  {
    icon: "HeartHandshake" as IconName,
    title: "Wedding Events",
    summary: "Warm, personal celebrations designed with a distinct sense of occasion.",
    items: ["Wedding", "Engagement", "Reception", "Haldi", "Mehndi", "Sangeet"],
  },
  {
    icon: "PartyPopper" as IconName,
    title: "Social Events",
    summary: "Thoughtfully produced gatherings for every milestone worth remembering.",
    items: ["Birthday", "Anniversary", "Baby shower", "Private celebrations"],
  },
  {
    icon: "BriefcaseBusiness" as IconName,
    title: "Corporate Events",
    summary: "Polished brand and business experiences that keep logistics invisible.",
    items: ["Conferences", "Exhibitions", "Product launches", "Brand activations"],
  },
  {
    icon: "AudioLines" as IconName,
    title: "Event Production",
    summary: "Production that frames the moment beautifully and performs reliably.",
    items: ["Stage", "LED", "Sound", "Lighting", "Truss", "Production setup"],
  },
  {
    icon: "Flower2" as IconName,
    title: "Decoration",
    summary: "Layered floral and theme-led design with an eye for atmosphere.",
    items: ["Floral décor", "Mandap", "Stage décor", "Entrance décor", "Tablescapes"],
  },
  {
    icon: "Music2" as IconName,
    title: "Entertainment",
    summary: "The right energy, talent and moments to keep guests connected.",
    items: ["DJ", "Live music", "Anchor", "Performers", "Special attractions"],
  },
  {
    icon: "Armchair" as IconName,
    title: "Event Rentals",
    summary: "Event furniture, props, décor and production equipment available on enquiry.",
    items: ["Chairs & tables", "Sofas", "Props", "Lighting", "Décor items", "Production equipment"],
  },
];

export const eventCategories = [
  { title: "Wedding", description: "A complete celebration, from the first welcome to the final farewell.", image: image("photo-1606800052052-a08af7148866") },
  { title: "Engagement", description: "An elegant start, made distinctly personal.", image: image("photo-1591604466107-ec97de577aff") },
  { title: "Reception", description: "A composed evening of warmth, music and celebration.", image: image("photo-1583939003579-730e3918a45a") },
  { title: "Haldi", description: "Bright, joyful colour and a sunlit celebratory mood.", image: image("photo-1519741497674-611481863552") },
  { title: "Mehndi", description: "Intimate artistry, fresh florals and festive detail.", image: image("photo-1511285560929-80b456fea0bc") },
  { title: "Sangeet", description: "High-energy moments brought together with production flair.", image: image("photo-1544078751-58fee2d8a03b") },
  { title: "Birthday", description: "Milestones made imaginative, effortless and memorable.", image: image("photo-1532712938310-34d8b3f6c5f2") },
  { title: "Baby Shower", description: "Soft, thoughtful settings for a very special welcome.", image: image("photo-1513159446162-54eb8bdaa79b") },
  { title: "Anniversary", description: "A considered toast to the journey so far.", image: image("photo-1519225421980-715cb0215aed") },
  { title: "Corporate Events", description: "A brand-first setting with Indian hospitality and a polished guest experience.", image: image("photo-1507504031003-b417219a0fde") },
  { title: "Exhibitions", description: "Spaces that guide attention and start conversations.", image: image("photo-1519167758481-83f550bb49b3") },
  { title: "Product Launches", description: "A reveal designed for impact, clarity and attention.", image: image("photo-1492684223066-81342ee5ff30") },
  { title: "Concerts", description: "Sound, stage and crowd energy in one seamless production.", image: image("photo-1501386761578-eac5c94b800a") },
  { title: "Festivals", description: "Large-scale experiences rooted in atmosphere and flow.", image: image("photo-1527529482837-4698179dc6ce") },
  { title: "College Events", description: "Youthful, ambitious concepts delivered with discipline.", image: image("photo-1511578314322-379afb476865") },
  { title: "Private Events", description: "Private gatherings designed around your people and place.", image: image("photo-1464699908537-0954e50791ee") },
  { title: "Customized Events", description: "A blank canvas shaped around your exact occasion.", image: image("photo-1507504031003-b417219a0fde") },
];

export const portfolioItems: PortfolioItem[] = [
  { id: "royal-ceremony", category: "Weddings", title: "The Royal Ceremony", description: "A gold-lit mandap layered with fresh floral detail.", image: image("photo-1606800052052-a08af7148866"), alt: "Indian wedding ceremony with warm floral decoration", featured: true },
  { id: "garden-vows", category: "Weddings", title: "Garden Vows", description: "A soft outdoor setting shaped around the couple’s story.", image: image("photo-1591604466107-ec97de577aff"), alt: "Indian bride and groom celebrating outdoors" },
  { id: "floral-hall", category: "Decoration", title: "Floral Hall", description: "Fresh florals, warm light and an inviting guest journey.", image: image("photo-1583939003579-730e3918a45a"), alt: "Indian wedding venue with floral decoration" },
  { id: "saffron-celebration", category: "Decoration", title: "Saffron Celebration", description: "A vibrant palette with refined textural layers.", image: image("photo-1519741497674-611481863552"), alt: "Bright Indian wedding celebration decor" },
  { id: "after-dark", category: "Stage & Production", title: "After Dark", description: "An atmospheric stage designed for sound, scale and energy.", image: image("photo-1544078751-58fee2d8a03b"), alt: "Indian wedding sangeet stage with lighting", featured: true },
  { id: "immersive-stage", category: "Stage & Production", title: "Immersive Stage", description: "A crisp production environment built for the moment.", image: image("photo-1511285560929-80b456fea0bc"), alt: "Decorated Indian wedding stage" },
  { id: "brand-gathering", category: "Corporate", title: "Brand Gathering", description: "A clean corporate environment with a considered guest flow.", image: image("photo-1519167758481-83f550bb49b3"), alt: "Indian celebration guests in a decorated venue", featured: true },
  { id: "conference-frame", category: "Corporate", title: "Conference Frame", description: "Professional production for ideas that need the right stage.", image: image("photo-1492684223066-81342ee5ff30"), alt: "Indian event stage and audience" },
  { id: "milestone-night", category: "Celebrations", title: "Milestone Night", description: "A private celebration with mood, music and detail.", image: image("photo-1532712938310-34d8b3f6c5f2"), alt: "Colourful Indian wedding celebration" },
  { id: "private-toast", category: "Celebrations", title: "Private Toast", description: "An evening designed to feel both effortless and personal.", image: image("photo-1527529482837-4698179dc6ce"), alt: "Indian wedding guests celebrating" },
  { id: "lounge-collection", category: "Rentals", title: "Lounge Collection", description: "Comfortable event furniture that completes the visual story.", image: image("photo-1507504031003-b417219a0fde"), alt: "Elegant Indian wedding seating and decor" },
  { id: "signature-seating", category: "Rentals", title: "Signature Seating", description: "Flexible furniture and props for composed event environments.", image: image("photo-1464699908537-0954e50791ee"), alt: "Indian wedding reception table setting" },
];

export const reasons = [
  { icon: "Palette" as IconName, title: "Creative Concepts", description: "Unique themes and customized concepts shaped around the occasion." },
  { icon: "UsersRound" as IconName, title: "Complete Execution", description: "Planning, coordination and on-ground delivery under one team." },
  { icon: "Sparkles" as IconName, title: "Professional Team", description: "An organized production mindset from brief to final guest exit." },
  { icon: "Network" as IconName, title: "Trusted Network", description: "A strong circle of vendors and event professionals to call on." },
  { icon: "SlidersHorizontal" as IconName, title: "Flexible Solutions", description: "Thoughtful choices that respond to your requirements and budget." },
  { icon: "ScanEye" as IconName, title: "Attention To Detail", description: "A close focus on design, timing, execution and guest experience." },
];

export const processSteps = [
  { number: "01", title: "Understand", description: "We listen closely to your vision, occasion and requirements." },
  { number: "02", title: "Plan", description: "We shape the concept, requirements and execution plan." },
  { number: "03", title: "Design", description: "We develop decoration, production and experience ideas." },
  { number: "04", title: "Execute", description: "We coordinate vendors, staff, materials and production." },
  { number: "05", title: "Celebrate", description: "We deliver a smooth, memorable event experience." },
];

export const stats = [
  { value: 100, suffix: "+", label: "Events Planned" },
  { value: 50, suffix: "+", label: "Event Concepts" },
  { value: 20, suffix: "+", label: "Vendor Partners" },
  { value: 10, suffix: "+", label: "Event Categories" },
];

export const instagramImages = portfolioItems.slice(0, 6);
