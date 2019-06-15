// const tweetsHelpers = require('./tweets-helpers')
//tweet database
const data =[];

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
    $('.counter').html('140')
  })
  .error( function(req, error){
   alert('error');
    })
  }
  });

  loadTweet();
  })


// return how long ago the tweet was created
function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
    }
}
// render the tweets to the timeline
function renderTweets(tweets) {
  for(let i = 0; i < tweets.length; i++){
    var $tweet = createTweetElement(tweets[i]);
    $('.news-feed').prepend($tweet);
  }
}

// take  data and pass to the structure, append to html
function createTweetElement(tweet) {
  var tweet_text = $("<div>").text(tweet_text);
  var date = tweet.created_at;
  var currentDate = new Date
  var newTweet =`
    <article class="news-post" id="tweet_post">
    <header class = "news-post-header">
      <img src="${tweet.user.avatars.small}" class="user-icon">
      <h2 class=tweet-user-name>${tweet.user.name}</h2>
      <span class="tweet-account-name">${tweet.user.handle}</span>
    </header>
    <p class="news-post-text">${escape(tweet.content.text)}</p>
    <footer class="news-post-footer">
      <span>${timeDifference(currentDate.getTime(), date)}</span>
      <img src="/icons/heart.png" class="icons icon-heart">
      <img src="/icons/retweet.png" class="icons icon-retweet">
      <img src="/icons/flag.png" class="icons icon-flag">
    </footer>
    </article>
    `
  return newTweet
}

//load tweets from /tweets and render to tweets
function loadTweet (){
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'JSON',
    success: function (data) {
    renderTweets(data);
    }
  })
}

//to prevent untrusted text
function escape (str){
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }
