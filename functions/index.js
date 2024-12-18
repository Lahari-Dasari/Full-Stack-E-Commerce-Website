const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe =
require("stripe")("sk_test_51N5oFeSH8as93yuLNfcjQ9LtQF"+
"t5F5zpOxXNA6xmgYUHGcfcWf3mptldKcQE6RYZpg2t3nroGa1NIPVQBffu6af000Wzhf5ilE");
// API

// --App config
const app = express();

// --Middlewares
app.use(cors({
  origin: true,

}));
app.use(express.json());
// --API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) =>{
  const total = request.query.total;
  console.log("Payment Request Recieved! for this amount >> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -- Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-51c48/us-central1/api
// http://127.0.0.1:5001/clone-51c48/us-central1/api


