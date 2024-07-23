# Tweeter Project

Tweeter is a simple, single-page Twitter clone built with HTML, CSS, JavaScript, jQuery, and AJAX. This web application allows users to compose tweets and view a feed of tweets.

## Features

 - User can compose a new tweet.
 - Tweets are displayed in reverse-chronological order.
 - Character counter updates as the user types.
 - Error messages are displayed for empty tweets or tweets that exceed the character limit.
 - Responsive design for different screen sizes (mobile, tablet, desktop).
 - Animated scroll and interactive elements.

## Final Product

#### Compose Tweet Section (Mobile)
!["Screenshot of the Compose Tweet Section (Mobile)"](https://github.com/moastra/tweeter/blob/master/docs/mobile.png?raw=true)

#### Tweets Feed (Desktop)
!["Screenshot of the Tweets Feed (Desktop)"](https://github.com/moastra/tweeter/blob/master/docs/desktop.png?raw=true)

## Dependencies

 - jQuery
 - timeago.js
 - normalize.css
 - font-awesome
 - Express
 - Node 5.10.x or above

## Getting Started

- Clone the repository: `git clone https://github.com/yourusername/tweeter.git`
- Install dependencies: `npm install`
- Start the web server: `npm start`
- Open your browser and navigate to [http://localhost:8080](http://localhost:8080)

## Usage

 - Compose a new tweet in the textarea and click the "Tweet" button.
 - View your tweet displayed in the feed.
 - The character counter updates as you type, and an error message is shown if the tweet is empty or exceeds the character limit.
 - The "Write a new tweet" icon animates, providing a visual cue.
 - The navbar is fixed at the top and changes based on the screen size.

## Responsive Design

 - The layout adjusts based on the screen size (Mobile or Desktop), providing an optimal viewing experience on mobile and desktop devices.
 - On tablets, the "Tweeter, the Real Twitter" text changes to "Tweeter" for better readability.
 - The "fa-angles-down" icon animates up and down to provide a visual cue for users.