import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import localFont from "next/font/local";

const linkSans = localFont({
  src: "../../public/link-sans.woff2",
});

export const metadata: Metadata = {
  title: "Linkleaf",
  description: "description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={linkSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
