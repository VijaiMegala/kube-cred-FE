import { Shield, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Kube Credential</h1>
              <p className="text-sm text-gray-600">Microservice-based credential management</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Zap className="w-4 h-4" />
            <span>Powered by Kubernetes</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
