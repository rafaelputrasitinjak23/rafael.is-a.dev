"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Headphones,
  X,
  Mail,
  Github,
  Send,
  Instagram,
  Youtube,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

export interface ContactChannel {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  handle: string;
  color: string;
  icon: (props: { className?: string }) => React.ReactNode;
}

interface CustomerServiceWidgetProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
}

export function CustomerServiceWidget({
  isOpen: externalIsOpen,
  onOpen: externalOnOpen,
  onClose: externalOnClose,
  onToggle: externalOnToggle,
}: CustomerServiceWidgetProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;

  const handleToggle = useCallback(() => {
    if (externalOnToggle) {
      externalOnToggle();
    } else if (externalOnClose && externalOnOpen) {
      if (isOpen) externalOnClose();
      else externalOnOpen();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  }, [externalOnToggle, externalOnClose, externalOnOpen, isOpen]);

  const handleClose = useCallback(() => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  }, [externalOnClose]);

  const handleOpen = useCallback(() => {
    if (externalOnOpen) {
      externalOnOpen();
    } else {
      setInternalIsOpen(true);
    }
  }, [externalOnOpen]);

  const email = "zyphraaxd@gmail.com";

  // Listen to Escape key and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleCustomOpen = () => {
      handleOpen();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-contact-modal", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-contact-modal", handleCustomOpen);
    };
  }, [handleClose, handleOpen]);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const channels: ContactChannel[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      category: "Fastest Response",
      description: "Direct chat for urgent inquiries, projects & pricing",
      url: "https://wa.me/6283846147781?text=Hi%20Rafael,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect",
      handle: "+62 838-4614-7781",
      color: "hover:border-emerald-500/40 hover:bg-emerald-500/5",
      icon: ({ className }) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      ),
    },
    {
      id: "telegram",
      name: "Telegram",
      category: "Direct & Bots",
      description: "Chat directly or test active Telegram bot integrations",
      url: "https://t.me/AlightFreeBot",
      handle: "@AlightFreeBot",
      color: "hover:border-sky-500/40 hover:bg-sky-500/5",
      icon: ({ className }) => <Send className={className} />,
    },
    {
      id: "email",
      name: "Email Inbox",
      category: "Formal & Proposals",
      description: "Send project briefs, RFP, and business opportunities",
      url: `mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`,
      handle: email,
      color: "hover:border-amber-500/40 hover:bg-amber-500/5",
      icon: ({ className }) => <Mail className={className} />,
    },
    {
      id: "instagram",
      name: "Instagram",
      category: "Social & DMs",
      description: "Follow updates, daily design experiments & send DMs",
      url: "https://instagram.com/rafaelputrasitinjak",
      handle: "@rafaelputrasitinjak",
      color: "hover:border-pink-500/40 hover:bg-pink-500/5",
      icon: ({ className }) => <Instagram className={className} />,
    },
    {
      id: "tiktok",
      name: "TikTok",
      category: "Video & Showcase",
      description: "Short tech showcases, project demos & workflow clips",
      url: "https://tiktok.com/@rafaelxd_alightfree",
      handle: "@rafaelxd_alightfree",
      color: "hover:border-cyan-500/40 hover:bg-cyan-500/5",
      icon: ({ className }) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
    {
      id: "youtube",
      name: "YouTube",
      category: "Tutorials & Walkthroughs",
      description: "In-depth code walkthroughs, tool reviews & dev guides",
      url: "https://youtube.com/@RafaelXD_offc",
      handle: "@RafaelXD_offc",
      color: "hover:border-red-500/40 hover:bg-red-500/5",
      icon: ({ className }) => <Youtube className={className} />,
    },
    {
      id: "github",
      name: "GitHub",
      category: "Code & Repositories",
      description: "Open source repositories, experiments & commit activity",
      url: "https://github.com/RafaellCodee",
      handle: "https://github.com/RafaellCodee",
      color: "hover:border-purple-500/40 hover:bg-purple-500/5",
      icon: ({ className }) => <Github className={className} />,
    },
  ];

  return (
    <>
      {/* 01. Floating Bottom-Right Customer Service Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Subtle Tooltip Label on desktop */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70 uppercase tracking-widest pointer-events-none select-none shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Customer Service &bull; Contact</span>
        </div>

        {/* The Customer Service Circular/Box Button */}
        <button
          type="button"
          id="customer-service-btn"
          onClick={handleToggle}
          aria-label="Open Customer Service & Contact Menu"
          data-cursor="button"
          className={`relative group flex items-center justify-center w-14 h-14 bg-[#0A0A0A] border transition-all duration-300 shadow-2xl ${
            isOpen
              ? "border-white bg-white text-black rotate-90 scale-105"
              : "border-white/20 text-white hover:border-white hover:scale-105 hover:bg-[#111111]"
          }`}
        >
          {/* Online status indicator dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#050505]" />
            </span>
          )}

          {isOpen ? (
            <X className="w-5 h-5 text-black" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Headphones className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
          )}
        </button>
      </div>

      {/* 02. Customer Service Modal / Dialog Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-6 sm:pr-8 md:pr-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Floating Contact Drawer Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:max-w-md max-h-[85vh] flex flex-col bg-[#080808] border border-white/20 shadow-2xl overflow-hidden font-sans"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 bg-[#0D0D0D] border-b border-white/10 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400">
                      CUSTOMER SERVICE & DIRECT CONTACT
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                    Connect With Rafael
                  </h3>
                  <p className="text-xs text-white/50 font-sans">
                    Choose your preferred channel below. Direct response for inquiries, projects & questions.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 text-white/40 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Channels List (Scrollable) */}
              <div className="p-4 sm:p-5 space-y-2.5 overflow-y-auto max-h-[50vh] divide-y divide-white/5">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.id}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`cs-link-${channel.id}`}
                      className={`group flex items-center justify-between p-3 sm:p-3.5 bg-[#0D0D0D] border border-white/5 transition-all duration-200 ${channel.color}`}
                      data-cursor="link"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 flex items-center justify-center bg-[#141414] border border-white/10 text-white shrink-0 group-hover:border-white/40 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                              {channel.name}
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.2 bg-white/5 text-white/40 uppercase tracking-widest">
                              {channel.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-white/40 font-mono truncate max-w-[200px] sm:max-w-[240px]">
                            {channel.handle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-2">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Footer Quick Actions */}
              <div className="p-4 sm:p-5 bg-[#0D0D0D] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-white/60 text-[11px] truncate">
                  <Mail className="w-3.5 h-3.5 text-white/40" />
                  <span className="truncate">{email}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white text-white hover:text-black text-[10px] font-mono uppercase tracking-widest transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
