import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "Saad Aiddi — Cyber Security Engineer",
    description:
      "Cybersecurity researcher and doctoral student at UM6P focused on cyber-physical systems, industrial control systems, SCADA, intelligent intrusion detection, and photovoltaic infrastructure.",
    openGraph: {
      title: "Saad Aiddi — Cyber Security Engineer",
      description: "Cybersecurity for systems that touch the physical world.",
      url: baseUrl,
      siteName: "Saad Aiddi",
      images: [
        {
          url: new URL("/og.png", baseUrl).toString(),
          width: 1731,
          height: 909,
          alt: "Saad Aiddi — Cyber Security Engineer",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Saad Aiddi — Cyber Security Engineer",
      description: "Cybersecurity for systems that touch the physical world.",
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
