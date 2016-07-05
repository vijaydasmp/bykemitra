Meteor.methods({
    'SendMessage' : function (userPhone,message) {
        //console.log("Sending Message to "+to);
        //console.log("Message content"+message);
        /*Notification.sendSMS(userPhone, message);

        console.log("Sending Message to userphone");
        */
        //Accounts.requestPhoneVerification(userPhone, function(){});
        //console.log('Phone verification status is :', Accounts.isPhoneVerified());
      Nexmo.sendTextMessage(sender,userPhone,message,opts,callback)

    },
    'verifyCode' :function (vcode,userphone) {
     console.log("ffdello00");
        
        //  var verificationCode = vcode;   
        //Accounts.verifyPhone(userPhone, verificationCode, function(){});
        //console.log('Phone verification status is :', Accounts.isPhoneVerified());
    }   
});