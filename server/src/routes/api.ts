import { Router } from 'express';
import { getApiMetadata } from '../controllers/MetadataController';
import { recommendSongs } from '../controllers/RecommendationController';

const router = Router();

router.post('/recommend', (req, res) => {
  const { songs } = req.body;

  if (!Array.isArray(songs) || songs.some(song => typeof song !== 'string')) {
    return res.status(400).json({ error: 'Invalid request. Body must contain an array of strings named "songs".' });
  }

  try {
    const recommendations = recommendSongs(songs);
    const apiMetadata = getApiMetadata();
    res.status(200).json({ 
      recommendations,
      version: apiMetadata.version,
      modelLastUpdatedAt: apiMetadata.modelLastUpdatedAt
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

export default router;
