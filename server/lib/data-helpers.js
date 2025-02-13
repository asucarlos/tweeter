"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Save a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet)
        callback(null, true);
    },

    // Get all tweets in `db`
    getTweets: function(callback) {
        db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      return callback(null, tweets);
     });
    }

  };
}


// function UserHelper(db) {
//   return {
//     saveUser: function() {
//       db.saveuser()
//     },
//     getUser: function() {
//       db.getUsers()
//     }
//   }
// }