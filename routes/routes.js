var appRouter = function(app, tw) {

  app.get("/api/tweets", function(req, res) {
    var screenName = req.query.screenName ? req.query.screenName : 'lakings';
   var params = {screen_name: screenName, count: 25};
   tw.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      return res.status(200).send(tweets);
    } else {
      return res.status(404).send(error);
    }
  });
 });

  app.get("/api/profile", function(req, res) {
    var screenName = req.query.screenName ? req.query.screenName : 'lakings';
   var params = {screen_name: screenName};
   tw.get('users/show.json', params, function(error, profile, response){
    if (!error) {
      return res.status(200).send(profile);
    } else {
      console.log(error);
    }
  });
 });

  app.get("/api/banner", function(req, res) {
    var screenName = req.query.screenName ? req.query.screenName : 'lakings';
   var params = {screen_name: screenName};
   tw.get('users/profile_banner.json', params, function(error, banner, response){
    if (!error) {
      return res.status(200).send(banner);
    } else {
      // IF NO BANNER IMAGE AVAILABLE SEND PLACEKITTEN
      var ph = {
        sizes: {
          '1500x500': {
            url: 'http://placekitten.com/g/1500/500'
          }
        }
      };
      return res.status(200).send(ph);
    }
  });
 });
}

module.exports = appRouter;
