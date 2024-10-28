import React from 'react';
import { Github } from 'lucide-react';
import { ThemeToggle } from '@/components/global/ThemeToggle';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full'>
      <div className='border-b border-light-300 bg-light-100/75 backdrop-blur-lg dark:border-dark-600 dark:bg-dark-800/75'>
        <div className='container flex h-16 items-center justify-between px-4'>
          <div className='flex items-center space-x-2'>
            <h1 className='relative'>
              <span className='px-3 py-2 text-2xl font-bold text-transparent text-gradient-orange-purple'>
                Next Alchemy 14.2
              </span>
              <span className='absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-orange-400 to-purple-400 opacity-50' />
            </h1>
          </div>

          <div className='flex items-center space-x-6'>
            <ThemeToggle />

            <Link
              href='https://github.com/Digitl-Alchemyst/next-alchemy-14.2'
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-full p-2 transition-all duration-300 hover:bg-light-200 dark:hover:bg-dark-700'
            >
              <Github className='h-6 w-6 text-dark-600 transition-colors group-hover:text-accent1-500 dark:text-light-300 dark:group-hover:text-accent1-400' />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
