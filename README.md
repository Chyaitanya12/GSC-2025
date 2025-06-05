# ResearchRX - Google Solutions Challenge 2025

## Project Overview
ResearchRX is a comprehensive healthcare platform that bridges the gap between patients and medical researchers. The platform consists of three main components:
- Patient Portal: For managing personal health records and self-diagnosis (http://localhost:5173/#/login)
- Researcher Portal: For medical researchers to access anonymized data and publish findings (http://localhost:5174/#/login)
- Server: Backend API handling data management and authentication

## 🚀 Quick Start

### Prerequisites
- Node.js (v19.0.0 or higher)
- MongoDB
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/GSC_2025.git
cd GSC_2025
```

### Setting Up the Server
```bash
cd server
cp .example.env .env    # Configure your environment variables
npm install
npm run dev            # Starts the development server
```

### Setting Up the Patient Portal
```bash
cd patient
npm install
npm run dev           # Runs on http://localhost:5173
```

### Setting Up the Researcher Portal
```bash
cd researcher
npm install
npm run dev           # Runs on http://localhost:5174
```

## 🏗️ Project Structure

```
GSC_2025/
├── patient/                 # Patient frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── store/         # Zustand state management
│   │   └── assets/        # Static assets
│   └── ...
├── researcher/             # Researcher frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── store/        # Zustand state management
│   │   └── assets/       # Static assets
│   └── ...
├── server/                # Backend server (Node.js + Express)
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── utils/           # Utility functions
└── tests/               # Test suites
```

## 🛠️ Technology Stack

### Frontend (Patient & Researcher Portals)
- React 19
- Vite 6
- TailwindCSS
- Zustand (State Management)
- React Router DOM
- Framer Motion (Animations)
- Radix UI Components (Patient Portal)

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JWT Authentication
- Nodemailer
- Cloudinary (File Storage)
- EJS (Email Templates)

## 🔑 Key Features

### Patient Portal
- User Authentication (Login/Signup)
- Medical Report Management
- BMI Calculator
- Self-Diagnosis Tool
- Profile Management
- Email Verification

### Researcher Portal
- Researcher Authentication
- Blog Creation and Management
- Access to Anonymized Medical Data
- Periodic Table Reference
- Research Tools Integration
- Profile Management

### Server Features
- Secure JWT Authentication
- Role-based Access Control
- File Upload Management
- Email Notifications
- API Rate Limiting
- Data Encryption

## 📝 API Documentation

### Authentication Endpoints
- POST `/api/auth/patient/register` - Patient registration
- POST `/api/auth/patient/login` - Patient login
- POST `/api/auth/patient/logout` - Patient logout
- POST `/api/auth/patient/verify-email` - Patient email verification
- POST `/api/auth/patient/regenerate-otp` - Patient regenerate OTP
- POST `/api/auth/patient/forgot-password` - Patient forgot password
- POST `/api/auth/patient/reset-password` - Patient reset password
- GET `/api/auth/patient/get-profile` - Get patient profile (protected)

- POST `/api/main/auth/researcher/register` - Researcher registration
- POST `/api/main/auth/researcher/login` - Researcher login
- POST `/api/main/auth/researcher/logout` - Researcher logout
- POST `/api/main/auth/researcher/verify-email` - Researcher email verification
- POST `/api/main/auth/researcher/regenerate-otp` - Researcher regenerate OTP
- POST `/api/main/auth/researcher/forgot-password` - Researcher forgot password
- POST `/api/main/auth/researcher/reset-password` - Researcher reset password
- GET `/api/main/auth/researcher/get-profile` - Get researcher profile (protected)

### Medical Reports
- POST `/api/medical/patient/add-medical-report` - Upload medical report (protected)
- DELETE `/api/medical/patient/delete-medical-report` - Delete medical report (protected)
- GET `/api/medical/patient/get-medical-reports` - Get patient medical reports (protected)
- PUT `/api/medical/patient/rename-medical-report` - Rename medical report (protected)

- GET `/api/medical/researcher/get-medical-reports` - Get anonymized medical reports (protected)
- POST `/api/medical/researcher/collection/:reportId` - Add report to collection (protected)
- DELETE `/api/medical/researcher/collection/:reportId` - Remove report from collection (protected)
- GET `/api/medical/researcher/collection` - Get researcher collection (protected)

### Blogs
- GET `/api/blogs` - Get all blogs
- POST `/api/blogs` - Create new blog
- GET `/api/blogs/:id` - Get specific blog
- PUT `/api/blogs/:id` - Update blog
- DELETE `/api/blogs/:id` - Delete blog

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add appropriate documentation
- Include tests for new features
- Ensure all tests pass before submitting PR

## 🧪 Testing

```bash
# Run server tests
cd server
npm run test

# Run frontend tests
cd patient # or cd researcher
npm run test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Solutions Challenge 2025
- React Team
- MongoDB Team
- All contributors and supporters

## 📞 Support

For support, email chaitanyasutrave22@gmail.com

## 🔒 Security

Please report any security issues to chaitanyasutrave22@gmail.com

---
Made with ❤️ for Google Solutions Challenge 2025

---

**Authorship Notice:**  
This project and all its components are created solely by Chaitanya Sutrave.
