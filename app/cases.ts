export type CaseSubsection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: CaseSubsection[];
};

export type CaseTestimonial = {
  quote: string;
  author: string;
  role?: string;
};

export type Case = {
  slug: string;
  number: string;
  /** Short label for cards / chips. */
  tag: string;
  year: string;
  /** Full display title. */
  title: string;
  /** Optional 1-line tagline shown under the title in the case hero. */
  tagline?: string;
  /** e.g. "Grupo Plaenge". Omit for cases where the client isn't named. */
  client?: string;
  /** Disclaimer note, e.g. private/closed app. */
  disclaimer?: string;
  role: string;
  industry: string;
  duration: string;
  timeline?: string;
  tools?: string[];
  scope?: string;
  team?: string;
  /** Chip cloud shown at the top of the case. */
  tags?: string[];
  /** Product / project goals shown as a numbered list. */
  goals?: string[];
  /** Ordered narrative sections. */
  sections?: CaseSection[];
  /** Key results shown at the bottom. */
  results?: string[];
  /** Optional testimonials block. */
  testimonials?: CaseTestimonial[];
  /**
   * Absolute /public path to the hero image used on the home card and the
   * case hero. Use `asset()` at render time to prefix the basePath.
   */
  heroImage?: string;
  /** Optional alt text for heroImage. */
  heroAlt?: string;
  /** Gallery of images rendered at the bottom of the case, "App preview". */
  gallery?: { src: string; alt: string; wide?: boolean }[];
  /**
   * How the gallery is laid out. Default "grid" is a 2-column responsive
   * grid; "stack" renders each image full-width one after another, better
   * when images have varied intrinsic dimensions.
   */
  galleryLayout?: "grid" | "stack";
};

