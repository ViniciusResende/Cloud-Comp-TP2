import * as fs from 'fs';
import * as path from 'path';
import { AssociationRules } from '../types'

/**
 * Loads association rules from a file specified by an environment variable.
 * @returns Array of association rule objects.
 * @throws Error if the file does not exist or is not readable.
 */
export function loadAssociationRules(): AssociationRules {
  const filePath = process.env.RULES_FILE_PATH || '/app/data/association_rules.json';

  if (!filePath) {
    throw new Error('Environment variable RULES_FILE_PATH is not set.');
  }

  const resolvedPath = path.resolve(filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`Association rules file not found at path: ${resolvedPath}`);
  }

  const data = fs.readFileSync(resolvedPath, 'utf-8');
  return JSON.parse(data) as AssociationRules;
}
