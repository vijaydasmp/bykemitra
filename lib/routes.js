FlowRouter.route('/',{
    name: 'Home',
    action() {
        //BlazeLayout.render('HomeLayout');
        BlazeLayout.render('MainLayout',{nav: "mainnavbar", main: "HomeLayout", footer: "myfooter"});
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

FlowRouter.route('/profile',{
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'Profile',
    action() {
        BlazeLayout.render('MainLayout',{nav: "mainnavbar", main: "profile", footer: "myfooter"});
        //BlazeLayout.render('MainLayout',{footer:'myfooter'});
    }
});

FlowRouter.route('/updatepersonalInfo',{
    name: 'updatePersonalInfo',
    action() {
        BlazeLayout.render('MainLayout',{nav: "mainnavbar",main:'updatePersonalInfo'});
    }
});


FlowRouter.route('/vehiclesInfo',{
    name: 'VehiclesInfo',
    action() {
        BlazeLayout.render('MainLayout',{main:'VehiclesInfo'});
    }
});

FlowRouter.route('/partnersignup',{
    name: 'ServiceStation',
    action() {
        BlazeLayout.render('MainLayout',{main:'ServiceStation'});
    }
});
