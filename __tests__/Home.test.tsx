import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import { ReactNode } from 'react';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

// Mock next/link with proper types
jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: function Mock({ children, ...props }: { children: ReactNode; href: string }) {
      return <a {...props}>{children}</a>;
    },
  };
});

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      prefetch: jest.fn(),
    };
  },
}));

describe('HomePage', () => {
  it('renders the hero section correctly', () => {
    render(<HomePage />);

    expect(screen.getByText('Next-Alchemy 14.2')).toBeInTheDocument();
    expect(screen.getByText('Your Ultimate Next.js Boilerplate')).toBeInTheDocument();
    expect(screen.getByAltText('Digital Alchemyst Studios')).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<HomePage />);

    const expectedFeatures = [
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

    expectedFeatures.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders the GitHub repository link correctly', () => {
    render(<HomePage />);

    const repoLink = screen.getByRole('link', { name: /visit repository/i });
    expect(repoLink).toHaveAttribute(
      'href',
      'https://github.com/Digitl-Alchemyst/next-alchemy-14.2'
    );
  });

  it('renders the clean architecture section', () => {
    render(<HomePage />);

    expect(screen.getByText('Clean Architecture Ready')).toBeInTheDocument();
    expect(
      screen.getByText(/this boilerplate follows clean architecture principles/i)
    ).toBeInTheDocument();
  });

  it('renders all Tailwind plugin examples', () => {
    render(<HomePage />);

    expect(screen.getByText('Tailwind CSS Plugins')).toBeInTheDocument();

    const pluginEffects = [
      'Neon Glow',
      'Text Stroke',
      'Text Gradient',
      'Inner Glow',
      'Frosted Glass',
    ];
    pluginEffects.forEach((effect) => {
      expect(screen.getByText(effect)).toBeInTheDocument();
    });
  });
});
