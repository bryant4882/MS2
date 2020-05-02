var consumerKey = 'jJKwYVKkqnSkbr63NpK7Vzvkx';
var consumerSecret = 'lTMfwMs7rDxz8vPcxBD7Gy5lDO8GXnlIzPw2d8xVhqa1L4xOTw';

var token = '364475473-kMBumzdzoxKZcduTwFGizG0iyMldRx1CQtcRXm2w';
var tokenSecret = 'KBjBbqUZ0of2SQZDFEqSFof7kQPpENigIh7d3BMUQyCjN';

var cb = new Codebird();


function setup() {
  createCanvas(1000, 600);
  cb.setConsumerKey(consumerKey, consumerSecret);
  cb.setToken(token, tokenSecret);

  var params = {
    q: "space",
    result_type: 'recent',
    count: 100
  };

  cb.__call(
    "search_tweets",
    params,
    function(reply) {
      background(0, 0, 0);
      var statuses = reply.statuses;
      for (var i = 0; i < statuses.length; i++) {
        var tweet = statuses[i];
        if (!tweet.retweeted_status) {
          print(tweet.text);
          //fill('#' + tweet.user.profile_background_color);

          fill(255);
          
          let words = tweet.text.split(" ");
          console.log(words);
          let hyphenated = words.join("-")
          text(tweet.text , 40, 7 * 30);
        }
      }
      // print the max_id which helps if you want to grab pages of data
      print('max_id: ' + reply.search_metadata.max_id);

    }
  );

}

function draw() {

}