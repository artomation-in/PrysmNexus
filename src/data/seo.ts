export const brand = {
  name: "PrysmNexus",
  legalName: "PrysmNexus",
  domain: "https://prysmnexus.com",
  email: "connect@prysmnexus.com",
  location: "India",
  locality: "",
  region: "",
  country: "IN",
  description: "PrysmNexus is an India-focused growth marketing agency combining brand strategy, original content, social media, performance marketing, SEO, local search, and reputation support under one accountable team.",
  reviewed: "2026-07-16",
};

export type Faq = { question: string; answer: string };
export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  title: string;
  description: string;
  definition: string;
  intro: string;
  deliverables: string[];
  process: { title: string; text: string }[];
  compare: { factor: string; left: string; right: string }[];
  compareLabels: [string, string];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "brand-strategy",
    name: "Brand Strategy and Identity",
    shortName: "Brand Strategy",
    eyebrow: "Brand clarity",
    title: "Brand strategy for Indian businesses that want to be remembered.",
    description: "Brand strategy, positioning, messaging, and visual identity for restaurants, cafés, venues, and growing businesses across India.",
    definition: "Brand strategy is the system that defines who a business serves, what makes it distinct, how it communicates, and how its visual identity stays consistent across customer touchpoints.",
    intro: "PrysmNexus turns scattered ideas into a usable brand system. The work connects positioning, language, identity, and campaign direction so customers receive one clear impression wherever they discover the business.",
    deliverables: ["Brand positioning and audience definition", "Messaging hierarchy and tone of voice", "Visual identity direction", "Campaign and social-media toolkit", "Menu, offer, and event creative systems", "Brand consistency guidelines"],
    process: [{ title: "Discover", text: "Review the business, audience, competitors, customer journey, and existing brand material." }, { title: "Define", text: "Clarify positioning, promise, proof, personality, and the messages customers need first." }, { title: "Design", text: "Build the practical visual and verbal system used across content, campaigns, search, and sales." }],
    compareLabels: ["Brand strategy", "Logo-only design"],
    compare: [{ factor: "Purpose", left: "Defines market position and customer meaning", right: "Creates a visual mark" }, { factor: "Coverage", left: "Messaging, identity, audience, experience, campaigns", right: "Logo files and basic usage" }, { factor: "Best for", left: "Businesses building consistent recognition", right: "Businesses with an established strategy" }],
    faqs: [{ question: "What is included in a brand strategy project?", answer: "A PrysmNexus brand strategy project can include audience definition, positioning, messaging, tone of voice, visual direction, identity guidelines, and a practical toolkit for content and campaigns. The exact scope is agreed after discovery." }, { question: "Can you refresh an existing brand without replacing everything?", answer: "Yes. We can retain recognizable assets while improving positioning, messaging, hierarchy, colour, typography, and consistency. The objective is useful evolution, not unnecessary reinvention." }, { question: "Do you create campaign and social-media templates?", answer: "Yes. Brand systems can include reusable campaign, social, menu, offer, festival, and event formats so daily execution remains recognizably yours." }],
    related: ["content-production", "social-media-management"],
  },
  {
    slug: "content-production",
    name: "Content Production",
    shortName: "Content Production",
    eyebrow: "Original creative",
    title: "Photography, video, and campaign content made around your business.",
    description: "Original photography, videography, reels, creative copy, and campaign content production for brands and hospitality businesses across India.",
    definition: "Content production is the planned creation of original photography, video, reels, design, and copy that gives a brand useful material for social media, advertising, search, and customer communication.",
    intro: "PrysmNexus plans content around business priorities rather than filling a calendar with generic posts. Shoots, scripts, styling, editing, and design work together so each asset has a clear role in awareness, engagement, or conversion.",
    deliverables: ["Professional photography and styling", "Video production and editing", "Reels and short-form content", "Campaign concepts and creative copy", "Poster, story, festival, menu, and offer designs", "Content libraries for ads and social publishing"],
    process: [{ title: "Plan", text: "Define audiences, channels, formats, offers, shot lists, and the purpose of each asset." }, { title: "Produce", text: "Coordinate photography, video, styling, scripting, design, and on-site production." }, { title: "Adapt", text: "Edit and format assets for organic social, ads, Google profiles, websites, and messaging." }],
    compareLabels: ["Original production", "Template-led content"],
    compare: [{ factor: "Source", left: "Created around the real business", right: "Built from generic stock or repeated templates" }, { factor: "Distinctiveness", left: "Ownable visual material and stories", right: "Familiar formats shared by many brands" }, { factor: "Best for", left: "Recognition, campaigns, and long-term libraries", right: "Short-term publishing volume" }],
    faqs: [{ question: "Do you handle both photography and video?", answer: "Yes. PrysmNexus can plan and produce photography, video, reels, styling, scripts, editing, and supporting campaign design as one coordinated content scope." }, { question: "Can content be used in paid advertising?", answer: "Yes. Production plans can include ad-ready hooks, formats, variations, calls to action, and landing-page alignment rather than treating advertising as an afterthought." }, { question: "How often should a hospitality brand schedule a shoot?", answer: "The right frequency depends on menu changes, campaigns, events, publishing volume, and available content. We recommend a practical cadence after reviewing the monthly channel plan." }],
    related: ["brand-strategy", "social-media-management", "performance-marketing"],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media",
    eyebrow: "Connected publishing",
    title: "Social media management built for consistency, response, and growth.",
    description: "Social media strategy, content calendars, publishing, page handling, community engagement, WhatsApp marketing, and reporting for businesses across India.",
    definition: "Social media management is the coordinated planning, publishing, community response, and performance review required to keep a brand active, consistent, and useful across the platforms its customers use.",
    intro: "PrysmNexus connects social planning with original production, brand standards, campaigns, and reporting. That means the monthly calendar reflects business priorities, not disconnected trends or posting for its own sake.",
    deliverables: ["Monthly strategy and content calendar", "Publishing and page handling", "Reels, stories, posts, and campaign creative", "Community engagement and response planning", "WhatsApp marketing support", "Monthly performance reporting"],
    process: [{ title: "Set the plan", text: "Map objectives, audiences, offers, content pillars, platform roles, and monthly priorities." }, { title: "Create and publish", text: "Produce original content, approve the calendar, publish consistently, and manage pages." }, { title: "Learn and improve", text: "Review reach, engagement, audience response, enquiries, and content patterns each month." }],
    compareLabels: ["Managed social system", "Posting service"],
    compare: [{ factor: "Planning", left: "Business goals, pillars, campaigns, and calendars", right: "A fixed number of posts" }, { factor: "Execution", left: "Production, publishing, community, and reporting", right: "Design and upload only" }, { factor: "Best for", left: "Sustained visibility and audience relationships", right: "Basic page activity" }],
    faqs: [{ question: "Which social platforms do you manage?", answer: "Platform selection depends on the audience and business. Typical scopes may include Instagram, Facebook, YouTube, Pinterest, and supporting WhatsApp communication where it fits the customer journey." }, { question: "Is content production included?", answer: "It can be. PrysmNexus can combine photography, video, reels, copy, design, publishing, and reporting so the page is not dependent on recycled or mismatched material." }, { question: "How do you measure social-media performance?", answer: "We agree on relevant measures such as reach, content views, engagement, follower quality, profile actions, enquiries, and assisted conversions. Reporting is tied to the role social media plays in the wider plan." }],
    related: ["content-production", "performance-marketing"],
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    shortName: "Performance Marketing",
    eyebrow: "Qualified demand",
    title: "Google Ads and Meta Ads focused on meaningful business enquiries.",
    description: "Performance marketing, Google Ads, Meta Ads, lead generation, campaign creative, conversion planning, optimization, and reporting across India.",
    definition: "Performance marketing is paid digital acquisition managed against measurable actions such as qualified leads, calls, bookings, purchases, or other agreed conversions rather than exposure alone.",
    intro: "PrysmNexus aligns campaign strategy, audience selection, creative, landing journeys, tracking, and optimization. The objective is not simply to buy traffic; it is to create a measurable path from attention to a useful business action.",
    deliverables: ["Google Ads and Meta Ads planning", "Account and campaign setup", "Audience, keyword, and offer strategy", "Lead-generation and conversion journeys", "Ad creative and copy variations", "Optimization and monthly reporting"],
    process: [{ title: "Define conversion", text: "Agree what a qualified action is and ensure tracking, landing pages, offers, and response ownership are clear." }, { title: "Launch tests", text: "Build campaigns around focused audiences, keywords, creative variations, and controlled budgets." }, { title: "Optimize", text: "Review search terms, audience response, creative, cost, lead quality, and conversion performance." }],
    compareLabels: ["Google Ads", "Meta Ads"],
    compare: [{ factor: "Primary strength", left: "Captures existing search intent", right: "Creates demand through audience and creative" }, { factor: "Useful for", left: "Services people are actively searching for", right: "Visual offers, discovery, retargeting, and lead forms" }, { factor: "Best approach", left: "Focused keywords and conversion pages", right: "Strong creative, offers, and audience testing" }],
    faqs: [{ question: "Should a local business use Google Ads or Meta Ads?", answer: "Google Ads is often useful when customers already search for the service. Meta Ads is often useful for visual discovery, offers, retargeting, and lead generation. Many businesses need a measured combination rather than choosing one platform universally." }, { question: "Do you create advertising content?", answer: "Yes. Campaign scopes can include photography, video, reels, design, copy, offer framing, and creative variations aligned to the selected audience and conversion action." }, { question: "What performance metrics do you report?", answer: "Metrics depend on the objective and may include impressions, clicks, click-through rate, cost per click, qualified leads, cost per lead, conversion rate, and lead quality. No single metric is treated as success in isolation." }],
    related: ["content-production", "seo-local-search-reputation"],
  },
  {
    slug: "seo-local-search-reputation",
    name: "SEO, Local Search, and Reputation Management",
    shortName: "SEO & Local Search",
    eyebrow: "Sustainable discovery",
    title: "SEO and local search that help customers find and trust you.",
    description: "SEO, local search optimization, Google Business Profile management, reputation support, and search content for businesses across India.",
    definition: "Local SEO is the practice of improving a business website, Google Business Profile, location relevance, content, and reputation signals so nearby customers can discover and evaluate the business in search and maps.",
    intro: "PrysmNexus connects website SEO with local discovery and customer trust. The work covers technical foundations, service content, Google Business Profile accuracy, useful updates, reviews, and measurement—without using fabricated locations or repetitive doorway pages.",
    deliverables: ["Technical and on-page SEO foundations", "Service and local-intent content", "Google Business Profile optimization", "Google photo and update planning", "Review and reputation workflows", "Search visibility and profile-action reporting"],
    process: [{ title: "Audit discovery", text: "Review crawlability, indexing, site structure, service relevance, local signals, profile quality, and current visibility." }, { title: "Build relevance", text: "Improve technical foundations, service pages, internal links, profile content, and trustworthy local information." }, { title: "Strengthen trust", text: "Support review workflows, useful updates, citations, measurement, and ongoing content improvements." }],
    compareLabels: ["Website SEO", "Local SEO"],
    compare: [{ factor: "Primary surface", left: "Organic website results", right: "Local results, maps, and nearby intent" }, { factor: "Core work", left: "Technical structure, content, links, and authority", right: "Website relevance, Business Profile, location data, and reputation" }, { factor: "Best approach", left: "Create useful service and informational pages", right: "Keep website and real-world business information consistent" }],
    faqs: [{ question: "What is the difference between SEO and local SEO?", answer: "SEO improves a website's broader organic visibility. Local SEO adds geographic relevance, Google Business Profile quality, location consistency, nearby search intent, and reputation signals. Service businesses across India commonly need both working together." }, { question: "Do you manage Google Business Profile updates?", answer: "Yes. A scope may cover profile accuracy, categories, services, descriptions, photos, updates, review workflows, and measurement of calls, directions, website visits, and other profile actions." }, { question: "How quickly can SEO improve rankings?", answer: "SEO timing varies with competition, site condition, content quality, authority, and crawl frequency. Technical fixes may be processed quickly, while meaningful ranking and lead changes commonly require sustained work and cannot be guaranteed to a fixed date." }],
    related: ["brand-strategy", "performance-marketing"],
  },
];

