import React from 'react';
import { Github } from 'lucide-react';
import ThemeToggle from '@/components/global/ThemeToggle';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full'>
      {/* Frosted glass effect with light/dark mode support */}
      <div className='border-b bg-white/75 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/75'>
        <div className='container flex h-16 items-center justify-between px-4'>
          {/* Project Name */}
          <div className='flex items-center space-x-2'>
            <h1 className='relative'>
              <span className='bg-gradient-to-r from-accent1-400 to-accent2-400 bg-clip-text px-3 py-2 text-2xl font-bold text-transparent'>
                Next Alchemy 14.2
              </span>
              {/* Subtle underline effect */}
              <span className='absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-accent1-400 to-accent2-400 opacity-50' />
            </h1>
          </div>

          {/* Right side items */}
          <div className='flex items-center space-x-6'>
            <ThemeToggle />

            {/* GitHub Link */}
            <a
              href='https://github.com/yourusername/next-alchemy'
              target='_blank'
              rel='noopener noreferrer'
              className='group rounded-full p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            >
              <Github className='h-6 w-6 text-slate-700 transition-colors group-hover:text-accent1-500 dark:text-slate-300 dark:group-hover:text-accent1-400' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
