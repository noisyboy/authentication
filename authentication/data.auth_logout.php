<?php
    session_id('id');
    session_start();
    session_destroy();
    session_commit();