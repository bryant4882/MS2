console.log('The bot is starting');

var Twit = require('twit');    // import statement

var config = require('./config');
var T = new Twit(config);


var tweet = {
	status: 'alas'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if (err){
		console.log("something went wrong!")
	}
	console.log("it works!");
}

var params = {
	q: 'taiwan',
	count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
	var tweets = data.statuses;
	for (var i =0; i< tweets.length; i++){
		console.log(tweets[i].text);
	}
}

// T.get('search/tweets', { q: 'rainbow', count: 2 }, function(err, data, response) {
//   console.log(data)
// })