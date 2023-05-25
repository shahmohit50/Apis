var admin = require("firebase-admin");
const cors = require('cors');

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mch-app-3b8de-default-rtdb.firebaseio.com"
});

const db = admin.firestore();



const express = require('express');
const app = express();


app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

