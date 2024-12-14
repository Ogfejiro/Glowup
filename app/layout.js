import "./globals.css";

export const metadata = {
  title: "Glow Up Electrical",
  description:
    "Glow Up Electrical, your world of top quality electrical products and services",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon.png", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",
    android: [
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Glow Up Electrical",
    description:
      "Glow Up Electrical, your world of top quality electrical products and services",
    type: "website",
    locale: "en_US",
    siteName: "Glow Up Electrical",
    url: "https://glowupelectrical.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Up Electrical",
    description:
      "Glow Up Electrical, your world of top quality electrical products and services",
    url: "https://glowupelectrical.com",
  },
  other: {
    "msapplication-TileColor": "#000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
