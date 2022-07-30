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

app.use(bodyParser.urlencoded({ extended: false }));

app.options("/contact", CORS.handler);

// Register route handlers
app.get("/contact", ContactRoute.handler);

app.post("/contact", function(req, res) {
  // console.log("post")
  // res.send(`You sent ${req.body}`)
  const body = req.body.Body
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${body} to Express`)
})

// Start our server and listen on port 3005
app.listen(3005, () => console.log("server listening @ 3005"));