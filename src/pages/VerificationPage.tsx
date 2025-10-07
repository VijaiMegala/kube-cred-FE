import { useCredentialVerification } from '../hooks/useCredential';
import CredentialForm from '../components/CredentialForm';
import ResultCard from '../components/ResultCard';
import { Search, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';

const VerificationPage = () => {
  const { verifyCredential, isLoading, result, reset } = useCredentialVerification();

  const handleSubmit = (credentialData: Record<string, any>) => {
    verifyCredential({ credentialData });
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Search className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">Verify Credential</h1>
        </div>
        <p className="text-gray-600">
          Verify an existing credential by submitting its data. The system will check if it has been issued and return verification details.
        </p>
      </div>

      <CredentialForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        title="Credential Data to Verify"
        submitText="Verify Credential"
        defaultValues={{
          name: "John Doe",
          email: "john@example.com",
          role: "developer"
        }}
      />

      {result && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Verification Result</h2>
            <Button
              variant="secondary"
              onClick={handleReset}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
          </div>
          <ResultCard result={result} type="verify" />
        </div>
      )}

      {/* Instructions Section */}
      <div className="mt-12 card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How Verification Works</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-medium">1</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Submit Credential Data</h4>
              <p className="text-gray-600">Enter the exact JSON data of the credential you want to verify</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-medium">2</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">System Search</h4>
              <p className="text-gray-600">The system searches for a credential with matching data</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-medium">3</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Verification Result</h4>
              <p className="text-gray-600">Get detailed information including worker ID, timestamps, and verification status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-8 card bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 Verification Tips</h3>
        <ul className="space-y-2 text-blue-800">
          <li>• Make sure the JSON data matches exactly what was originally issued</li>
          <li>• The system performs exact matching, so even small differences will cause verification to fail</li>
          <li>• You can verify the same credential multiple times - it will show the original issuance details</li>
          <li>• Each verification attempt is tracked with the worker ID that processed the request</li>
        </ul>
      </div>
    </div>
  );
};

export default VerificationPage;
