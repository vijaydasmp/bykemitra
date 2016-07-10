import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {  
   process.env.MAIL_URL = 'smtp://'+Meteor.settings.mailgun.username+':'+Meteor.settings.mailgun.password+'@'+Meteor.settings.mailgun.server+':'+'587'
   console.log("MAIL_URL  "+process.env.MAIL_URL);
});



function isValidPhone(number)
{
    // TODO:  phone verification here
    return true;
} 