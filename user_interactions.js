var bot = require('./bot');

/* post hello world tweet
bot.twitBot.post('statuses/update', {status: 'hello world'}, function(err, data, response) {
    if (err){
        console.log(err);
    }else{
        console.log(`${data.text} was tweeted`);
    }
});*/

// get user screen names of followers
bot.twitBot.get(/*'followers/ids'*/ 'followers/list', {screen_name: 'RHON_bots'}, (err, data, response) => {
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
bot.twitBot.post('friendships/create', {screen_name: 'righthandofnerd'}, (err, data, response) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

/* get list of following
bot.twitBot.get('friends/list', {screen_name: 'RHON_bots'}, (err, data, response) => { //we could also use 'friends/ids' for alternate read-out
    if(err){
        console.log(err);
    }else{
        console.log(data.);
    }
});
*/

/* will show connection type to lookup target
bot.twitBot.get('friendships/lookup', {screen_name: 'righthandofnerd'}, (err, data, result) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

bot.twitBot.post('direct_messages/new', 
    {screen_name: 'righthandofnerd', text: 'Hello Sam!'},
    (err, data, response) => {
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});
