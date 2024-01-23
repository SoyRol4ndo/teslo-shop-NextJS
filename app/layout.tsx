import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/src/config/font'


export const metadata: Metadata = {
  title: 'Teslo | Shop',
  description: 'Tienda virtual de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
