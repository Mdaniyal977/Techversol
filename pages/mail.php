<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$companyname = $_POST['companyname'];
$projectbudget = $_POST['projectbudget'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "muhammad.daniyal@techversol.com";

mail($recipient, $companyname, $message, $mailheader)

or die("error!")


echo 'messages send';


?>