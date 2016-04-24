var expect = require('chai').expect;


describe('random-avatar: ', function () {

  var randomAvatar = require('../../');

  it('common', function () {

    expect(randomAvatar())
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);

    expect(randomAvatar({
      protocol: 'http'
    }))
      .to.be.match(/^http:\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);

    expect(randomAvatar({
      protocol: 'ftp'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);

    expect(randomAvatar({
      extension: 'bmp'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)\.bmp$/);

    expect(randomAvatar({
      email: 'foobar@example.com'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);


    expect(randomAvatar({
      size: 400
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)\?s=400$/);

    expect(randomAvatar({
      size: 0
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);


    expect(randomAvatar({
      rating: 'g'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/(.*)\?r=g$/);

    expect(randomAvatar({
      rating: 'k'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);

    expect(randomAvatar({
      size: 400,
      rating: 'g'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/(.*)\?s=400&r=g$/);


    expect(randomAvatar({
      fallback: 'mm'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/(.*)\?d=mm$/);

    expect(randomAvatar({
      size: 400,
      fallback: 'mm'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/(.*)\?s=400&d=mm$/);

    expect(randomAvatar({
      rating: 'lorem'
    }))
      .to.be.match(/^\/\/www\.gravatar\.com\/avatar\/([^\?\&\=]+)$/);

  });
});
