import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { json } from 'body-parser';
import routes from './routes/api';

// Load environment variables from the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log('Current working directory:', process.cwd());
console.log('RULES_FILE_PATH:', process.env.RULES_FILE_PATH);


// Middleware
app.use(cors()); // Enable CORS
app.use(json()); // For parsing JSON request bodies

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
