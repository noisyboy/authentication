<?php
    session_start();
    if (isset($_SESSION['id_user'])) {
        $check = [
            'check'=> 'authentified'
        ];
        echo json_encode($check);
    }