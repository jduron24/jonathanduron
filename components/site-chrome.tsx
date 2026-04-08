"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Builds" },
  { href: "/blog", label: "Blog" }
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.04]" />
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="font-display text-3xl uppercase tracking-[0.12em] text-foreground"
          >
            JD
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  pathname === item.href
                    ? "bg-card text-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-border bg-background px-5 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm",
                      pathname === item.href ? "bg-card" : "bg-muted/60"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
      <main className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="mx-auto mt-10 max-w-6xl border-t border-border/70 px-5 py-8 md:px-8">
        <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Jonathan Duron</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2"> 
            <a
              href="https://github.com/jduron24/"
              className="transition hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jonathanduron25/"
              className="transition hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Jd5063699248456"
              className="transition hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:bg-muted"
      aria-label="Toggle theme"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
