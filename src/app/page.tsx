import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-dark-800'>
      <main className='flex min-h-screen flex-col items-center justify-start gap-y-5 p-12'>
        <Image src='/Banner.png' alt='Digital Alchemyst Studios' width={720} height={350} />
        <Image src='/labs.png' alt='Alchemy Labs' width={720} height={350} />
        <h4 className='mt-8 text-center text-lg font-bold text-steelpolished-300'>
          Welcome to Next-Alchemy 14.2 Boilerplate Base for Next.js with: TypeScript 5.5 + Tailwind
          CSS 3.4 + ESLint 8.57 + Prettier 3.3 + Jest 29.7 + React Testing Library 16.0 + Husky 8.0
          + Lint-Staged 15.2 + Commitlint 16.2 + Next-SEO 7.0 + Next-3rd-Parties 14.2
        </h4>
        <h3 className='text-center text-lg font-bold text-steelpolished-300'>
          Boilerplate by Digitl Alchemyst @ Digital Alchemyst Studios / Alchemy Labs
        </h3>

        <p className='text-center text-lg font-bold text-steelpolished-300'>
          This boilerplate is created to be a base for Clean Architecture applications built with
          Next.js. It provides a well-structured, maintainable, and scalable foundation for your
          projects, following best practices and leveraging modern tools and libraries.
        </p>
        <h2 className='text-3xl text-steelpolished-300 underline underline-offset-2'>FEATURES</h2>
        <Link href='https://github.com/Digitl-Alchemyst/next-alchemy-14.2'>
          <button className='my-5 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-300 p-3 neon-amber'>
            Visit the Github
          </button>
        </Link>
        <ul className='w-2xl flex list-disc flex-col items-start space-y-2 text-wrap text-left text-sm font-semibold text-steelpolished-300'>
          <li className=''>
            Next.js 14: Utilizes the latest features of Next.js 14, including improved performance,
            new API routes, and enhanced developer experience.
          </li>
          <li className=''>
            TypeScript: Ensures type safety and code quality with TypeScript, making the
            development process more robust and reducing potential runtime errors.
          </li>
          <li className=''>
            ESLint: Integrates ESLint for identifying and fixing problematic patterns in JavaScript
            and TypeScript code.
          </li>
          <li className=''>
            Prettier: Implements Prettier for consistent code formatting, ensuring that your
            codebase adheres to a unified style.
          </li>
          <li className=''>
            Jest: Configures Jest for testing, enabling you to write and run tests efficiently to
            maintain code reliability.
          </li>
          <li className=''>
            Husky: Utilizes Husky for managing Git hooks, automating tasks like linting and testing
            before commits and pushes.
          </li>
          <li className=''>
            Lint-staged: Uses lint-staged to run linters on staged files, ensuring that only linted
            and formatted code is committed.
          </li>
          <li className=''>
            Commitlint: Enforces a consistent commit message format using Commitlint, improving the
            readability and traceability of commit history.
          </li>
          <li className=''>
            Tailwind CSS: Integrates Tailwind CSS for utility-first styling, enabling rapid UI
            development with a customizable design system.
          </li>
        </ul>
      </main>
    </div>
  );
}
