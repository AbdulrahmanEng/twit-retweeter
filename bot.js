const twit = require('twit');
const env = require('dotenv').config().parsed;
const { consumer_key, consumer_secret, access_token, access_token_secret } = env;
const config = { consumer_key, consumer_secret, access_token, access_token_secret, timeout_ms: 60 * 1000 };
const T = new twit(config);

const stream = T.stream('statuses/filter', { track: 'artificial intelligence' });

stream.on('tweet', (tweet) => {
  console.log(tweet.id);
  // Get id
  const id = tweet.id_str;
  // Retweet tweet
  T.post('statuses/retweet/:id', { id });
});

console.log('Bot is running!');