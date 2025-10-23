/**
 * Validador de URLs seguras
 * Bloqueia esquemas perigosos (javascript:, data:, etc)
 * @module utils/validateUrl
 */

const ALLOWED_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'];

/**
 * Valida se uma URL é segura para uso
 * @param url - URL a ser validada
 * @returns true se a URL é segura, false caso contrário
 */
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  const trimmed = url.trim();
  
  // Bloquear esquemas perigosos
  if (
    trimmed.startsWith('javascript:') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('vbscript:') ||
    trimmed.startsWith('file:')
  ) {
    return false;
  }
  
  // Validar URLs absolutas
  try {
    const urlObj = new URL(trimmed);
    return ALLOWED_PROTOCOLS.includes(urlObj.protocol);
  } catch {
    // Se falhar parsing como URL absoluta, verificar se é relativa válida
    return trimmed.startsWith('/') || trimmed.startsWith('#');
  }
}

/**
 * Sanitiza uma URL, retornando '#' se inválida
 * @param url - URL a ser sanitizada
 * @returns URL sanitizada ou '#'
 */
export function sanitizeUrl(url: string): string {
  return isValidUrl(url) ? url : '#';
}
