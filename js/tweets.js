const botfile = require('./bot.js');
const bot = botfile.twitBot;

// get tweets from timeline
function getBotTimeline (count) {
    bot.get('statuses/home_timeline', {count: count}, (err, data, response) => {
        if (err){
            console.log(err);
        }else{
            data.forEach((datum) => {
                console.log(datum.text, '\n', datum.user.screen_name, '\n', datum.id_str, '\n');
            });
        }
    });
}

// retweet
function postBotRetweet (idString) {
    bot.post('statuses/retweet/:id', {id: idString }, (err, data, results) => {
        if (err){
            console.log(err);
        }else{
            console.log(`${data.text} was retweeted`);
        }
    });
}

// unretweet
function postBotUnretweet (idString) {
    bot.post('statuses/unretweet/:id', {id: idString }, (err, data, results) => {
        if (err){
            console.log(err);
        }else{
            console.log(`${data.text} was unretweeted`);
        }
    });
}
