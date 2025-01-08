export function retrieveApiVersion(): string {
  return process.env.API_VERSION || 'N/A';
}