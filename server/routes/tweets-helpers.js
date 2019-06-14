
module.exports = {
// return how long ago the tweet was created
timeDifference: function (current, previous) {

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
renderTweets: function (tweets) {
  for(let i = 0; i < tweets.length; i++){
    var $tweet = this.createTweetElement(tweets[i]);
    $('.news-feed').prepend($tweet);
  }
}

// take  data and pass to the structure, append to html
createTweetElement: function (tweet) {
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
      <span>${this.timeDifference(currentDate.getTime(), date)}</span>
      <img src="/icons/heart.png" class="icons icon-heart">
      <img src="/icons/retweet.png" class="icons icon-retweet">
      <img src="/icons/flag.png" class="icons icon-flag">
    </footer>
    </article>
    `
  return newTweet
}

//load tweets from /tweets and render to tweets
loadTweet: function (){
  $.ajax({
    url: '/tweets',
    method: 'GET',
    dataType: 'JSON',
    success: function (data) {
    this.renderTweets(data);
    }
  })
};

//to prevent untrusted text
escape: function (str){
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }
}