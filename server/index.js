"use strict";

// Basic express and mongodb setup
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient = require("mongodb").MongoClient;

require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI;

// const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// connect to mongo and take tweet data using helper functions,
// pass it to "/tweets"

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);
  // app.use("/user", userRoutes);
  // app.use("/fun", funRoutes)

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });

})
