import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const info = {
  name: 'Kamal',
  twitter: '@Kamal__Dev',
  description:
    'Full-stack engineer focused on building scalable web systems',
  url: 'https://kamaldev.xyz/',
  image: './public/avatar.jpg',
}

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: 'website',
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: 'summary_large_image',
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jetbrainsMono.variable} antialiased bg-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
