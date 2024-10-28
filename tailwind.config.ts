/* eslint-disable prefer-arrow-callback */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const chroma = require('chroma-js');
// const defaultTheme = require('tailwindcss/defaultTheme');

// const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

function generateShades(baseColor: string): { [key: number]: string } {
  const scale = chroma
    .scale([chroma(baseColor).brighten(2), baseColor, chroma(baseColor).darken(2)])
    .mode('lab')
    .colors(9); // Generates 9 shades from light to dark
  const shades = {
    100: scale[0],
    200: scale[1],
    300: scale[2],
    400: scale[3],
    500: scale[4], // main color
    600: scale[5],
    700: scale[6],
    800: scale[7],
    900: scale[8],
  };
  return shades;
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/util/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      flex: {
        full: '0 0 100%',
      },
      screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        //   lg: '1000px',
        lg: '1024px',
        //   xl: '1165px',
        xl: '1280px',
        dxl: '1300px',
        xxl: '1750px',
        mxl: '2055px',
      },
      lineClamp: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
      },
      colors: {
        dark: generateShades('#1A102B'), // Example dark color
        light: generateShades('#dae9dc'), // Example light color
        accent1: generateShades('#319bcf'), // Example accent color
        accent2: generateShades('#0ed729'),
        accent3: generateShades('#008080'),
        accent4: generateShades('#ffd700'),
        x: {
          primary: '#1DA1F2', // Twitter Blue
          dark: '#14171A', // Twitter Dark
          light: '#AAB8C2', // Twitter Light
        },
        facebook: {
          primary: '#1877F2', // Facebook Blue
          dark: '#3b5998', // Facebook Dark
          light: '#8b9dc3', // Facebook Light
        },
        instagram: {
          primary: '#E4405F', // Instagram Red
          gradientStart: '#F58529', // Instagram Gradient Start
          gradientEnd: '#DD2A7B', // Instagram Gradient End
        },
        linkedin: {
          primary: '#0077B5', // LinkedIn Blue
          dark: '#004182', // LinkedIn Dark
          light: '#8AB4F8', // LinkedIn Light
        },
        youtube: {
          primary: '#FF0000', // YouTube Red
          dark: '#C4302B', // YouTube Dark
          light: '#FF8C00', // YouTube Light
        },
        tiktok: {
          primary: '#69C9D0', // TikTok Blue
          secondary: '#EE1D52', // TikTok Red
          dark: '#010101', // TikTok Dark
        },
        twitch: {
          primary: '#9146FF', // Twitch Purple
          dark: '#6441A5', // Twitch Dark
          light: '#B9A3E3', // Twitch Light
        },
        github: {
          primary: '#181717', // GitHub Black
          dark: '#0D1117', // GitHub Dark Mode
          light: '#F5F5F5', // GitHub Light Mode
        },
        threads: {
          primary: '#000000', // Threads Black
          dark: '#282828', // Threads Dark
          light: '#E0E0E0', // Threads Light
        },
        snapchat: {
          primary: '#FFFC00', // Snapchat Yellow
          dark: '#282828', // Snapchat Dark
          light: '#FFFFFF', // Snapchat Light
        },
        discord: {
          primary: '#5865F2', // Discord Blurple
          dark: '#23272A', // Discord Dark
          light: '#7289DA', // Discord Light
        },
        reddit: {
          primary: '#FF4500', // Reddit Orange
          dark: '#1A1A1B', // Reddit Dark Mode Background
          light: '#D7DADC', // Reddit Light Mode Background
        },
        steelpolished: {
          100: '#f4f4f5',
          200: '#e9e9ec',
          300: '#dedee2',
          400: '#d3d3d9',
          500: '#c8c8cf',
          600: '#a0a0a6',
          700: '#78787c',
          800: '#505053',
          900: '#282829',
        },
        steelflat: {
          100: '#e5e5e5',
          200: '#cacacb',
          300: '#b0b0b1',
          400: '#959597',
          500: '#7b7b7d',
          600: '#626264',
          700: '#4a4a4b',
          800: '#313132',
          900: '#191919',
        },
        steeldark: {
          100: '#d4d4d5',
          200: '#a9a9aa',
          300: '#7d7d80',
          400: '#525255',
          500: '#27272b',
          600: '#1f1f22',
          700: '#17171a',
          800: '#101011',
          900: '#080809',
        },
        forest: {
          100: '#d7ffd1',
          200: '#b0ffa3',
          300: '#88ff76',
          400: '#61ff48',
          500: '#39ff1a',
          600: '#2ecc15',
          700: '#229910',
          800: '#17660a',
          900: '#0b3305',
        },
        fire: {
          100: '#ffecd1',
          200: '#ffdaa3',
          300: '#ffc776',
          400: '#ffb548',
          500: '#ffa21a',
          600: '#cc8215',
          700: '#996110',
          800: '#66410a',
          900: '#332005',
        },
        sun: {
          100: '#fee5d0',
          200: '#fdcba1',
          300: '#fcb271',
          400: '#fb9842',
          500: '#fa7e13',
          600: '#c8650f',
          700: '#964c0b',
          800: '#643208',
          900: '#321904',
        },

        // Metals
        midnight: {
          100: '#d0cfe0',
          200: '#a09fc1',
          300: '#7170a1',
          400: '#414082',
          500: '#121063',
          600: '#0e0d4f',
          700: '#0b0a3b',
          800: '#070628',
          900: '#040314',
        },
        copper: {
          100: '#f1e3d6',
          200: '#e3c7ad',
          300: '#d4ab85',
          400: '#c68f5c',
          500: '#b87333',
          600: '#935c29',
          700: '#6e451f',
          800: '#4a2e14',
          900: '#25170a',
        },
        bronze: {
          100: '#dddde6',
          200: '#bbbbce',
          300: '#9a99b5',
          400: '#78779d',
          500: '#565584',
          600: '#45446a',
          700: '#34334f',
          800: '#222235',
          900: '#11111a',
        },
        silver: {
          100: '#fbfbff',
          200: '#f7f7ff',
          300: '#f4f3ff',
          400: '#f0efff',
          500: '#ecebff',
          600: '#bdbccc',
          700: '#8e8d99',
          800: '#5e5e66',
          900: '#2f2f33',
        },
        golden: {
          100: '#fff7d8',
          200: '#ffefb2',
          300: '#ffe88b',
          400: '#ffe065',
          500: '#ffd83e',
          600: '#ccad32',
          700: '#998225',
          800: '#665619',
          900: '#332b0c',
        },
        gold: {
          100: '#fdfdff',
          200: '#fcfcff',
          300: '#fafaff',
          400: '#f9f9ff',
          500: '#f7f7ff',
          600: '#c6c6cc',
          700: '#949499',
          800: '#636366',
          900: '#313133',
        },
        platinum: {
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#cccccc',
          700: '#999999',
          800: '#666666',
          900: '#333333',
        },
        onyx: {
          100: '#cccccc',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        obsidian: {
          100: '#dadada',
          200: '#b5b5b5',
          300: '#909090',
          400: '#6b6b6b',
          500: '#464646',
          600: '#383838',
          700: '#2a2a2a',
          800: '#1c1c1c',
          900: '#0e0e0e',
        },

        // Gem Stones
        diamond: {
          100: '#f1fcff',
          200: '#e3faff',
          300: '#d5f7ff',
          400: '#c7f5ff',
          500: '#b9f2ff',
          600: '#94c2cc',
          700: '#6f9199',
          800: '#4a6166',
          900: '#253033',
        },
        pearl: {
          100: '#fcfcff',
          200: '#f9f9ff',
          300: '#f6f6ff',
          400: '#f3f3ff',
          500: '#f0f0ff',
          600: '#c0c0cc',
          700: '#909099',
          800: '#606066',
          900: '#303033',
        },
        amethyst: {
          100: '#ebe0f5',
          200: '#d6c2eb',
          300: '#c2a3e0',
          400: '#ad85d6',
          500: '#9966cc',
          600: '#7a52a3',
          700: '#5c3d7a',
          800: '#3d2952',
          900: '#1f1429',
        },
        emerald: {
          100: '#dcf4e4',
          200: '#b9e9c9',
          300: '#96deae',
          400: '#73d393',
          500: '#50c878',
          600: '#40a060',
          700: '#307848',
          800: '#205030',
          900: '#102818',
        },
        azure: {
          100: '#d5edf9',
          200: '#abdcf3',
          300: '#82caec',
          400: '#58b9e6',
          500: '#2ea7e0',
          600: '#2586b3',
          700: '#1c6486',
          800: '#12435a',
          900: '#09212d',
        },
        ruby: {
          100: '#f9cfdf',
          200: '#f3a0bf',
          300: '#ec709f',
          400: '#e6417f',
          500: '#e0115f',
          600: '#b30e4c',
          700: '#860a39',
          800: '#5a0726',
          900: '#2d0313',
        },
        citrine: {
          100: '#faf6ce',
          200: '#f4ec9d',
          300: '#efe36c',
          400: '#e9d93b',
          500: '#e4d00a',
          600: '#b6a608',
          700: '#897d06',
          800: '#5b5304',
          900: '#2e2a02',
        },
        sapphire: {
          100: '#cfdcf1',
          200: '#9fbae3',
          300: '#6f97d6',
          400: '#3f75c8',
          500: '#0f52ba',
          600: '#0c4295',
          700: '#093170',
          800: '#06214a',
          900: '#031025',
        },
        topaz: {
          100: '#fff4e5',
          200: '#ffe9cb',
          300: '#ffdeb0',
          400: '#ffd396',
          500: '#ffc87c',
          600: '#cca063',
          700: '#99784a',
          800: '#665032',
          900: '#332819',
        },

        // Browns
        coffee: {
          100: '#e2dcd7',
          200: '#c5b8af',
          300: '#a99587',
          400: '#8c715f',
          500: '#6f4e37',
          600: '#593e2c',
          700: '#432f21',
          800: '#2c1f16',
          900: '#16100b',
        },
        cedar: {
          100: '#dbd7d4',
          200: '#b7afa9',
          300: '#92877e',
          400: '#6e5f53',
          500: '#4a3728',
          600: '#3b2c20',
          700: '#2c2118',
          800: '#1e1610',
          900: '#0f0b08',
        },
        sand: {
          100: '#fef9e6',
          200: '#fdf3cd',
          300: '#fbedb3',
          400: '#fae79a',
          500: '#f9e181',
          600: '#c7b467',
          700: '#95874d',
          800: '#645a34',
          900: '#322d1a',
        },
        caramel: {
          100: '#efe2db',
          200: '#dfc5b8',
          300: '#cfa894',
          400: '#bf8b71',
          500: '#af6e4d',
          600: '#8c583e',
          700: '#69422e',
          800: '#462c1f',
          900: '#23160f',
        },
        ginger: {
          100: '#efe0cc',
          200: '#dfc199',
          300: '#d0a366',
          400: '#c08433',
          500: '#b06500',
          600: '#8d5100',
          700: '#6a3d00',
          800: '#462800',
          900: '#231400',
        },
        hazel: {
          100: '#e8e4d1',
          200: '#d2c8a3',
          300: '#bbad74',
          400: '#a59146',
          500: '#8e7618',
          600: '#725e13',
          700: '#55470e',
          800: '#392f0a',
          900: '#1c1805',
        },

        // Shad CN Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        74: '18.5rem',
        78: '19.5rem',
        82: '20.5rem',
        86: '21.5rem',
        88: '22rem',
        90: '22.5rem',
        92: '23rem',
        94: '23.5rem',
        98: '24.5rem',
        100: '25rem',
        102: '25.5rem',
        104: '26rem',
        106: '26.5rem',
        108: '27rem',
        110: '27.5rem',
        112: '28rem',
        114: '28.5rem',
        116: '29rem',
        118: '29.5rem',
        120: '30rem',
        122: '30.5rem',
        124: '31rem',
        126: '31.5rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gradients: {
        'lime-violet': 'linear-gradient(to right, #5029a6 0%, #8db600 100%)',
        'red-yellow': 'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
        'orange-purple': 'linear-gradient(to right, #ea6c09 0%, #9109ea 100%)',
        // * Add more gradients here as needed
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animate'),
    // Neon effect
    plugin(({ theme, addUtilities }: { theme: any; addUtilities: (arg0: any) => void }) => {
      const neonUtilities: Record<string, any> = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][300];
          const color2 = colors[color][600];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
    // Inner Glow Effect
    plugin(({ theme, addUtilities }: { theme: any; addUtilities: (arg0: any) => void }) => {
      const innerGlowUtilities: Record<string, any> = {};
      const colors = theme('colors');
      const opacities = theme('opacity', {});

      for (const colorName in colors) {
        if (typeof colors[colorName] === 'object') {
          const color1 = colors[colorName][600];
          const color2 = colors[colorName][900];

          // Add the regular glow without opacity
          innerGlowUtilities[`.inner-glow-${colorName}`] = {
            boxShadow: `inset 0 0 10px ${color1}, inset 10px 10px 40px ${color2}`,
          };

          // Add versions with opacity
          for (const opacityName in opacities) {
            const opacityValue = opacities[opacityName];

            innerGlowUtilities[`.inner-glow-${colorName}-${opacityName}`] = {
              boxShadow: `inset 0 0 10px ${color1}${Math.round(opacityValue * 255)
                .toString(16)
                .padStart(2, '0')}, inset 10px 10px 40px ${color2}${Math.round(opacityValue * 255)
                .toString(16)
                .padStart(2, '0')}`,
            };
          }
        }
      }

      addUtilities(innerGlowUtilities);
    }),
    // Text Gradient
    plugin(function ({ addUtilities, theme }) {
      const gradients = theme('gradients', {});
      const newUtilities: Record<string, any> = Object.keys(gradients).reduce(
        (acc, key) => {
          acc[`.text-gradient-${key}`] = {
            'background-image': gradients[key as keyof typeof gradients],
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          };
          return acc;
        },
        {} as Record<string, any>
      );
      addUtilities(newUtilities);
    }),
    //Text Stroke
    plugin(function ({ addUtilities, theme }) {
      const strokeWidths = theme('strokeWidth', {
        DEFAULT: '1',
        '0': '0.5',
        '1': '1',
        '2': '2',
      });

      const colors = theme('colors', {});

      // Define the type of utilities object
      const utilities: Record<string, Record<string, string>> = {};

      // Generate stroke width utilities
      Object.entries(strokeWidths).forEach(([key, value]) => {
        utilities[`.text-stroke${key === 'DEFAULT' ? '' : `-${key}`}`] = {
          '-webkit-text-stroke-width': `${value}px`,
          'paint-order': 'stroke fill',
        };
      });

      // Generate stroke color utilities
      Object.entries(colors as Record<string, string | Record<string, string>>).forEach(
        ([colorName, color]) => {
          if (typeof color === 'string') {
            utilities[`.text-stroke-${colorName}`] = {
              '-webkit-text-stroke-color': color,
              'paint-order': 'stroke fill',
            };
          } else if (typeof color === 'object' && color !== null) {
            Object.entries(color).forEach(([shade, shadeColor]) => {
              utilities[`.text-stroke-${colorName}-${shade}`] = {
                '-webkit-text-stroke-color': shadeColor,
                'paint-order': 'stroke fill',
              };
            });
          }
        }
      );

      addUtilities(utilities);
    }),
    // Frosted Glass Effect
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.frosted-glass': {
          background: 'rgba(255, 255, 255, 0.25)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.frosted-glass-dark': {
          background: 'rgba(0, 0, 0, 0.25)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.18)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
