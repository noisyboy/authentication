angular
    .module('app')
    .factory('auth', auth);

    auth.$inject = ['$resource', 'session', '$location'];
    function auth($resource, session, $location) {
        return {
            user: $resource('http://192.168.1.253/authentication/data.auth_login.php', {
                email: '@email',
                pass:  '@pass'}, {
                    check: {method: 'PUT', params: {email: '@email',
                                                    pass:  '@pass'}}

            }),
            logout: function () {
                session.destroy();
                $location.path('/login');
            },
            is_logged: $resource('http://192.168.1.253/authentication/data.auth_session_check.php', {}, {
                check: {method: 'GET'}
            })
            // isLogged: function () {
            //     return $resource('http://192.168.1.253/authentication/data.auth_session_check.php', {}, {
            //         method: 'GET'
            //     });
            // }
            // isLogged: function () {
            //     $http.post('http://192.168.1.253/authentication/data.auth_session_check.php');
            // }
        };
    }