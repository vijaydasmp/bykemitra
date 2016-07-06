/*Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-profile': function(event) {
		FlowRouter.go('/profile');
	}
});*/

var myLogoutFunc = function(){
console.log("Hello");   
}

AccountsTemplates.configure({
    defaultLayout: 'MainLayout',
    defaultLayoutRegions: {
        nav: 'mainnavbar',
        footer: 'myfooter'
    },
    termsUrl: 'terms-of-use',
    privacyUrl: 'privacy',
    onLogoutHook: myLogoutFunc,
});

AccountsTemplates.addFields([
    {
        _id: 'name',
        type: 'text',
        displayName: "Name",
        required:true
    },
    {
        _id: 'phone',
        type: 'tel',
        displayName: "Phone",
        /*func: function (number) {
        if (Meteor.isServer){
          if (isValidPhone(number))
              return true; // meaning no error!
          return false; // Validation error!
        }
        },
        errStr: 'Invalid Phone number!',*/
        required:true
    },
    /*{
    _id: "gender",
    type: "select",
    displayName: "Gender",
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
        {
            text: "other",
            value: "other",
        }       
    ]},*/
    {
    _id: "servicearea",
    type: "select",
    displayName: "My Office is in",
    select: [
        {
            text: "Hinjewadi Phase 1",
            value: "Hinjewadi Phase 1",
        },
        {
            text: "Hinjewadi Phase 2",
            value: "Hinjewadi Phase 2",
        },
        {
            text: "Hinjewadi Phase 3",
            value: "Hinjewadi Phase 3",
        },
        {
            text: "Commerzone IT Park",
            value: "Commerzone IT Park",
        },
        {
            text: "Magarpatta",
            value: "Magarpatta",
        },
        {
            text: "Baner Road (Prabhavee Tech Park)",
            value: "Baner Road (Prabhavee Tech Park)",
        },
        {
            text: "Baner Road (Nanospace Tech Park)",
            value: "Baner Road (Nanospace Tech Park)",
        },
        {
            text: "Yerwada Tech Park One",
            value: "Yerwada Tech Park One",
        },
        {
            text: "Business Bay",
            value: "Business Bay",
        },
        {
            text: "Talawade IT Park",
            value: "Talawade IT Park",
        },
        {
            text: "Aundh IT Park",
            value: "Aundh IT Park",
        },
        {
            text: "Fursungi SP Infocity",
            value: "Fursungi SP Infocity",
        },
        {
            text: "Kalyani Nagar Cerebrum IT Park",
            value: "Kalyani Nagar Cerebrum IT Park",
        },
        {
            text: "Vimannagar Giga Space",
            value: "Vimannagar Giga Space",
        },       
        {
            text: "Senapati Bapat Road ICC Towers",
            value: "Senapati Bapat Road ICC Towers",
        },       
        {
            text:"Erandwana",
            value:"Erandwana"
        },
        {
            text:"not listed here",
            value:"not listed here"
        }
    ]}
]);