<?php
    session_start();
//    if (isset($_SESSION['id_user'])) {
//        $account = array(
//            'id'=> $_SESSION['id_user'],
//            'type'=> $_SESSION['type_user']);
//        echo json_encode($account);
//    //        header('location: #/login');
//
//    }

    require_once('data.auth_ctrl.php');
    $ctrl = new ctrl_authentication();

    $data  = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $pass  = $data->pass;
//    $email = 'samedgo@gmail.com';
//    $pass = '123456789';



    $user = $ctrl->user($email, $pass);
    if ($user != null) {
        $_SESSION['id_user']    = $user['id_user'];
        $_SESSION['type_user']  = $user['type_user'];
        $account = [
            'id'=> $_SESSION['id_user'],
            'type'=> $_SESSION['type_user']];
        echo json_encode($account);
    } else {
        
    }
    