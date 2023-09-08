# Codebuddy
An OpenAI powered web application to help programmers with their code. Built using sass, react, and nodejs.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Intelligent Code Suggestions**: Codebuddy leverages OpenAI's API to provide intelligent code suggestions, helping you write code more efficiently and accurately.

- **Programming Resources**: Access a wide range of programming resources, including documentation, tutorials, and community forums, all within the Codebuddy interface.

- **User-Friendly Interface**: The user interface is designed with ease of use in mind, making it accessible to both novice and experienced programmers.

- **Customization**: Tailor Codebuddy to your coding preferences by adjusting settings such as coding style, language, and preferred libraries.

- **Responsive Design**: Codebuddy is fully responsive, ensuring a seamless experience on various devices and screen sizes.

## Getting Started

Follow these steps to set up and run Codebuddy on your local machine.

### Prerequisites

- Node.js: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- OpenAI API Key: You will need an API key from OpenAI to use the intelligent code suggestion feature. Obtain your API key by signing up at [OpenAI](https://openai.com/).

### Installation

1. Clone the Codebuddy repository to your local machine:

   ```bash
   git clone https://github.com/MichaelSukkiSong/Codebuddy.git

2. Navigate to the project directory:
   
    ```bash
    cd Codebuddy

3. Install the project dependencies using npm:
    ```bash
    npm install

4. Create a config/dev.js file in the project root directory and add your API keys as follows:
   
    ```bash
    module.exports = {
    googleClientID:
      'YOUR_GOOGLE_CLIENT_ID',
    googleClientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    mongoURI:
      'YOUR_MONGOURI,
    cookieKey: 'ANY_RANDOM_STRING',
    openaiApiKey: 'YOUR_OPENAI_API_KEY',
};

5. Start the Codebuddy application:
    ```bash
    npm run dev

The application should now be running locally on http://localhost:3000 and the server at http://localhost:5000.

## Usage

Open your web browser and go to http://localhost:3000.

Sign in or create an account to access the full range of features.

Use the code editor to write or paste your code.

Activate the code suggestion feature to receive intelligent code suggestions powered by OpenAI.

Explore the programming resources, documentation, and tutorials available within the application.

Customize your preferences in the settings menu to tailor Codebuddy to your coding needs.

## Contributing

We welcome contributions from the community to improve Codebuddy. If you'd like to contribute, please follow these guidelines:

Fork the repository and create a branch for your changes.

Make your changes, ensuring that the code adheres to the project's coding standards.

Write clear and concise commit messages.

Push your changes to your forked repository.

Create a pull request to merge your changes into the main Codebuddy repository.

Your pull request will be reviewed, and once accepted, your changes will be merged.

## License

Codebuddy is licensed under the MIT License. Feel free to use, modify, and distribute this software as per the terms of the license.

