# 🎒 College Lost & Found Management System

## Project Title

**College Lost & Found Management System Using React, Node.js, Express, and MongoDB**

---

# Problem Statement

In colleges, students frequently lose personal belongings such as mobile phones, wallets, ID cards, laptops, bags, calculators, keys, and other valuable items. Currently, most colleges manage lost and found items manually through notice boards, WhatsApp groups, or by informing security staff. This manual process is slow, inefficient, and often results in items not being returned to their rightful owners.

A digital platform is needed where students can report lost and found items, search for missing belongings, and communicate with the finder or administrator in a secure and organized manner.

---

# Proposed Solution

The **College Lost & Found Management System** is a web-based application that provides a centralized platform for managing lost and found items.

The system allows students to:

- Register and log in securely.
- Report lost items.
- Report found items.
- Search and filter reported items.
- Upload images of lost or found items.
- View all available reports.
- Claim their belongings.

The administrator can:

- Manage all reports.
- Delete fake or duplicate reports.
- Approve claims.
- Monitor system statistics through an admin dashboard.

The project is developed using:

- React.js (Frontend)
- Node.js & Express.js (Backend)
- MongoDB (Database)
- JWT Authentication
- Axios
- Multer (Image Upload)

---

# Objectives

- Develop a centralized Lost & Found portal.
- Reduce the time required to locate lost belongings.
- Digitize the manual lost and found process.
- Improve communication between students and administrators.
- Maintain a secure database of all reports.

---

# Features

## Student Features

- User Registration
- User Login
- Report Lost Item
- Report Found Item
- Upload Item Images
- Search Items
- Filter by Category
- View Item Details
- Claim Found Items
- View Personal Reports

---

## Admin Features

- Secure Login
- Dashboard
- View All Reports
- Delete Reports
- Update Item Status
- Approve Claims
- Manage Users

---

# Technologies Used

## Frontend

- React.js
- React Router
- Axios
- CSS3
- HTML5
- JavaScript

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB

---

## Authentication

- JWT (JSON Web Token)
- Bcrypt.js

---

## Additional Libraries

- Multer
- CORS
- Dotenv
- Nodemon

---

# 📂 Project Structure

```text
lost-found-college/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

# System Modules

## Module 1 – Authentication

- Register
- Login
- Logout

---

## Module 2 – Lost Item Reporting

Students can report:

- Item Name
- Description
- Category
- Location
- Date
- Contact Number
- Image

---

## Module 3 – Found Item Reporting

Students can report found items using the same form.

---

## Module 4 – Search System

Search by:

- Item Name
- Category
- Status
- Location

---

## Module 5 – Dashboard

Displays:

- Total Reports
- Lost Items
- Found Items
- Returned Items

---

## Module 6 – Admin Panel

- Manage Reports
- Manage Users
- Delete Reports
- Approve Claims

---

# Database Tables

## User

| Field | Type |
|--------|------|
| ID | ObjectId |
| Name | String |
| Email | String |
| Password | String |

---

## Item

| Field | Type |
|--------|------|
| ID | ObjectId |
| Title | String |
| Description | String |
| Category | String |
| Location | String |
| Date | Date |
| Contact | String |
| Image | String |
| Status | Lost / Found |

---

# Workflow

```text
Student Login
       │
       ▼
Report Lost Item
       │
       ▼
Data Stored in MongoDB
       │
       ▼
Another Student Reports Found Item
       │
       ▼
Search & Match
       │
       ▼
Claim Request
       │
       ▼
Admin Approval
       │
       ▼
Item Returned
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/lost-found-college.git
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/lost_found_db

JWT_SECRET=your_secret_key
```

---

# 📡 API Endpoints

## User

| Method | Endpoint |
|----------|------------------------|
| POST | /api/users/register |
| POST | /api/users/login |

---

## Items

| Method | Endpoint |
|----------|----------------|
| GET | /api/items |
| GET | /api/items/:id |
| POST | /api/items |
| PUT | /api/items/:id |
| DELETE | /api/items/:id |

---

# Advantages

- Easy to use interface.
- Reduces paperwork.
- Saves time.
- Secure login system.
- Centralized database.
- Faster recovery of lost belongings.
- Easy searching and filtering.
- Responsive design.
- Image upload support.
- Real-time record management.

---

# Disadvantages

- Requires internet connectivity.
- Depends on accurate user information.
- Users must register before using the system.
- Requires database maintenance.
- Image storage increases server space usage.

---

# Benefits

- Helps students recover lost belongings quickly.
- Improves communication between students and administration.
- Eliminates manual record keeping.
- Stores data securely in MongoDB.
- Reduces chances of duplicate reports.
- Saves time for both students and staff.
- Easy to maintain and update.
- Can be accessed from mobile and desktop devices.

---

# Future Scope

- Email notifications.
- SMS alerts.
- QR Code verification.
- AI-based item matching.
- Mobile application.
- Cloud image storage.
- Push notifications.
- Role-based access control.
- Live chat support.
- Analytics dashboard.

---

# Expected Outcome

The proposed system provides a modern, secure, and efficient solution for managing lost and found items in a college. It minimizes manual work, improves transparency, and significantly increases the chances of returning lost belongings to their rightful owners.

---

# Conclusion

The **College Lost & Found Management System** is a practical web application that simplifies the process of reporting, searching, and claiming lost items within a college campus. By using React, Node.js, Express, and MongoDB, the system offers a secure, user-friendly, and scalable solution that benefits both students and administrators. It reduces manual effort, improves efficiency, and creates a reliable digital platform for managing lost and found records.

---

# Team Members

| Name | Role |
|------|------|
| Sujal Bhardwaj | Frontend Developer |
| Sujal Bhardwaj | Backend Developer |
| Sonal Pandey | Database Designer |

---

# References

1. React Documentation – https://react.dev
2. Node.js Documentation – https://nodejs.org
3. Express.js Documentation – https://expressjs.com
4. MongoDB Documentation – https://www.mongodb.com/docs
5. JWT Documentation – https://jwt.io
6. MDN Web Docs – https://developer.mozilla.org