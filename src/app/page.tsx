import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='bg-zinc-900'>
      <main className='flex min-h-screen flex-col items-center justify-start p-12'>
        <Image src='/Banner.png' alt='Digital Alchemyst Studios' width={1200} height={350} />
        <Image src='/labs.png' alt='Alchemy Labs' width={1200} height={350} />
        <h4 className='mt-8 w-4/5 text-center text-lg font-bold text-stone-300'>
          Welcome to Next.js 13.5 Alchemy Boilerplate Base with: TypeScript 5.2 + Tailwind CSS 3.3
          + ESLint 8.5 + Prettier 3.0 + Jest 29.7 + React Testing Library 14.0 + Husky 7.0 +
          Lint-Staged 14.0
          <br />
          <br />
          Boilerplate by Digitl Alchemyst @ Digital Alchemyst Studios / Alchemy Labs
        </h4>
        <Link href='https://github.com/Digitl-Alchemyst/next-13.5-alchemy-base'>
          <button className='my-5 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-300 p-3 neon-amber'>
            Visit the Github
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
