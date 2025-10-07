import { CredentialResponse } from '../types/credential';
import { CheckCircle, XCircle, Clock, User, Calendar } from 'lucide-react';

interface ResultCardProps {
  result: CredentialResponse;
  type: 'issue' | 'verify';
}

const ResultCard = ({ result, type }: ResultCardProps) => {
  if (!result) return null;

  const isSuccess = result.success;
  const credential = result.data;

  return (
    <div className="card max-w-2xl mx-auto mt-6">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
          isSuccess ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {isSuccess ? (
            <CheckCircle className="w-6 h-6 text-green-600" />
          ) : (
            <XCircle className="w-6 h-6 text-red-600" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${
            isSuccess ? 'text-green-900' : 'text-red-900'
          }`}>
            {isSuccess ? 'Success!' : 'Error'}
          </h3>
          
          <p className={`mt-1 ${
            isSuccess ? 'text-green-700' : 'text-red-700'
          }`}>
            {result.message}
          </p>

          {result.workerId && (
            <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600">
              <User className="w-4 h-4" />
              <span>Worker: {result.workerId}</span>
            </div>
          )}

          {result.timestamp && (
            <div className="mt-1 flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{new Date(result.timestamp).toLocaleString()}</span>
            </div>
          )}

          {credential && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Credential Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ID:</span>
                  <span className="font-mono text-gray-900">{credential.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Issued By:</span>
                  <span className="text-gray-900">{credential.issuedBy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Issued At:</span>
                  <span className="text-gray-900">
                    {new Date(credential.issuedAt).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    credential.isVerified 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {credential.isVerified ? 'Verified' : 'Pending Verification'}
                  </span>
                </div>
                {credential.verifiedBy && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verified By:</span>
                    <span className="text-gray-900">{credential.verifiedBy}</span>
                  </div>
                )}
                {credential.verifiedAt && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verified At:</span>
                    <span className="text-gray-900">
                      {new Date(credential.verifiedAt).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-gray-900 mb-2">Credential Data:</h5>
                <pre className="bg-white p-3 rounded border text-xs overflow-x-auto">
                  {JSON.stringify(credential.credentialData, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
