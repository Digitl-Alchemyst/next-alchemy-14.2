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
Welcome to Project: Scoop-Sustain. This is an all in 1 platform for crowd-funding and donation support. 
<br />
<br /> 
  <a href="https://github.com/vercel/next.js">
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js badge">
  </a>
  <a href="https://github.com/microsoft/TypeScript">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript badge">
  </a>
  <a href="https://github.com/tailwindlabs/tailwindcss">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind badge">
  </a>
<br />
</p>

<h2><ul><b>Live Project</b></ul></h2>

<a href="https://www.stevenwatkinsphotography.com/" target="blank"><img align="center" src="./public/global/SW-Photog.png" alt="logo" height="55" width="250" /></a>

[Demo Link](https://scoop-sustain.vercel.app/)

# Features

## Environment

- 📟 Next.js
- 🎓 TypeScript
- 🚀 Tailwind CSS
- 🌳 MongoDB
- 👹 AWS S3 Bucket
- 🎽 Stripe

## Libraries & Plugins

- 📁 ShadCN UI Library
- 📌 React Icons
- 🍻 Next.js 3rd Parties - GTM
- 📢 Google AdSense

## Concepts

- 🗂️ Server Side Data Fetching
- 🔄 Data Caching & Revalidation with Tags
- 🌐 Server Side Rendering (SSR)
- 🏗️ Static Site Generation (SSG) with `generateStaticParams`
- 🔀 Dynamic Routing

## Project State

- 🛠️ Initial Development

# To-Do List

- [ ] New users are undefined with no username in the profile link on the nav bar
- [ ] Error handling for not updating profile with required info
- [ ] More Profile Info About / How Funds are Used

## Documentation

- [ ] Add comments to all public functions
- [ ] Create a CONTRIBUTING guide
- [x] Update the README with installation instructions

## Features

- [ ] Add search functionality
- [ ] Design a responsive layout

- [ ] Profile Info: Headline, About Me (Rich Text?), How your Donations Help (Rich Text?), Thank You Note
- [ ] Donate off Platform: CashApp, Venmo, Paypal
- [ ] Donate off Platform: Crypto Wallet Links
- [ ] Profile Settings:
- [ ]

## Bugs

- [ ] New users are undefined with no username in the profile link on the nav bar
- [ ] Error handling for not updating profile with required info
- [ ] Sign in and sign out routes from /lib/util/auth.ts do not seem to be working.
- [x] Fetch failed for userSearch on live production, suspect the env url variable is set to local host on vercel.
- [ ] userSearch on Live Production is not working. Application error: a client-side exception has occurred (see the browser console for more information). Error: Connection closed. Call Stack Useless. This is caused by the IP whitelist in MongoDB Atlas. The Vercel deployment needs to be whitelisted in MongoDB Atlas, Temp fix is to allow all IPs.

## Refactoring

- [ ] Base URL Resolver.
- [ ] Refactor the database connection logic
- [ ] Optimize the data retrieval process

## Libraries & Plugins to Implement

## Potential Names

- [ ] Unchained-Voices
- [ ] Creator-Shield
- [ ] Voice-Unsilenced
- [ ] Speak-Secure
- [ ] Fund-Fortress
- [ ] Speakout-Secure
- [ ] SpeakEasy

# Documentation

- [Table of Contents](#table-of-contents)
- [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the Services for the Project Environment](#step-1-set-up-the-services-for-the-project-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
    - [Step 3.5v1. Create the .env file locally and populate in Vercel](#step-35v1-create-the-env-file-locally-and-populate-in-vercel)
    - [Step 3.5v2. Download the environment variables from Vercel to your local environment](#step-35v2-download-the-environment-variables-from-vercel-to-your-local-environment)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
  - [Step 5. Testing, Formatting, Linting, and Commits](#step-5-testing-formatting-linting-and-commits)
- [Questions and Answers](#questions-and-answers)
  - [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
- [Next steps](#next-steps)

### Important files and folders

| File(s) | Description |
| --- | --- |
| `.env.example` | All env variables needed for project to run |
| `/src/app/lib/util/db.ts` | Config file for connecting to Mongo DB in both Dev & Prod env |
| `/src/app/lib/util/auth.ts` | Config file for NextAuth Google Auth Provider |
| `/src/app/lib/util/models` | Where Mongo DB Schema Models are stored |
| `/src/app/lib/util/actions` | Where Server Actions are stored including: Uploading files to S3, Updating Profile info, and creating Invoices for Tips |
| `/src/app/api/auth/[...nextauth]/route.ts` |  API Route for user authentication [!Forced-Naming-Convention] |
| `/src/app/callback/route.ts` | API Callback Route for Cryptomus Invoice Status |
| `/` |  |

## Configuration

### Step 1. Set up the Services for the Project Environment

[Mongo DB Atlas](https://cloud.mongodb.com/v2/6679a894999dbe2418e42095#/overview) DigitalAlchemistStudios@gmail.com Google Auth

[Amazon S3 Bucket](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2) DigitalAlchemistStudios@gmail.com Standard Password

[Cryptomus](https://app.cryptomus.com/dashboard/business/merchants/2f6241cc-3251-4b66-959e-6649f7db3a73/settings) DigitalAlchemistStudios@gmail.com Google Auth

[Stripe](https://dashboard.stripe.com/test/dashboard) DigitalAlchemistStudios@gmail.com Secure Password

### Step 2. Set up the project locally

[Clone/Fork the repository](https://github.com/Digitl-Alchemyst/scoop-sustain.git)

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

### Step 5. Testing, Formatting, Linting, and Commits

Run ESLint

```bash
npm run lint
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
- [GitHub Discussions for Next.js][nextjs-github]
- [Discord Coummunity for Next.js][nextjs-discord]
- [Discord Coummunity for Tailwind CSS][tailwind-discord]
- [Join our Javascript Discord community to ask questions and get help][js-help]

## Next steps

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
