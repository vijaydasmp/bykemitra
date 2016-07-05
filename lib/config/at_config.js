AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: false,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,

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
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,
    //preSignUpHook: preSignup,
    //postSignUpHook: postSignup 


    // Texts
    texts: {
        title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Recover password",
        resetPwd: "Reset BikeMitra Password",
        signIn: "BikeMitra Sigin",
        signUp: "Get a BikeMitra account",
        verifyEmail: "Verify Email",
      },
    
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          google: "myGoogleIcon",
          "meteor-developer": "fa fa-rocket"
      },
    },
});