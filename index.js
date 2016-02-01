import Twitter from 'twit';
import Promise from 'pinkie-promise';

export default function getTwitterInfo(tokens, username) {
  const client = new Twitter(tokens);

  return new Promise((resolve, reject) => {
    const handler = (err, res) => { err ? reject(err) : resolve(res) };
    client.get('users/show', { screen_name: username }, handler);
  });
};
