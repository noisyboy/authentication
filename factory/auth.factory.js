angular
    .module('app')
    .factory('auth', auth);

    auth.$inject = ['$resource', 'session'];
    function auth($resource, session) {
        return {
            user: $resource('http://192.168.1.253/authentication/data.auth_login.php', {
                email: '@email',
                pass:  '@pass'}, {
                    check: {method: 'PUT', params: {email: '@email',
                                                    pass:  '@pass'}}

            }),

            is_logged: function () {
                $resource('http://192.168.1.253/authentication/data.auth_session_check.php', {}, {});
                // if (session.get('user')) {
                //     return true;
                // }
            }
        };
    }