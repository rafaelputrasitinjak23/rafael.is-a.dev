export interface ExperimentItem {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
  status: "Completed" | "Active" | "Research";
  demoUrl?: string;
  githubUrl?: string;
}

export const experimentsData: ExperimentItem[] = [
  {
    id: "exp-01",
    name: "Webhook Event Dispatcher",
    category: "Automation / API",
    year: "2026",
    description:
      "Ultra-low latency webhook router with retry queues, signature verification, and automated alerting channels.",
    tech: ["Node.js", "Express", "Crypto", "Redis"],
    status: "Active",
  },
  {
    id: "exp-02",
    name: "LLM Agent Tool Harness",
    category: "AI / Workflows",
    year: "2026",
    description:
      "Structured function calling bridge linking Gemini and OpenAI models directly to local system execution pipelines.",
    tech: ["TypeScript", "Google Gemini API", "JSON Schema"],
    status: "Completed",
  },
  {
    id: "exp-03",
    name: "Telegram Media Parser",
    category: "Bot / Utility",
    year: "2026",
    description:
      "Automated bot utility for parsing video metadata, compressing payloads, and generating instant download tokens.",
    tech: ["Telegram API", "Node.js", "FFmpeg"],
    status: "Active",
  },
  {
    id: "exp-04",
    name: "Zero-Dependency Micro Router",
    category: "Developer Tool",
    year: "2025",
    description:
      "Minimalist client-side URL routing and state dispatch engine built under 2KB for lightning-fast micro apps.",
    tech: ["TypeScript", "Vanilla JS", "DOM API"],
    status: "Completed",
  },
  {
    id: "exp-05",
    name: "Headless Web Scraper & Form Automator",
    category: "Automation",
    year: "2025",
    description:
      "Resilient scraping pipeline with session preservation, anti-bot evasion heuristics, and structured JSON outputs.",
    tech: ["Python", "Playwright", "FastAPI"],
    status: "Completed",
  },
];
