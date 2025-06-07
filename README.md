# nuxt-tailwind-app

A Nuxt.js application styled with Tailwind CSS, demonstrating modular architecture and scalable project structure using Nuxt Layers and Plugins.

[View Live on Vercel](https://nuxt-tailwind-app-dun.vercel.app/)

## Features

- **Nuxt Layers**: The project leverages Nuxt Layers for a modular codebase. Layers enable mono-repo-like development, where features or sections can be developed and exported individually—ideal for larger projects or when sharing code across multiple Nuxt apps.
- **Nuxt Plugins**: Utilizes Nuxt’s plugin system for injecting custom logic and third-party integrations in a clean, maintainable way.
- **Tailwind CSS**: Rapid utility-first styling for responsive UI development.
- **Modern Vue**: Built with Vue 3 and Nuxt for a fast, reactive experience.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/madsadi/nuxt-tailwind-app.git
   cd nuxt-tailwind-app
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app locally.

## Project Structure

- `/layers`: Contains reusable layers for modular development.
- `/plugins`: Custom Nuxt plugins for app-wide logic.
- `/components`, `/pages`, etc.: Standard Nuxt/Vue directories.

## Why Nuxt Layers?

Having worked with Next.js, I found Nuxt Layers to be a flexible way to structure a Vue app—allowing parts of your codebase to be independently developed or exported. It’s a powerful tool for building scalable and maintainable projects.

## License

[MIT](LICENSE)
