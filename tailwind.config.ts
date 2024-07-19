import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');

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
      // screens: {
      //   xs: '420px',
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1000px',
      //   xl: '1165px',
      //   dxl: '1300px',
      //   xxl: '1750px',
      //   mxl: '2055px',
      // },
      lineClamp: {
        '8': '8',
        '15': '15',
      },
      colors: {
        accent: '#657eac',
        accent2: '#3c00a0',
        accent3: '#539eff',
        accent4: '#4caf50',
        accent5: '#b6eab8',
        accent6: '#93cf30',
        dark: {
          100: '#dbdcdf',
          200: '#b6b9bf',
          300: '#9297a0',
          400: '#6d7480',
          500: '#495160',
          600: '#3a414d',
          700: '#2c313a',
          800: '#1d2026',
          900: '#0f1013',
        },
        light: {
          100: '#f1f3f6',
          200: '#e2e6ee',
          300: '#d4dae5',
          400: '#c5cddd',
          500: '#b7c1d4',
          600: '#929aaa',
          700: '#6e747f',
          800: '#494d55',
          900: '#25272a',
        },
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
        lazure: {
          100: '#eff8fd',
          200: '#dff2fb',
          300: '#cfebf8',
          400: '#bfe5f6',
          500: '#afdef4',
          600: '#8cb2c3',
          700: '#698592',
          800: '#465962',
          900: '#232c31',
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
        dazure: {
          100: '#cce1eb',
          200: '#99c2d7',
          300: '#66a4c4',
          400: '#3385b0',
          500: '#00679c',
          600: '#00527d',
          700: '#003e5e',
          800: '#00293e',
          900: '#00151f',
        },
        turq: {
          100: '#cceceb',
          200: '#99dad7',
          300: '#66c7c2',
          400: '#33b5ae',
          500: '#00a29a',
          600: '#00827b',
          700: '#00615c',
          800: '#00413e',
          900: '#00201f',
        },
        cslight: {
          100: '#f7fbfe',
          200: '#eef8fd',
          300: '#e6f4fc',
          400: '#ddf1fb',
          500: '#d5edfa',
          600: '#aabec8',
          700: '#808e96',
          800: '#555f64',
          900: '#2b2f32',
        },
        csdark: {
          100: '#d5d6d6',
          200: '#abadae',
          300: '#828485',
          400: '#585b5d',
          500: '#2e3234',
          600: '#25282a',
          700: '#1c1e1f',
          800: '#121415',
          900: '#090a0a',
        },
        mwnavy: {
          100: '#ccd2dd',
          200: '#99a5bb',
          300: '#66789a',
          400: '#334b78',
          500: '#001e56',
          600: '#001845',
          700: '#001234',
          800: '#000c22',
          900: '#000611',
        },
        mwred: {
          100: '#efd2d7',
          200: '#dea4ae',
          300: '#ce7786',
          400: '#bd495d',
          500: '#ad1c35',
          600: '#8a162a',
          700: '#681120',
          800: '#450b15',
          900: '#23060b',
        },
        mwblack: {
          100: '#d4d5d5',
          200: '#aaabac',
          300: '#7f8082',
          400: '#555659',
          500: '#2a2c2f',
          600: '#222326',
          700: '#191a1c',
          800: '#111213',
          900: '#080909',
        },
        rsroyal: {
          100: '#d9e1f9',
          200: '#b3c3f3',
          300: '#8da5ed',
          400: '#6787e7',
          500: '#4169e1',
          600: '#3454b4',
          700: '#273f87',
          800: '#1a2a5a',
          900: '#0d152d',
        },
        rsgold: {
          100: '#fff7cc',
          200: '#ffef99',
          300: '#ffe766',
          400: '#ffdf33',
          500: '#ffd700',
          600: '#ccac00',
          700: '#998100',
          800: '#665600',
          900: '#332b00',
        },
        rspurple: {
          100: '#e6cce6',
          200: '#cc99cc',
          300: '#b366b3',
          400: '#993399',
          500: '#800080',
          600: '#660066',
          700: '#4d004d',
          800: '#330033',
          900: '#1a001a',
        },
        rssilver: {
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#cdcdcd',
          500: '#c0c0c0',
          600: '#9a9a9a',
          700: '#737373',
          800: '#4d4d4d',
          900: '#262626',
        },
        rsburg: {
          100: '#e6ccd2',
          200: '#cc99a6',
          300: '#b36679',
          400: '#99334d',
          500: '#800020',
          600: '#66001a',
          700: '#4d0013',
          800: '#33000d',
          900: '#1a0006',
        },
        rsdark: {
          100: '#d5ced0',
          200: '#ab9ea1',
          300: '#806d72',
          400: '#563d43',
          500: '#2c0c14',
          600: '#230a10',
          700: '#1a070c',
          800: '#120508',
          900: '#090204',
        },
        rslight: {
          100: '#f9f8f8',
          200: '#f3f2f2',
          300: '#ecebeb',
          400: '#e6e5e5',
          500: '#e0dede',
          600: '#b3b2b2',
          700: '#868585',
          800: '#5a5959',
          900: '#2d2c2c',
        },
        midnight: '#121063',
        copper: '#b87333',
        bronze: '#565584',
        silver: '#ecebff',
        gold: '#f7f7ff',
        platinum: '#ffffff',
        onyx: '#000000',
        obsidian: '#464646',
        diamond: '#b9f2ff',
        pearl: '#f0f0ff',
        amethyst: '#9966cc',
        emerald: '#50c878',
        ruby: '#e0115f',
        citrine: '#e4d00a',
        sapphire: '#0f52ba',
        topaz: '#ffc87c',
        coffee: '#6f4e37',
        cedar: '#4a3728',
        caramel: '#af6e4d',
        ginger: '#b06500',
        hazel: '#8e7618',
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
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animate'),
    plugin(({ theme, addUtilities }: { theme: any; addUtilities: (arg0: any) => void }) => {
      let neonUtilities: Record<string, any> = {};
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
  ],
};
export default config;
