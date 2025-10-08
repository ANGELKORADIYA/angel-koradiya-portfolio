# My Portfolio

This project is a personal portfolio built with Next.js to showcase my skills, projects, and learning journey. It includes sections for About Me, Projects, Learning Resources, and Contact. The portfolio also has an admin section to view messages sent through the contact form.

## Getting Started

To get started with the project, follow these steps:

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```
2.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
3.  Set up environment variables:

    *   Create a `.env.local` file in the root directory.
    *   Add the following variables, replacing the values with your actual MongoDB connection string, database user, and database password:

        ```
        DB_MONGODB_URI=<your_mongodb_connection_string>
        DB_USER=<your_database_user>
        DB_PASSWORD=<your_database_password>
        ```
4.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features

*   **Home Page:** Introduction and links to connect with me on various platforms.
*   **About Page:** Details about my background, skills, academics, and hobbies. Includes a feature to show/hide details.
*   **Projects Page:** Showcase of my projects with descriptions and links to live demos and code repositories.
*   **Learning Page:** A curated list of resources I've used to learn various technologies.
*   **Contact Page:** A form for visitors to send me messages, which are stored in a MongoDB database.
*   **Admin Page:** A password-protected page to view the messages submitted through the contact form.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for building the portfolio.
*   [React](https://reactjs.org/) - JavaScript library for building user interfaces.
*   [Tailwind CSS](https://tailwindcss.com/) - CSS framework for styling the portfolio.
*   [MongoDB](https://www.mongodb.com/) - NoSQL database to store contact form messages.
*   [react-icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily with react-icons.
*   [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env file.

## Folder Structure

