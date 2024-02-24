# POST IT

A twitter like project.

### Features

- **Schedule Posts**: Organize your content with ease, setting future posts to be published automatically.
- **Draft Posts**: Keep your ideas and drafts organized in one place, ready for review and publication.
- **Great UI**: A user-friendly interface designed for efficiency and ease of use, thanks to the use of component libraries like shadcn and TailwindCSS.

### Installation

#### Frontend Setup (React.js with Vite)

Vite offers a rapid development cycle, seamless JSX support, efficient bundle size, intuitive asset handling, and simplified configuration, making it an excellent choice for React development. To set up the frontend, follow these steps:

```bash
cd frontend
npm install
npm run build
```

#### Backend Setup (Django with SQLite)

The backend is built on Django and Django Rest Framework, providing a robust foundation for managing posts and other data. To set up the backend, use the following commands:

```bash
pip install -r ./requirements.txt
python manage.py migrate
python manage.py runserver
```

### Tech Stack

#### Backend

- **Django**: A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
- **Django Rest Framework**: A powerful and flexible toolkit for building Web APIs.

#### Frontend

- **Typescript**: Adds static types to JavaScript, enhancing code quality and maintainability.
- **React with Vite**: Leverages Vite's fast development cycle and efficient build process for React applications.
- **SWR**: A React Hooks library for remote data fetching, enabling easy caching and revalidation of data.
- **React Hook Forms**: Simplifies form handling in React, offering a better user experience.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **shadcn**: A component library for React, providing pre-built UI components for faster development.

### Challenges Encountered

- **Design**: The project adopted component libraries like shadcn and Twitter's UI for design inspiration, aiming for a great user interface.
- **State Synchronization**: Instead of simpler fetch calls, the project utilized the `useSWR` hook for caching and revalidating lists of posts, ensuring up-to-date data on the dashboard.
- **Project Scope**: Due to time constraints and the project's open-ended nature, additional features were not implemented, focusing on core functionality to ensure a solid foundation.