export const caseStudies = [
  { slug: "jathara", name: "Jathara Bar & Kitchen", sector: "Hospitality", title: "Connected social visibility for a hospitality brand", summary: "PrysmNexus coordinated content and social execution around the venue's customer experience and local audience.", metrics: [{ value: "150.87K", label: "Impressions", note: "User-provided proposal export" }, { value: "3.08K", label: "Engagements", note: "User-provided proposal export" }, { value: "61.88K", label: "Total audience", note: "User-provided proposal export" }], services: ["Content production", "Social media management", "Campaign creative"] },
  { slug: "cafe-belloso", name: "Cafe Belloso", sector: "Café and hospitality", title: "A consistent content engine for local café discovery", summary: "Original food, venue, and behind-the-scenes content created a reusable publishing system across short-form channels.", metrics: [{ value: "24,057", label: "Content views", note: "User-provided YouTube export" }, { value: "34,139", label: "Channel views", note: "User-provided proposal profile snapshot" }], services: ["Photography and video", "Reels", "Social media management"] },
  { slug: "stat-delight", name: "Stat Delight", sector: "Brand and content", title: "Searchable creative content across social and Pinterest", summary: "Brand-led creative and educational content were structured to support discovery, engagement, and a growing content library.", metrics: [{ value: "27,647", label: "Top Pin impressions", note: "User-provided Pinterest export" }, { value: "44,052", label: "YouTube views", note: "User-provided proposal profile snapshot" }], services: ["Brand strategy", "Content production", "Search-led content"] },
];

