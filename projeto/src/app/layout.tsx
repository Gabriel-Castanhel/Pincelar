import { Header } from '@/components/header';
 // @ts-ignore
import './globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-white min-h-screen">

        {children}
      </body>
    </html>
  );
}
