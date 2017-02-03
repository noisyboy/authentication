<?php
	class connection extends mysqli {

		public function __construct() {
			parent::__construct('localhost', 'root', 'p@ssWord07', 'db_prueba');
			$this->query("set names 'utf8';");
			$this->connect_errno ? die('error with connection') : $x = 'connected';
			//echo "$x";
			unset($x);
		}

		//functions 
		public function simpleQuery($sql) {
			mysqli::query($sql);
		}

		public function returnQuery($sql) {
			$query = mysqli::query($sql);
			return $query;
		}
	}