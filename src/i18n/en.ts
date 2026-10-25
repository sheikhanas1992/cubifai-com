export type ChatMsg = {
  from: "customer" | "agent";
  kind?: "text" | "voice" | "file";
  text?: string;
  duration?: string;
  transcript?: string;
};

export type IndustryContent = {
  tab: string;
  h3: string;
  pairs: { problem: string; fix: string }[];
  chat: ChatMsg[];
  /** Real demo recording, shown instead of the simulated chat when present. */
  video?: { src: string; poster: string; label: string };
};

export const en = {
  meta: {
    title: "CUBIFAI | Recover Lost Revenue in 30 Days, or You Don't Pay",
    description:
      "Recover lost revenue in 30 days, or you don't pay a riyal. Arabic-first AI voice agents and WhatsApp automation for real estate, healthcare, automotive and hospitality businesses across the GCC.",
  },
  nav: {
    solutions: "Solutions",
    industries: "Industries",
    pricing: "Pricing",
    how: "How it works",
    contact: "Contact",
    book: "Book a Demo",
    cta: "Start Free Trial",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "Always-On AI-Powered Front Desk System",
    h1: "Recover Lost Revenue in 30 Days.",
    h1Grad: "Or You Don't Pay a Riyal.",
    sub: "CUBIFAI builds Arabic-first AI agents that answer your phone, run your WhatsApp, and recover the leads you're already losing, for real estate, healthcare, automotive and hospitality businesses across the GCC.",
    primary: "Start Free Trial",
    secondary: "See It In Action",
    micro: "No commitment until you see results.",
  },
  problem: {
    eyebrow: "The Problem",
    h2: "The Cost of a Missed Inquiry Is Bigger Than You Think.",
    stats: [
      {
        stat: "40%",
        label: "of incoming calls go unanswered.",
        source: "Benchmark used in a Saudi restaurant-chain analysis, based on US call data.",
      },
      {
        stat: "SAR 1.16M",
        label: "in estimated annual revenue lost to unanswered calls.",
        source: "Modeled for a 12-branch Saudi restaurant chain.",
      },
      {
        stat: "82%",
        label: "of consumers would call a competitor if a business doesn't answer.",
        source: "US consumer benchmark.",
      },
      {
        stat: "69%",
        label: "of missed business calls go unreturned within 48 hours.",
        source: "Source: Quo.",
      },
      {
        stat: "69%",
        label: "of callers who reach voicemail don't leave a message.",
        source: "Source: Moneypenny, UK.",
      },
    ],
    closing: "Speed wins the customer, not quality of work.",
  },
  solutions: {
    eyebrow: "Solutions",
    h2: "Your Team of 6 AI Agents",
    lede: "One system, six specialists. Every inquiry, call and lead handled the moment it arrives.",
    agents: [
      {
        name: "AI Receptionist",
        text: "Picks up every call in natural Arabic or English, qualifies the caller, books appointments, and hands off to your team live when it matters.",
        replaces: "The ringing phone nobody picks up after 6pm.",
      },
      {
        name: "WhatsApp Automation",
        text: "Replies instantly to every message and voice note, in the customer's own language, around the clock.",
        replaces: "The WhatsApp inbox with 40 unread messages.",
      },
      {
        name: "Quote Agent",
        text: "Builds and sends a quote the moment a customer asks, using your real pricing and inventory.",
        replaces: "The quote still sitting in your drafts since Monday.",
      },
      {
        name: "Speed-to-Lead Agent",
        text: "Responds to a brand-new inquiry within seconds, before the customer thinks to message anyone else.",
        replaces: "The lead who messaged your competitor while they waited.",
      },
      {
        name: "Follow-Up Agent",
        text: "Nudges leads who've gone quiet, automatically, until they book or say no.",
        replaces: "The follow-up you keep meaning to send.",
      },
      {
        name: "Database Reactivation",
        text: "Reaches back into your old leads and past customers to surface the ones ready to buy again.",
        replaces: "The leads sitting cold in your CRM since last quarter.",
      },
    ],
  },
  demos: {
    eyebrow: "See It In Action",
    h2: "Real Conversations, Real Agents",
    lede: "No mockups. These are actual CUBIFAI agents handling real inquiries.",
    items: [
      {
        title: "WhatsApp Agent: Automotive",
        text: "A buyer asks about inventory on WhatsApp. The agent replies in Arabic with live stock, location and photos.",
        src: "/videos/automotive_whatsapp_demo.mp4",
        poster: "/videos/automotive_demo_poster.jpg",
        label: "Play the automotive WhatsApp agent demo",
      },
      {
        title: "Voice Agent: Real Estate",
        text: "A caller asks about a project. The agent answers in Arabic, qualifies the lead and books a consultant.",
        src: "/videos/realestate_voice_demo.mp4",
        poster: "/videos/realestate_demo_poster.jpg",
        label: "Play the real estate voice agent demo",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    h2: "Live in Three Steps",
    steps: [
      { title: "Built around your business", text: "Customized to exactly how you operate: your listings, pricing, policies and tone." },
      { title: "Answered in under 30 seconds", text: "Every call, message and inquiry qualified and routed automatically." },
      { title: "Every lead logged for your team", text: "Full detail on every conversation, sent straight to you. No inquiry falls through the cracks." },
    ],
  },
  industries: {
    eyebrow: "Industries",
    h2: "Built for Four Businesses That Live on Fast Replies",
    lede: "Pick your industry to see the problems we solve and a sample conversation.",
    agentName: "CUBIFAI agent",
    online: "Online",
    voiceNote: "Voice note, transcribed",
    items: [
      {
        tab: "Real Estate & Property Developers",
        h3: "Real estate: every lead answered before it cools",
        pairs: [
          { problem: "Leads arrive at night and on Fridays. Replies come hours later.", fix: "Agents reply in seconds, in Arabic or English, day and night." },
          { problem: "Buyers now ask about foreign ownership, Ejar, rent rules and mortgage steps.", fix: "Agents answer the common questions and pass the rest to your advisor." },
          { problem: "Every lead counts when the market slows.", fix: "Qualify by budget, area and timeline, then book the viewing automatically." },
        ],
        chat: [
          { from: "customer", text: "Hi, is the 3-bedroom apartment in Al Malqa still available?" },
          { from: "agent", text: "Hello! Yes, it is available. 185 m², SAR 1,450,000. Would you like photos or a viewing?" },
          { from: "customer", kind: "voice", duration: "0:07", transcript: "Can I come by tomorrow after Asr?" },
          { from: "agent", text: "Of course. I have 5:30 PM or 6:15 PM. Which suits you?" },
          { from: "customer", text: "5:30" },
          { from: "agent", text: "Booked for 5:30 PM and I've sent the property location. Our advisor will meet you there." },
        ],
        video: {
          src: "/videos/realestate_voice_demo.mp4",
          poster: "/videos/realestate_demo_poster.jpg",
          label: "Play the real estate voice agent demo",
        },
      },
      {
        tab: "Healthcare & Private Clinics",
        h3: "Healthcare: every patient answered, every slot filled",
        pairs: [
          { problem: "Patients call during a procedure or after hours and get no answer, so they book elsewhere.", fix: "The agent answers every call, triages urgency, and books the next available slot." },
          { problem: "Reception spends hours confirming appointments and chasing no-shows.", fix: "Automatic WhatsApp reminders and confirmations cut no-shows without extra staff." },
          { problem: "Insurance and eligibility questions tie up staff before every visit.", fix: "The agent answers common insurance questions and flags the rest to your front desk." },
        ],
        chat: [
          { from: "customer", text: "Hi, do you have an opening for a dental cleaning this week?" },
          { from: "agent", text: "Hello! Yes, we have Tuesday at 11 AM or Thursday at 4 PM. Which works for you?" },
          { from: "customer", text: "Thursday at 4 is good." },
          { from: "agent", text: "Booked for Thursday at 4 PM. Does your insurance cover routine cleanings? I can check your plan if you share the provider name." },
        ],
      },
      {
        tab: "Automobile (Showrooms, Dealerships & Service Centers)",
        h3: "Automobile and taqseet: from first question to test drive",
        pairs: [
          { problem: "Every buyer's first question: what is the monthly payment, and what is the final payment?", fix: "The agent gives an indicative instalment by down payment, term and final payment." },
          { problem: "Chasing documents: ID or Iqama, salary certificate, bank statements, GOSI certificate.", fix: "The agent collects them on WhatsApp and checks the file is complete before it reaches your finance desk." },
          { problem: "Approvals take days and customers go quiet.", fix: "Automatic status updates and follow-ups, plus test drive and service bookings." },
        ],
        chat: [
          { from: "customer", text: "Salam, I want the 2026 SUV on instalments. I'm a Saudi employee and my salary is 9,000." },
          { from: "agent", text: "Welcome! This SUV is SAR 118,000. With 10% down over 48 months, the indicative instalment is about SAR 2,600 a month. This is an estimate. Final approval comes from the bank or finance company." },
          { from: "customer", kind: "voice", duration: "0:09", transcript: "Which documents do you need?" },
          { from: "agent", text: "Please send: national ID, salary certificate, the last 3 months of bank statements and your GOSI certificate." },
        ],
        video: {
          src: "/videos/automotive_whatsapp_demo.mp4",
          poster: "/videos/automotive_demo_poster.jpg",
          label: "Play the automotive WhatsApp agent demo",
        },
      },
      {
        tab: "Hospitality & Hotels",
        h3: "Hospitality: every language, every hour",
        pairs: [
          { problem: "Guests write in Indonesian, Urdu, Bengali, Turkish, Arabic and English, at any hour.", fix: "The agent replies in the guest's own language, around the clock." },
          { problem: "Peak seasons overload reception with the same questions about rates, distance and check-in.", fix: "The agent handles them, so your team can look after guests in person." },
          { problem: "Direct bookings matter more as new rooms come online.", fix: "Turn enquiries into direct bookings, send arrival details and ask for reviews." },
        ],
        chat: [
          { from: "customer", text: "Is a room available near the Prophet's Mosque in Madinah for 3 nights?" },
          { from: "agent", text: "Yes! A Deluxe room is available at SAR 780 a night, breakfast included. Shall I hold it for you?" },
          { from: "customer", kind: "voice", duration: "0:06", transcript: "Yes, hold it, and I also need an airport transfer." },
          { from: "agent", text: "Done. The room is held for 30 minutes and I've sent a secure payment link. Send your flight number and I'll confirm the driver." },
        ],
      },
    ] as IndustryContent[],
  },
  languages: {
    eyebrow: "Languages",
    h2: "Ready for Pilgrims, in the Languages Your Guests Speak",
    lede: "Your agents answer in the language each guest writes in.",
    list: ["Arabic", "English", "Urdu", "Indonesian", "Bengali", "Hindi", "Turkish", "Uzbek", "Malay", "French"],
    more: "+30 more on request",
    note: "Useful for hotels, serviced apartments, Umrah and Hajj operators, and property sellers serving Muslim buyers abroad.",
  },
  why: {
    eyebrow: "Why CUBIFAI",
    h2: "Why Us",
    items: [
      { title: "Arabic-first, not Arabic-added.", text: "Every agent is built to think and respond in Arabic first, not translated from an English model as an afterthought." },
      { title: "Built for how the GCC actually buys.", text: "Taqseet questions, Ejar and foreign-ownership rules, Hajj and Umrah season: the agents already know the context your customers ask about." },
      { title: "A human is always one message away.", text: "Any call or chat can be handed to your team the instant it needs a person." },
      { title: "Free until it proves itself.", text: "14 to 30 days on your real customers, no commitment before you see results." },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    h2: "Simple Plans. Start Free.",
    lede: "Every plan starts with a free 14 to 30 day trial on your real customers. No commitment until you see results.",
    monthly: "Monthly",
    annual: "Annual",
    annualBadge: "2 months free",
    perMonth: "/ month",
    exclVat: "excl. VAT",
    from: "From",
    popular: "Most popular",
    addonsTitle: "Add-ons",
    plans: {
      starter: {
        name: "Starter",
        desc: "For small teams starting on WhatsApp",
        setup: "One-time setup: SAR 1,500",
        features: [
          "WhatsApp Team of AI Agents: reply, follow-up, booking",
          "1 WhatsApp Business number",
          "Up to 500 conversations a month",
          "Arabic, English and 1 extra language",
          "Understands voice notes",
          "Lead and booking details sent to your team",
          "Monthly results report",
        ],
        button: "Start Free Trial",
      },
      growth: {
        name: "Growth",
        desc: "Voice and WhatsApp working together",
        setup: "One-time setup: SAR 4,500",
        features: [
          "Everything in Starter",
          "AI voice agent for inbound calls, 300 minutes included",
          "Up to 2,500 conversations a month",
          "Outbound reminder and follow-up calls",
          "Arabic, English and 2 extra languages",
          "CRM integration",
          "Industry module: real estate, healthcare, automotive or hospitality",
          "Live hand-off to your staff",
        ],
        button: "Start Free Trial",
      },
      enterprise: {
        name: "Enterprise",
        desc: "For groups, developers and dealer networks",
        setup: "Custom setup",
        features: [
          "Everything in Growth",
          "10,000+ conversations and 1,500+ voice minutes a month",
          "Multiple branches, clinics, hotels or showrooms",
          "Custom workflows and integrations: CRM, property management, dealer systems",
          "Dedicated success manager and service level agreement",
          "Reporting dashboard",
        ],
        button: "Talk to Us",
      },
    },
    addons: ["Extra voice minute: SAR 1.20", "Extra conversation: SAR 0.35", "Extra language: SAR 290 a month"],
    compare: "Growth costs less than one average sales representative in Saudi Arabia (about SAR 4,500 a month, GulfTalent 2024), and it answers 24/7.",
    fine: "Prices in SAR, excluding 15% VAT. Meta's WhatsApp message fees are billed at cost. Annual billing includes two months free. Every plan starts with a free 14 to 30 day trial.",
  },
  faq: {
    eyebrow: "FAQs",
    h2: "Frequently Asked Questions",
    items: [
      { q: "How fast can we go live?", a: "Most businesses are live within days of connecting their phone line and WhatsApp number." },
      { q: "What happens during the free trial?", a: "You run it on real customers. Keep it only if you see results. No commitment either way." },
      { q: "Is our customer data safe?", a: "Yes. We only message customers who've opted in, in line with Saudi PDPL, and data is never sold." },
      { q: "Can a real person step in?", a: "Any call or chat can be handed to your staff at any moment." },
      { q: "Do you support languages beyond Arabic and English?", a: "Yes. See the Languages section for the full list." },
      { q: "What if we want to cancel?", a: "There's no long-term commitment. Cancel anytime after the trial." },
    ],
  },
  responsible: [
    { title: "Consent first", text: "We message customers who opted in, in line with Saudi PDPL." },
    { title: "Human hand-off", text: "Any chat or call can be passed to your staff at any moment." },
    { title: "Indicative only", text: "Financing estimates are never final approvals." },
  ],
  contact: {
    eyebrow: "Contact",
    h2: "Start Your Free Trial",
    lede: "Tell us about your business. We reply on WhatsApp or email within one business day.",
    copy: "Copy email",
    copied: "Copied",
    serving: "Serving Saudi Arabia and the GCC.",
    fields: {
      name: "Full name",
      company: "Company",
      industry: "Industry",
      city: "City",
      whatsapp: "WhatsApp number",
      email: "Email (optional)",
      solution: "What are you interested in?",
      languages: "Languages your customers use",
      budget: "What's your monthly budget for this?",
      decisionMaker: "Are you the decision maker for this purchase?",
      activeNeed: "Do you have an active need for this right now?",
      message: "Anything we should know?",
      select: "Select",
    },
    industries: {
      real_estate: "Real estate & property developers",
      healthcare: "Healthcare & private clinics",
      automotive: "Automobile (showrooms, dealerships & service centers)",
      hospitality: "Hospitality & hotels",
      other: "Other",
    },
    cities: {
      riyadh: "Riyadh",
      jeddah: "Jeddah",
      makkah: "Makkah",
      madinah: "Madinah",
      dammam_khobar: "Dammam and Khobar",
      other_saudi: "Other Saudi city",
      other_gcc: "Other GCC country",
    },
    solutions: { voice: "Voice agent", whatsapp: "WhatsApp agents", both: "Both", unsure: "Not sure yet" },
    budgets: {
      under_1000: "Under SAR 1,000",
      r_1000_3000: "SAR 1,000–3,000",
      r_3000_8000: "SAR 3,000–8,000",
      over_8000: "SAR 8,000+",
    },
    decisionMakerOptions: {
      yes: "Yes",
      influence: "No, but I influence the decision",
      no: "No",
    },
    activeNeedOptions: {
      active: "Active need",
      exploring: "Exploring for later",
    },
    langs: {
      arabic: "Arabic",
      english: "English",
      urdu: "Urdu",
      indonesian: "Indonesian",
      bengali: "Bengali",
      turkish: "Turkish",
      other: "Other",
    },
    consentPre: "I agree to be contacted about CUBIFAI and to the processing of my data as described in the ",
    consentLink: "Privacy Policy",
    consentPost: ".",
    submit: "Request Free Trial",
    sending: "Sending…",
    success: "Thank you. We'll contact you within one business day.",
    error: "Something went wrong. Please try again or email ceo@cubifai.com.",
    errors: {
      required: "Please fill this in",
      whatsapp: "Enter a valid WhatsApp number",
      email: "Enter a valid email",
      consent: "Please accept to continue",
    },
  },
  footer: {
    tagline: "Arabic-first AI agents for Saudi Arabia and the GCC",
    privacy: "Privacy",
    copyright: "© 2026 CUBIFAI. All rights reserved.",
  },
  book: {
    eyebrow: "Book a Demo",
    h2: "See CUBIFAI Working for Your Business",
    lede: "Pick a time below. 30 minutes, no pressure, no slides, just your real inquiries handled live.",
    back: "Back to home",
  },
  privacy: {
    title: "Privacy Policy",
    back: "Back to home",
    body: [
      "CUBIFAI collects the details you submit through our contact form (name, company, industry, city, WhatsApp number, email and message) so we can respond to your enquiry and set up your free trial.",
      "We process this data in line with the Saudi Personal Data Protection Law (PDPL). We do not sell your data, and we only share it with service providers that help us run our business.",
      "You can ask us to access, correct or delete your data at any time by emailing ceo@cubifai.com.",
    ],
  },
};

export type Dict = typeof en;
