import type { LinkItem } from '@/types/links.types';

/**
 * Configuração estática de links para página Link-in-Bio
 * @module links/links.data
 */

export const LINKS: LinkItem[] = [
  {
    label: '💬 Fale Comigo no WhatsApp',
    href: 'https://wa.me/551152864971?text=Olá%20Lucas!%20Quero%20um%20site%20institucional%20de%20alta%20conversão.',
    external: true,
    icon: 'whatsapp',
    ariaLabel: 'Fale comigo via WhatsApp comercial',
  },
  {
    label: '📸 Instagram',
    href: 'https://instagram.com/souabreu_',
    external: true,
    icon: 'instagram',
    ariaLabel: 'Siga no Instagram',
  },
];

/**
 * Metadados do perfil
 */
export const PROFILE = {
  name: 'Lucas Abreu',
  bio: 'Especialista em Aquisição de Leads para Negócios Locais • 🚀 Site Rápido + Tráfego Focado • 💎 +150 Clientes | +R$8M Gerenciados',
  avatarUrl: 'https://i.imgur.com/T7pZ7P8.jpeg', // Nova logo
};
