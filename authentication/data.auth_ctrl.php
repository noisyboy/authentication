<?php
    require_once('data.auth.php');

    class ctrl_authentication {
        private $auth;

        public function __construct() {
            $this->auth = new authentication();
        }

        public function user($email, $pass) {
            $this->auth->set('email', $email);
            $this->auth->set('pass', $pass);
            $data = $this->auth->check_user();
            return $data;
        }
    }