angular
    .module('app')
    .controller('authCtrl', authCtrl);

    authCtrl.$inject = ['auth', '$mdToast','$location'];
    function authCtrl(auth, $mdToast, $location) {
    var vm = this;

        vm.log_in = log_in;
        vm.log_out = log_out;
        
        function log_in() {
            vm.account = auth.login.check({email: vm.email,
                                           pass:  vm.pass});
            vm.account.$promise.then(success);
            function success(data) {
                if (data.id) {
                    $location.path('/dashboard');
                    console.log('con valor');

                }else {
                    $location.path('/');
                    console.log('sin valor');
                }
            }
        }
        
        function log_out() {
            auth.logout();
            $location.path('/');
        }
        //
        // function toastInfo() {
        //     $mdToast.show($mdToast.simple().textContent('email y/o contaseña incorrecto, intente de nuevo')
        //                                    .position('bottom right')
        //                                    .hideDelay(3000)
        //     );
        // }
    }
