import Image from 'next/image';
import Link from 'next/link';
import QualiaChat from '../components/QualiaChat';
import EnergyMarketWidget from '../components/EnergyMarketWidget';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">ESConnect AI Agent</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to ESConnect AI
        </h1>
      </div>

      <div className="mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="card m-2">
          <h2 className="mb-3 text-2xl font-semibold">
            Energy Sector Analysis
          </h2>
          <p className="m-0 text-sm opacity-80">
            Get real-time insights and analysis for energy markets and trends.
          </p>
        </div>

        <div className="card m-2">
          <h2 className="mb-3 text-2xl font-semibold">
            Sustainability Planning
          </h2>
          <p className="m-0 text-sm opacity-80">
            Develop comprehensive sustainability strategies with AI assistance.
          </p>
        </div>

        <div className="card m-2">
          <h2 className="mb-3 text-2xl font-semibold">
            Regulatory Compliance
          </h2>
          <p className="m-0 text-sm opacity-80">
            Stay updated on energy regulations and compliance requirements.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8 mb-8">
        <EnergyMarketWidget />
      </div>

      <div className="w-full max-w-4xl mt-8">
        <QualiaChat />
      </div>
    </main>
  );
}
