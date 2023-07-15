import { Metadata } from "next";

// eslint-disable-next-line sort-imports
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - lilis.dev",
    default: "lilis.dev",
  },
  description: "m1sk9's portfolio",
  generator: "Next.js",
  applicationName: "Next.js",
  authors: [{ name: "m1sk9" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes={"any"} />
      </head>
      <body>{children}</body>
    </html>
  );
}
