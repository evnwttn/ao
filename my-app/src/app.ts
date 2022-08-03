// Importing the express package
import * as express from 'express';

// Import middleware
import { logger, corsHandler } from './middleware';

// Init express app
const app = express.default();
const port = 3005;

// Register middlewares
app.use(logger);
app.use(corsHandler);

app.post("/contact", (req, res) => {
	res
	.header('Access-Control-Allow-Origin', '*')	 			
	.status(200)	
	.json({ data: 'this should work' });
});

// Start our server and listen on port 3005
app.listen(port, () => console.log("server listening @ 3005"));