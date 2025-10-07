# Kube Credential Frontend

A modern React-based frontend application for a microservice-based credential issuance and verification platform powered by Kubernetes. This application provides a user-friendly interface for managing digital credentials with real-time processing and worker tracking.

## 🚀 Features

- **Secure Credential Issuance**: Issue digital credentials with cryptographic security and worker tracking
- **Instant Verification**: Verify credentials instantly with real-time validation and status tracking
- **Microservice Architecture**: Scalable microservice architecture with independent deployment and scaling
- **Worker Tracking**: Track which worker pod processed each credential for full traceability
- **Real-time Processing**: Process credentials in real-time with immediate feedback and status updates
- **JSON-based Format**: Flexible JSON-based credential format supporting any data structure
- **Modern UI**: Clean, responsive interface built with React, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running (see backend repository for setup)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VijaiMegala/kube-cred-FE.git
cd kube-cred-FE
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp env.example .env
```

Update the environment variables:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

Run the test suite:

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   ├── CredentialForm.tsx # Form for credential operations
│   ├── Header.tsx      # Application header
│   ├── Input.tsx       # Custom input component
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Navigation component
│   └── ResultCard.tsx  # Credential result display
├── hooks/              # Custom React hooks
│   └── useCredential.ts # Credential management hook
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── IssuancePage.tsx # Credential issuance page
│   └── VerificationPage.tsx # Credential verification page
├── services/           # API services
│   └── api.ts          # API client configuration
├── types/              # TypeScript type definitions
│   └── credential.ts   # Credential-related types
└── test/               # Test files
    ├── Button.test.tsx
    ├── Input.test.tsx
    └── setup.ts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI

## 🌐 API Integration

The frontend communicates with the backend API through the following endpoints:

- `POST /api/credentials/issue` - Issue a new credential
- `POST /api/credentials/verify` - Verify an existing credential
- `GET /api/credentials/:id` - Get credential by ID
- `GET /health` - Health check endpoint

## 🐳 Docker Support

The application includes Docker configuration for containerized deployment:

```bash
# Build Docker image
docker build -t kube-cred-frontend .

# Run container
docker run -p 3000:3000 kube-cred-frontend
```

## 🔄 How It Works

### Credential Issuance Process

1. **Submit Data**: User submits credential data as JSON through the issuance form
2. **Validation**: System validates the data and checks for duplicates
3. **Processing**: Credential is processed by a worker pod and issued with worker ID and timestamp
4. **Response**: User receives confirmation with credential details and worker information

### Credential Verification Process

1. **Submit Data**: User submits credential data for verification
2. **Search**: System searches for matching credential in the database
3. **Validation**: Credential is validated and verification status is determined
4. **Response**: User receives verification status with worker details and timestamps

## 🚀 Deployment

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm run preview
```

### Docker

```bash
docker build -t kube-cred-frontend .
docker run -p 3000:3000 kube-cred-frontend
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Repositories

- [Backend API](https://github.com/VijaiMegala/kube-cred-BE) - Microservice backend
- [Kubernetes Manifests](https://github.com/VijaiMegala/kube-cred-k8s) - K8s deployment files

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Note**: This frontend application requires the corresponding backend API to be running for full functionality. Please refer to the backend repository for API setup instructions.
