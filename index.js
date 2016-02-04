import Twitter from 'twit';

export default function getTwitterInfo(tokens, username) {
  return new Twitter(tokens)
    .get('users/show', { screen_name: username })
    .then(({ data }) => data);
}
