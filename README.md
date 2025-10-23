# Link-in-Bio Premium

Página de links premium desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (design system premium)
- **Next.js OG Image** (preview social)

## 🎨 Design

Design high-ticket luxuoso com:
- Paleta dourada premium (amber/gold)
- Background gradiente escuro sofisticado
- Micro-interações e hover states
- Acessibilidade WCAG AA compliant
- Mobile-first responsivo

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 🔧 Configuração

Edite os links em `src/app/links/links.data.ts`:

```typescript
export const LINKS: LinkItem[] = [
  {
    label: 'Seu Link',
    href: 'https://seusite.com',
    external: true,
    icon: 'site',
    ariaLabel: 'Descrição acessível',
  },
  // ... mais links
];

export const PROFILE = {
  name: 'Seu Nome',
  bio: 'Sua bio aqui',
  avatarUrl: '/logo.png', // ou null
};
```

## 🌐 Deploy na Vercel

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente Next.js
3. Deploy automático a cada push
4. Acesse em `seu-projeto.vercel.app/links`

## ✅ Checklist de Qualidade

- ✅ TypeScript sem erros
- ✅ ESLint configurado
- ✅ Acessibilidade WCAG AA
- ✅ SEO otimizado
- ✅ OpenGraph image
- ✅ Validação de URLs segura
- ✅ Links externos com rel="noopener noreferrer"
- ✅ Navegação por teclado
- ✅ Touch targets 44px+
- ✅ Contraste 4.5:1+
- ✅ Performance otimizada

## 📱 Estrutura

```
src/
├── app/
│   ├── links/
│   │   ├── page.tsx              # Página principal
│   │   ├── opengraph-image.tsx   # OG Image
│   │   ├── LinkButton.tsx        # Componente de botão
│   │   ├── links.data.ts         # Config de links
│   │   └── utils/
│   │       └── validateUrl.ts    # Validador de URLs
│   ├── layout.tsx                # Layout raiz
│   └── globals.css               # Estilos globais
└── types/
    └── links.types.ts            # Tipos TypeScript
```

## 🔒 Segurança

- Validação de URLs (bloqueia javascript:, data:, etc)
- Sanitização automática de links
- rel="noopener noreferrer" em externos
- Sem coleta de dados
- Sem cookies/formulários

## 📝 Licença

Privado - Todos os direitos reservados.
