import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Методи захисту інформації та інформаційна безпека',
  description: 'Академічний курс з методів захисту інформації та інформаційної безпеки',
  keywords: 'інформаційна безпека, захист інформації, кібербезпека, криптографія',
  authors: [{ name: 'Alex' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
