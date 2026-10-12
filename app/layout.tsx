import type { Metadata } from "next";
import "../src/index.css";

export const metadata: Metadata = {
  title: "Nexus Analytics",
  description: "A responsive analytics dashboard powered by JSONPlaceholder",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
