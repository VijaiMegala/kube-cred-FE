import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import IssuancePage from './pages/IssuancePage'
import VerificationPage from './pages/VerificationPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/issue" element={<IssuancePage />} />
            <Route path="/verify" element={<VerificationPage />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