export const CASES: Case[] = [
  /* ---------------------------------------------------------------- */
  /*  CASE 01. Ventas · Grupo Plaenge                                 */
  /* ---------------------------------------------------------------- */
  {
    slug: "ventas-grupo-plaenge",
    number: "01",
    tag: "Real Estate",
    year: "2022",
    title: "Ventas · Grupo Plaenge",
    client: "Grupo Plaenge",
    tagline:
      "A native mobile app that lets real estate agents focus on their clients while the product handles every calculation and bureaucratic step behind the scenes, from arrival to signed contract.",
    disclaimer: "Closed app · only available to company employees.",
    role: "Product Designer",
    industry: "Real Estate",
    duration: "Oct 2020 to Jan 2022 (15 months)",
    timeline: "15 months",
    tools: ["Figma", "FigJam", "Miro", "Lookback", "Maze", "Firebase"],
    scope: "Discovery · UX · UI · Design System · Handoff",
    team: "PM · 2 Designers · BA · Fullstack Dev · Solution Architect",
    tags: [
      "Mobile",
      "iOS",
      "Android",
      "Native App",
      "UX Research",
      "UI Design",
      "Usability Testing",
      "Information Architecture",
      "UX Metrics",
      "User Interviews",
      "Iteration",
      "Handoff",
      "UX Strategy",
      "Problem Framing",
      "Design Systems",
      "Product Growth",
      "Cross-functional Collaboration",
      "Accessibility & Inclusive Design",
      "Stakeholder Management",
      "Dual-Track Discovery",
      "UX Design",
    ],
    goals: [
      "Reduce operational effort of real estate salespeople and advisors during in-store service, shorter service time, higher sales numbers.",
      "Give salespeople and advisors mobility, so in-store service can happen from any location.",
      "Ease access to every working material, tool, and sales contract in a single place.",
    ],
    sections: [
      {
        heading: "About the client",
        paragraphs: [
          "Grupo Plaenge is a leading Brazilian construction company, owner of the Plaenge and Vanguard brands, with 55+ years of experience delivering 64M+ sq ft across 515+ residential and industrial projects in Brazil and Chile.",
          "Known for the highest construction quality and an outstanding service experience for its clients.",
        ],
      },
      {
        heading: "Initial briefing",
        paragraphs: [
          "The product started with my pair sharing the client's briefing: they needed to improve in-store customer service by reducing the time salespeople wasted on operational tasks, disconnected bureaucratic systems that were forcing sellers into a lot of unnecessary rework to close a deal.",
        ],
      },
      {
        heading: "Discovery and strategy (business)",
        paragraphs: [
          "To transform Plaenge's complex, bureaucratic sales process into a high-performance digital experience, I started with deep operational immersion. The approach focused on aligning Plaenge's reputation for outstanding service with the functional goal of reducing in-store service time by eliminating disconnected legacy systems.",
          "To guarantee measurable impact, I defined success metrics upfront using the H.E.A.R.T. framework, establishing clear KPIs to track how the solution would eventually reduce bureaucratic tasks by an estimated 50%.",
        ],
      },
      {
        heading: "Discovery and research (users)",
        subsections: [
          {
            heading: "User research",
            paragraphs: [
              "To understand user context, pains, and needs, we ran both quantitative and qualitative research.",
            ],
            bullets: [
              "Quantitative: Microsoft Forms survey with 26 responses.",
              "Qualitative: in-person interviews across 11 business units in 7 cities, 31 interviewees.",
            ],
          },
          {
            heading: "Personas & design sprint prep",
            paragraphs: [
              "We synthesised all research into personas and a user journey, mapping actions, touchpoints, emotions, tools, channels, and devices used during day-to-day in-store service.",
              "We also put together a prep document to get the DB1 internal team ready for the Design Sprint.",
            ],
          },
        ],
      },
      {
        heading: "Define, wireframe & prototype",
        subsections: [
          {
            heading: "Design sprint",
            paragraphs: [
              "Using the prep document, we compressed the sprint by 2 days. We ran it with a cross-functional DB1 team: 1 PM, 2 Product Designers, 1 Business Analyst, 1 Fullstack Dev, and 1 Solution Architect. The main focus was to look at the problem from different points of view and start building the solution concept together. This small group became the founding team of the product.",
            ],
          },
          {
            heading: "Main concepts",
            bullets: [
              "Mobile app integrated with the CRM, tracking every in-store service and generating data for managers.",
              "Full offline functionality, no lost sales due to connectivity issues.",
              "Minimalist design reflecting the brand's elegance and sophistication.",
              "All tools unified in one place: Sales Books, CRM, Excel, Availability System, and Sales Portal.",
              "All information at the salesperson's fingertips, whenever needed.",
            ],
          },
          {
            heading: "First prototype concept",
            paragraphs: [
              "After the sprint, we built the first high-fidelity mockups and prototype covering all product functionalities, ready for usability testing and client presentation.",
            ],
          },
          {
            heading: "User profiles",
            bullets: [
              "Hostess, customer search and arrival notifications to salespeople.",
              "Salesperson, full in-store service, with or without a customer present.",
            ],
          },
          {
            heading: "Main functionalities",
            bullets: [
              "Alert sender (hostess only), customer search and creation, calendar view.",
              "Available units and product-fit by customer profile.",
              "Purchase simulator, default and customized payments.",
              "Full buying-offer flow, multiple products, garage picker, offer percentages, document upload.",
              "Sale-contract initiation with document upload.",
            ],
          },
        ],
      },
      {
        heading: "User testing",
        subsections: [
          {
            heading: "Moderated tests",
            paragraphs: [
              "First usability test with 11 users from 7 business units via Lookback.io. Average rating at that point: 4.5 / 5. The client approved us to move forward.",
            ],
          },
          {
            heading: "Main learnings",
            bullets: [
              "Improve semantic colors for available units, readability was an issue for some testers.",
              "Allow separate views for apartments and garages, customers often buy them at different times.",
              "Expand purchase-simulator customization options.",
              "Run deeper discovery on the buying-offer flow.",
              "Immersive discovery of the customer buying offer, from both business and user standpoints.",
              "Opportunity identified to explore allotment sales.",
            ],
          },
          {
            heading: "Next steps",
            paragraphs: [
              "While improving the purchase simulator, we started handing off to the dev team in parallel. From this point I became the sole designer on the product, forming a natural working pair with the business analyst, validating every scenario, business rule, and user value for each deliverable.",
              "I adopted a Dual-Track Discovery approach: testing, documenting, and shipping items to the dev team while simultaneously discovering new ones through user interviews and usability testing.",
            ],
          },
        ],
      },
      {
        heading: "Iterations",
        subsections: [
          {
            heading: "Available products, separating units from garages and deposits",
            paragraphs: [
              "Since each product type has different pricing calculations, custom date ranges, varying monthly values, and seller discounts, I designed separate flows for viewing and simulating them, even when a customer wants to buy more than one type at once.",
              "In this phase, the business analyst and I started prioritising what would become the App Versions, defining final design adjustments and pushing forward with requirements documentation.",
            ],
          },
          {
            heading: "Purchase simulator",
            paragraphs: [
              "I expanded customization options: custom date ranges, varying monthly values, seller discounts. I created separate simulation paths for each product type. Given its importance to the core service flow, I ran an additional usability test via Lookback.io with 11 users.",
            ],
          },
          {
            heading: "Customer buying offer",
            paragraphs: [
              "I interviewed both stakeholders and product sponsors to fully understand the business rules, then mapped all existing scenarios into a user flow before wireframing.",
              "Given the complexity, I ran a moderated usability test using Maze, generating both quantitative and qualitative data with 18 users. Result: the buying-contract time was reduced by 90%.",
            ],
          },
          {
            heading: "New, allotment research",
            paragraphs: [
              "I ran a new round of user interviews to understand the allotment sales context. Key findings: this product type is driven by scarcity and urgency, has a faster purchase flow with less simulator customization, and follows different pricing calculation rules. I documented all learnings and first mockups to hand off to the new design team taking over the product while I moved to a new client.",
            ],
          },
        ],
      },
      {
        heading: "Handoff, follow-up & iterate",
        subsections: [
          {
            heading: "Official handoff",
            paragraphs: [
              "For each completed functionality, I ran a final presentation with the dev team (frontend, backend, QA) and the business analyst before coding started. All behavior documentation and flow conditionals stayed in Figma, screen links, toasters, messages, edge cases, so we had everything in place before development began.",
            ],
          },
          {
            heading: "Co-creation workshops with frontends",
            paragraphs: [
              "I ran co-creation sessions with the frontend team, part brainstorm, part design critique, to surface technical constraints early, empower developers to bring suggestions, and build a closer working relationship between design and engineering.",
            ],
          },
          {
            heading: "Usage metrics",
            paragraphs: [
              "To keep track of user behavior on the app, I defined the product analytics strategy using the H.E.A.R.T. framework and created full event-tagging documentation for the dev team to implement on Firebase / Google Analytics 4.",
            ],
          },
        ],
      },
    ],
    results: [
      "Selected as one of 3 DB1 client products to receive CMMI certification by the Quality Department.",
      "Bureaucratic work time in the full in-store service flow reduced by at least 50%.",
      "Overall in-store service time reduced by around 65%, measured by both tester perception and stopwatch timing.",
      "Buying-contract time reduced by 90% after the customer-buying-offer redesign.",
      "Average usability rating across all tests: 9.3 / 10.",
    ],
    heroImage: "/imgs/ventas/hero.webp",
    heroAlt: "Ventas. Grupo Plaenge app preview with brand mark and iPad mockups.",
    galleryLayout: "stack",
    gallery: [
      { src: "/imgs/ventas/01.png", alt: "User personas: Prospector and Vendedor A, profiles, needs and pains.", wide: true },
      { src: "/imgs/ventas/02.png", alt: "User personas continued: Vendedor B and Hostess." },
      { src: "/imgs/ventas/03.png", alt: "Design sprint artefacts from the DB1 kickoff." },
      { src: "/imgs/ventas/04.png", alt: "Design sprint prioritisation and solution mapping." },
      { src: "/imgs/ventas/05.png", alt: "Product screen: available units grid with fit-by-profile and floor plan." },
      { src: "/imgs/ventas/06.png", alt: "Product screen: buyer registration and multi-buyer flow." },
      { src: "/imgs/ventas/07.png", alt: "Product screen: customer offer preparation." },
      { src: "/imgs/ventas/08.png", alt: "Product screen: purchase simulator, custom terms." },
      { src: "/imgs/ventas/09.png", alt: "Product screen: purchase simulator, separated by product type." },
      { src: "/imgs/ventas/10.png", alt: "Product screen: full buying-offer flow." },
      { src: "/imgs/ventas/11.jpg", alt: "iPad in real store use, hero context shot." },
      { src: "/imgs/ventas/12.png", alt: "Product screen: sale contract initiation." },
      { src: "/imgs/ventas/13.png", alt: "Product screen: hostess arrival notification." },
      { src: "/imgs/ventas/14.png", alt: "Product screen: calendar and daily agenda view." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  CASE 02. Smart Safety                                            */
  /* ---------------------------------------------------------------- */
  {
    slug: "smart-safety",
    number: "02",
    tag: "Automotive · Mining",
    year: "2022",
    title: "Smart Safety",
    tagline:
      "A proof of concept that turned mandatory safety equipment into a smart wearable: shorter waiting time for on-site engineers, safer miners, better on-site productivity.",
    disclaimer: "Proof of concept · exploratory work.",
    role: "Product Designer",
    industry: "Automotive · Mining",
    duration: "Apr 2022 to May 2022 (POC)",
    timeline: "6 weeks",
    tools: ["Figma"],
    scope: "Discovery, UX, UI, concept",
    team: "Pair of Product Designers",
    tags: [
      "Wearable",
      "AR",
      "Voice UI",
      "IoT",
      "AI",
      "UX Strategy",
      "UX Research",
      "Problem Framing",
      "Competitive Analysis",
      "Design Systems",
      "Accessibility & Inclusive Design",
      "Stakeholder Management",
      "UX Design",
      "UI Design",
    ],
    goals: [
      "Create a mobile solution for engineers heading to remote mine sites to fix machinery.",
      "Reduce miners' waiting time for on-site engineering support and machinery repair.",
      "Keep workers safe in hazardous underground and surface conditions.",
      "Improve miner productivity without compromising safety.",
    ],
    sections: [
      {
        heading: "About the client",
        paragraphs: [
          "A global automotive leader with vehicles on the road in 100+ countries. 95+ years of heritage across truck, bus, and construction equipment divisions. Beyond passenger safety, the client is a dominant force in the mining industry, delivering heavy-duty haulers and excavators built for extreme conditions.",
          "Known for sustainable engineering and reliability, the client continues to set the standard for industrial innovation.",
        ],
      },
      {
        heading: "Initial briefing",
        paragraphs: [
          "The proof of concept started with the client asking for a mobile solution to support machinery fixing for engineers, worker safety, and productivity for miners on-site in India.",
          "Personal safety equipment is required in hazardous conditions. Sites include both underground and surface mines. Internet connectivity is often low or non-existent.",
        ],
      },
      {
        heading: "Discovery and strategy (business)",
        paragraphs: [
          "We started with a discovery to understand the client's business model, existing tech partnerships, and how those changes were expected to affect day-to-day work across several industries.",
          "We also learned the client's communications focus on reliability, productivity at lower cost, and safety.",
        ],
      },
      {
        heading: "Discovery and research (users)",
        paragraphs: [
          "With the client's business direction in mind, we kept momentum with the requested mobile solution but reframed it. Instead of a phone app, we proposed a proof of concept for miners: upgrade their mandatory personal safety equipment so it would serve both purposes at once, protection and repair support.",
        ],
      },
      {
        heading: "Define, wireframe and prototype",
        subsections: [
          {
            heading: "First direction: mobile app",
            paragraphs: [
              "The starting point was a mobile app for miners that used image recognition and sound analysis to identify quick machinery fixes, letting them repair equipment on the spot without waiting for an engineer to travel to the site. The app would analyse sound or images to provide step-by-step guidance, and send notifications when something went wrong (hazardous gases, for example) so miners could evacuate safely.",
            ],
          },
          {
            heading: "The pivot: Smart Safety concept",
            paragraphs: [
              "Since the client's positioning centred on reliability, productivity at lower cost, and safety, we concluded a mobile app wasn't the fastest or safest option. Miners would still need engineers on-site for anything complex, which cuts into productivity.",
              "We pivoted to a Smart Safety concept: use the miner's existing personal safety equipment not only for safety, but for everything the mobile app would do. The first Smart Safety product would be a Safety Glass with high-contrast colours, clear voice-command guidance, AI, machine learning, image recognition, sound analysis, augmented reality for step-by-step repair, and IoT.",
            ],
          },
          {
            heading: "Connectivity",
            paragraphs: [
              "Since internet connectivity is a significant challenge at these sites, features like calls would need reliable infrastructure to work: Wi-Fi access points inside and around the mines, or satellite connectivity.",
            ],
          },
          {
            heading: "Core interactions",
            bullets: [
              "After analysing machinery, complex fixes are escalated to an expert engineer via voice call. Voice commands guide the miner through each step.",
              "In dangerous situations (downpour, hazardous gases, hazardous materials) the glasses ask the miner to evacuate, and voice commands lead them to the next step.",
              "AR wayfinding surfaces the closest exit, direction, and an estimated time to reach it.",
              "Safety recognition based on the current state of the mine and the equipment in use.",
            ],
          },
        ],
      },
      {
        heading: "What comes next",
        paragraphs: [
          "Next steps for scaling the Smart Safety partnership: noise-cancelling earplugs for protection and voice guidance, gloves with sensors connected to the glasses, textiles that sense environmental changes and share information with other Smart Safety devices, and expanded AR navigation.",
        ],
      },
    ],
    results: [
      "Proof of concept delivered in 6 weeks, reframing a mobile-app brief into a Smart Wearable product line.",
      "Established a scalable Smart Safety concept: glasses first, with a documented roadmap for earplugs, gloves, and instrumented textiles.",
      "The client validated the direction and roadmap for continued exploration.",
    ],
    heroImage: "/imgs/smart-safety/hero.png",
    heroAlt: "Smart Safety concept, iPhone in hand running the on-site engineer call surface with a hauler truck at a mine site.",
    galleryLayout: "stack",
    gallery: [
      { src: "/imgs/smart-safety/smart-safety-01.png", alt: "Smart Safety concept: on-site truck detection with alert bubbles and low tire pressure warning." },
      { src: "/imgs/smart-safety/smart-safety-02.png", alt: "Smart Safety concept: augmented-reality guidance overlay on machinery." },
      { src: "/imgs/smart-safety/smart-safety-03.png", alt: "Smart Safety concept: voice-driven step-by-step repair flow." },
      { src: "/imgs/smart-safety/smart-safety-04.png", alt: "Smart Safety concept: engineer call surface for remote assistance." },
      { src: "/imgs/smart-safety/smart-safety-05.png", alt: "Smart Safety concept: evacuation alert with AR wayfinding to the closest exit." },
      { src: "/imgs/smart-safety/smart-safety-06.png", alt: "Smart Safety concept: safety recognition based on mine state and equipment in use." },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  CASE 03. Akumen · AssureCare                                    */
  /* ---------------------------------------------------------------- */
  {
    slug: "akumen",
    number: "03",
    tag: "Healthcare · AI",
    year: "2025",
    title: "Akumen · AssureCare",
    client: "AssureCare",
    tagline:
      "An AI- and data-driven web product that turns fragmented healthcare data into actionable insights and campaigns, empowering healthcare payers to act on member risk before it escalates.",
    disclaimer: "Product not yet publicly launched.",
    role: "Senior Product Designer",
    industry: "Healthcare · AI",
    duration: "Feb 2025 to Jul 2025 (6 months)",
    timeline: "6 months",
    tools: ["Figma", "Figma Make", "Lovable"],
    scope: "Strategy · Research · UX · UI · Design System · Handoff",
    team: "VP of Product · Director of Product · PM · SMEs · Offshore Dev",
    tags: [
      "Web",
      "Desktop",
      "AI",
      "UX Strategy",
      "UX Research",
      "Problem Framing",
      "Information Architecture",
      "Product Growth",
      "Competitive Analysis",
      "Accessibility & Inclusive Design",
      "Stakeholder Management",
      "UX Design",
      "Design Systems",
      "UI Design",
    ],
    goals: [
      "Enable healthcare insurances to make data-driven decisions for their members.",
      "Transform complex healthcare data into actionable insights and actions via AI.",
      "Enable AI to support and manage member risk, and act on it before health risk increases.",
      "Create campaigns for members and providers that speed up processes instead of relying on manual calls.",
    ],
    sections: [
      {
        heading: "About the client",
        paragraphs: [
          "AssureCare is a prominent player in the American healthcare system, serving 56M+ Americans with healthcare management solutions for payers, members, AI & Data Analytics, providers, pharmacy, nutrition, and configuration tools. They also offer a member web and native app to help members take ownership of their health.",
        ],
      },
      {
        heading: "Initial briefing",
        paragraphs: [
          "The project kicked off with the VP of Product sharing the briefing: the company needed a solid, brand-new, AI- and data-driven product to help their customers make better decisions about their patients' health. The goal was to launch an MVP in a couple of months to demo to clients and get buy-in, while we kept working on product growth in parallel.",
        ],
      },
      {
        heading: "Discovery, Strategy & Research, business and users",
        paragraphs: [
          "Since we didn't have users at the start, I began with a competitor analysis of direct and indirect players, including AI tools, data analytics, and data-visualisation products, to understand their offerings and how we could differentiate. I also talked to SMEs (Subject Matter Experts) to understand their needs better.",
          "From that analysis, we identified an opportunity to merge the best of those products, fulfill SMEs' needs, and add a Campaign Management tool tailored for healthcare and interconnected with AssureCare's flagship product. That defined the main features.",
        ],
      },
      {
        heading: "Define & wireframe",
        paragraphs: [
          "The team already had a Design System in place, but the VP of Product wanted something brand new to differentiate the product. I decided to use Figma Variants and Variables to build a new Design System on top of the existing one, a way that wouldn't require significant rework from front-end developers.",
          "We also started testing automated ways to export components so front-end developers could build faster and more confidently, without worrying too much about aesthetics, spacing, or visual consistency (the Design System already handled that). This freed them to focus on what mattered most at that stage: API integrations and back-end connections that would power the product's data layer.",
        ],
      },
      {
        heading: "First design concept",
        subsections: [
          {
            heading: "Concept pillars",
            bullets: [
              "Web app integrated with the flagship product to capture member health data, risk scores, medications, utilization management, etc.",
              "Ability to integrate with other sources for complete oversight of members, including data from healthcare competitors.",
              "A suite of features that allows companies to include or exclude functionalities according to their needs.",
              "A companion mobile app to surface AI highlights on the go.",
            ],
          },
          {
            heading: "Main functionalities",
            bullets: [
              "Executive homepage for high-level oversight by executives and C-level stakeholders.",
              "Dashboards with drill-downs, filters, sorting, date-range selectors, aggregation, trend lines, cross-filtering, real-time updates, KPI reordering, export, and AI suggestions.",
              "Dashboard creation from scratch or from templates.",
              "AI agent with chat, prompt templates, workflows, and best-next-step / recommended actions to improve results or create new campaigns.",
              "Integration Ecosystem for linking to other healthcare products, including competitors.",
              "Member dashboard based on risk level and cohorts.",
              "Campaign Builder with libraries of cohorts and artefacts to speed up the process.",
            ],
          },
        ],
      },
      {
        heading: "User testing",
        paragraphs: [
          "I tested with 5 users that matched Akumen's target profile, and had all Product Managers, Business Analysts, and SMEs review the work to make sure we were covering every edge case the team could think of. Interfaces were presented without explanation, similar to an unmoderated usability test, and I collected feedback and insights to keep iterating.",
        ],
      },
      {
        heading: "Handoff, follow-up & iterate",
        paragraphs: [
          "Since we were working with offshore developers, for each completed functionality I described, screen by screen, what each feature and UI component should do, and where users should be routed. Async communication had to work first-time. I also documented behavior and flow conditionals in Figma, covering screen links, toasters, messages, and edge cases, so we had everything in place before coding started.",
          "We ran daily meetings to align, review features, and keep moving the MVP forward.",
        ],
      },
    ],
    results: [
      "5 out of 5 customers who saw the product expressed interest and signed up for the pre-release.",
      "A 7-day MVP buildout to introduce Voice AI capabilities to the Campaign Management product was delivered and demoed successfully.",
      "New Design System shipped without significant front-end rework, freeing engineering to focus on API and data-layer work.",
    ],
    heroImage: "/imgs/akumen/hero.webp",
    heroAlt: "Akumen, brand mark and executive dashboard preview.",
    gallery: [
      { src: "/imgs/akumen/01.png", alt: "Akumen dashboard concept, analytics overview." , wide: true },
      { src: "/imgs/akumen/02.png", alt: "Akumen AI-agent surface, chat and next-best-action recommendations.", wide: true },
    ],
    testimonials: [
      {
        quote:
          "We just finished up with the [customer] demo and it went flawlessly. I want you to know this was no short of pulling a rabbit out of a hat. You did an amazing job and were the backbone of all of this effort.",
        author: "VP of Product",
      },
      {
        quote:
          "I second, third, fourth and fifth this sentiment. Amazing job and phenomenal effort.",
        author: "Director of Product",
      },
      {
        quote:
          "Agree wholeheartedly. None of this would have been possible without you. Thank you sincerely for all the effort and talent you put into this, it was very well received.",
        author: "Director of Pharmacy Strategy",
      },
      {
        quote:
          "The whole feature looks incredible. Special shoutout to Natalia. As I mentioned to this team, this is how it starts: slowly at first, then all at once. Let's keep up this momentum to deliver better product experiences.",
        author: "VP of Engineering",
      },
      {
        quote:
          "Natalia brought commitment to detail and curiosity, consistently identifying elements that could be improved, particularly from the perspective of universal design. She sought to understand the deeper purpose of what we were building. With a deft hand at Figma, she applied her research and understanding to fit complex data and business constraints into genuinely engaging designs. She also provided substantive input on product strategy, go-to-market, growth opportunities, and brand identity, contributions that are uncommon in a designer and invaluable on a team navigating competing priorities.",
        author: "Product Manager",
      },
    ],
  },
];
