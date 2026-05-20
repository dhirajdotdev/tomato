# Tomato

Tomato is a React Native food delivery app built with Expo. It includes authentication, restaurant browsing, search, cart management, and a custom drawer navigation experience.

## Features

- Expo + React Native mobile app
- Authentication flow with login
- Home feed of meals/restaurants
- Restaurant detail screen with add-to-cart
- Cart overview and order management
- Search screen with categories and recent searches
- Drawer navigation for profile, orders, help, and settings
- Safe area support for modern devices

## Tech Stack

- Expo
- React Native
- React Navigation (native stack, bottom tabs, drawer)
- React Native Safe Area Context
- Expo Vector Icons
- TypeScript

## Getting Started

### Prerequisites

- Node.js
- pnpm or npm
- Expo CLI installed globally (`npm install -g expo-cli`)

### Install dependencies

```bash
pnpm install
```

### Run the app

```bash
pnpm start
```

Then open the project in Expo Go on your device or launch an emulator.

## Project Structure

- `App.tsx` - main app entry point
- `src/navigation` - navigation stacks and drawer/tab setup
- `src/screens` - app screens for onboarding, auth, home, tabs, and drawer
- `src/context` - authentication and cart context state
- `src/services/api.ts` - fetches meal data from remote API
- `src/components` - reusable UI components like custom drawer content

## Notes

- The app uses a mock login and sample meal data.
- The search screen includes category buttons and recent searches.
- `HomeScreen` is configured to hide the native header and use a custom header UI.

## License

This project is provided as-is for learning and demonstration purposes.
