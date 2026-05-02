export type Project = {
  id: string;
  name: string;

  // Collapsed
  tagline: string;
  shortDescription: string;
  techStack: string[];

  // Expanded
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];

  // Links
  sourceCode?: string;
  liveDemo?: string;
  demoVideo?: string;
  imageSrc?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "db-talk",
    name: "DB-Talk",

    tagline: "Safe, natural language database querying",
    shortDescription:
      "A self-hosted AI-powered assistant that lets developers query PostgreSQL and MongoDB databases using plain English without writing any queries.",

    techStack: [
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "LLM APIs",
      "Drizzle ORM",
      "Docker",
    ],

    problem:
      "Debugging database-level issues required opening database clients, manually writing queries, and repeatedly context-switching during development.",

    solution:
      "Built a self-hosted system that converts natural language questions into safe queries, executes them against the database, and returns results instantly, eliminating manual query writing.",

    architecture: [
      "Fastify backend managing database connections and request lifecycle",
      "Schema extraction at connection time and caching in Redis",
      "Deterministic schema pruning before sending context to the LLM",
      "LLM-powered natural language to query translation",
      "Strict query validation allowing only SELECT statements",
      "Single active database mapping with connection pooling",
      "PostgreSQL for storing user-managed database metadata using Drizzle ORM",
      "Fully dockerized services with a single docker-compose setup",
    ],

    keyFeatures: [
      "Natural language to query conversion",
      "Read-only query execution (SELECT-only safety guarantees)",
      "Schema-aware querying with context size control",
      "Self-hosted and developer-controlled deployment",
    ],

    sourceCode: "https://github.com/KAMAL-02/DB-Talk",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1768132757/dOEGtD5cEuEGdBNE_aiu7eo.mp4",
  },

  {
    id: "payout-engine",
    name: "Payout Engine",

    tagline: "Payout orchestration with ledger integrity and fault-tolerant processing",
    shortDescription:
      "Simulates real-world money movement using append-only ledger, idempotent APIs, row-level locking, and async processing with retries.",

    techStack: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    problem:
      "Payout systems are correctness-critical: they must prevent duplicate disbursements, remain safe under concurrent requests, preserve an auditable source of truth for balances, and recover gracefully from delayed or failed processing.",

    solution:
      "Engineered a resilient payout engine that derives balances from an append-only ledger, enforces idempotent request handling, serializes balance reservation with database row locks, and offloads payout execution to asynchronous workers with retry and recovery workflows.",

    architecture: [
      "Django REST API exposing merchant balances, payout initiation, and payout history endpoints",
      "PostgreSQL-backed ledger architecture with credit, hold, debit, and release events as the financial source of truth",
      "Atomic payout creation flow using transaction.atomic and select_for_update() to prevent race conditions during fund reservation",
      "Persistent idempotency layer storing request hashes, execution state, and replayable API responses for duplicate-safe retries",
      "Celery + Redis powered background processing pipeline with retry scheduling for stuck or delayed payouts",
      "React + TypeScript operations dashboard for merchant selection, live balance visibility, payout submission, and payout lifecycle monitoring",
    ],

    keyFeatures: [
      "Ledger-driven balance computation with integer money storage for financial accuracy",
      "Concurrency-safe payout reservation using transactional locking",
      "Idempotent payout creation with stored response replay and conflict detection",
      "State-machine based payout lifecycle validation with async retry orchestration",
      "Operational dashboard for balances, ledger activity, payout history, and live status refresh",
      "Backend tests covering idempotency guarantees and simultaneous payout race conditions",
    ],

    sourceCode: "https://github.com/KAMAL-02/Payout-Engine.git",
    liveDemo: "https://payout-engine-chi.vercel.app/",
  },

  {
    id: "rate-limit",
    name: "Rate Limit",

    tagline: "In-memory and distributed rate limiting",
    shortDescription:
      "Implementation of sliding window and token bucket rate limiting algos with both in-memory and Redis-backed approaches.",

    techStack: ["Python", "FastAPI", "Redis", "Lua", "Thread Locks"],

    problem:
      "Rate limiting is often explained conceptually, but understanding how algorithm choice, race conditions, and distributed state affect correctness requires a hands-on implementation.",

    solution:
      "Built a FastAPI project that implements sliding window and token bucket limiters using both in-memory and Redis backends, with per-key locking for local thread safety and Lua scripts for atomic distributed enforcement.",

    architecture: [
      "FastAPI application for testing and comparing rate limiting behaviors",
      "Sliding window limiter storing and pruning per-request timestamps",
      "Token bucket limiter managing capacity, refill rate, and token consumption",
      "In-memory backend protected by per-key locks for same-key concurrency safety",
      "Redis backend centralizing limiter state across multiple app instances",
      "Lua scripts executing multi-step Redis logic atomically to avoid race conditions",
      "Comparison of latency, consistency, and scalability tradeoffs across both backends",
    ],

    keyFeatures: [
      "Sliding window and token bucket implementations",
      "Both in-memory and Redis-backed limiter variants",
      "Per-key locking for thread-safe in-memory limiting",
      "Atomic Lua-scripted Redis operations for distributed correctness",
    ],

    sourceCode: "https://github.com/KAMAL-02/Rate-Limit",
  },

  {
    id: "postbro",
    name: "PostBro",

    tagline: "Real-time API testing",
    shortDescription:
      "A Postman-inspired API testing platform built to deeply understand API request lifecycles and WebSocket-based real-time systems.",

    techStack: [
      "Next.js",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Zustand",
    ],

    problem:
      "Curiosity about how tools like Postman handle API requests, state, and real-time behavior under the hood.",

    solution:
      "Built an API testing platform from scratch to explore request structure, WebSocket connections, and real-time collaboration at a systems level.",

    architecture: [
      "Next.js frontend with Zustand for per-tab request state management",
      "Node.js backend exposing REST APIs for request execution",
      "WebSocket server for real-time request and response streaming",
      "PostgreSQL database managed via Prisma ORM",
      "Dockerized backend and database services",
    ],

    keyFeatures: [
      "Per-tab independent request lifecycle",
      "Live WebSocket message inspection",
      "Persistent request and response history",
    ],

    sourceCode: "https://github.com/KAMAL-02/Postbro",
    liveDemo: "https://postbro-tau.vercel.app/",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1768132603/postbro.mkv",
  },

  {
    id: "gitsense",
    name: "GitSense",

    tagline: "Automated GitHub activity insights",
    shortDescription:
      "A VS Code extension that summarizes coding activity and keeps personal GitHub profiles consistently active.",

    techStack: ["TypeScript", "VS Code API", "Gemini API", "GitHub API"],

    problem:
      "Professional workflows often obscure individual contributions after branch merges, and many developers use separate work accounts or emails, making it difficult to consistently maintain visible activity on their personal GitHub profiles.",

    solution:
      "Built a VS Code extension that analyzes local coding activity, generates summaries using AI, and periodically publishes commits to a GitHub repository.",

    architecture: [
      "VS Code extension written in TypeScript",
      "Local activity analysis and summarization",
      "Gemini API for generating commit summaries",
      "GitHub API for automated commit creation",
    ],

    keyFeatures: [
      "Automated coding activity summarization",
      "Scheduled commit generation",
      "Seamless VS Code integration",
    ],

    sourceCode: "https://github.com/KAMAL-02/GitSense",
    liveDemo:
      "https://marketplace.visualstudio.com/items?itemName=KAMAL-02.gitsense",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1737220246/GItSense_ths9nu.mp4",
  },
  {
    id: "quicklinks",
    name: "QuickLinks",

    tagline: "Keyword-based shortcuts for URLs",
    shortDescription:
      "A Chrome extension that lets you map short keywords to long URLs and instantly open links by typing the keyword.",

    techStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Chrome Extension APIs",
      "Chrome Storage",
    ],

    problem:
      "Frequently accessing long or complex URLs required bookmarking or repeatedly copying links, which was inefficient during daily workflows.",

    solution:
      "Built a Chrome extension that allows users to assign short keywords to long URLs, enabling instant access to saved links by simply entering the keyword.",

    architecture: [
      "Chrome extension built with React and TypeScript",
      "Popup UI for managing keyword-to-link mappings",
      "Chrome Storage API for persistent local data",
    ],

    keyFeatures: [
      "Keyword-based link shortcuts",
      "Persistent storage using Chrome Storage",
      "Lightweight popup-based UI",
      "Instant redirection to saved links",
    ],

    sourceCode: "https://github.com/KAMAL-02/QuickLinks",
    liveDemo: "https://github.com/KAMAL-02/QuickLinks",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1730994176/Quicklinks_edhzua.mp4",
  },
  {
    id: "ellipsis",
    name: "Ellipsis",

    tagline: "Code & PR analysis with GitHub integration",
    shortDescription:
      "A tool that analyzes code and pull requests and allows posting analysis directly as comments on GitHub PRs.",

    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "shadcn/ui",
      "GitHub API",
    ],

    problem:
      "This project was built to explore GitHub’s APIs and understand how pull requests, reviews, and comments work programmatically.",

    solution:
      "Built a system that connects to GitHub repositories, analyzes code or pull requests, and posts structured feedback directly as PR comments.",

    architecture: [
      "Next.js application handling UI and API routes",
      "GitHub API integration for PR access and commenting",
      "PostgreSQL database managed with Prisma ORM",
      "Analysis pipeline to process code or PR diffs",
    ],

    keyFeatures: [
      "GitHub repository and PR integration",
      "Automated code and PR analysis",
      "Direct commenting on pull requests",
      "Clean, minimal UI using shadcn/ui",
    ],

    sourceCode: "https://github.com/KAMAL-02/Ellipsis",
    liveDemo: "https://ellipsis-ruby.vercel.app/",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729768737/20241024-1115-55.7242109_xfvxoe.mp4",
  },
  {
    id: "linkup",
    name: "LinkUp",

    tagline: "Real-time chat application",
    shortDescription:
      "A WhatsApp-inspired chat application built to understand real-time communication and user presence.",

    techStack: ["Next.js", "TypeScript", "Convex", "Clerk", "Tailwind CSS"],

    problem:
      "Understanding how real-time chat systems work required building a system that handles live messaging and user connections.",

    solution:
      "Built a real-time chat application to explore how users connect, exchange messages, and stay in sync across sessions.",

    architecture: [
      "Next.js frontend for chat UI",
      "Convex backend for real-time data and messaging",
      "Clerk for authentication and user management",
    ],

    keyFeatures: [
      "Real-time messaging",
      "User authentication and presence",
      "Simple, chat-focused UI",
    ],

    sourceCode: "https://github.com/KAMAL-02/LinkUp",
    liveDemo: "https://link-up-three.vercel.app/",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729063268/20241016-0719-12.9521917_qjswsa.mp4",
  },

  {
    id: "codehub",
    name: "CodeHub",

    tagline: "GitHub API explorer and interface",
    shortDescription:
      "A web interface to interact with GitHub’s APIs for exploring repositories, users, and related data.",

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Passport.js",
      "GitHub API",
    ],

    problem:
      "Understanding GitHub’s APIs and authentication flows required hands-on experimentation beyond documentation.",

    solution:
      "Built a web application that authenticates users via GitHub and provides an interface to explore repositories and related GitHub data.",

    architecture: [
      "React frontend for UI and data visualization",
      "Node.js backend handling GitHub API requests",
      "Passport.js for GitHub OAuth authentication",
      "MongoDB for storing user and session data",
    ],

    keyFeatures: [
      "GitHub OAuth authentication",
      "Repository and user data exploration",
      "Clean and responsive UI",
    ],

    sourceCode: "https://github.com/KAMAL-02/Codehub",
    liveDemo: "https://codehub-d7oo.onrender.com/",
    demoVideo:
      "https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729062837/20241016-0712-39.9608416_lgupvx.mp4",
  },
];
