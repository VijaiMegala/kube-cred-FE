import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';
import { Input } from './Input';

interface CredentialFormProps {
  onSubmit: (data: Record<string, any>) => void;
  isLoading: boolean;
  title: string;
  submitText: string;
  defaultValues?: Record<string, any>;
}

const CredentialForm = ({ 
  onSubmit, 
  isLoading, 
  title, 
  submitText, 
  defaultValues = {} 
}: CredentialFormProps) => {
  const [jsonInput, setJsonInput] = useState(() => 
    JSON.stringify(defaultValues, null, 2)
  );
  const [jsonError, setJsonError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleJsonChange = (value: string) => {
    setJsonInput(value);
    setJsonError(null);
    
    try {
      JSON.parse(value);
    } catch (error) {
      setJsonError('Invalid JSON format');
    }
  };

  const onFormSubmit = (data: any) => {
    try {
      const credentialData = JSON.parse(jsonInput);
      onSubmit(credentialData);
    } catch (error) {
      setJsonError('Invalid JSON format');
    }
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <div>
          <label htmlFor="jsonInput" className="block text-sm font-medium text-gray-700 mb-2">
            Credential Data (JSON)
          </label>
          <textarea
            id="jsonInput"
            value={jsonInput}
            onChange={(e) => handleJsonChange(e.target.value)}
            className={`w-full h-40 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm ${
              jsonError ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder='{"name": "John Doe", "email": "john@example.com", "role": "developer"}'
          />
          {jsonError && (
            <p className="mt-1 text-sm text-red-600">{jsonError}</p>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setJsonInput('{}')}
            disabled={isLoading}
          >
            Clear
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isLoading || !!jsonError}
          >
            {isLoading ? 'Processing...' : submitText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CredentialForm;
