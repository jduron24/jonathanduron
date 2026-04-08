import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Jonathan Duron",
    template: "%s | Jonathan Duron"
  },
  description:
    "[PLACEHOLDER] Personal website for recruiters, collaborators, and curious people on the internet.",
  openGraph: {
    title: "Jonathan Duron",
    description:
      "[PLACEHOLDER] Personal website for recruiters, collaborators, and curious people on the internet.",
    type: "website",
    url: "https://example.com",
    images: ["/og"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Duron",
    description:
      "[PLACEHOLDER] Personal website for recruiters, collaborators, and curious people on the internet.",
    images: ["/og"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
