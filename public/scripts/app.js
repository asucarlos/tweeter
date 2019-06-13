/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.

//temporary tweet database
const data =[];

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

//check if the new tweet is valid and post it
  $(function() {
  var $button = $('div input');
  var $form = $('.post-tweet');

  $('form').submit(function (e) {
    var $text = $('#new-post').val();
    e.preventDefault();
    const $data = $form.serialize();

  if(!$text.length) {
    $('.alert').empty();
    $('.alert').hide();
    $('.alert').append('No text typed!').slideDown('fast');
  } else if($text.length > 140){
    $('.alert').empty();
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
