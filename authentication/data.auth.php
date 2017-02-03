<?php
    require_once('../connection.php');

    class authentication {
        private $con;
        private $email;
        private $pass;

        public function __construct() {
            $this->con = new connection();
        }

        public function set($attribute, $content) {
            $this-> $attribute = $content;
        }

        public function get($attribute) {
            return $this-> $attribute;
        }

        public function check_user() {
            $sql = "CALL sp_check_user ('$this->email', '$this->pass')";
            $result = $this->con->returnQuery($sql);
            $row = mysqli_fetch_assoc($result);
            return $row;
        }
    }