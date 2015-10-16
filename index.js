import Twitter from 'twit';

export default function getTwitterInfo(tokens, username, cb) {
  const client = new Twitter(tokens);
  client.get('users/show', { screen_name: username }, (err, info) => {
    cb(err, info);
  });
};
