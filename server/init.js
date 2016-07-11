import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {  
   //process.env.MAIL_URL = 'smtp://'+Meteor.settings.mailgun.username+':'+Meteor.settings.mailgun.password+'@'+Meteor.settings.mailgun.server+':'+'587'
    process.env.MAIL_URL  = 'smtp://postmaster@bikemitra.com:56ea81e20c7deb65193244604da6138d@smtp.mailgun.org:587';
   console.log("MAIL_URL  "+process.env.MAIL_URL);
});



function isValidPhone(number)
{
    // TODO:  phone verification here
    return true;
} 