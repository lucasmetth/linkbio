/**
 * OpenGraph Image para página /links
 * Gera imagem de preview premium para redes sociais
 * @module links/opengraph-image
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Lucas Abreu - Marketing para Negócios Locais';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * Gera a imagem OpenGraph dinamicamente
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
        }}
      >
        {/* Borda decorativa */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '3px solid rgba(251, 191, 36, 0.3)',
            borderRadius: 24,
          }}
        />

        {/* Conteúdo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {/* Título */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #fef3c7, #fde047, #fef3c7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              padding: 0,
              textAlign: 'center',
            }}
          >
            Lucas Abreu
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: 32,
              color: '#d4d4d4',
              margin: 0,
              padding: 0,
              textAlign: 'center',
            }}
          >
            Marketing para Negócios Locais
          </p>

          {/* Decoração */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginTop: 16,
            }}
          >
            <div
              style={{
                width: 64,
                height: 2,
                background: 'linear-gradient(to right, transparent, rgba(251, 191, 36, 0.5))',
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: '#eab308',
              }}
            />
            <div
              style={{
                width: 64,
                height: 2,
                background: 'linear-gradient(to left, transparent, rgba(251, 191, 36, 0.5))',
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 20,
            color: '#737373',
          }}
        >
          +150 Clientes • +R$8M Gerenciados
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}