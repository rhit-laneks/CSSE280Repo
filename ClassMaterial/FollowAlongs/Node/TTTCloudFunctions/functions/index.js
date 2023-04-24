const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase! Kaylee Lane!!!");
// });


const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get("/getmove/:board", (request, response) => {
    const boardString = request.params.board;

    const openLocations = getOpenLocations(boardString);

    const moveSelected = openLocations[Math.floor(Math.random() * openLocations.length)];

    response.send({"move": moveSelected});
});

function getOpenLocations(boardString) {
    const openLocations = [];
    for (var i = 0; i < boardString.length; i++) {
      if (boardString.charAt(i) == '-') {
        openLocations.push(i)
      }
    }
    return openLocations;
   }


// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
