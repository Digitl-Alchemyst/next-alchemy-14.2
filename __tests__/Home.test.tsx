import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  // Test 1: Main Container
  test('1. Main container renders with correct class', () => {
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass(
      'flex min-h-screen flex-col items-center justify-start gap-y-5 p-12'
    );
  });

  // Test 2: Images
  test('2. Both banner images render correctly', () => {
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '/Banner.png');
    expect(images[0]).toHaveAttribute('alt', 'Digital Alchemyst Studios');
    expect(images[1]).toHaveAttribute('src', '/labs.png');
    expect(images[1]).toHaveAttribute('alt', 'Alchemy Labs');
  });

  // Test 3: Welcome Heading
  test('3. Welcome heading renders with correct content and class', () => {
    const welcomeHeading = screen.getByText(
      /Welcome to Next-Alchemy 14.2 Boilerplate Base for Next.js with:/i
    );
    expect(welcomeHeading).toBeInTheDocument();
    expect(welcomeHeading).toHaveClass(
      'mt-8 text-center text-lg font-bold text-steelpolished-300'
    );
  });

  // Test 4: Boilerplate Author Information
  test('4. Boilerplate author information renders correctly', () => {
    const authorInfo = screen.getByText(
      /Boilerplate by Digitl Alchemyst @ Digital Alchemyst Studios \/ Alchemy Labs/i
    );
    expect(authorInfo).toBeInTheDocument();
    expect(authorInfo).toHaveClass('text-center text-lg font-bold text-steelpolished-300');
  });

  // Test 5: Boilerplate Description
  test('5. Boilerplate description renders correctly', () => {
    const description = screen.getByText(
      /This boilerplate is created to be a base for Clean Architecture applications/i
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-center text-lg font-bold text-steelpolished-300');
  });

  // Test 6: Features Heading
  test('6. Features heading renders correctly', () => {
    const featuresHeading = screen.getByText('FEATURES');
    expect(featuresHeading).toBeInTheDocument();
    expect(featuresHeading).toHaveClass(
      'text-3xl text-steelpolished-300 underline underline-offset-2'
    );
  });

  // Test 7: GitHub Link Button
  test('7. GitHub link button renders with correct text and classes', () => {
    const linkButton = screen.getByRole('button', { name: /Visit the Github/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveClass(
      'my-5 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-300 p-3 neon-amber'
    );
  });

  // Test 8: Feature List
  test('8. Feature list renders with correct number of items and styling', () => {
    const featureList = screen.getByRole('list');
    expect(featureList).toHaveClass(
      'w-2xl flex list-disc flex-col items-start space-y-2 text-wrap text-left text-sm font-semibold text-steelpolished-300'
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(9);
    expect(listItems[0]).toHaveTextContent(/Next.js 14: Utilizes the latest features/);
    expect(listItems[1]).toHaveTextContent(/TypeScript: Ensures type safety and code quality/);
    expect(listItems[2]).toHaveTextContent(
      /ESLint: Integrates ESLint for identifying and fixing problematic patterns/
    );
    expect(listItems[3]).toHaveTextContent(
      /Prettier: Implements Prettier for consistent code formatting/
    );
    expect(listItems[4]).toHaveTextContent(/Jest: Configures Jest for testing/);
    expect(listItems[5]).toHaveTextContent(/Husky: Utilizes Husky for managing Git hooks/);
    expect(listItems[6]).toHaveTextContent(
      /Lint-staged: Uses lint-staged to run linters on staged files/
    );
    expect(listItems[7]).toHaveTextContent(
      /Commitlint: Enforces a consistent commit message format/
    );
    expect(listItems[8]).toHaveTextContent(
      /Tailwind CSS: Integrates Tailwind CSS for utility-first styling/
    );
    listItems.forEach((item) => {
      // Instead of checking for an empty class, we'll verify that the item doesn't have any specific class
      expect(item.className).toBe('');
    });
  });

  // Test 9: Feature List Content
  test('9. Feature list items contain correct content', () => {
    const nextjsItem = screen.getByText(/Next.js 14: Utilizes the latest features/i);
    const typescriptItem = screen.getByText(/TypeScript: Ensures type safety and code quality/i);
    const tailwindItem = screen.getByText(
      /Tailwind CSS: Integrates Tailwind CSS for utility-first styling/i
    );

    expect(nextjsItem).toBeInTheDocument();
    expect(typescriptItem).toBeInTheDocument();
    expect(tailwindItem).toBeInTheDocument();
  });

  // Test 10: GitHub Link Href
  test('10. GitHub link has correct href attribute', () => {
    const link = screen.getByRole('link', { name: /Visit the Github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/Digitl-Alchemyst/next-alchemy-14.2');
  });
});
