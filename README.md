# get-twitter-info

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get info about target username

## Install

    npm install --save get-twitter-info

## Usage

```js
import getTwitterInfo from 'get-twitter-info';

getTwitterInfo(tokens, 'jsunderhood').then(info => {
  console.log(info);
});
```

## API

### getTwitterInfo(tokens, username)

Return a promise that resolves to user info.

#### tokens

*Required*  
Type: `Object`

Valid [Twitter developer credentials (tokens)][how-to-get]
in the form of a set of consumer and access tokens/keys.
You can use [twitter-tokens][tokens], to simplify getting tokens.

[how-to-get]: https://iamstarkov.com/get-twitter-tokens/
[tokens]: https://www.npmjs.com/package/twitter-tokens

#### username

*Required*  
Type: `String`

Twitter username.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/get-twitter-info
[npm-image]: https://img.shields.io/npm/v/get-twitter-info.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/get-twitter-info
[travis-image]: https://img.shields.io/travis/iamstarkov/get-twitter-info.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/get-twitter-info
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/get-twitter-info.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/get-twitter-info
[depstat-image]: https://david-dm.org/iamstarkov/get-twitter-info.svg?style=flat-square
