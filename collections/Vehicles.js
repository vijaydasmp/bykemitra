Vehicles = new Mongo.Collection('Vehicles');

Vehicles.allow({

    insert: function () {
        if (Meteor.userId()) {
            return true;
        }
        else {
            return false;
        }
    }
});

VehicleSchema = new SimpleSchema({
    "make": {
        type: String,
        label: "which bike do you ride ?",
    },
    "regnumber": {
        type: String,
        label: "Registration Number",
        unique: true
    },
    "nickname": {
        type: String,
        label: "Bike Nick Name",
        defaultValue: "Your bike",
        optional: true
    },
    "owner": {
        type: String,
        label: "Ownerid",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
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
    }
});

Vehicles.attachSchema(VehicleSchema);
