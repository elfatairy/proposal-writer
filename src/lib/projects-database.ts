export const PROJECTS_DATABASE = [
  {
    title: "Guardiora",
    link: "https://guardiora.app",
    techStack: [
      "React Native",
      "Expo",
      "Kotlin",
      "Swift",
      "Next.js",
      "Supabase",
      "TypeScript",
    ],
    oneSentenceSummary:
      "A cross-platform screen time management and parental control system featuring deep native-level integration for iOS and Android.",
    problemSolved:
      "Overcame the limitations of hybrid frameworks by building custom bridges to access system-level device activity and app-blocking APIs on both mobile platforms.",
    keyFeatures: [
      "Cross-Platform Native Modules: Developed custom Swift and Kotlin modules to interface with native device APIs, integrated seamlessly via Expo Native Modules.",
      "Parental Command Center: Built a web-based dashboard for parents to remotely monitor usage, set app-specific time limits, and trigger instant system-level blocks.",
      "Native App Blocking: Implemented robust blocking mechanisms that interact directly with iOS and Android system APIs to ensure reliable parental control.",
      "Comprehensive UI/UX: Designed and developed secure authentication flows and a complex settings interface for managing multiple devices.",
    ],
    results:
      "Created a production-grade parental control solution that achieves the performance and deep-system access of a fully native application.",
  },
  {
    title: "Infotik",
    link: "https://redirect.infotik.co",
    techStack: [
      "React Native",
      "Expo",
      "Typescript",
      "Node.js",
      "Stripe",
      "WebSockets",
      "Redux",
    ],
    oneSentenceSummary:
      "A multifaceted social ecosystem featuring short-form video, real-time networking, and integrated device management tools.",
    problemSolved:
      "Engineered high-performance content delivery and complex system-level integrations, including custom real-time messaging and device usage monitoring.",
    keyFeatures: [
      "Content Ecosystem: Built TikTok-style scrolling (Tiks) and Twitter-style posting (Pulses) with optimized lazy-loading and 60fps performance.",
      "Device Management: Developed app-blocking and device usage monitoring systems for enhanced user control.",
      "Real-Time Social: Custom WebSocket-based internal chat system, following mechanisms, and interactive commenting on all content types.",
      "Social Sharing Engine: Cross-platform deep-linking with dynamic Open Graph (OG) metadata to drive external engagement.",
      "Ad-Tech Suite: Full advertiser dashboard with Stripe payment integration and real-time ad performance tracking.",
    ],
    results:
      "Successfully managed the full frontend lifecycle for an app with 10k+ users, delivering a seamless blend of entertainment and productivity features.",
  },
  {
    title: "IdeaWall",
    link: "https://ideawall.omarhassan.net",
    techStack: ["React", "Supabase", "Motion.dev", "TypeScript", "Playwright"],
    oneSentenceSummary:
      "A collaborative real-time whiteboard for brainstorming with sticky notes and live cursor tracking.",
    problemSolved:
      "Implemented high-concurrency real-time features (cursors, notes) while preventing bandwidth abuse through custom throttling and multi-language profanity moderation.",
    keyFeatures: [
      "Real-time cursor broadcasting with custom throttling to ensure performance",
      "Anonymous collaborative entry with auto-generated profiles",
      "Extended profanity filtering supporting both Arabic and English",
      "Automated E2E testing using Playwright with saved authentication states",
    ],
    results:
      "Built a production-ready collaborative tool that works consistently across all browsers, including custom zoom fixes for Firefox CI/CD.",
  },
  {
    title: "Dynamic Gridline",
    link: "https://www.npmjs.com/package/dynamic-gridline",
    techStack: ["TypeScript", "Motion.dev", "TSUP", "PNPM Workspaces"],
    oneSentenceSummary:
      "A highly configurable, performance-optimized React grid background package for canvas-based applications.",
    problemSolved:
      "Solved the performance bottleneck of React state-driven animations by utilizing hybrid CSS/JavaScript animations via Motion.dev.",
    keyFeatures: [
      "Compound Component Pattern architecture for seamless zoom and pan state sharing",
      "Optimized build configuration with TSUP for CSS-in-JS bundling",
      "Developer-friendly API with sensible defaults and high configurability",
    ],
    results:
      "Published as a public NPM package with 70+ downloads within the first 24 hours.",
  },
  {
    title: "Taska",
    link: "https://taska.omarhassan.net",
    techStack: [
      "React",
      "TypeScript",
      "SVGR",
      "PNPM",
      "Clerk",
      "Convex",
      "Next.js",
      "Tailwind",
      "Shadcn UI",
    ],
    oneSentenceSummary:
      "A multi-role project management system designed for end-to-end sprint lifecycles and organizational team tracking.",
    problemSolved:
      "Engineered a scalable frontend to handle complex organizational hierarchies and a custom mock API system that simulates real-world network conditions and errors.",
    keyFeatures: [
      "End-to-End Sprint Management: Supports backlog preparation, live progress tracking, and automated carryover of unfinished tasks to future sprints.",
      "Hierarchical Role System: Specialized workflows for Company tracking, Project Managers (sprint creation), and Team Leads (backlog management).",
      "Realistic Mock Backend: Built-in probability-based error generation and artificial delays to ensure UI stability under real network conditions.",
      "Scalable Icon Architecture: Automated SVG-to-React component conversion for a consistent and maintainable design system.",
    ],
    results:
      "Built a production-ready dashboard capable of managing complex, multi-stage developer workflows with a clean, maintainable codebase.",
  },
  {
    title: "Personal Portfolio & Brand",
    link: "https://omarhassan.net",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Motion.dev",
      "React-markdown",
    ],
    oneSentenceSummary:
      "A high-performance, SEO-optimized personal brand platform showcasing technical depth through interactive project narratives.",
    problemSolved:
      "Created a centralized hub to bridge the gap between raw code and user-facing value, focusing on technical storytelling and performance-first design.",
    keyFeatures: [
      "Dynamic Case Studies: Built a custom React-markdown system to showcase project struggles, solutions, and media demos.",
      "Advanced UI/UX: Implemented complex Motion.dev animations and a seamless Light/Dark mode system using Shadcn UI.",
      "SEO & Performance Optimization: Leveraged Next.js Server Components and Image optimization to achieve top-tier Lighthouse scores.",
      "Integrated Lead Generation: Custom-built contact system for direct client inquiries and conversions.",
    ],
    results:
      "Serves as a living demo of my frontend proficiency, resulting in improved search visibility and higher client conversion rates.",
  },
  {
    title: "Learn Corporate",
    link: "https://www.app.learncorporate.com",
    techStack: [
      "React",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "Recharts",
    ],
    oneSentenceSummary:
      "A comprehensive SaaS platform for personal finance management, investment tracking, and financial education.",
    problemSolved:
      "Engineered a secure cross-subdomain architecture (app vs. marketing site) and a high-performance financial dashboard to visualize complex income/investment data.",
    keyFeatures: [
      "Financial Tracking: Real-time income and expense monitoring with automated budgeting tools.",
      "Investment Management: Integrated dashboard for tracking portfolio performance and diverse asset classes.",
      "Data Visualization: Interactive, responsive financial charts and reporting built with Recharts.",
      "Educational Marketplace: Subscription-based system for paid financial tutorials and professional articles.",
      "Cross-Domain Persistence: Implemented custom cookie-based authentication to share data seamlessly across subdomains.",
    ],
    results:
      "Delivered a secure, production-ready SaaS application that handles sensitive user financial data with high reliability and performance.",
  },
];
