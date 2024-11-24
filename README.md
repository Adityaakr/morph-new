# Morph-Privy: Simple Integration of Morph with Privy

Welcome to **Morph-Privy**, a seamless integration of Morph's robust capabilities with the power of Privy, allowing easy Google authentication setup in just a few steps. This project ensures that developers can focus on building their applications while Privy manages the heavy lifting of authentication and data privacy.

## 🚀 Features
- **Privy**: Simple and secure user Onboarding 
- **Google Authentication**: Smooth integration for user sign-in with Google.

---

## 🛠️ Getting Started

Follow these steps to set up the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<Your-GitHub-Username>/morph-privy.git
cd morph-privy
```

### 2️⃣ Install Dependencies
Choose your preferred package manager to install dependencies:
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3️⃣ Obtain Your Privy API ID
- Head over to the [Privy Dashboard](https://dashboard.privy.io/).
- Sign in or create an account to access your API ID.

### 4️⃣ Configure Environment Variables
- Rename `.env.example` to `.env.local`:
  ```bash
  mv .env.example .env.local
  ```
- Open `.env.local` and paste your Privy API ID:
  ```bash
  NEXT_PUBLIC_PRIVY_APP_ID=<Your-Privy-API-ID>
  ```

### 5️⃣ Start the Development Server
Run the development server:
```bash
npm run dev
```
Your application should now be live at `http://localhost:3000`!

---

## 🤝 Contributing
We welcome contributions to improve **Morph-Privy**. Please fork the repository and submit a pull request.
---

**Happy Building! 🚀**