export const insights = [
  { slug: "digital-marketing-for-restaurants-india", title: "Digital marketing for restaurants and cafés in India", description: "A practical framework for connecting restaurant branding, content, social media, paid campaigns, local search, and reviews.", updated: "2026-07-17", answer: "Digital marketing for restaurants in India works best as a connected system: clear positioning, original food and venue content, consistent social publishing, focused paid campaigns, accurate local search information, and an active reputation workflow.", sections: [{ title: "Start with the customer journey", text: "A guest may first see a reel, check reviews, open a map listing, view the menu, and then call or visit. Treating those moments as separate projects creates gaps. A useful plan assigns each channel a role and keeps the offer, imagery, address, hours, and brand message consistent." }, { title: "Build a reusable content library", text: "Plan photography and video around signature items, atmosphere, people, service moments, events, and frequently asked questions. This gives organic social, ads, Google updates, websites, and messaging channels enough original material to work together." }, { title: "Measure actions, not attention alone", text: "Reach and views explain distribution, but restaurants should also review calls, directions, reservations, enquiries, offer redemptions, repeat engagement, and the quality of customer response." }], checklist: ["Clear positioning and current menu information", "Original photo and video library", "Monthly social plan", "Google Business Profile accuracy", "Review response workflow", "Tracked calls, directions, bookings, or enquiries"] },
  { slug: "local-seo-google-business-profile-india", title: "Local SEO and Google Business Profile optimization in India", description: "How Indian businesses can improve local discovery using website relevance, accurate profile information, useful content, and reputation signals.", updated: "2026-07-17", answer: "Local SEO for a business in India combines an indexable website, descriptive service pages, accurate business information, a complete Google Business Profile, locally relevant content, quality photos, and a consistent process for earning and responding to genuine reviews.", sections: [{ title: "Website and profile information must agree", text: "Use the same business name, service description, location information, hours, contact details, and customer promise wherever the business is represented. Inconsistency makes evaluation harder for people and machines." }, { title: "Service pages create specific relevance", text: "A single generic services paragraph rarely answers detailed search intent. Create substantial pages that define each service, explain the process, answer common questions, and link to relevant proof." }, { title: "Reputation is an operating system", text: "Ask real customers for feedback at appropriate moments, make the process simple, respond professionally, and use recurring themes to improve the business. Never manufacture reviews or add unsupported rating markup." }], checklist: ["Indexable service pages", "Accurate Business Profile categories and services", "Current hours and contact information", "Original business photos", "Review request and response process", "Search Console and profile-action measurement"] },
  { slug: "google-ads-vs-meta-ads-local-business", title: "Google Ads vs Meta Ads for a local business", description: "A straightforward comparison of Google Ads and Meta Ads for local lead generation, discovery, retargeting, and measurable campaigns.", updated: "2026-07-16", answer: "Google Ads is strongest when customers already search for a service; Meta Ads is strongest when creative and audience targeting can generate discovery or demand. Local businesses often use Google for intent and Meta for reach, retargeting, offers, and lead generation.", sections: [{ title: "Choose Google Ads for active intent", text: "Search campaigns can meet people who are already describing a need. Results depend on keyword focus, geographic settings, useful ads, a relevant landing page, conversion tracking, and fast lead handling." }, { title: "Choose Meta Ads for visual discovery", text: "Meta campaigns can introduce offers, experiences, products, and stories to selected audiences. Creative quality and variation matter because the campaign interrupts rather than answers an active search." }, { title: "Use business economics to judge both", text: "Compare platforms using qualified leads, conversion rate, cost per acquisition, sales value, lead response, and customer quality—not clicks or cheap leads alone." }], checklist: ["Define a qualified conversion", "Set geographic boundaries", "Prepare platform-specific creative", "Use relevant landing or lead journeys", "Track lead quality", "Review budget against business value"] },
  { slug: "social-media-content-plan-hospitality", title: "A practical social-media content plan for hospitality brands", description: "How restaurants, cafés, and venues can plan original social content around discovery, trust, experience, offers, and customer response.", updated: "2026-07-16", answer: "A hospitality social-media plan should balance product appeal, atmosphere, people, proof, useful information, and timely offers. The calendar should connect original production with business priorities, consistent publishing, community response, and monthly performance review.", sections: [{ title: "Use clear content roles", text: "Product and atmosphere content attract attention; people and process build trust; useful information reduces friction; customer proof supports evaluation; offers and events create timely reasons to act." }, { title: "Plan production before the calendar", text: "Create a shot list from upcoming launches, seasonal moments, menu priorities, common questions, and campaign needs. Capture adaptable horizontal and vertical assets so the same production day supports several channels." }, { title: "Review patterns monthly", text: "Look at completion, saves, shares, comments, profile actions, enquiries, and the quality of audience response. Repeat useful patterns while changing weak hooks, formats, frequency, or distribution." }], checklist: ["Monthly commercial priorities", "Five to seven content pillars", "Shot list and production dates", "Publishing and response ownership", "Campaign and event schedule", "Monthly learning review"] },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);

export const breadcrumbSchema = (origin: string, items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${origin}${item.path}` })),
});

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
});
