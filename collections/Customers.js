// Collection
Customers = new Mongo.Collection('Customers');

Customers.allow({

    insert: function () {
        if (Meteor.userId()) {
            return true;
        }
        else {
            return false;
        }
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
CustomersSchema = new SimpleSchema({
    "name": {
        type: String,
        label: "Name",
        max: 100
    },
    "email": {
        type: String,
        label: "Email",
        unique: true
    },
    "contact": {
        type: Number,
        label: "Contact Number",
        unique: true
    },
    'office': {
        type: String,  // A person can work at multiple office location like Hinjewadi & Magarpatta offices
    },
    'city': {
        type: String  // A person can work at multiple office location like Hinjewadi & Magarpatta offices
    },
    'area': {
        type: String,  // A person can work at multiple office location like Hinjewadi & Magarpatta offices
     },
    'pickup': {
        type: Number,
        min: 800,           // Morning 8 am to Evening 8 p.m.  
        max: 2000
    },
    'drop': {
        type: Number,
        min: 800,         // Morning 8 am to Evening 8 p.m.
        max: 2000,
        custom: function () {
            if (this.field('dropBefore').value - this.field('pickupAfter').value < 500) {
                return "Generally a 5 hours Gap is Required for General Service";
            }
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
    },
    "owner": {
        type: String,
        label: "myOwnerid",
        autoform: {
            type: "hidden"
        }
    }
});

Customers.attachSchema(CustomersSchema);
