//import Vehicles from '../collections/Vehicles.js';

Template.VehiclesInfo.events({
    
    "click [data-action='Vehicle/insert']": function (event) {
        event.preventDefault();
        //debugger;
        var Make = $('[id=make]').val();
        var BikeNumber = $('[id=registrationnumber]').val();
        var NickName = $('[id=nickname]').val();
        var id =  Meteor.userId();
        console.log("Inserting vehicle document  "+Make+"  "+BikeNumber+"   "+NickName);
        Meteor.call('Vehicles.insert',Make,BikeNumber,NickName); 
}
});