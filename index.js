var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.EDUBOT_CONSUMER_KEY,
    consumer_secret: process.env.EDUBOT_CONSUMER_SECRET,
    access_token: process.env.EDUBOT_ACCESS_TOKEN,
    access_token_secret: process.env.EDUBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

/* post hello world tweet
bot.post('statuses/update', {status: 'hello world'}, function(err, data, response) {
    if (err){
        console.log(err);
    }else{
        console.log(`${data.text} was tweeted`);
    }
});*/

// get user screen names of followers
bot.get(/*'followers/ids'*/ 'followers/list', {screen_name: 'RHON_bots'}, (err, data, response) => {
    if (err){
        //console.log(err);
    }else{
        /*console.log(data);*/
        data.users.forEach((user) => {
            //console.log(user.screen_name);
        });
    }
});

/* post follow
bot.post('friendships/create', {screen_name: 'righthandofnerd'}, (err, data, response) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

/* get list of following
bot.get('friends/list', {screen_name: 'RHON_bots'}, (err, data, response) => { //we could also use 'friends/ids' for alternate read-out
    if(err){
        console.log(err);
    }else{
        console.log(data.);
    }
});
*/

/* will show connection type to lookup target
bot.get('friendships/lookup', {screen_name: 'righthandofnerd'}, (err, data, result) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

/* dm target user
bot.post('direct_messages/new', 
    {screen_name: 'righthandofnerd', text: 'Hello Sam!'},
    (err, data, response) => {
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/