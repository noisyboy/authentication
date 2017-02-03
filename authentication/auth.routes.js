angular
    .module('app')
    .config(appConfig);

    appConfig.$inject = ['$routeProvider'];
    function appConfig($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl:  'authentication/auth_login.html',
                controller:   'authCtrl',
                controllerAs: 'vm'}
            )
            .when('/dashboard', {
                templateUrl: 'dashboard/dashboard.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/login'});
    }    