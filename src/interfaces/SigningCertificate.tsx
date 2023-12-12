export interface SigningCertificate {
  issuerName: string;
  publicKeyAlgorithm: string;
  signatureAlgorithm: string;
  subjectName: string;
  fingerprint: string;
  validUntil: string;
  validFrom: string;
  serialNumber: string;
}
