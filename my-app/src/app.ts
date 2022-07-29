// Importing the express package
import * as express from 'express';

// Import middleware
import { logger } from './middleware';

// Import route handlers
import { ContactRoute } from './routes';

// Init express app
const app = express.default();
const router = express.Router();

// Register middlewares
app.use(logger);

// Register route handlers
app.get("/contact", ContactRoute.handler);

router.post("/contact",(req, res) => {
  console.log(req);
  });

// Start our server and listen on port 3005
app.listen(3005, () => console.log("holla"));

//POST localhost:3005/contact