Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-profile': function(event) {
		FlowRouter.go('/profile');
	}
});

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    },{
        fieldName: 'contact-number',
        fieldLabel: 'Contact Number',
        inputType: 'number',
        visible: true,
    }, {
        fieldName: 'service-area',
        fieldLabel: 'Service Area',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your Service Area of  your Office',
        data: [{
            id: 1,
            label: 'Hinjewadi',
            value: 'hi'
          }, {
            id: 2,
            label: 'Magarpatta',
            value: 'mg',
        }, {
            id: 3,
            label: 'Erandwana',
            value: 'er',
        }, 
		{
            id: 3,
            label: 'Commerzone IT Park ',
            value: 'cm',
        },
		],
        visible: true
    },{
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
    		id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: 'Country',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your country of residence',
        data: [{
            id: 1,
            label: 'India',
            value: 'in'
          }, {
            id: 2,
            label: 'US',
            value: 'us',
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});
