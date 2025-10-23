/**
 * Página /links - Link-in-Bio Premium
 * Design high-ticket luxuoso com acessibilidade WCAG AA
 * @module app/links/page
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import LinkButton from './LinkButton';
import { LINKS, PROFILE } from './links.data';

/**
 * Metadata SEO para a página /links
 */
export const metadata: Metadata = {
  title: `Lucas Abreu - Marketing para Negócios Locais`,
  description: 'Especialista em Aquisição de Leads para Negócios Locais • 🚀 Site Rápido + Tráfego Focado • 💎 +150 Clientes | +R$8M Gerenciados',
  openGraph: {
    title: `Lucas Abreu - Seus Links de Contato`,
    description: 'Especialista em geração de leads e tráfego pago para negócios locais. Agende sua consultoria gratuita!',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['marketing digital', 'negócios locais', 'tráfego pago', 'geração de leads', 'Google Ads', 'Facebook Ads', 'consultoria'],
};

/**
 * Componente principal da página /links
 */
export default function LinksPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      {/* Container principal */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header com avatar e bio */}
        <header className="text-center mb-12 space-y-6">
          {/* Avatar/Logo */}
          {PROFILE.avatarUrl && (
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-amber-500/30 ring-offset-4 ring-offset-neutral-950">
                <Image
                  src={PROFILE.avatarUrl}
                  alt={`Logo ${PROFILE.name}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                  priority={true}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          )}

          {/* Nome */}
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 tracking-tight">
            {PROFILE.name}
          </h1>

          {/* Bio */}
          <p className="text-neutral-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            {PROFILE.bio}
          </p>

          {/* Divisor decorativo */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
        </header>

        {/* Lista de links */}
        <nav aria-label="Lista de links rápidos" className="mb-16">
          <ul className="space-y-4">
            {LINKS.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                <LinkButton
                  label={link.label}
                  href={link.href}
                  external={link.external}
                  icon={link.icon}
                  ariaLabel={link.ariaLabel}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer className="text-center text-neutral-500 text-sm">
          <p>
            © {currentYear} Lucas Abreu - Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* Assinatura sutil */}
      <div className="absolute bottom-4 right-4 text-xs text-neutral-700 hover:text-neutral-500 transition-colors">
        Marketing para Negócios Locais
      </div>
    </main>
  );
}
