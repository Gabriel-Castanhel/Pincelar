import MouseTrail from './Components/Mouse/MouseTrail'
import './globals.css'

export const metadata = {
  title: 'Meu App',
  description: 'Descrição do app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true">
        <MouseTrail />
        {children}
      </body>
    </html>
  )
}