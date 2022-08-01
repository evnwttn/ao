// Importing the express package
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Import middleware
import { logger } from './middleware';

// Import route handlers
import { ContactRoute, CORS } from './routes';

// Init express app
const app = express.default();

// Register middlewares
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.options("/contact", CORS.handler);

// Register route handlers
// app.post("/contact", ContactRoute.handler);

app.post('/contact', (req, res) => {
	res	 			//You need to use res to respond to the request (req)
	.status(200)	//Setting the response status to 200 means that the request is OK
	.json({ message: 'this should work' }); //Return an object (this is what your frontend should receive)
});

// Start our server and listen on port 3005
app.listen(3005, () => console.log("server listening @ 3005"));

