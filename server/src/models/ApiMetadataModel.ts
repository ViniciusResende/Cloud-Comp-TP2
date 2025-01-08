import { retrieveApiVersion, retrieveModelLastUpdatedDate } from '../utils';

/**
 * A model to handle api metadata.
 */
export class ApiMetadataModel {
  private _apiVersion: string;
  private _modelLastUpdatedAt: string;

  constructor() {
    this._apiVersion = retrieveApiVersion();
    this._modelLastUpdatedAt = retrieveModelLastUpdatedDate();
  }

  get apiVersion() {
    return this._apiVersion
  }

  get modelLastUpdatedAt() {
    return this._modelLastUpdatedAt;
  }
}

// Singleton instance
export const apiMetadataModel = new ApiMetadataModel();
