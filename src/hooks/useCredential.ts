import { useState } from 'react';
import { credentialApi } from '../services/api';
import { CreateCredentialRequest, VerifyCredentialRequest, CredentialResponse } from '../types/credential';
import toast from 'react-hot-toast';

export const useCredentialIssuance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CredentialResponse | null>(null);

  const issueCredential = async (data: CreateCredentialRequest) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const response = await credentialApi.issueCredential(data);
      setResult(response);
      
      if (response.success) {
        toast.success('Credential issued successfully!');
      } else {
        toast.error(response.message);
      }
      
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to issue credential';
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
  };

  return {
    issueCredential,
    isLoading,
    result,
    reset
  };
};

export const useCredentialVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CredentialResponse | null>(null);

  const verifyCredential = async (data: VerifyCredentialRequest) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const response = await credentialApi.verifyCredential(data);
      setResult(response);
      
      if (response.success) {
        toast.success('Credential verified successfully!');
      } else {
        toast.error(response.message);
      }
      
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to verify credential';
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
  };

  return {
    verifyCredential,
    isLoading,
    result,
    reset
  };
};
