Meteor.publish('CustomersPersonalInfo', function () {
   return Customers.find({owner:this.userId}); 
});

Meteor.publish('VehiclesInfo', function () {
   return Vehicles.find({owner:this.userId}); 
});

Meteor.publish('ServiceStationInfo',function () {
   return ServiceStation.find({}); 
});

