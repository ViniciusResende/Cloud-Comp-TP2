import { recommendationModel } from '../models/RecommendationModel';

/**
 * Handles the logic for generating song recommendations.
 * @param songs Array of song names to use as input.
 * @returns Array of recommended song names.
 */
export function recommendSongs(songs: string[]): string[] {
  if (!songs || songs.length === 0) {
    throw new Error('Input songs array cannot be empty.');
  }

  // Call the model to get recommendations based on the input songs
  const recommendations = recommendationModel.getRecommendations(songs);

  return recommendations;
}
