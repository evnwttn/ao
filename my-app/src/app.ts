// Importing the express package
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Import middleware
import { logger } from './middleware';

// Import route handlers
import { ContactRoute } from './routes';

// Init express app
const app = express.default();

// Register middlewares
app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }))

// Register route handlers
app.get("/contact", ContactRoute.handler);

// Start our server and listen on port 3005
app.listen(3005, () => console.log("holla"));