FlowRouter.route('/',{
    name: 'Home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/logout',{
    name: 'Logout',
    action() {
        AccountsTemplates.logout();
        FlowRouter.go('Home');
        //BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/profile/',{
    name: 'Profile',
    action() {
        BlazeLayout.render('MainLayout',{main:'profile'});
        BlazeLayout.render('MainLayout',{footer:'footer'});
    }
});

FlowRouter.route('/updatepersonalInfo',{
    name: 'updatePersonalInfo',
    action() {
        BlazeLayout.render('MainLayout',{main:'updatePersonalInfo'});
    }
});


FlowRouter.route('/vehiclesInfo',{
    name: 'VehiclesInfo',
    action() {
        BlazeLayout.render('MainLayout',{main:'VehiclesInfo'});
    }
});

FlowRouter.route('/partnersignup',{
    name: 'AddPartnerForm',
    action() {
        BlazeLayout.render('MainLayout',{main:'addPartnerform'});
    }
});
