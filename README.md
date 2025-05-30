# 🎬 Movie Recommendation App (Frontend)

This is the **frontend** of a full-stack Movie Recommendation Web App built with **React** and **Tailwind CSS**. It allows users to enter a movie name and get personalized recommendations using a content-based filtering system.

## 🚀 Features

- 🎥 Search for any movie to get smart recommendations
- ⚡ Fast and responsive UI with **Tailwind CSS**
- 🧠 Smart recommendations powered by a Python backend (Flask API)
- 💻 Clean, minimal design with animations and dark mode support

## 📸 Preview

![image](https://github.com/user-attachments/assets/a9b21b3f-4da9-42c9-99db-5a17a7f7088b)

![image](https://github.com/user-attachments/assets/4405ab59-ba90-41b7-8cd0-0fa276d40aeb)


## 📁 Project Structure

/ ├── public/ # Static assets ├── src/ # React components │ ├── components/ # Reusable UI like MovieCard │ ├── pages/ # Routes like Home, Recommend │ ├── App.jsx # Main app entry │ └── index.js # Root render ├── tailwind.config.js # Tailwind CSS config └── package.json # Dependencies


## 🔧 Getting Started

### Prerequisites

- Node.js ≥ 14
- Backend API running (Flask app listening at `http://localhost:5000` or similar)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/movie-recommender-frontend.git
cd movie-recommender-frontend

# Install dependencies
npm install

# Start the development server
npm run dev

🌐 API Dependency
POST http://localhost:5000/recommend
Body: { "title": "Avatar" }
