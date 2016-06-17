Template._loginButtonsLoggedInDropdown.events({
	'click #login-buttons-profile': function(event) {
		FlowRouter.go('/profile');
	}
});

var myLogoutFunc = function(){
console.log("Hello");   
}

AccountsTemplates.configure({
   
    termsUrl: 'terms-of-use',
    privacyUrl: 'privacy',
    onLogoutHook: myLogoutFunc,
    /*reCaptcha: {
        siteKey: "6LfcwiITAAAAAGuV1j36G7iGgtKFr4vpxI2OdcpJ",
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: true*/
    //postSignUpHook: myPostSubmitFunc
    // Behavior
    /*confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,
    postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
    reCaptcha: {
        siteKey: "6LfcwiITAAAAAGuV1j36G7iGgtKFr4vpxI2OdcpJ",
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: true*/
    
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
        displayName: "Contact Number",
        required:true
    },
    {
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
            text: "Prefer not to Tell",
            value: "prefernottotell",
        }       
    ]},
    /*{
    _id: "servicearea",
    type: "select",
    displayName: "Service Area",
    select: [
        {
            text: "Hinjewadi Phase 1",
            value: "hp1",
        },
        {
            text: "Hinjewadi Phase 2",
            value: "hp2",
        },
        {
            text: "Hinjewadi Phase 3",
            value: "hp3",
        },
        {
            text: "Commerzone IT Park",
            value: "cmz",
        },
        {
            text: "Magarpatta",
            value: "mgp",
        },
        {
            text: "Baner Road (Prabhavee Tech Park)",
            value: "ptp",
        },
        {
            text: "Baner Road (Nanospace Tech Park)",
            value: "Nano",
        },
        {
            text: "Yerwada Tech Park One",
            value: "ytp",
        },
        {
            text: "Business Bay",
            value: "bby",
        },
        {
            text: "Talawade IT Park",
            value: "tip",
        },
        {
            text: "Aundh IT Park",
            value: "aip",
        },
        {
            text: "Fursungi SP Infocity",
            value: "fsp",
        },
        {
            text: "Kalyani Nagar Cerebrum IT Park",
            value: "knc",
        },
        {
            text: "Vimannagar Giga Space",
            value: "vgs",
        },       
        {
            text: "Senapati Bapat Road ICC Towers",
            value: "sbi",
        },       
        {
            text:"Erandwana",
            value:"erw"
        }
    ]}*/
]);

/*
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
                validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please enter your phone number");
            return false;
          } else {
            return true;
          }
        }
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
        {
            id: 4,
            label: 'EON IT Park ',
            value: 'en',
        }
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
*/