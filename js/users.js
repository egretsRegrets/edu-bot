const botFile = require('./bot');
const bot = botFile.twitBot;

//post hello world tweet
function postBotTweet(statusText) {
    bot.twitBot.post('statuses/update', {status: statusText}, function(err, data, response) {
        if (err){
            console.log(err);
        }else{
            console.log(`${data.text} was tweeted`);
        }
    });
}

// get user screen names of followers
function getBotFollowers(botScreenName) {
    bot.get(/*'followers/ids'*/ 'followers/list', {screen_name: botScreenName}, (err, data, response) => {
        if (err){
            console.log(err);
        }else{
            console.log(data);
            data.users.forEach((user) => {
                console.log(user.screen_name);
            });
        }
    });
}

// post follow
function postBotFollow(userScreenName) {
    bot.post('friendships/create', {screen_name: userScreenName}, (err, data, response) => {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}


// get list of following
function getBotFollowing(botScreenName) {
    bot.get('friends/list', {screen_name: botScreenName}, (err, data, response) => { //we could also use 'friends/ids' for alternate read-out
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}

// will show connection type to lookup target
function getBotConnectionTypes(userScreenName) {
    bot.get('friendships/lookup', {screen_name: userScreenName}, (err, data, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}

// post dm
function postBotDm(userScreenName) {
    bot.post('direct_messages/new', 
    {screen_name: userScreenName, text: 'Hello Sam!'},
    (err, data, response) => {
        if (err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}
