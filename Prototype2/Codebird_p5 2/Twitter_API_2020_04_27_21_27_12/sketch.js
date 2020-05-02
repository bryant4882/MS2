var consumerKey = 'jJKwYVKkqnSkbr63NpK7Vzvkx';
var consumerSecret = 'lTMfwMs7rDxz8vPcxBD7Gy5lDO8GXnlIzPw2d8xVhqa1L4xOTw';

var token = '364475473-kMBumzdzoxKZcduTwFGizG0iyMldRx1CQtcRXm2w';
var tokenSecret = 'KBjBbqUZ0of2SQZDFEqSFof7kQPpENigIh7d3BMUQyCjN';

var cb = new Codebird();


function setup() {
  //background(0);
  createCanvas(1000, 600);
  background(0);
  cb.setConsumerKey(consumerKey, consumerSecret);
  cb.setToken(token, tokenSecret);

  var param1 = {
    q: "window",
    result_type: 'recent',
    count: 10
  };

  var param2 = {
    q: "chair",
    result_type: 'recent',
    count: 3
  };

  var param3 = {
    q: "desk",
    result_type: 'recent',
    count: 3
  };   

cb.__call(
    "search_tweets",
    param1,
    function(reply) {
      //background(0, 0, 0);
      var statuses = reply.statuses;
      for (var i = 0; i < statuses.length; i++) {
        var tweet = statuses[i];
        if (!tweet.retweeted_status) {
          print(tweet.text);
          //fill('#' + tweet.user.profile_background_color);

          
          let words = tweet.text.split(" ");
          console.log(words);
          let hyphenated = words.join("-")
          fill(255);
          //text(tweet.text , 0, 100);
          text(tweet.text , 0, 700);
        }
      }
      // print the max_id which helps if you want to grab pages of data
      print('max_id: ' + reply.search_metadata.max_id);

    }
  );

// cb.__call(
//   //chair
//     "search_tweets",
//     param1,
//     function(reply) {
//       //background(0, 0, 0);
//       var statuses = reply.statuses;
//       for (var i = 0; i < statuses.length; i++) {
//         var tweet = statuses[i];
//         if (!tweet.retweeted_status) {
//           print(tweet.text);
//           //fill('#' + tweet.user.profile_background_color);

          
//           let words = tweet.text.split(" ");
//           console.log(words);
//           let hyphenated = words.join("-")
//           fill(255);
//           text(tweet.text , 300, 700);
//         }
//       }
//       // print the max_id which helps if you want to grab pages of data
//       print('max_id: ' + reply.search_metadata.max_id);

//     }
//   );

// cb.__call(
//   //desk
//     "search_tweets",
//     param1,
//     function(reply) {
//       //background(0, 0, 0);
//       var statuses = reply.statuses;
//       for (var i = 0; i < statuses.length; i++) {
//         var tweet = statuses[i];
//         if (!tweet.retweeted_status) {
//           print(tweet.text);
//           //fill('#' + tweet.user.profile_background_color);

          
//           let words = tweet.text.split(" ");
//           console.log(words);
//           let hyphenated = words.join("-")
//           fill(255);
//           text(tweet.text , 520, 800);
//         }
//       }
//       // print the max_id which helps if you want to grab pages of data
//       print('max_id: ' + reply.search_metadata.max_id);

//     }
//   );

}

function draw() {

}