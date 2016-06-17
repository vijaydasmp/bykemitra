var postSignup = function (userId,info) {
    console.log(userId);
    console.log(info);
    console.log("email :"+info.email);
    console.log("name :"+info.profile.name);
    console.log("phone :"+info.profile.phone);
    console.log("id:"+info.profile.phone);
    createdAt = Date.now();
    console.log("userId :"+userId);
    Customers.insert({'name':info.profile.name,'email':info.email,'contact':info.profile.phone,'office':"Please Enter office ",'city':"Please Enter City",'area':"Please Select area",'pickup': 1000,'drop':1630,'createdOn':createdAt,'owner':userId});
}

AccountsTemplates.configure({
   postSignUpHook: postSignup 
});