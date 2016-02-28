'use strict';

module.exports = {

  linkMentions (tweetText) {
    var mentions = tweetText.match(/@\w+/g);
    if(mentions){
      mentions.forEach( (mention) => {
        var linked = '<a href="https://twitter.com/' + mention.substr(1) + '" target="_blank">' + mention + '</a>';
        tweetText = tweetText.replace(mention, linked);
      });
    }
    return tweetText;
  }
};
