<h1><ul><b>
   Project: Scoop-Sustain
</b></ul></h1>
<p align="center">
  <br />
  <img width="650" src="./public/global/" alt="Logo">
  <br />
</p>

 <p svg align="center">
<img src="https://readme-typing-svg.demolab.com?font=Noto+Serif&pause=3000&color=2FA4D7&center=true&vCenter=true&width=375&lines=Support+Independent+Journalist+&+Artist" alt=typing>
 </p>

<p align="center">
Project version updated for Next.js 13.4.8 [This project will be maintained to remain current with Next.js @latest until otherwise noted.] This is ready to use in its current state project is set up with Jest and React Testing Library for code testing, it has been configured to work with type script. Custom imports have been set up but are currently not working within the testing enviroment. Eslint settings still a WOP refining the configs for Jest & Testing Library as well as Typescript. Uses ESLint to parse to Typescript. Sets specific rules for for testing envrioment (files within the **tests** directory or files with names ending in .spec.js, .test.js, .ts, .jsx, or .tsx). Lots of rule modifications I collected from a few other react projects. Configured Import Resolver to handle custom import settings.
<br />

[Demo Video](https://www.youtube.com/watch?v=ZtPs9kD9ExY) <br /> <a href="https://github.com/vercel/next.js"> <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js badge"> </a> <a href="https://github.com/microsoft/TypeScript"> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript badge"> </a> <a href="https://github.com/tailwindlabs/tailwindcss"> <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind badge"> </a> <br />

</p>

<h2><ul><b>Live Project</b></ul></h2>

<a href="https://www.stevenwatkinsphotography.com/" target="blank"><img align="center" src="./public/global/SW-Photog.png" alt="logo" height="55" width="250" /></a>

[Demo Link](https://scoop-sustain.vercel.app/)

# Features

## Environment

- 📟 Next.js
- 🎓 TypeScript
- ✅ Strict Mode for TypeScript and React 18
- 🚀 Tailwind CSS

## Libraries & Plugins

- 📁 ShadCN UI Library
- 📌 React Icons
- 🍻 Next.js 3rd Parties - GTM
- 📢 Google AdSense
- ✏️ Linter with ESLint (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with Prettier
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files

## Features

- 🌈 Neon Shadows
- 🌀 Slower Spin Animation
- 🙈 Scrollbar Hide
- 🌈 Expanded Color Library including Social Media Colors

- 💯 Maximize lighthouse score
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🖱️ One click deployment with Vercel (or manual deployment to any hosting services)

## Project State

- 🛠️ Release

# To-Do List

## Main

- [ ]
- [ ]
- [ ]

## Documentation

- [ ] Add comments to all public functions
- [ ] Create a CONTRIBUTING guide
- [ ] Update the README with installation instructions

## Features

- [ ]
- [ ]
- [ ]

## Bugs

- [ ]
- [ ]
- [ ]

## Refactoring

- [ ]
- [ ]
- [ ]

## Libraries & Plugins to Implement

# Documentation

- [Table of Contents](#table-of-contents)
- [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Option 1. Set up the project locally](#step-2-set-up-the-project-locally)
    - [Step 3.5v1. Create the .env file locally and populate in Vercel](#step-35v1-create-the-env-file-locally-and-populate-in-vercel)
    - [Step 3.5v2. Download the environment variables from Vercel to your local environment](#step-35v2-download-the-environment-variables-from-vercel-to-your-local-environment)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
    - [Step 3.5v1. Create the .env file locally and populate in Vercel](#step-35v1-create-the-env-file-locally-and-populate-in-vercel)
    - [Step 3.5v2. Download the environment variables from Vercel to your local environment](#step-35v2-download-the-environment-variables-from-vercel-to-your-local-environment)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
  - [Testing, Formatting, Linting, and Commits](#step-5-testing-formatting-linting-and-commits)
- [Questions and Answers](#questions-and-answers)
  - [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
- [Next steps](#next-steps)

### Important files and folders

| File(s) | Description |
| --- | --- |
| `/src/app/lib/util/models` | Where Mongo DB Schema Models are stored |
| `/src/app/lib/util/actions` | Where Server Actions are stored including: Uploading files to S3, Updating Profile info, and creating Invoices for Tips |
| `/src/app/api/auth/[...nextauth]/route.ts` |  API Route for user authentication |
| `/` |  |

## Configuration

### Option 1. Set up the project locally

[Clone/Fork the repository](https://github.com/Digitl-Alchemyst/next-alchemy-14.2)

Rename.env.example to .env.local and populate the variables with the correct information from the above services. Alternatively, you can populate the env variables in the Vercel Dashboard and use the [Vercel CLI](https://vercel.com/cli) to pull the environment variables from your Vercel project.

#### Step 3.5v1. Create the .env file locally and populate in Vercel

Deploy to your testing enviroment on Vercel

```bash
npx vercel
```

The first build will fail with no env variables. Open your Vercel dashboard and copy the entire .env file and paste it in the first line of the Vercel env variable settings and redeploy the project

```bash
npx vercel
```

### Step 3.5v2. Download the environment variables from Vercel to your local environment:

```bash
npx vercel env pull
```

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and backend configuration will be applied live using hot reloading.

Your personal website should be up and running on [http://localhost:3000][localhost-3000]!

### Step 4. Deploy to production

To deploy your changes to production using `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

### Testing, Formatting, Linting, and Commits

Run ESLint

```bash
npm run lint
```

Run ESLint with fixes

```bash
npm run lint --fix
```

Check code for formatting inconsistencies with Prettier

```bash
prettier --check.
```

Format code to project standards with Prettier

```bash
prettier --write.
```

Run Test with Jest & React Testing Library

```bash
npm jest
```

Run Jest in Verbose Mode

```bash
npm jest --verbose --watch
```

Run Jest with Coverage

```bash
npm jest --coverage
```

Run Jest in CI Mode

```bash
npm jest --ci
```

## Questions and Answers

### It doesn't work! Where can I get help?

In case of any issues or questions, you can post:

- [Next JS Documentation][nextjs-docs]
- [Vercel Documentation][vercel-docs]
- [GitHub Discussions for Vercel][nextjs-vercel]
- [GitHub Discussions for Next.js][nextjs-github]
- [Discord Coummunity for Next.js][nextjs-discord]
- [Discord Coummunity for Tailwind CSS][tailwind-discord]

## Next steps

- [Join our Javascript Discord community to ask questions and get help][js-help]
- [Join the Alchemy Labz Discord server to work with others contributing to this project][js-help]

[localhost-3000]: http://localhost:3000
[`.env.example`]: .env.example
[nextjs-docs]: https://nextjs.org/docs
[nextjs-github]: https://github.com/vercel/next.js/discussions
[nextjs-discord]: https://discord.gg/nextjs
[vercel-docs]: https://vercel.com/docs
[vercel-github]: https://github.com/vercel/vercel/discussions
[tailwind-discord]: https://discord.gg/tailwind
[js-help]: https://discord.gg/aDumcW6ESB
[alchemy-labz]: https://discord.gg/8MSUFpKu6n

Run Sentry Initializer
