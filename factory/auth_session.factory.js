angular
    .module('app')
    .config(localStorageService)
    .factory('session', session);

    localStorageService.$inject = ['localStorageServiceProvider'];
    function localStorageService(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('app');
    }

    session.$inject = ['localStorageService', '$http'];
    function session(localStorageService, $http) {
        return {
            set:function (key, value) {
                return localStorageService.set(key, value);
            },
            get:function (key) {
                return localStorageService.get(key);
            },
            destroy:function () {
                $http.post('http://192.168.1.253/authentication/data.auth_logout.php');
                return localStorageService.clearAll();
            }
        };
    }