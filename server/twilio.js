Notification = {};

// Our Twilio Number
Notification.contacts = {
    mobile: '12019921148'
};

Notification.sendSMS = function (to, message) {
    /* SEE TWILIO API DOCS HERE: http://twilio.github.io/twilio-node/ */
    twilio.messages.create({
        to: to,
        from: Notification.contacts.mobile,
        body: message

    }, function (err, res) {
        if (err) {
            console.log(err);
        }
        if (!err) {
            console.log(res.from);
            console.log(res.body);
        }
    });
};

var accountSid;
var authToken;
if (!_.isUndefined(Meteor.settings)
    && !_.isUndefined(Meteor.settings.public)
    && !_.isUndefined(Meteor.settings.public.twilio)
    && !_.isUndefined(Meteor.settings.public.twilio.sid)
    && !_.isUndefined(Meteor.settings.public.twilio.token)) {
    accountSid = Meteor.settings.public.twilio.sid;
    authToken = Meteor.settings.public.twilio.token;
}

debugger;
console.log("sid",accountSid);
console.log("token",authToken);
var twilio = Twilio(accountSid, authToken);