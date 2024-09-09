# Autocomplete Country Search

This project is a simple React-based autocomplete component that suggests countries from a predefined list as the user types into the input field.

## Features

- **Autocomplete Functionality**: As users type in the input field, the component displays a list of countries that match the input text.
- **Keyboard Navigation**: Users can navigate through the suggestions using the UP and DOWN arrow keys. The Enter key selects a suggestion.
- **Click to Select**: Users can also select a suggestion by clicking on it.
- **Dynamic Suggestion List**: The suggestion list updates dynamically as the user types.

## Demo

![Autocomplete Screenshot](./path_to_image)
*Example of the Autocomplete component in action.*

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **SCSS**: CSS preprocessor for styling the components.
- **JavaScript**: Core language for the application logic.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/autocomplete-country-search.git
    ```

2. Navigate to the project directory:

    ```bash
    cd autocomplete-country-search
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm start
    ```

This will start the application and open it in your browser at `http://localhost:3000`.

### Project Structure

```bash
├── src
│   ├── components
│   │   ├── Autocomplete.js        # The main autocomplete component
│   ├── style
│   │   ├── App.css                # Styles for the app
│   │   ├── autocomplete.scss      # Styles for the autocomplete component
│   ├── App.js                     # Main entry point of the application
│   └── index.js                   # Renders the app
├── package.json
└── README.md
