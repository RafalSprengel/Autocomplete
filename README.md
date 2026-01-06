<img width="1299" height="436" alt="Zrzut ekranu 2026-01-06 130235" src="https://github.com/user-attachments/assets/4d1edd97-3176-40ae-95e1-61d6e902c69a" />
# Custom Autocomplete Component

A lightweight, dependency-free autocomplete search component built with React. This project demonstrates handling complex user interactions, keyboard navigation, and dynamic list filtering.

## 🚀 Live Demo
- **URL:** [https://custom-autocomplete.vercel.app/](https://custom-autocomplete.vercel.app/)

## 🔑 Key Features
- **Dynamic Filtering**: Real-time suggestion updates based on user input.
- **Keyboard Navigation**: Full support for `UP`, `DOWN` arrows for selection and `ENTER` to confirm.
- **Mouse Interaction**: Click-to-select functionality with hover state management.
- **State-Driven UI**: Managed via React hooks to ensure synchronized rendering of the input and suggestion list.
- **Modular Styling**: Built with SCSS for clear separation of concerns and easy customization.

## 🛠 Tech Stack
- **React.js**: Functional components and state hooks (`useState`, `useRef`).
- **JavaScript (ES6+)**: Array filtering and event handling logic.
- **SCSS**: Modular stylesheets.

## 📁 Project Structure
- `src/components/Autocomplete.js`: Core logic for filtering and event handling.
- `src/style/autocomplete.scss`: Component-specific styling and animations.
- `src/App.js`: Main container demonstrating the component implementation.

## 🏗 Engineering Challenges Solved
- **Event Management**: Precise handling of keyboard events to prevent default browser behavior during navigation.
- **Index Tracking**: Synchronizing the highlighted suggestion index with both keyboard and mouse movements.
- **Zero-Dependency Logic**: All filtering and navigation logic is implemented using native JavaScript, minimizing the bundle size.

## 🚀 Setup
1. Clone the repository: `git clone https://github.com/RafalSprengel/Autocomplete`
2. Install dependencies: `npm install`
3. Start development server: `npm start`
