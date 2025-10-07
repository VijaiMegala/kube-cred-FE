import { Link } from 'react-router-dom';
import { FileText, Search, Zap, Shield, Users, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kube Credential System
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A microservice-based credential issuance and verification platform powered by Kubernetes
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/issue"
            className="btn-primary flex items-center space-x-2"
          >
            <FileText className="w-5 h-5" />
            <span>Issue Credential</span>
          </Link>
          <Link
            to="/verify"
            className="btn-secondary flex items-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Verify Credential</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Issuance</h3>
          <p className="text-gray-600">
            Issue digital credentials with cryptographic security and worker tracking
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Verification</h3>
          <p className="text-gray-600">
            Verify credentials instantly with real-time validation and status tracking
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Microservices</h3>
          <p className="text-gray-600">
            Scalable microservice architecture with independent deployment and scaling
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Worker Tracking</h3>
          <p className="text-gray-600">
            Track which worker pod processed each credential for full traceability
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Processing</h3>
          <p className="text-gray-600">
            Process credentials in real-time with immediate feedback and status updates
          </p>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">JSON-based</h3>
          <p className="text-gray-600">
            Flexible JSON-based credential format supporting any data structure
          </p>
        </div>
      </div>

      {/* How it Works */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Issuance Process</h3>
            <ol className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span className="text-gray-700">Submit credential data as JSON</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span className="text-gray-700">System validates and checks for duplicates</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span className="text-gray-700">Credential is issued with worker ID and timestamp</span>
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification Process</h3>
            <ol className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span className="text-gray-700">Submit credential data for verification</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span className="text-gray-700">System searches for matching credential</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span className="text-gray-700">Returns verification status with worker details</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
