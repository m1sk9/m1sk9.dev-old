import { Metadata } from "next";
import pkg from "package.json" assert { type: "json" };

export const metadata: Metadata = {
  title: {
    template: "%s - lilis.dev",
    default: "lilis.dev",
  },
  description: "lis's portfolio",
  generator: "Next.js",
  applicationName: "Next.js",
  authors: [{ name: "lis2a" }],
  twitter: {
    title: "lilis.dev",
    description: "lis's portfolio",
    site: "@lis2a_o0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
