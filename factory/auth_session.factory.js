angular
    .module('app')
    .factory('session', session);

    session.$inject = ['$resource'];
    function session($resource) {
        return {
            set: function (key, value) {
                return sessionStorage.setItem(key, value);
            },
            get: function (key) {
                return sessionStorage.getItem(key);
            },
            destroy: function (key) {
                $resource('http://192.168.1.253/authentication/data.auth_login.php', {}, {});
                return sessionStorage.removeItem(key);
            }
        };
    }