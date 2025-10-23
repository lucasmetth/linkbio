import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucas Abreu - Marketing Digital',
  description: 'Especialista em Aquisição de Leads para Negócios Locais',
  metadataBase: new URL('https://linkbio.vercel.app'), // Altere para sua URL real
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload crítico */}
        <link rel="dns-prefetch" href="https://instagram.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta tags de performance */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
        
        {/* Preload da logo se for local */}
        {/* <link rel="preload" href="/logo.png" as="image" /> */}
      </head>
      <body className="min-h-screen bg-luxury-gradient antialiased font-sans">{children}</body>
    </html>
  )
}
