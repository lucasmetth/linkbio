/**
 * Tipos para a página Link-in-Bio
 * @module types/links
 */

export type IconType = 'whatsapp' | 'instagram' | 'site' | 'mail' | 'portfolio' | 'linkedin' | 'youtube' | 'tiktok';

export interface LinkItem {
  /** Label visível do botão */
  label: string;
  
  /** URL de destino (validado antes de renderizar) */
  href: string;
  
  /** Se true, abre em nova aba com rel="noopener noreferrer" */
  external?: boolean;
  
  /** Ícone opcional (SVG inline renderizado) */
  icon?: IconType;
  
  /** Descrição acessível (aria-label) */
  ariaLabel?: string;
}
