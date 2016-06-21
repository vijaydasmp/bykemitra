import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Partners = new Mongo.Collection('Partners');

var partnerSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name of Your Service Station"
  },
  type: {
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
    establisheddate: {
    type: Date,
    label:"Established Since",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
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
    label: "Contact Number of Your Service Station",
    optional: true
  },
  address: {
    type: Object
  },
  'address.area': {
    type: String
  },
  'address.Address': {
    type: String,
    label:"Locality/Building Society Name",
    optional: true,
     autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }

  },
  'address.city': {
    type: String
  },
  'address.state': {
    type: String,
    allowedValues: ["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttaranchal","Uttar Pradesh","West Bengal"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a State)"
      }
    }
  },
    'address.country': {
    type: String,
    allowedValues: ["India","Nepal","Srilanka","Bhutan","Phillipines","China","Japan","USA","UK","Canada","Germany"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a Country)"
      }
    }
  },
  'address.postalCode': {
    type: String,
    label: "PIN/ZIP Code"
  },
  joindate: {
    type: Date,
    label:"Joining Date",
    optional: true,
    autoform: {
      type: "hidden",
      label: false
    },
     defaultValue:new Date ()
  },/*
  rating:{
    type:Integer,
  }*/
 /* bookingCalendar: {
    type: Boolean,
    label: "",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "Hidden"
      }
    }
  },
  joindate: {
    type: Date,
    label:"Joining Date",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "hidden",
      }
    }
  },

Opens: {
    type: Number,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "time"
      }
    }
  },
  Closes: {
    type: Number,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "time"
      }
    }
  },
*/

  Staff: {
    type: Array,
    optional: true
  },
  'Staff.$': {
    type: Object
  },
  'Staff.$.name': {
    type: String
  },
  'Staff.$.phone': {
    type: String
  }
});

Partners.attachSchema(partnerSchema);