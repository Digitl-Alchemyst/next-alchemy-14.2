import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, ChevronDown, Github } from 'lucide-react';

const HomePage = () => {
  const features = [
    'Next.js 14 App Router',
    'TypeScript 5.5',
    'Tailwind CSS 3.4',
    'ESLint 8.57',
    'Prettier 3.3',
    'Jest 29.7',
    'React Testing Library 16.0',
    'Husky 8.0',
    'Lint-Staged 15.2',
    'Commitlint 16.2',
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-dark-900 to-dark-800'>
      <main className='flex flex-col items-center justify-start gap-8 p-8'>
        {/* Hero Section */}
        <div className='relative flex flex-col items-center'>
          <div className='rounded-xl p-6 frosted-glass'>
            <Image
              src='/Banner.png'
              alt='Digital Alchemyst Studios'
              width={720}
              height={350}
              className='rounded-lg'
            />
          </div>

          <h1 className='mt-8 text-center text-4xl font-bold text-gradient-lime-violet'>
            Next-Alchemy 14.2
          </h1>

          <p className='mt-4 text-xl text-steelpolished-300'>Your Ultimate Next.js Boilerplate</p>
        </div>

        {/* Features Grid */}
        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature}
              className='rounded-lg p-4 text-center text-steelpolished-300 transition-all inner-glow-accent1 hover:scale-105'
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Animated Button */}
        <Link
          href='https://github.com/Digitl-Alchemyst/next-alchemy-14.2'
          className='group relative mt-8'
        >
          <button className='flex items-center gap-2 rounded-lg bg-steeldark-500 px-6 py-3 text-steelpolished-300 transition-all hover:neon-accent4'>
            <Github className='h-5 w-5' />
            Visit Repository
            <ChevronDown className='h-5 w-5 transition-all group-hover:rotate-180' />
          </button>
        </Link>

        {/* Info Card */}
        <div className='mt-12 max-w-2xl rounded-xl bg-dark-700/50 p-6 text-steelpolished-300'>
          <div className='flex items-center gap-2'>
            <AlertCircle className='h-5 w-5 text-accent4-500' />
            <h3 className='text-lg font-semibold'>Clean Architecture Ready</h3>
          </div>
          <p className='mt-2'>
            This boilerplate follows clean architecture principles, providing a solid foundation
            for scalable applications with clear separation of concerns and maintainable code
            structure.
          </p>
        </div>

        {/* Tailwind Plugins */}
        <div className='mt-12 max-w-4xl rounded-xl bg-dark-700/50 p-8 text-steelpolished-300'>
          {/* Header */}
          <div className='mb-6 flex items-center gap-3'>
            <div className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 text-accent4-500'
              >
                <path d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z' />
                <path d='M12 10v6' />
                <path d='m9 13 3-3 3 3' />
              </svg>
            </div>
            <h3 className='text-2xl font-bold'>Tailwind CSS Plugins</h3>
          </div>

          <p className='mb-8 text-lg text-steelpolished-400'>
            This boilerplate comes with a variety of Tailwind CSS plugins, including:
          </p>

          {/* Plugins Grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {/* Neon Glow */}
            <div className='flex flex-col gap-2'>
              <span className='text-sm font-medium text-steelpolished-400'>Neon Glow Effect</span>
              <button className='w-full rounded-xl p-4 text-xl font-semibold transition-all neon-lime hover:scale-105'>
                Neon Glow
              </button>
            </div>

            {/* Text Stroke */}
            <div className='flex flex-col gap-2'>
              <span className='text-sm font-medium text-steelpolished-400'>
                Text Stroke Effect
              </span>
              <h3 className='text-5xl font-bold transition-all text-stroke-2 text-stroke-golden-600 hover:scale-105'>
                Text Stroke
              </h3>
            </div>

            {/* Text Gradient */}
            <div className='flex flex-col gap-2'>
              <span className='text-sm font-medium text-steelpolished-400'>
                Text Gradient Effect
              </span>
              <h3 className='text-4xl font-bold transition-all text-gradient-lime-violet hover:scale-105'>
                Text Gradient
              </h3>
            </div>

            {/* Inner Glow */}
            <div className='flex flex-col gap-2'>
              <span className='text-sm font-medium text-steelpolished-400'>Inner Glow Effect</span>
              <div className='rounded-xl p-6 transition-all inner-glow-orange-65 hover:scale-105'>
                <h2 className='text-center text-3xl font-bold'>Inner Glow</h2>
              </div>
            </div>

            {/* Frosted Glass - Full Width */}
            <div className='col-span-full flex flex-col gap-2'>
              <span className='text-sm font-medium text-steelpolished-400'>
                Frosted Glass Effect (WIP)
              </span>
              <div className='rounded-xl p-8 transition-all frosted-glass hover:scale-105'>
                <h2 className='text-center text-4xl font-bold'>Frosted Glass</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
