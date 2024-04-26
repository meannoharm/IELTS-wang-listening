import type { Metadata } from "next";
import { Providers } from './providers'
import { fonts } from './fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS-wang-listening",
  description: "An application for book '雅思王听力'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.rubik.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
