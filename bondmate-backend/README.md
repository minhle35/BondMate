# BondMate Backend

## 🚀 Overview
BondMate is a **social bonding management app** that helps users **remember birthdays, plan catch-ups, and manage shared expenses** with friends and family.

This is the **backend API** built using **Express.js**, **MongoDB**, and **pnpm**. The backend provides RESTful API endpoints for handling user authentication, event scheduling, bill splitting, and notifications.

## 🛠 Tech Stack
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB (Mongoose ODM)
- **Package Manager**: pnpm
- **Authentication**: JWT (JSON Web Tokens)
- **Notifications**: Firebase Cloud Messaging (FCM) / Twilio / Email
- **Deployment**: Azure App Services / Azure Functions

## 📂 Project Structure
```
bondmate-backend/
│── src/
│   ├── routes/              # API route handlers
│   │   ├── users.js         # User authentication & management
│   │   ├── events.js        # Event scheduling
│   │   ├── expenses.js      # Bill sharing & tracking
│   │   ├── reminders.js     # Birthday & event notifications
│   │   ├── notifications.js # Notification services
│   ├── controllers/         # Business logic for routes
│   ├── models/              # MongoDB models (Mongoose)
│   ├── services/            # Helper services (notifications, payments)
│   ├── middlewares/         # Authentication, error handling
│   ├── config/              # Configurations (DB, environment variables)
│   ├── utils/               # Utility functions
│   ├── app.js               # Express app setup
│   ├── server.js            # Server entry point
│
├── tests/                   # Unit & integration tests (Jest/Mocha)
├── .env                     # Environment variables
├── pnpm-lock.yaml           # Dependency lock file
├── package.json             # Dependencies & scripts
├── README.md                # Documentation
```
## 🔧 Setup & Installation
### 1️ Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **pnpm** (Install with `npm install -g pnpm`)
- **MongoDB** (Local or use MongoDB Atlas)
- **Azure CLI** (For deployment)

### 2️ Install Dependencies
```sh
pnpm install
```

### 3 Setup Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://20820099:rNXVtbXSiaSqxja6@bondmate.iy8r3.mongodb.net/?retryWrites=true&w=majority&appName=bondmate
JWT_SECRET=rNXVtbXSiaSqxja6
AZURE_STORAGE_CONNECTION_STRING=
FIREBASE_SERVER_KEY=
```

### 5️ Run Locally
```sh
pnpm run dev
```
Access API at `http://localhost:5000`

🚀 API Endpoints

📌 Authentication

POST /api/users/register - Register a new user

POST /api/users/login - Authenticate user

📌 Events (Catch-Ups)

POST /api/events - Create an event

GET /api/events - Get all events

PUT /api/events/:id - Update an event

DELETE /api/events/:id - Delete an event

📌 Expenses (Bill Sharing)

POST /api/expenses - Record an expense

GET /api/expenses - List all expenses

PUT /api/expenses/:id - Update an expense

DELETE /api/expenses/:id - Delete an expense

📌 Reminders & Notifications

GET /api/reminders - Get upcoming birthdays & events

POST /api/reminders/send - Manually trigger reminders

🚀 Deployment to Azure

1️⃣ Login to Azure
```
az login
```

2️⃣ Create an Azure App Service (If Not Created)

```
az webapp create --resource-group BondMateGroup --plan BondMatePlan --name bondmate-api --runtime "NODE|16-lts"
```

3️⃣ Deploy Backend

```
git push azure main
```

OR using Azure CLI:

```
az webapp up --name bondmate-api --resource-group BondMateGroup
```

4️⃣ Set Environment Variables on Azure

```
az webapp config appsettings set --resource-group BondMateGroup --name bondmate-api --settings PORT=5000 MONGO_URI="your_azure_mongo_connection" JWT_SECRET=""
```

5️⃣ Restart App

```
az webapp restart --name bondmate-api --resource-group BondMateGroup
```

🧪 Running Tests

```
pnpm run test
```



