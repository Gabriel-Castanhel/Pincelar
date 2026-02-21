import "./globals.css";
import AuthProvider from "@/components/Provider/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full w-full">
      <body className="bg-white min-h-screen min-w-screen scrollbar-custom ">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
