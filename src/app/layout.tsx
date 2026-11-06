import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://helpindiafoundation.org"),
  title: { default: "Help India Foundation", template: "%s | Help India Foundation" },
  description: "Help India Foundation works across education, skills, environmental protection and waste management through practical, community-focused initiatives.",
  openGraph: { title: "Help India Foundation", description: "Community participation for a cleaner, more empowered India.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
