export function retrieveModelLastUpdatedDate(): string {
  return process.env.MODEL_LAST_UPDATED_DATE || 'N/A';
}