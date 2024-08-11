
# Messaging Mobile App - Frontend Developer Case Study

This project is a simple real-time chat component developed as part of a frontend developer case study. The objective was to create a basic messaging app using React.js and Firebase that supports user authentication and real-time message synchronization.

## Features

- **User Authentication**: 
  - Implemented using Firebase Authentication.
  - Users can log in with an email and password.

- **Chat Interface**:
  - Displays messages in real-time with the sender's email and timestamp.
  - Simple and functional chat UI with input fields for typing and sending messages.

- **Real-Time Functionality**:
  - Utilizes Firebase Firestore for real-time message synchronization.
  - Messages sent by one user appear instantly on another user's interface.

- **Technologies Used**:
  - **Frontend**: React.js
  - **Authentication & Database**: Firebase (Authentication and Firestore)
  - **Styling**: Tailwind CSS

## Installation and Setup

Follow these steps to set up and run the application locally:

### Prerequisites

- Node.js
- Firebase Account

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/okanserbest/chatApp.git
   cd chatApp
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Firebase Setup**:

   - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Enable Firebase Authentication and Firestore in the project settings.
   - Open `src/Helpers/Firebase.tsx` and replace the placeholder values with the Firebase configuration settings you obtained from the Firebase Console.

4. **Run the application**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

```
├── src
│   ├── Component       # React components
│   ├── Store           # Redux store and slices
│   ├── Hooks           # Custom hooks for Firebase and other utilities
│   ├── Helpers         # Firebase configuration and initialization
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── public              # Public assets
└── README.md           # Project documentation
```

## Usage

- After setting up Firebase, users can register and log in to the chat application.
- Once logged in, users can send and receive messages in real-time.

