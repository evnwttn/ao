// Importing the express package
import * as express from 'express';

// Import middleware
import { logger } from './middleware';

// Import route handlers
import { HomeRoute } from './routes';

// Init express app
const app = express.default();

// Register middlewares
app.use(logger);

// Register route handlers
app.get("/", HomeRoute.handler);

// Start our server and listen on port 3005
app.listen(3005, () => console.log("yo"));

//POST localhost:3005/contact