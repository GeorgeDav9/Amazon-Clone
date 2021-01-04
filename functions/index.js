const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I3rpKA5NhSvBdPif8Zm37Z1uBJ6YqoYE06aeOD51LDc2AuF1TYDDsmYZ0AOoFadkFs751anRatRnlMIFUseFmbE008UPduuze')

// API

// - App config
const app = express();

// - middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => resizeBy.status(200).send
('hello world'))

// - Listen command
exports.api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
