import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { siteUrl } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Help India Foundation", template: "%s | Help India Foundation" },
  description: "Help India Foundation works across education, skills, environmental protection and waste management through practical, community-focused initiatives.",
  alternates: { canonical: "/" },
  openGraph: { title: "Help India Foundation", description: "Community-centred work in education, livelihoods, environmental protection and waste management.", type: "website", url: "/" },
  twitter: { card: "summary", title: "Help India Foundation", description: "Community-centred work in education, livelihoods, environmental protection and waste management." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
