import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, ChevronDown, Github } from 'lucide-react';

const HomePage = () => {
  const features = [
    'Next.js 14 App Router',
    'TypeScript 5.5',
    'Tailwind CSS 3.4',
    'Shadcn 2.1.2',
    'Lucide + React Icons',
    'Next-Themes Dark Mode',
    'ESLint 8.57',
    'Prettier 3.3',
    'Jest 29.7',
    'React Testing Library 16.0',
    'Husky 8.0',
    'Lint-Staged 15.2',
    'Commitlint 16.2',
  ];

  return (
    <div className='relative min-h-screen bg-gradient-to-b from-light-200 via-accent1-100 to-light-100 dark:from-dark-900 dark:via-accent1-900 dark:to-dark-800'>
      <main className='relative flex flex-col items-center justify-start space-y-6 p-8'>
        {/* Hero Section */}
        <div className='relative flex flex-col items-center'>
          <div className='group overflow-hidden rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-800/80'>
            <Image
              src='/Banner.png'
              alt='Digital Alchemyst Studios'
              width={720}
              height={350}
              className='w-auto rounded-lg transition-transform duration-500 group-hover:scale-105'
              priority
            />
          </div>

          <h1 className='mt-8 text-center text-4xl font-bold text-gradient-lime-violet'>
            Next-Alchemy 14.2
          </h1>

          <p className='mt-4 text-xl text-dark-600 dark:text-light-300'>
            Your Ultimate Next.js Boilerplate
          </p>
        </div>

        {/* Repository Link */}
        <Link
          href='https://github.com/Digitl-Alchemyst/next-alchemy-14.2'
          className='group relative mt-8'
        >
          <button className='flex items-center gap-2 rounded-lg bg-slate-800 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:neon-accent1 dark:bg-slate-700 dark:hover:neon-amber'>
            <Github className='h-5 w-5' />
            <span>Visit Repository</span>
            <ChevronDown className='h-5 w-5 transition-transform duration-300 group-hover:rotate-180' />
          </button>
        </Link>

        {/* Features Grid */}
        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {features.map((feature) => (
            <div
              key={feature}
              className='group relative overflow-hidden rounded-lg bg-white/90 p-6 text-center shadow-md transition-all duration-300 inner-glow-accent1-45 hover:-translate-y-1 hover:scale-105 hover:shadow-lg dark:bg-slate-800/90 dark:inner-glow-accent1-65'
            >
              <span className='relative z-10 text-lg font-medium text-slate-700 transition-colors group-hover:text-accent2-500 dark:text-slate-300 dark:group-hover:text-accent1-400'>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className='mt-12 max-w-2xl rounded-xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-800/80'>
          <div className='flex items-center gap-3'>
            <AlertCircle className='h-6 w-6 text-accent4-500' />
            <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200'>
              Clean Architecture Ready
            </h3>
          </div>
          <p className='mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
            This boilerplate follows clean architecture principles, providing a solid foundation
            for scalable applications with clear separation of concerns and maintainable code
            structure.
          </p>
        </div>

        {/* Tailwind Plugins Section */}
        <div className='relative mt-12 w-full max-w-4xl overflow-hidden rounded-xl bg-light-100/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-dark-700/80'>
          {/* Background Image for Frosted Glass Demo */}
          <Image src='/labs.png' alt='Background' fill className='-z-50 object-cover' />

          <div className='relative mb-6 rounded-lg p-3 dark:bg-dark-200/70'>
            <div className='mb-4 flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-accent4-500 dark:text-accent4-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z'
                />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m9 13 3-3 3 3'
                />
              </svg>
              <h3 className='text-2xl font-bold text-dark-700 dark:text-light-200'>
                Tailwind CSS Plugins
              </h3>
            </div>

            <p className='text-lg text-dark-500 dark:text-light-400'>
              This boilerplate comes with a variety of Tailwind CSS plugins, including:
            </p>
          </div>

          {/* Plugins Grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {/* Neon Glow */}
            <div className='flex flex-col gap-2 rounded-md bg-light-200/95 p-3 dark:bg-dark-700/95'>
              <span className='text-sm font-medium text-dark-600 dark:text-light-300'>
                Neon Glow Effect
              </span>
              <button className='w-full rounded-xl bg-light-100 p-4 text-xl font-semibold text-dark-800 transition-all neon-accent2 hover:scale-105 dark:bg-dark-800 dark:text-light-200 dark:neon-accent1'>
                Neon Glow
              </button>
            </div>

            {/* Text Stroke */}
            <div className='flex flex-col gap-2 rounded-md bg-light-200/95 p-3 dark:bg-dark-700/95'>
              <span className='text-sm font-medium text-dark-600 dark:text-light-300'>
                Text Stroke Effect
              </span>
              <h3 className='text-5xl font-bold text-light-100 transition-all text-stroke-2 text-stroke-accent4-500 hover:scale-105 dark:text-dark-800 dark:text-stroke-accent1-400'>
                Text Stroke
              </h3>
            </div>

            {/* Text Gradient */}
            <div className='flex flex-col gap-2 rounded-md bg-light-200/95 p-3 dark:bg-dark-700/95'>
              <span className='text-sm font-medium text-dark-600 dark:text-light-300'>
                Text Gradient Effect
              </span>
              <h3 className='text-4xl font-bold text-transparent transition-all text-gradient-red-yellow hover:scale-105 dark:text-gradient-lime-violet'>
                Text Gradient
              </h3>
            </div>

            {/* Inner Glow */}
            <div className='flex flex-col gap-2 rounded-md bg-light-200/95 p-3 dark:bg-dark-700/95'>
              <span className='text-sm font-medium text-dark-600 dark:text-light-300'>
                Inner Glow Effect
              </span>
              <div className='rounded-xl bg-light-100 p-6 transition-all inner-glow-accent4-45 hover:scale-105 dark:bg-dark-800 dark:inner-glow-accent1-65'>
                <h2 className='text-center text-3xl font-bold text-dark-800 dark:text-light-200'>
                  Inner Glow
                </h2>
              </div>
            </div>

            {/* Frosted Glass - Full Width */}
            <div className='col-span-full flex flex-col gap-2'>
              <span className='text-sm font-medium text-dark-600 dark:text-light-300'>
                Frosted Glass Effect (WIP)
              </span>
              <div className='rounded-xl bg-light-100/50 p-8 backdrop-blur-lg transition-all hover:scale-105 dark:bg-dark-800/50'>
                <h2 className='text-center text-4xl font-bold text-dark-800 dark:text-light-200'>
                  Frosted Glass
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
