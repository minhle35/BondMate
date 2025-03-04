# BondMate – A Smart Bonding Management App 🤝
BondMate helps you stay connected with friends and family by managing birthdays, catch-ups, and bill-sharing in one place.

## 🚀 Tech Stack:
- Frontend: Vue 3 + TypeScript + Tailwind CSS + Vite
- Backend: Express.js + MongoDB
- Package Manager: pnpm
- Deployment: Azure Web Apps + GitHub Actions

## 📌 Features
### Stage 1: Minimum Viable Product (MVP)
- 🎂 Birthday Reminders – Never forget a friend's birthday again!
- ☕ Catch-Up Scheduling – Plan meetups and get reminders.
- 💰 Bill Splitting – Track shared expenses with friends.
- 🔔 Notifications – Email and push notifications for events.
- 📝 Basic Authentication – Sign up, login, and manage accounts.


### Stage 2: Future Enhancements 🔜
- 📊 User Dashboard – View upcoming events and expenses.
- Azure Deployment – Fully hosted on Azure Web Apps & Static Web Apps.
- AI-Powered Gift Suggestions – Personalized gift ideas for birthdays.
- Geolocation-Based Catch-Ups – Find friends nearby and suggest meeting points.
- Smart Scheduling with Google Calendar – Auto-suggest the best meeting times.
- Integrated Payment Support – Pay friends directly via Stripe or PayPal.
- Mobile App (Vue Native) – Extend BondMate to iOS & Android.
- Social Streaks & Leaderboards – Track friendships with engagement scores.

### 🚀 Getting Started
1️⃣ Clone the Repository
```
git clone https://github.com/your-username/bondmate.git
cd bondmate
```
2️⃣ Set Up the Backend
```
cd bondmate-backend
pnpm install
pnpm run dev
```
Backend runs on http://localhost:5000.

3️⃣ Set Up the Frontend
```
cd bondmate-frontend
pnpm install
pnpm run dev
```

Frontend runs on http://localhost:5173.

🔹 Project Structure
```
bondmate/
│── bondmate-backend/        # Express.js backend
│   ├── .github/workflows/   # GitHub Actions for CI/CD
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/
│   │   ├── config/
│   ├── package.json
│
│── bondmate-frontend/       # Vue.js + TypeScript frontend
│   ├── .github/workflows/   # GitHub Actions for CI/CD
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   ├── store/
│   ├── package.json
│
│── .gitignore
│── README.md
```
⚙️ Environment Variables
Create a .env file in both bondmate-backend/ and bondmate-frontend/.

Backend (bondmate-backend/.env)
```
PORT=5000
MONGO_URI=mongodb+srv://your-db-url
JWT_SECRET=your-secret-key
```

Frontend (bondmate-frontend/.env)

```
VITE_API_URL=http://localhost:5000
```
🛠️ Running Tests
Run backend tests:

```
pnpm run test
```
Run frontend tests:

```
pnpm run test
```
🚀 Deployment
Backend (Azure Web Apps)

```
az webapp up --name bondmate-backend --resource-group BondMateGroup
```
Frontend (Azure Static Web Apps)

```
az staticwebapp create --name bondmate-frontend --resource-group BondMateGroup --location "centralus" --app-location "dist"
```
📌 CI/CD with GitHub Actions
- Backend CI/CD (.github/workflows/backend-ci.yml)
- Frontend CI/CD (.github/workflows/frontend-ci.yml)

Automates: ✔ Linting & Testing on push
✔ Build & Deployment on main

📜 License
This project is licensed under MIT License.