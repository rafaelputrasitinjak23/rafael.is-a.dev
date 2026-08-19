export interface TechItem {
  name: string;
  level: string;
  description: string;
  tags: string[];
}

export interface TechCategory {
  id: string;
  category: string;
  items: TechItem[];
}

export const techStackData: TechCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    items: [
      {
        name: "React / Next.js",
        level: "Intermediate",
        description:
          "Building responsive interfaces, web applications, and interactive experiences.",
        tags: ["App Router", "SSR / SSG", "Server Components", "Hooks"],
      },
      {
        name: "JavaScript / TypeScript",
        level: "Intermediate",
        description:
          "Application logic, APIs, reusable components, and modern web development.",
        tags: ["ESNext", "Type Safety", "Async / Await", "Clean Architecture"],
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        description:
          "Responsive UI systems, design systems, layouts, and rapid interface development.",
        tags: ["Utility-First", "Dark Mode", "Custom Scales", "Micro-Interactions"],
      },
    ],
  },
  {
    id: "backend",
    category: "Backend & Database",
    items: [
      {
        name: "Node.js / Express",
        level: "Intermediate",
        description:
          "REST APIs, backend services, automation, and server-side applications.",
        tags: ["RESTful APIs", "Middleware", "Webhooks", "Microservices"],
      },
      {
        name: "Python",
        level: "Basic — Intermediate",
        description:
          "Automation, scripting, APIs, and experimentation.",
        tags: ["FastAPI", "Web Scraping", "Automation Scripts", "Data Parsing"],
      },
      {
        name: "PostgreSQL / Supabase / MongoDB",
        level: "Intermediate",
        description:
          "Database design, data storage, queries, authentication, and application backends.",
        tags: ["Schema Design", "Indexing", "NoSQL Aggregations", "Auth Flow"],
      },
    ],
  },
  {
    id: "ai-llm",
    category: "Artificial Intelligence & LLMs",
    items: [
      {
        name: "Google Gemini",
        level: "API & Integration",
        description:
          "Integrating Gemini models into applications, tools, and AI-powered workflows.",
        tags: ["Multimodal", "Function Calling", "Gemini 2.5/Flash", "Structured Output"],
      },
      {
        name: "ChatGPT / OpenAI",
        level: "API & Prompt Engineering",
        description:
          "OpenAI API integration, structured prompting, and AI-powered application workflows.",
        tags: ["GPT-4o", "Embeddings", "System Prompting", "JSON Schema"],
      },
      {
        name: "Claude / Anthropic",
        level: "LLM Workflows",
        description:
          "Building workflows and applications around Claude models.",
        tags: ["Long Context", "Reasoning Pipelines", "Artifacts Integration"],
      },
      {
        name: "DeepSeek",
        level: "Model Integration",
        description:
          "Integrating alternative LLM models into applications and experiments.",
        tags: ["Cost Efficiency", "Code Generation", "Local & Cloud Deployments"],
      },
      {
        name: "AI Automation",
        level: "Agents & Tools",
        description:
          "AI automation, agents, tool usage, workflow orchestration, and intelligent developer tools.",
        tags: ["Autonomous Agents", "Tool Calling", "Chained Execution", "RAG"],
      },
    ],
  },
];
