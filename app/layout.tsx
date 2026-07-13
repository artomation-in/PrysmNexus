import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const imageUrl = `${protocol}://${host}/og.png`;
  return {
    title: "Marpixel — Growth Marketing Agency",
    description: "Data-driven strategy, creative campaigns, and performance marketing for modern brands.",
    openGraph: { title: "Marpixel — Growth Marketing Focused", description: "Strategy, creativity, and performance built for modern business.", images: [{ url: imageUrl, width: 1792, height: 912 }] },
    twitter: { card: "summary_large_image", title: "Marpixel — Growth Marketing Focused", description: "Strategy, creativity, and performance built for modern business.", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
