import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tsabitah Hilyatul Aulia — Web Developer',
  description: 'Portfolio of Tsabitah Hilyatul Aulia, an Informatics Graduate and Web Developer.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
