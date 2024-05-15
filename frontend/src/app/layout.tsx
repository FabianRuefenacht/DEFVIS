import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEFVIS",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full p-0 m-0 max-h-full overflow-hidden">
      <body className="p-0 m-0 h-dvh max-h-full top-0">{children}</body>
    </html>
  );
}
