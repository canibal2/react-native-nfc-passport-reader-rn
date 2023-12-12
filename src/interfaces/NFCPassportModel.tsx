import type { SigningCertificate } from './SigningCertificate';

export interface NFCPassportModel {
  passportCorrectlySigned: boolean;
  activeAuthenticationPassed: boolean;
  documentSigningCertificateVerified: boolean;
  passportDataNotTampered: boolean;
  documentType: string;
  LDSVersion: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  documentExpiryDate: string;
  nationality: string;
  issuingAuthority: string;
  documentNumber: string;
  personalNumber: string;
  passportMRZ: string;
  placeOfBirth: string;
  gender: string;
  passportImage: string;
  signatureImage: string;
  chipAuthenticationStatus: string;
  paceStatus: string;
  countrySigningCertificate: SigningCertificate;
  documentSigningCertificate: SigningCertificate;
}
