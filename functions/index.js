const functions = require('firebase-functions');
const express = require('express');
require('dotenv').config();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();

const ATLAS_URI = functions.config().mongo ? functions.config().mongo.api : process.env.ATLAS_URI;
console.log("hi!", ATLAS_URI);

app.get('/api/users', (req, res) => {
  // res.send('Api call succeeded!')

  //sends back response as json file
  res.json([
    {
      userName: 'Ayako',
      userId: 'fafaffafaf'
    },
    {
      userName: 'Darius',
      userId: 'fafaffafaf2'
    },
  ])
})

app.listen(5000, () => console.log('Express conection works!'))

exports.app = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

