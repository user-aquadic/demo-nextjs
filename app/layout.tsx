import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "@/app/providers/NextAuthProvider";

export const metadata: Metadata = {
  title: "CloudWA",
  description: "Improved Whatsapp in Cloud!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-100`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
