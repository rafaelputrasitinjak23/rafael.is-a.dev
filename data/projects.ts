export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  username?: string;
  image: string;
  technologies: string[];
  year: string;
  private: boolean;
  featured?: boolean;
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    id: "alightfree",
    number: "01",
    title: "AlightFree",
    category: "Web Platform / Automation",
    description:
      "A modern web platform for Alight Motion premium activation, automation, verification, and realtime analytics.",
    url: "https://alightfree.my.id",
    image: "https://rafaelxd.my.id/raw/vnmd4um0",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    year: "2026",
    private: false,
    featured: true,
    highlights: [
      "Automated verification pipeline",
      "Realtime server-side analytics",
      "High concurrency queue handling",
      "Secure tokenized session auth",
    ],
  },
  {
    id: "rafaelxd-tools",
    number: "02",
    title: "RafaelXD Tools",
    category: "Web Tools",
    description:
      "A collection of lightweight web utilities including URL shortening and file uploading tools.",
    url: "https://rafaelxd.my.id",
    image: "https://rafaelxd.my.id/raw/wpkkeu24",
    technologies: ["Web", "API", "Short URL", "File Upload"],
    year: "2026",
    private: false,
    featured: true,
    highlights: [
      "Instant slug generation & redirect engine",
      "Multipart file streaming with CDN storage",
      "API key rate limiter and metrics",
      "Sub-50ms global redirection latency",
    ],
  },
  {
    id: "rafael-store",
    number: "03",
    title: "Rafael Store",
    category: "E-Commerce",
    description:
      "A custom e-commerce website designed for a clean and straightforward online shopping experience.",
    url: "https://toko.rafaelcode.my.id",
    image: "https://rafaelxd.my.id/raw/aovamj0t",
    technologies: ["Web", "E-Commerce", "API"],
    year: "2026",
    private: false,
    featured: true,
    highlights: [
      "Minimalist single-flow checkout",
      "Realtime inventory synchronization",
      "Automated WhatsApp & Telegram payment alerts",
      "Zero-clutter product catalog UI",
    ],
  },
  {
    id: "alightfree-bot",
    number: "04",
    title: "AlightFree Bot",
    category: "Telegram Bot",
    description:
      "A Telegram bot version of the AlightFree platform, bringing its functionality into an interactive chat experience.",
    url: "https://t.me/AlightFreeBot",
    username: "@AlightFreeBot",
    image: "https://rafaelxd.my.id/raw/ygxkzmfr",
    technologies: ["Telegram Bot API", "Node.js", "Automation"],
    year: "2026",
    private: false,
    featured: true,
    highlights: [
      "Interactive inline keyboard navigation",
      "High-throughput webhook event handler",
      "Instant account verification in chat",
      "Asynchronous background task processing",
    ],
  },
  {
    id: "zyphraxd",
    number: "05",
    title: "ZyphraXD",
    category: "WhatsApp Bot",
    description:
      "A private WhatsApp automation and bot project built for experiments, utilities, and custom automation workflows.",
    image: "https://rafaelxd.my.id/raw/s163fmaz",
    technologies: ["Node.js", "WhatsApp", "Automation"],
    year: "2026",
    private: true,
    featured: false,
    highlights: [
      "Custom socket event listeners",
      "Automated utility scripting and trigger hooks",
      "Isolated containerized sandbox execution",
      "Private telemetry and session guardian",
    ],
  },
];
