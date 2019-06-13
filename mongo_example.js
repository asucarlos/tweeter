"use strict";

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {

  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}, err: ${err}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
   // ==> Let's "get all the tweets". In Mongo-speak, we "find" them.

   function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  })
})



// () => {

//   () => {
//     if (true) {
//       doStuff()
//       return;
//     }

//     // wont run
//     if (anotherCondition) {
//       doOtherStuff();
//       return;
//     }
//   }

//   // will run
//   console.log('asdasd')

// }


// () => {
//   if (someCondition) {
//     doStuff()
//   } else if (anotherCondition) {
//     doOtherStuff();

//     if (another) {
//       somethinkg()
//     }
//   }
// }
 // try {
 //    if (err) {
 //      throw err;
 //    }
 //  }
 //  catch (e) {
 //    console.log('error: ', e);
 //  }
 //  return;
