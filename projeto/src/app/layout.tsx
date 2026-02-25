import "./globals.css";
import AuthProvider from "@/components/Provider/AuthProvider";
import { SessionProvider } from "next-auth/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pincelar - Sua galeria de arte autêntica",
  description:
    "Descubra e compre obras de arte exclusivas criadas por artistas talentosos. Pincelar é a plataforma perfeita para amantes da arte encontrarem peças únicas e inspiradoras.",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full w-full">
      <body className="bg-white min-h-screen min-w-screen scrollbar-custom ">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
