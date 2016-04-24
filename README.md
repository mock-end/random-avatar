# random-avatar

> Return a URL to a random avatar from Gravatar.
  

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-avatar/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-avatar/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-avatar)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-avatar/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-avatar)


## Install

```
$ npm install --save random-avatar
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-avatar/blob/master/test/spec/index.js)


```js
var randomAvatar = require('random-avatar');

// API
// - randomAvatar(options)

// options
// - protocol
// - email
// - extension
// - size
// - rating
// - fallback

randomAvatar()
=> '//www.gravatar.com/avatar/41f84bab4a852971eb1d26a287acb763'
```

By default, a url is returned without a protocol. Specify one to get a random url but with a known protocol:

```js
randomAvatar({protocol: 'https'});
// => https://www.gravatar.com/avatar/f40260c4058cc904b7db652c26099966
```

Optionally specify a file extension to get one of a known type:

```js
randomAvatar({extension: 'jpg'});
// => //www.gravatar.com/avatar/76697df5874c854e3cc8fde1200b4298.jpg
```

You can also use it with a known email address to just get that gravatar.

However, note this, of course, no longer makes it random, just more of a helper function:

```js
randomAvatar({email: 'mail@victorquinn.com'});
// => //www.gravatar.com/avatar/8595c2591b0bca22e736813af33fa7c3
```


## Related

- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld(Top Level Domain).
- [random-domains](https://github.com/mock-end/random-domains) - Return a random domain.
- [random-email](https://github.com/mock-end/random-email) - Return a random email.
- [random-protocol](https://github.com/mock-end/random-protocol) - Return a random protocol.
- [random-hashtag](https://github.com/mock-end/random-tld) - Return a random hashtag.
- [random-uri](https://github.com/mock-end/random-uri.git) - Return a random url.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Return a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Return a random ipv6 address.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-avatar/issues/new).
