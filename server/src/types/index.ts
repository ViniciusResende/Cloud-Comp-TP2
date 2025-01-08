/**
 * Represents metadata information for an API.
 * 
 * @property {string} version - The version of the API.
 * @property {string} modelLastUpdatedAt - The timestamp of when the model was last updated.
 */
type ApiMetadata = {
  version: string;
  modelLastUpdatedAt: string;
}

/**
 * Represents a list of association rules.
 * Each rule consists of antecedents and consequents.
 * 
 * @type {Object[]} AssociationRules - An array of association rule objects.
 * @property {string[]} antecedents - The list of items that imply the consequents.
 * @property {string[]} consequents - The list of items that are implied by the antecedents.
 */
type AssociationRules = { 
  antecedents: string[]; 
  consequents: string[];
}[]

export {
  ApiMetadata,
  AssociationRules
}