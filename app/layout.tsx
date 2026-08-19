import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Rafael.is-a.dev — Rafael | Developer, Builder & Creator",
  description:
    "Personal portfolio of Rafael — developer building websites, tools, bots, automation, AI systems, and digital experiences.",
  applicationName: "Rafael Portfolio",
  authors: [{ name: "Rafael", url: "https://rafael.is-a.dev" }],
  generator: "Next.js",
  keywords: [
    "Rafael",
    "Rafael developer",
    "Rafael.is-a.dev",
    "Full-Stack Developer",
    "Bot Automation",
    "Next.js Developer",
    "AlightFree",
    "Software Engineer",
    "TypeScript",
    "AI Integration",
  ],
  metadataBase: new URL("https://rafael.is-a.dev"),
  alternates: {
    canonical: "https://rafael.is-a.dev",
  },
  openGraph: {
    title: "Rafael.is-a.dev — Rafael | Developer, Builder & Creator",
    description:
      "Developer focused on building useful, fast, and interactive digital experiences. Explore selected projects, tech stack, and experiments.",
    url: "https://rafael.is-a.dev",
    siteName: "Rafael.is-a.dev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Rafael.is-a.dev — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael.is-a.dev — Rafael | Developer, Builder & Creator",
    description:
      "Developer focused on building useful, fast, and interactive digital experiences.",
    creator: "@rafael",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rafael",
    url: "https://rafael.is-a.dev",
    jobTitle: "Software Developer & Builder",
    description:
      "Developer focused on building useful, fast, and interactive digital experiences.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Telegram Bot API",
      "Automation",
      "Google Gemini",
      "OpenAI",
    ],
    sameAs: [
      "https://github.com",
      "https://t.me/AlightFreeBot",
      "https://alightfree.my.id",
      "https://rafaelxd.my.id",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 font-family=%22monospace%22 font-weight=%22bold%22 fill=%22%23ffffff%22>R</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-[#f5f5f5] antialiased selection:bg-white selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
