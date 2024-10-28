/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='space-y-3 border-none bg-light-200 px-3 py-4 dark:bg-dark-700'
      >
        <DropdownMenuItem
          className='border border-light-400 bg-light-100 px-3 py-3 text-dark-700 hover:border-accent3-300 hover:bg-accent3-200 hover:text-accent3-800 dark:border-dark-400 dark:bg-dark-600 dark:text-light-200 dark:hover:border-accent1-500 dark:hover:bg-accent1-700 dark:hover:text-accent1-100'
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='border border-light-400 bg-light-100 px-3 py-3 text-dark-700 hover:border-accent4-300 hover:bg-accent4-200 hover:text-accent4-900 dark:border-dark-400 dark:bg-dark-600 dark:text-light-200 dark:hover:border-accent2-500 dark:hover:bg-accent2-700 dark:hover:text-accent2-100'
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='border border-light-400 bg-light-100 px-3 py-3 text-dark-700 hover:border-accent1-300 hover:bg-accent1-200 hover:text-accent1-800 dark:border-dark-400 dark:bg-dark-600 dark:text-light-200 dark:hover:border-accent3-600 dark:hover:bg-accent3-800 dark:hover:text-accent3-100'
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
