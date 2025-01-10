import fs from 'fs';

/**
 * Retrieves the last updated date of the model file specified by the environment variable `RULES_FILE_PATH`
 * or the default path `/app/data/association_rules.json`.
 *
 * @returns {string} The formatted creation date of the file in `dd/mm/yyyy` format, or 'N/A' if the file does not exist or an error occurs.
 */
export function retrieveModelLastUpdatedDate(): string {
  const filePath = process.env.RULES_FILE_PATH || '/app/data/association_rules.json';

  try {
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Retrieve file stats
      const stats = fs.statSync(filePath);

      // Get creation date and format it as dd/mm/yyyy
      const lastModifiedDate = new Date(stats.mtime);
      const formattedDate = lastModifiedDate
        .toISOString()
        .split('T')[0]
        .split('-')
        .reverse()
        .join('/');

      return formattedDate;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error retrieving file creation date: ${error.message}`);
    } else {
      console.error('Unknown error retrieving file creation date');
    }
  }

  // Fall back to environment variable or default
  return 'N/A';
}
