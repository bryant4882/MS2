console.log('The bot is starting');

var Twit = require('twit');    // import statement

var config = require('./config');
var T = new Twit(config);



tweetIt();
setInterval(tweetIt, 1000*20)

function tweetIt(){

	var r = Math.floor(Math.random()*100);

	var tweet = {
	status: r
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if (err){
		console.log("something went wrong!")
		}else{
		console.log("it works!");
		}
	}

}


// T.get('search/tweets', { q: 'rainbow', count: 2 }, function(err, data, response) {
//   console.log(data)
// })