export interface Credential {
  id: string;
  credentialData: Record<string, any>;
  issuedBy: string;
  issuedAt: string;
  isVerified: boolean;
  verifiedBy?: string;
  verifiedAt?: string;
}

export interface CredentialResponse {
  success: boolean;
  message: string;
  data?: Credential;
  workerId?: string;
  timestamp?: string;
}

export interface CreateCredentialRequest {
  credentialData: Record<string, any>;
}

export interface VerifyCredentialRequest {
  credentialData: Record<string, any>;
}
