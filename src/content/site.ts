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

const image = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export const site = {
  name: "Aarambh Events & Production",
  shortName: "Aarambh",
  tagline: "We Create | You Celebrate",
  description:
    "Aarambh Events & Production provides professional event planning, decoration, production and execution services for weddings, celebrations, corporate events and special occasions.",
  contact: {
    phoneDisplay: "+91 7285883168",
    phoneHref: "tel:+917285883168",
    whatsapp: "https://wa.me/917285883168",
    email: "",
    instagram: "https://instagram.com/aarambhevents",
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
  { title: "Wedding", description: "A complete celebration, from the first welcome to the final farewell.", image: image("photo-1519741497674-611481863552") },
  { title: "Engagement", description: "An elegant start, made distinctly personal.", image: image("photo-1519225421980-715cb0215aed") },
  { title: "Reception", description: "A composed evening of warmth, music and celebration.", image: image("photo-1507504031003-b417219a0fde") },
  { title: "Haldi", description: "Bright, joyful colour and a sunlit celebratory mood.", image: image("photo-1519167758481-83f550bb49b3") },
  { title: "Mehndi", description: "Intimate artistry, fresh florals and festive detail.", image: image("photo-1507504031003-b417219a0fde") },
  { title: "Sangeet", description: "High-energy moments brought together with production flair.", image: image("photo-1492684223066-81342ee5ff30") },
  { title: "Birthday", description: "Milestones made imaginative, effortless and memorable.", image: image("photo-1464349153735-7db50ed83c84") },
  { title: "Baby Shower", description: "Soft, thoughtful settings for a very special welcome.", image: image("photo-1513159446162-54eb8bdaa79b") },
  { title: "Anniversary", description: "A considered toast to the journey so far.", image: image("photo-1464699908537-0954e50791ee") },
  { title: "Corporate Events", description: "A brand-first setting that feels precise and welcoming.", image: image("photo-1540575467063-178a50c2df87") },
  { title: "Exhibitions", description: "Spaces that guide attention and start conversations.", image: image("photo-1505373877841-8d25f7d46678") },
  { title: "Product Launches", description: "A reveal designed for impact, clarity and attention.", image: image("photo-1511578314322-379afb476865") },
  { title: "Concerts", description: "Sound, stage and crowd energy in one seamless production.", image: image("photo-1501386761578-eac5c94b800a") },
  { title: "Festivals", description: "Large-scale experiences rooted in atmosphere and flow.", image: image("photo-1492684223066-81342ee5ff30") },
  { title: "College Events", description: "Youthful, ambitious concepts delivered with discipline.", image: image("photo-1524178232363-1fb2b075b655") },
  { title: "Private Events", description: "Private gatherings designed around your people and place.", image: image("photo-1507504031003-b417219a0fde") },
  { title: "Customized Events", description: "A blank canvas shaped around your exact occasion.", image: image("photo-1519167758481-83f550bb49b3") },
];

export const portfolioItems: PortfolioItem[] = [
  { id: "royal-ceremony", category: "Weddings", title: "The Royal Ceremony", description: "A gold-lit mandap layered with fresh floral detail.", image: image("photo-1519741497674-611481863552"), alt: "Elegant wedding table setting with candles", featured: true },
  { id: "garden-vows", category: "Weddings", title: "Garden Vows", description: "A soft outdoor setting shaped around the couple’s story.", image: image("photo-1519225421980-715cb0215aed"), alt: "Wedding couple celebrating outdoors" },
  { id: "floral-hall", category: "Decoration", title: "Floral Hall", description: "Fresh florals, warm light and an inviting guest journey.", image: image("photo-1464699908537-0954e50791ee"), alt: "Decorated celebration table with flowers" },
  { id: "saffron-celebration", category: "Decoration", title: "Saffron Celebration", description: "A vibrant palette with refined textural layers.", image: image("photo-1519167758481-83f550bb49b3"), alt: "Festive decorated event venue" },
  { id: "after-dark", category: "Stage & Production", title: "After Dark", description: "An atmospheric stage designed for sound, scale and energy.", image: image("photo-1501386761578-eac5c94b800a"), alt: "Concert lights on a dark stage", featured: true },
  { id: "immersive-stage", category: "Stage & Production", title: "Immersive Stage", description: "A crisp production environment built for the moment.", image: image("photo-1492684223066-81342ee5ff30"), alt: "Large event stage and crowd" },
  { id: "brand-gathering", category: "Corporate", title: "Brand Gathering", description: "A clean corporate environment with a considered guest flow.", image: image("photo-1540575467063-178a50c2df87"), alt: "Guests at a corporate event", featured: true },
  { id: "conference-frame", category: "Corporate", title: "Conference Frame", description: "Professional production for ideas that need the right stage.", image: image("photo-1505373877841-8d25f7d46678"), alt: "Modern conference room with audience" },
  { id: "milestone-night", category: "Celebrations", title: "Milestone Night", description: "A private celebration with mood, music and detail.", image: image("photo-1464349153735-7db50ed83c84"), alt: "Festive celebration with balloons" },
  { id: "private-toast", category: "Celebrations", title: "Private Toast", description: "An evening designed to feel both effortless and personal.", image: image("photo-1507504031003-b417219a0fde"), alt: "Guests celebrating at an evening event" },
  { id: "lounge-collection", category: "Rentals", title: "Lounge Collection", description: "Comfortable event furniture that completes the visual story.", image: image("photo-1497366754035-f200968a6e72"), alt: "Modern lounge furniture in an event space" },
  { id: "signature-seating", category: "Rentals", title: "Signature Seating", description: "Flexible furniture and props for composed event environments.", image: image("photo-1518005020951-eccb494ad742"), alt: "Stylish chairs in a modern interior" },
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
