angular
    .module('app')
    .config(configRoute)
    .run(appRun);

    configRoute.$inject = ['$routeProvider'];
    function configRoute($routeProvider) {
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
                var connected = auth.is_logged.check();
                connected.$promise.then(promesa);

                function promesa(data) {
                    var session = data.check;
                    console.log('conected' + ' ' +session);
                if (!session) {
                    $location.path('/login');
                    }
                }
            }
        }
    }