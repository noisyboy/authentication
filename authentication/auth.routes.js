angular
    .module('app')
    .config(appConfig)
    .run(appRun);

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
    
    appRun.$inject = ['$rootScope', '$location', 'auth'];
    function appRun($rootScope, $location, auth) {
        var routespermission = ['/dashboard'];
        $rootScope.$on('$routeChangeStart', routeChangeStart);

        function routeChangeStart() {
            if (routespermission.indexOf($location.path()) != -1) {
                var connected = auth.is_logged();
                // connected.$promise.then(msg);
                // function msg(data) {
                if (!connected) {
                    $location.path('/login');
                    // }
                }
            }
        }
    }