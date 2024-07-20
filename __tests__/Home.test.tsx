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

  // Test 2: Digital Alchemyst Studios Banner
  test('2. Digital Alchemyst Studios banner renders correctly', () => {
    const banner = screen.getByAltText('Digital Alchemyst Studios');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute('src', '/Banner.png');
    expect(banner).toHaveAttribute('width', '720');
    expect(banner).toHaveAttribute('height', '350');
  });

  // Test 3: Alchemy Labs Image
  test('3. Alchemy Labs image renders correctly', () => {
    const labsImage = screen.getByAltText('Alchemy Labs');
    expect(labsImage).toBeInTheDocument();
    expect(labsImage).toHaveAttribute('src', '/labs.png');
    expect(labsImage).toHaveAttribute('width', '720');
    expect(labsImage).toHaveAttribute('height', '350');
  });

  // Test 4: Welcome Heading
  test('4. Welcome heading renders with correct content and class', () => {
    const welcomeHeading = screen.getByText(
      /Welcome to Next-Alchemy 14.2 Boilerplate Base for Next.js with:/i
    );
    expect(welcomeHeading).toBeInTheDocument();
    expect(welcomeHeading).toHaveClass(
      'mt-8 w-4/5 text-center text-lg font-bold text-steelpolished-300'
    );
  });

  // Test 5: Boilerplate Author Information
  test('5. Boilerplate author information renders correctly', () => {
    const authorInfo = screen.getByText(
      /Boilerplate by Digitl Alchemyst @ Digital Alchemyst Studios \/ Alchemy Labs/i
    );
    expect(authorInfo).toBeInTheDocument();
    expect(authorInfo).toHaveClass('w-4/5 text-center text-lg font-bold text-steelpolished-300');
  });

  // Test 6: Boilerplate Description
  test('6. Boilerplate description renders correctly', () => {
    const description = screen.getByText(
      /This boilerplate is created to be a base for Clean Architecture applications/i
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('w-4/5 text-center text-lg font-bold text-steelpolished-300');
  });

  // Test 7: Feature List
  test('7. Feature list renders with correct number of items and content', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(9);
    expect(listItems[0]).toHaveTextContent(/Next.js 14:/);
    expect(listItems[1]).toHaveTextContent(/TypeScript:/);
    // Add similar checks for other list items if needed
  });

  // Test 8: GitHub Link Button
  test('8. GitHub link button renders with correct text and classes', () => {
    const linkButton = screen.getByRole('button', { name: /Visit the Github/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveClass(
      'my-5 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-300 p-3 neon-amber'
    );
  });

  // Test 9: GitHub Link Href
  test('9. GitHub link has correct href attribute', () => {
    const link = screen.getByRole('link', { name: /Visit the Github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/Digitl-Alchemyst/next-alchemy-14.2');
  });
});
