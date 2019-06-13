/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const data =[
  {
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
  ,
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
// render the tweets to the timeline
function renderTweets(tweets) {
  for(let i = 0; i < tweets.length; i++){
    var $tweet = createTweetElement(tweets[i]);
    $('.news-feed').append($tweet);
  }
}

// take  data and pass to the structure, append to html
function createTweetElement(tweet) {
  var newTweet =`
    <article class="news-post">
    <header class = "news-post-header">
      <img src="${tweet.user.avatars.small}" class="user-icon">
      <h2 class=tweet-user-name>${tweet.user.name}</h2>
      <span class="tweet-account-name">${tweet.user.handle}</span>
    </header>
    <p class="news-post-text">${escape(tweet.content.text)}</p>
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

//load tweets from /tweets and render to tweets
  function loadTweet(){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'JSON',
      success: function (data) {
      renderTweets(data);
      }
    })
  };

//to prevent untrusted text
  function escape(str){
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  $(function() {
  var $button = $('div input');
  var $form = $('.post-tweet');

  $('form').submit(function (e) {
    var $text = $('#new-post').val();
    e.preventDefault();
    const $data = $form.serialize();

  if(!$text.length) {
    $('.alert').hide();
    $('.alert').append('No text typed!').slideDown('fast');
  } else if($text.length > 140){
    $('.alert').hide();
    $('.alert').append('Cannot type more than 140!').slideDown('fast');
  } else {
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: $data
  })
  .done( function(res){
    $('.alert').hide();
    $(".news-feed").empty();
    loadTweet();
    $('#new-post').val("");
  })
  .error( function(req, error){
   alert('error');
    })
  }
  });

  loadTweet();
  })
