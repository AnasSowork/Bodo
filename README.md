# Bodo - Real-Time Collaborative Whiteboard

**Bodo** is a dynamic, real-time collaborative whiteboard application designed for seamless teamwork. It allows users to start with a blank canvas, add shapes like rectangles and ellipses, use sticky notes for quick ideas, and draw freely with a pencil tool. The project leverages advanced technologies like **Convex**, **Clerk**, and **Live Blocks** to provide a robust, live collaboration experience.

## Features

- **Real-Time Collaboration**: Powered by Convex and Live Blocks, users can collaborate in real-time, with changes instantly reflected across all connected users.
- **Shape Drawing**: Easily add rectangles and ellipses to the canvas for structured brainstorming.
- **Sticky Notes**: Quick and easy annotations with sticky notes.
- **Pencil Tool**: Freehand drawing for more flexible and creative input.
- **User Authentication**: Secure user sign-in and management using Clerk.

## Project Structure

Here’s an overview of the project directory structure:

```plaintext
├── .next
├── app
├── assets
├── components         # Reusable UI components
├── convex             # Convex configuration and integration
├── hooks              # Custom React hooks
├── lib
├── node_modules
├── providers          # Context providers for app-wide state
├── public             # Static assets (images, fonts, etc.)
├── store              # State management (e.g., Zustand)
├── types              # TypeScript type definitions
├── .env.local         # Environment variables
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Files and directories to ignore in Git
├── bun.lockb
├── components.json    # Component documentation/configuration
├── liveblocks.config.ts # Live Blocks configuration
├── middleware.ts      # Custom middleware functions
├── next-env.d.ts      # Next.js environment types
├── next.config.mjs    # Next.js configuration
├── package-lock.json  # Dependency tree lock file
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── README.md          # Project documentation
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
