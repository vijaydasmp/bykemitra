Partners = new Mongo.Collection('Partners');
Partners.allow({

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
var partnerSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name of Your Service Station"
  },
  Station_Type: {
    type: String,
    optional: true,
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "Authorized Service Station", value: 0},
          {label: "Private Service Station", value: 1},
        ];
      }
    }
  },
  bikesServiced: {
    type: [Boolean],
    optional: true,
    label:"Bikes we Service",
    autoform: {
      type: "select-checkbox-inline",
      options: function () {
        return [
          {label: "Bajaj Auto", value: 1},
          {label: "Hero MotoCorp(formerly Hero Honda)", value: 2},
          {label: "LML", value: 3},
          {label: "Mahindra 2 Wheelers", value: 4},
          {label: "KTM", value: 5},
          {label: "TVS Motor", value: 6},
          {label: "SUZUKI INDIA", value: 7},
          {label: "Honda Motorcycle & scooters", value: 8},
          {label: "YAMAHA", value: 9},
          {label: "Harley Davidson", value: 10},
          {label: "Royal Enfield", value: 11},
        ];
      }
    }
  },
  phone: {
    type: String,
    label: "Contact Number ",
    optional: true
  },
  area: {
    type: String,
    label: "Area",
    allowedValues: ["Hinjewad 1","Hinjewad 2"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select an area)"
      }
    }
    }
});

Partners.attachSchema(partnerSchema);