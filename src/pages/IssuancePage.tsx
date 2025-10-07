import { useCredentialIssuance } from '../hooks/useCredential';
import CredentialForm from '../components/CredentialForm';
import ResultCard from '../components/ResultCard';
import { FileText, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';

const IssuancePage = () => {
  const { issueCredential, isLoading, result, reset } = useCredentialIssuance();

  const handleSubmit = (credentialData: Record<string, any>) => {
    issueCredential({ credentialData });
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <FileText className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Issue Credential</h1>
        </div>
        <p className="text-gray-600">
          Create and issue a new digital credential. The system will check for duplicates and assign a worker ID.
        </p>
      </div>

      <CredentialForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        title="Credential Data"
        submitText="Issue Credential"
        defaultValues={{
          name: "John Doe",
          email: "john@example.com",
          role: "developer",
          organization: "Acme Corp"
        }}
      />

      {result && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Result</h2>
            <Button
              variant="secondary"
              onClick={handleReset}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
          </div>
          <ResultCard result={result} type="issue" />
        </div>
      )}

      {/* Example Section */}
      <div className="mt-12 card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Credential Data</h3>
        <p className="text-gray-600 mb-4">
          Here are some examples of valid credential data you can use:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Employee Credential</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`{
  "name": "Jane Smith",
  "email": "jane@company.com",
  "employeeId": "EMP001",
  "department": "Engineering",
  "role": "Senior Developer",
  "startDate": "2023-01-15"
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Certificate Credential</h4>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`{
  "certificateId": "CERT123",
  "holderName": "Bob Johnson",
  "courseName": "Kubernetes Fundamentals",
  "issuer": "Cloud Academy",
  "issueDate": "2023-12-01",
  "expiryDate": "2024-12-01",
  "grade": "A+"
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuancePage;
