postSignup = function (userId,info) {
    console.log(userId);
    console.log(info);
    console.log("email :"+info.email);
    console.log("name :"+info.profile.name);
    console.log("phone :"+info.profile.phone);
    console.log("area:"+info.profile.servicearea);
    createdAt = Date.now();
    console.log("userId :"+userId);
    Customers.insert({'name':info.profile.name,'email':info.email,'contact':info.profile.phone,'office':"Please Enter office ",'city':"Pune",'area':info.profile.servicearea,'pickup': 1000,'drop':1630,'createdOn':createdAt,'owner':userId});
}

var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
      FlowRouter.go('VehiclesInfo');
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
      FlowRouter.go('Profile');
    }
  }
};


preSignup = function (userId,info) {
    
    // we will validate phone number here , in pre signup hook
}
AccountsTemplates.configure({
   postSignUpHook: postSignup ,
   onSubmitHook: mySubmitFunc
});