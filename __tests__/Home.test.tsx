import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

// Mock the next/link component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('Home Component', () => {
  // Test 1: Snapshot test
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  // Test 2: Content rendering test
  it('renders the correct content', () => {
    render(<Home />);

    // Check for images
    expect(screen.getByAltText('Digital Alchemyst Studios')).toBeInTheDocument();
    expect(screen.getByAltText('Alchemy Labs')).toBeInTheDocument();

    // Check for text content
    expect(
      screen.getByText(/Welcome to Next.js 13.5 Alchemy Boilerplate Base/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Boilerplate by Digitl Alchemyst/i)).toBeInTheDocument();

    // Check for button
    expect(screen.getByText('Visit the Github')).toBeInTheDocument();
  });

  // Test 3: Accessibility test
  it('has no accessibility violations', async () => {
    const { container } = render(<Home />);

    // If you have axe-core installed, you can use it like this:
    // await expect(container).toHaveNoViolations();

    // For this example, we'll check for basic accessibility attributes
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/Digitl-Alchemyst/next-13.5-alchemy-base',
    );
  });

  // Test 4: Styling test
  it('applies correct CSS classes', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toHaveClass(
      'flex min-h-screen flex-col items-center justify-start p-12',
    );
    expect(screen.getByText(/Welcome to Next.js 13.5 Alchemy Boilerplate Base/i)).toHaveClass(
      'mt-8 w-4/5 text-center text-lg font-bold text-stone-300',
    );
    expect(screen.getByText('Visit the Github')).toHaveClass(
      'my-5 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-300 p-3 neon-amber',
    );
  });
});
