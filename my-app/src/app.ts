// Importing the express package
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Import middleware
import { logger } from './middleware';

// Import route handlers
import { ContactRoute, CORS } from './routes';

// Init express app
const app = express.default();

app.options("/contact", CORS.handler);

// Register middlewares
// app.use(logger);
// app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
	res	 			
	.status(200)	
	.json({ message: 'this should work' });
});

// Start our server and listen on port 3005
app.listen(3005, () => console.log("server listening @ 3005"));

