export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
          Lucas Abreu
        </h1>
        <p className="text-neutral-400 text-xl">
          Acesse{' '}
          <a
            href="/links"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
          >
            /links
          </a>{' '}
          para ver todos os meus canais de contato
        </p>
      </div>
    </div>
  );
}
