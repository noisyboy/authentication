angular
    .module('app')
    .controller('authCtrl', authCtrl);

    authCtrl.$inject = ['auth', 'session', '$location', '$mdToast'];
    function authCtrl(auth, session, $location, $mdToast) {
    var vm = this;

        vm.log_in = log_in;
        vm.log_out = log_out;
        
        function log_in() {
            vm.account = auth.user.check({email: vm.email,
                                          pass:  vm.pass});
            vm.account.$promise.then(promesa);
            function promesa(data) {
                var id = data.id;
                if (id) {
                    console.log(id);
                    session.set('user', id);
                    $location.path('/dashboard');

                }else {
                    $location.path('/login');
                }
            }
        }
        
        function log_out() {
            auth.logout();
        }

        function toastInfo() {
            $mdToast.show($mdToast.simple().textContent('email y/o contaseña incorrecto, intente de nuevo')
                                           .position('bottom right')
                                           .hideDelay(3000)
            );
        }
    }
