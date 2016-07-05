var accountkey;
var apiSecret;
if (!_.isUndefined(Meteor.settings)
    && !_.isUndefined(Meteor.settings.nexmo)
    && !_.isUndefined(Meteor.settings.nexmo.api_key)
    && !_.isUndefined(Meteor.settings.nexmo.api_secret)) {
    accountkey = Meteor.settings.nexmo.api_key;
    apiSecret = Meteor.settings.nexmo.api_secret;
}
console.log("API_KEY "+accountkey);
console.log("API_SECRET "+apiSecret);
Nexmo.initialize(accountkey, apiSecret, 'https', 'true');
sender="+919860501299";
recipient = "+919860501299";
opts = {"a":"b"};
callback = function(){
    console.log("callback called");
}


