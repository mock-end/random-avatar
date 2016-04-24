'use strict';

var assign      = require('object-assign');
var bimd5       = require('blueimp-md5');
var randomEmail = require('random-email');


var base = '//www.gravatar.com/avatar/';

var protocols = {
  http: 'http',
  https: 'https'
};

var fileTypes = {
  bmp: 'bmp',
  gif: 'gif',
  jpg: 'jpg',
  png: 'png'
};

var fallbacks = {
  '404': '404', // Return 404 if not found
  mm: 'mm', // Mystery man
  identicon: 'identicon', // Geometric pattern based on hash
  monsterid: 'monsterid', // A generated monster icon
  wavatar: 'wavatar', // A generated face
  retro: 'retro', // 8-bit icon
  blank: 'blank' // A transparent png
};

var ratings = {
  g: 'g',
  pg: 'pg',
  r: 'r',
  x: 'x'
};


module.exports = function (options) {

  options = assign({
    protocol: '',
    email: '',
    size: '',
    rating: '',
    fallback: '',
    extension: ''
  }, options);


  if (!options.email) {
    options.email = randomEmail();
  }

  var protocol  = protocols[options.protocol] ? options.protocol + ':' : '';
  var size      = parseInt(options.size, 10) ? options.size : '';
  var rating    = ratings[options.rating] ? options.rating : '';
  var fallback  = fallbacks[options.fallback] ? options.fallback : '';
  var extension = fileTypes[options.extension] ? options.extension : '';

  var url = protocol +
    base +
    bimd5(options.email) +
    (extension ? '.' + extension : '');

  if (size || rating || fallback) {
    url += '?';

    var queried = false;

    if (size) {
      queried = true;
      url += 's=' + size.toString();
    }

    if (rating) {
      if (queried) {
        url += '&r=' + rating;
      } else {
        url += 'r=' + rating;
      }

      queried = true;
    }

    if (fallback) {

      if (queried) {
        url += '&d=' + fallback;
      } else {
        url += 'd=' + fallback;
      }
    }
  }

  return url;
};
