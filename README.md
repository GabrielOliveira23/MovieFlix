# 🎬 MovieFlix

MovieFlix is a **React Native** mobile application built with **Expo**, **TypeScript**, **NativeWind**, and **Appwrite**. It fetches rich movie data from the [TMDB (The Movie Database)](https://www.themoviedb.org/) API, including:

- ⭐ Average rating
- 📝 Description
- 💰 Revenue and budget
- 🏢 Production companies

> ⚠️ This app was created as part of my learning journey with **React Native** and **Expo**.

---

## 📱 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/81e08823-c38d-4a64-b82b-729e2c88bf03" width="30%" />
  <img src="https://github.com/user-attachments/assets/726692e4-893d-4483-9a2c-676ee0db25b5" width="30%" />
  <br />
  <img src="https://github.com/user-attachments/assets/3ff8c9f2-e058-4b48-812a-bc30953404e5" width="30%" />
  <img src="https://github.com/user-attachments/assets/c9ac7259-4115-4fb5-8013-09118f2c8a9f" width="30%" />
</p>

---

## 🧰 Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [NativeWind](https://www.nativewind.dev/)
- [Appwrite](https://appwrite.io/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

---

## 🚀 Features

- 🔍 Search for movies
- 🎞 View detailed movie information
- 🗳 See ratings, description, revenue, budget, and production companies
- 🧑‍💻 Clean and responsive UI using NativeWind
- ☁️ Backend powered by Appwrite

---

## ⚙️ Setup & Running Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movieflix.git
cd movieflix
```

### 2. Install dependencies
Make sure you have Node.js, Yarn or npm, and Expo CLI installed:

```bash
npm install -g expo-cli
yarn install # or npm install
```

### 3. Set up environment variables
Create a .env file in the root directory with the following variables:

```.env
TMDB_API_KEY=your_tmdb_api_key
APPWRITE_ENDPOINT=https://your-appwrite-instance.com/v1
APPWRITE_PROJECT_ID=your_appwrite_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_COLLECTION_ID=your_collection_id
```

📝 You can get your TMDB API key from [here](https://www.themoviedb.org/settings/api)
🗃 Appwrite setup guide: https://appwrite.io/docs

### 4. Start the project
```bash
npx expo start
```
Scan the QR code using the Expo Go app on your mobile device.

---

## 📂 Folder Structure
```bash
movieflix/
│
├── app/
│   ├── (tabs)/       # App tabs (Home, Search, etc.)
│   ├── movies/       # Screen to show movies info
├── types/            # TypeScript types
├── services/         # API and Appwrite services
├── components/       # Reusable components
├── .env              # Environment variables
└── ...
```

---

## 📌 Roadmap
- [x] Movie search
- [x] Detailed movie info
- [ ] User favorites (coming soon!)
- [ ] Authentication (coming soon!)

---

## 🤝 Contributing
Feel free to open issues or submit pull requests. Contributions are always welcome! 🎉

---

## 🙋‍♂️ GabrielOliveira23
Created with ❤️ while learning React Native & Expo
