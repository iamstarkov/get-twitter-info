/* eslint-env mocha */

import { equal } from 'assert';
import getTwitterInfo from './index';
import tokens from 'twitter-tokens';

it('should getTwitterInfo', done => {
  getTwitterInfo(tokens, 'jsunderhood').then(info => {
    equal(info.screen_name, 'jsunderhood');
    done();
  });
});
