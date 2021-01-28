const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I2gKMDERzqS7E9eTUZTln8KBDJB7EjZMUXaHFx6kMus3ug4sdq4ZTq4lCE2OL7ZEcBHDNldWTsm4vcnGeziu6p000IW4SzAiP')

// API

// - App config

const app = express();

//- Middlewares

app.use(cors({origin: true}));
app.use(express.json());


//- API Routes

app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received for this amount >>>>', total) 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//- Listen Command

exports.api = functions.https.onRequest(app)

// Example Endpoint
// http://localhost:5001/clone-408b9/us-central1/api