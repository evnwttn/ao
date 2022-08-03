// Importing the express package
import * as express from 'express';

// Import middleware
import { logger, corsHandler } from './middleware';

// Init express app
const app = express.default();

// Register middlewares
app.use(logger);
app.use(corsHandler);

app.post("/contact", (req, res) => {
	res	 			
	.status(200)	
	.json({ message: 'this should work' });
});

// Start our server and listen on port 3005
app.listen(3005, () => console.log("server listening @ 3005"));

