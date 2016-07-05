import { Meteor } from 'meteor/meteor';

Meteor.subscribe('ServiceStationInfo');

Template.ServiceStation.events({
        //'click #sendmsg': function (event) {
    "click [data-action='sendMessage']": function (event) {
        event.preventDefault();
		var phoneNumber = $('[id=phone]').val();
        var msg = $('[id=message]').val();
		console.log("Sending Message to "+phoneNumber);
        Meteor.call('SendMessage',phoneNumber,msg);  
    },
    "click [data-action='signup']": function (event) {
		event.preventDefault();
        var phoneNumber = $('[id=phone]').val();
		console.log("signup");
        //Meteor.call('SendMessage',phoneNumber);  
    },
	"click [data-action='verifycode']": function (event) {
        var vcode = $('[id=verificationcode]').val();
		var phoneNumber = $('[id=phone]').val();
        console.log("verifyCode");
		//Meteor.call('verifyCode',vcode,phoneNumber);  
    }

});
