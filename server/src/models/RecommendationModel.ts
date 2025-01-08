import { AssociationRules } from '../types';
import { loadAssociationRules } from '../utils';

/**
 * A model to handle song recommendations using association rules.
 */
export class RecommendationModel {
  private associationRules: Map<string, Set<string>>;

  constructor(rulesData: AssociationRules) {
    this.associationRules = this.processAssociationRules(rulesData);
  }

  /**
   * Processes association rules and optimizes them for memory usage.
   * @param rulesData Array of association rule objects.
   * @returns A map of song names (antecedents) to sets of recommended songs (consequents).
   */
  private processAssociationRules(rulesData: AssociationRules): Map<string, Set<string>> {
    const associationMap = new Map<string, Set<string>>();

    for (const rule of rulesData) {
      for (const antecedent of rule.antecedents) {
        if (!associationMap.has(antecedent)) {
          associationMap.set(antecedent, new Set());
        }
        rule.consequents.forEach(consequent => associationMap.get(antecedent)!.add(consequent));
      }
    }

    return associationMap;
  }

  /**
   * Gets recommendations for a list of input songs.
   * @param songs Array of song names.
   * @returns Array of recommended song names.
   */
  public getRecommendations(songs: string[]): string[] {
    const recommendations = new Set<string>();

    for (const song of songs) {
      const relatedSongs = this.associationRules.get(song);
      if (relatedSongs) {
        relatedSongs.forEach(recommendations.add, recommendations);
      }
    }

    // Remove duplicates and input songs from the recommendations
    songs.forEach(recommendations.delete, recommendations);

    return Array.from(recommendations);
  }
}

// Singleton instance
export const recommendationModel = new RecommendationModel(loadAssociationRules());
