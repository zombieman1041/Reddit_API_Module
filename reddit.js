// settting up reddit API wrapper infrastructure
require('dotenv').config();
const snoowrap = require('snoowrap');

// connect to Reddit API
const r = new snoowrap({
    userAgent: 'bdayman-blog',
    clientId: process.env.RedditclientId,
    clientSecret: process.env.RedditclientSecret,
    username: process.env.Redditusername,
    password: process.env.Redditpassword,
    refreshToken: process.env.RedditrefreshToken
  });
  
  
// Printing a list of the titles on the front page
r.getSubreddit('AskReddit').getTop({time: 'week'}).then(console.log);
//   const subreddit = r.getSubreddit('worldnews');
//   const topPosts = subreddit.getTop({time: 'week', limit: 3});