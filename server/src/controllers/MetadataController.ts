import { apiMetadataModel } from '../models/ApiMetadataModel';
import { ApiMetadata } from '../types';


/**
 * Retrieves the API metadata.
 *
 * @returns {ApiMetadata} An object containing the API version and the last updated date of the model.
 */
export function getApiMetadata(): ApiMetadata {
  return {
    version: apiMetadataModel.apiVersion,
    modelLastUpdatedAt: apiMetadataModel.modelLastUpdatedAt
  }
}
