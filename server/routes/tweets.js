"use strict";

const userHelper    = require("../lib/util/user-helper")


const express       = require('express');
const tweetsRoutes  = express.Router();
const userRoutes = express.Router();

// module.exports = funtion(UserHelper) {
//   userRoutes.post("/", )
// }


module.exports = function (DataHelpers) {
  //convert tweets to a json file and returns
  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  //create tweet
  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };

    //saves the tweetdata in db
    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return tweetsRoutes;

}

// const tweetsRouts = express.Routes()
// tweetRoutes.get()
// tweetRoutes.post()

