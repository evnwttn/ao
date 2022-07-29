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

// Register route handlers
app.get("/contact", ContactRoute.handler);

// Start our server and listen on port 3005
app.listen(3005, () => console.log("holla"));

//POST localhost:3005/contact

app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /sms
app.post('/contact', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const body = req.body.Body
  console.log(body);
  // res.set('Content-Type', 'text/plain')
  // res.send(`You sent: ${body} to Express`)
})

