import type { Metadata } from "next";
import "./globals.css";

/**
 * Root Layout — Minimal shell.
 * The actual HTML structure is in [locale]/layout.tsx.
 */
export const metadata: Metadata = {
  title: "VantageTech Solutions",
  description: "Enterprise digital solutions and legal office management systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
