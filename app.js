"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the express package
const express = __importStar(require("express"));
const bodyParser = __importStar(require("body-parser"));
// Import middleware
const middleware_1 = require("./middleware");
// Import route handlers
const routes_1 = require("./routes");
// Init express app
const app = express.default();
// Register middlewares
app.use(middleware_1.logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.options("/contact", routes_1.CORS.handler);
// Register route handlers
// app.post("/contact", ContactRoute.handler);
app.post('/contact', (req, res) => {
    res //You need to use res to respond to the request (req)
        .status(200) //Setting the response status to 200 means that the request is OK
        .json({ message: 'this should work' }); //Return an object (this is what your frontend should receive)
});
// Start our server and listen on port 3005
app.listen(3005, () => console.log("server listening @ 3005"));
