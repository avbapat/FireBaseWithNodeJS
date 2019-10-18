const functions = require('firebase-functions');
const express = require('express');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app = express();

app.get('/timestamp', (request, response) => {
	var date = new Date();
	response.send(date);
});
 exports.app = functions.https.onRequest(app);
 

