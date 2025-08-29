// app/payload/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Administration panel for the website',
}

export default function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ 
          minHeight: '100vh', 
          padding: '20px',
          fontFamily: 'Arial, sans-serif'
        }}>
          <header style={{ 
            borderBottom: '1px solid #ccc', 
            paddingBottom: '10px', 
            marginBottom: '20px' 
          }}>
            <h1>Admin Panel</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
