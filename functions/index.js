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
app.get('/', (req, res) => res.status(200).send
('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: 'usd',
    });

    // OK - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
}); 

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5002/clone-89ffe/us-central1/api

// // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
