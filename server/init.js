import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  /*smtp = {
    username: 'postmaster@bikemitra.com',
    password: '56ea81e20c7deb65193244604da6138d',
    server:   'smtp.mailgun.org',  // eg: mail.gandi.net
    port: 587
  }*/
  //process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
  username = Meteor.settings.mailgun.username;
  
   process.env.MAIL_URL = 'smtp://'+Meteor.settings.mailgun.username+':'+Meteor.settings.mailgun.password+'@'+Meteor.settings.mailgun.server+':'+'587'
   console.log("MAIL_URL  "+process.env.MAIL_URL);
});



function isValidPhone(number)
{
    // TODO:  phone verification here
    return true;
} 