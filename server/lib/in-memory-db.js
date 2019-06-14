// "use strict";

// // Requiring a JSON file automatically parses it and returns the data. These
// // are just example tweets to make it less tedious to style the app initially.

// const MongoClient = require("mongodb").MongoClient;
// const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// MongoClient.connect(MONGODB_URI, (err, db) => {
//   if (err) {
//     console.error(`Failed to connect: ${MONGODB_URI}`);
//     throw err;
//   }

//   // We have a connection to the "tweeter" db, starting here.
//   console.log(`Connected to mongodb: ${MONGODB_URI}`);

//   // ==> Refactored and wrapped as new, tweet-specific function:

//   function getTweets(callback) {
//     db.collection("tweets").find().toArray(callback)
//   }

//   // ==> Later it can be invoked. Remember even if you pass
//   //     `getTweets` to another scope, it still has closure over
//   //     `db`, so it will still work. Yay!

//   getTweets((err, tweets) => {
//     if (err) throw err;

//     const db = { tweets };
//     console.log(db);
//     // console.log("Logging each tweet:");
//     // for (let tweet of tweets) {
//     //   console.log(tweet);
//     // }

//   });
//     // db.close();

// module.exports = db;

// });


// // Requiring a JSON file automatically parses it and returns the data. These
// // are just example tweets to make it less tedious to style the app initially.
// // const db = {
// //   tweets: require(MONGODB_URI)
// // }

