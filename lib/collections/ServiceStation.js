// Collection
ServiceStation = new Mongo.Collection('ServiceStation');

ServiceStation.allow({

    insert: function () {
         return true
    },
   update: function () {
        if (Meteor.userId()) {
            return true;
        }
        else {
            return false;
        }
    } 
});
ServiceStationSchema = new SimpleSchema({
    "name": {
        type: String,
        label: "Name",
        max: 100
    },
    "contact": {
        type: Number,
        label: "Contact Number",
        unique: true
    },
    'city': {
        type: String, 
        allowedValues: ["Pune","Banglore","Mumbai","Nagpur","Hyderabad","Chandigarh","Delhi","Noida"]
    },
    'area': {
        type: String, 
        allowedValues: ["Hinjewadi Phase 1","Hinjewadi Phase 2","Hinjewadi Phase 3"]
    },
    'BikeBrand':{
      type: String,
      label: "Authorised Service Center of ",
      allowedValues: ["TVS","Honda","Bajaj","Yamaha","Royal Enfield"]
    },
    "createdOn": {
        type: Date,
        label: "Signup Date",
        autoValue: function () {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    },
    "owner": {
        type: String,
        label: "myOwnerid",
       autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    }
});

ServiceStation.attachSchema(ServiceStationSchema);
