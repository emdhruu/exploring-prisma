# Prisma Exploration Project

This project is a learning endeavor to explore **Prisma**, a modern ORM for Node.js and TypeScript, integrated with **PostgreSQL**. The application backend is built with **Node.js** and **Express.js**, focusing on efficient database interaction and type-safe development.

## 🛠️ Tech Stack

- **Prisma**: ORM for database access and migrations
- **PostgreSQL**: Relational database
- **TypeScript**: Typed JavaScript for better development experience
- **Node.js**: JavaScript runtime
- **Express.js**: Backend framework for building APIs

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn
- TypeScript

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install dependencies:
    ```bash
    npm install
    or
    yarn install

3. Set up environment variables: Create a .env file in the project root with the following content:
    ```bash
    DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>

4. Initialize Prisma:
    ```bash
    npx prisma init

5. Generate Prisma Client:
    ```bash
    npx prisma generate

6. Apply database migrations:
    ```bash
    npx prisma migrate dev --name init


