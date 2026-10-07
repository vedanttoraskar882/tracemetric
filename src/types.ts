export interface PilotRequestInput {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}

export interface PilotRequestRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string;
}
