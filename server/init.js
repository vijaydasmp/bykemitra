import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  smtp = {
    username: 'postmaster@sandboxaa8a4925fb244df1a8f579c957947561.mailgun.org',
    password: '3eaf9f1a939cc82fe1da37c63081baad',
    server:   'smtp.mailgun.org',  // eg: mail.gandi.net
    port: 587
  }
  //process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
   process.env.MAIL_URL = 'smtp://postmaster@sandboxaa8a4925fb244df1a8f579c957947561.mailgun.org:3eaf9f1a939cc82fe1da37c63081baad@smtp.mailgun.org:587'
});



function isValidPhone(number)
{
    // TODO:  phone verification here
    return true;
} 