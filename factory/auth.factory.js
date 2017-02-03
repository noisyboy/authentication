angular
    .module('app')
    .factory('auth', auth);

    auth.$inject = ['$resource'];
    function auth($resource) {
        return {
            login: $resource('http://192.168.1.253/authentication/data.auth_login.php', {
                email: '@email',
                pass:  '@pass'}, {
                    check: {method: 'PUT', params: {email: '@email',
                                                    pass:  '@pass'}}
            
            }),
            logout: $resource('http://192.168.1.253/authentication/data.auth_login.php', {}, {})
        };
    }