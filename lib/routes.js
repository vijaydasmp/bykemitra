FlowRouter.route('/',{
    name: 'Home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});


FlowRouter.route('/profile/',{
    name: 'Profile',
    action() {
        BlazeLayout.render('MainLayout',{main:'profile'});
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