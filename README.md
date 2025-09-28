PeerMate is a social networking web app built for college students to connect with peers based on shared interests, career goals, and hobbies.  

# PeerMate (Backend)
This repository contains the **backend** built with **Node.js, Express, and MongoDB**.  
You can find the **frontend repository here**: [PeerMate Frontend](https://github.com/Aditya-kumar-sah/PeerMate_Frontend).

---

## 🚀 Features

- 🔐 **Authentication & Authorization** – Integrated with **Firebase Auth** for secure login and registration.  
- 📩 **Post Management** – Create, fetch, like, and manage posts for the personalized feed.  
- 👥 **User Profiles** – Store and manage student details, interests, and connections.  
- 🛏 **Roommate Finder** – Backend APIs to help match students with similar career and sports interests.  
- 📡 **RESTful APIs** – Clean, structured API design to communicate with the frontend.  
- 🌍 **CORS enabled** – Safe cross-origin communication between frontend and backend.

---

## 🛠 Tech Stack

- **Backend Framework:** Node.js + Express  
- **Database:** MongoDB  
- **Auth:** Firebase Authentication  
- **Cloud Storage:** Cloudinary for file uploads  
- **Frontend:** [PeerMate Frontend](https://github.com/Aditya-kumar-sah/PeerMate_Frontend)

---

## ⚡ Getting Started

git clone https://github.com/Aditya-kumar-sah/PeerMate_Backend.git

cd PeerMate_Backend

npm install

Add MONGOURL, PORT, BACKEND_URL, Cloudinary Credentials in your .env

Add firebase_keys.json file in config folder then specify its location in Firebase.js file in same config folder

npm run dev

