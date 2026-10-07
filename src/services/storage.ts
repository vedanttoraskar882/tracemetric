import { PilotRequestInput, PilotRequestRecord } from '../types';

export const STORAGE_KEY = 'amie_pilot_requests';

export function saveAmiePilotRequest(values: Partial<PilotRequestInput>): PilotRequestRecord {
  const fullName = String(values.fullName ?? '').trim();
  const phoneNumber = String(values.phoneNumber ?? '').trim();
  const emailAddress = String(values.emailAddress ?? '').trim();
  const organisationName = String(values.organisationName ?? '').trim();

  if (!fullName || !phoneNumber || !emailAddress || !organisationName) {
    throw new Error('Please complete all required fields.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
    throw new Error('Please enter a valid email address.');
  }

  let previousRequests: unknown;

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    previousRequests = storedValue === null ? [] : JSON.parse(storedValue);
  } catch {
    throw new Error(
      'Existing entries could not be read. No saved entries have been changed.'
    );
  }

  if (!Array.isArray(previousRequests)) {
    throw new Error(
      'Existing entries have an unexpected format. No saved entries have been changed.'
    );
  }

  const id =
    typeof globalThis.crypto?.randomUUID === 'function'
      ? globalThis.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const submission: PilotRequestRecord = {
    id,
    fullName,
    phoneNumber,
    emailAddress,
    organisationName,
    submittedAt: new Date().toISOString()
  };

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...previousRequests, submission])
    );
  } catch {
    throw new Error(
      'Your entry could not be saved in this browser. Please try again.'
    );
  }

  return submission;
}

export function getSavedPilotRequests(): PilotRequestRecord[] {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
