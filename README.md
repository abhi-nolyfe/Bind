# Bind: A Next.js Social Media Clone

![Home Page](https://user-images.githubusercontent.com/117166487/286802243-aa931158-33e5-4905-8e09-52cb2f426b77.png)

## Project Overview

Bind is a dynamic social media platform built with Next.js, aiming to recreate the essence of a vibrant online community. Leveraging the power of Next.js, this project encapsulates various features akin to popular social media platforms.

### Functionality

- **Clerk-Powered Authentication & Community Integration**: Employing Clerk's authentication, utilize webhooks for seamless community interactions, enabling user-driven threads and comments.

- **Next.js Server Actions & MongoDB Database Integration**: Using Next.js server actions for backend operations, ensure efficient thread creation, community building, and user profile modifications, all managed and stored within MongoDB's database architecture.

- **Dynamic Content Exploration**: Implement a dynamic home feed for users to explore diverse content, discover new communities, and connect with other users.

## Setup Instructions

### Getting Started

1. Clone the repository to your local environment.
2. Navigate to the project root directory in your terminal.

### Installation

Install dependencies by running:

```bash
npm install
```

### Starting the Development Server

Initiate the development server with:

```bash
npm run dev
```

Access the application on your browser at [http://localhost:3000](http://localhost:3000) to explore the live platform.

### Customization

1. **`app` and `components` Directories**: These serve as primary areas for customization. Modify files within these directories to tailor the layout, interactions, and content of the social media clone.

### Environment Variables

Create a `.env` file in the root directory and set the following environment variables:

```plaintext
# Clerk Authentication Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MongoDB Configuration
MONGODB_URL=your_mongodb_connection_url

# UploadThing Integration
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```

Replace the placeholders (`your_clerk_publishable_key`, `your_clerk_secret_key`, etc.) with your actual credentials.

## Support and Contributions

For any questions, issues, or feedback, please don't hesitate to reach out. Feel free to open a Pull Request if you'd like to contribute to the project.
