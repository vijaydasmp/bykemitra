Meteor.Spinner.options = {
    lines: 13, // The number of lines to draw
    length: 10, // The length of each line
    width: 5, // The line thickness
    radius: 15, // The radius of the inner circle
    corners: 0.7, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#00FF00', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: true, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 100, // Top position relative to parent in px
    left: 100 // Left position relative to parent in px
};

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
