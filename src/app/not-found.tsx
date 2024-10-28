/* eslint-disable react/function-component-definition */
import React from 'react';

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-light-100 text-center transition-colors duration-300 dark:bg-dark-800'>
      <h1 className='mb-8 rounded-full p-12 text-9xl font-bold neon-accent1 text-gradient-lime-violet'>
        404
      </h1>
      <p className='inner-glow-light-700-80 dark:inner-glow-dark-700-80 mb-8 text-2xl text-dark-400 dark:text-light-400'>
        Oops! The page you&apos;re looking for can&apos;t be found.
      </p>
      <p className='mb-12 text-lg text-dark-300 dark:text-light-300'>
        It seems you&apos;ve reached a broken link or a page that no longer exists.
      </p>

      <div className='flex gap-6'>
        <a
          href='/'
          className='rounded border border-accent1-300 bg-light-300 px-6 py-3 font-semibold text-dark-700 transition-colors duration-300 hover:bg-light-400 dark:bg-dark-100 dark:text-light-700 dark:hover:bg-dark-200'
        >
          Back to Home
        </a>
        <a
          href='/contact'
          className='rounded border border-light-400 bg-light-300 px-6 py-3 font-semibold text-dark-700 transition-colors duration-300 hover:bg-light-400 dark:bg-dark-300 dark:text-light-200 dark:hover:bg-dark-400'
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
