Template.personalInfoCard.helpers({
  // See only own data 
   'customerinfo' : function () {
       //debugger;
       console.log("Getting Personal Info for userId "+Meteor.userId());
       return Customers.findOne({owner:Meteor.userId()});
   } 
});