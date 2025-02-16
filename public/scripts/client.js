/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const renderTweets = function(tweets) {
    $('#tweet-container').empty();

    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    });
  };

  const createTweetElement = function(tweet) {
    const timeAgo = timeago.format(tweet.created_at);
    console.log('Hello!');

    const newTweet = $(`
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
    console.log('Please work', newTweet);

    return newTweet;
  };

  const escape = function(str) {
    return $('<div>').text(str).html();
  };

  const loadTweets = function() {
    $.ajax({
      type: 'GET',
      url: '/tweets/',
      success: function(response) {
        console.log('Loaded tweets: ', response);
        renderTweets(response);
      },
      error: function(error) {
        console.log('Error: ', error);
      }
    });
  };

  const isTweetValid = function(tweetText) {
    if (!tweetText) {
      showError('Tweet content cannot be empty!');
      return false;
    }
    if (tweetText.length > 140) {
      showError('Tweet content is too long!');
      return false;
    }
    return true;
  };

  const showError = function(message) {
    $('.error-message p').text(message);
    $('.error-message').slideDown();

    setTimeout(function() {
      $('.error-message').slideUp();
    }, 3000);
  };

  const hideError = function(message) {
    $('.error-message').slideUp();
  };

  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented');

    hideError();

    const tweetText = $('#tweet').val().trim();
    if (!isTweetValid(tweetText)) {
      return;
    }

    const serializedData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: '/tweets/',
      data: serializedData,
      success: function(response) {
        console.log('Server response: ', response);
        loadTweets();
        $('textarea').val('');
        $('.counter').text('140');

      },
      error: function(error) {
        console.log('Error: ', error);
      }
    });
  });

  loadTweets();

  function updateLogoText() {
    if ($(window).width() <= 1024) {
      $('.logo').text('Tweeter');
    } else {
      $('.logo').text('Tweeter, the Real Twitter');
    }
  }

  updateLogoText();

  $(window).resize(function() {
    updateLogoText();
  });

  $(window).on('scroll', function() {
    const headerHeight = $('header').outerHeight();
    const offset = 0;
    const stopPoint = headerHeight + offset;
  
    if ($(window).scrollTop() > stopPoint) {
      $('nav').css('position', 'absolute').css('top', stopPoint + 'px');
    } else {
      $('nav').css('position', 'fixed').css('top', '0');
    }
  });
});