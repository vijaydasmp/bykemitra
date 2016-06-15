Template.updatePersonalInfo.onCreated(function() {
  var self = this;
  this.autorun(function() {
    var docId = Meteor.userId();
	console.log("docId = "+docId);
    self.subscribe('customerDocument', docId);
  });
});


Template.updatePersonalInfo.helpers({
	customerDoc: function () {
        console.log(Meteor.userId()+" Inside Customer Info");
		var personalInfoDoc = Customers.findOne({ owner: Meteor.userId() })
		console.log("personalInfoDoc = "+ personalInfoDoc);
		var doc =  personalInfoDoc || {};
		return doc;
	},
});
