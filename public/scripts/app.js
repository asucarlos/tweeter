/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


function createTweetElement(){
  var newTweet =`
    <article class="news-post">
    <header class = "news-post-header">
      <img src="${tweetData.user.avatars.small}" class="user-icon">
      <h2 class=tweet-user-name>${tweetData.user.name}</h2>
      <span class="tweet-account-name">${tweetData.user.handle}</span>
    </header>
    <p class="news-post-text">${tweetData.content.text}</p>
    <footer class="news-post-footer">
      <span>10 days ago</span>
      <img src="/icons/heart.png" class="icons icon-heart">
      <img src="/icons/retweet.png" class="icons icon-retweet">
      <img src="/icons/flag.png" class="icons icon-flag">
    </footer>
    </article>
    `
return newTweet
}

$(document).ready(function (){
var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
$('.news-feed').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})
