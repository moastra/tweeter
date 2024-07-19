/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  $('#tweet-container').empty();

  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
  });
};

const createTweetElement = function(tweet) {
  const timeAgo = timeago.format(tweet.created_at);

  const $tweet = $(`
    <article class="tweet">
    <header>
      <div class="avatar">
        <img src="${tweet.user.avatars}" alt="User Avatar">
      </div>
      <div class="name">
        ${tweet.user.name}
      </div>
      <div class="username">
        ${tweet.user.handle}
      </div>
    </header>
    <div class="content">
      ${escape(tweet.content.text)}
    </div>
    <footer>
      <div class="timestamp">
        ${timeAgo}
      </div>
      <div class="actions">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
`
  );
return $tweet;
};

renderTweets(data);

});