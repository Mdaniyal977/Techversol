<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $companyname = $_POST['companyname'];
    $projectbudget = $_POST['projectbudget'];
    $message = $_POST['message'];

    // Compose email message
    $to = "muhammad.daniyal@techversol.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nContact Number: $number\nCompany Name: $companyname\nProject Budget: $projectbudget\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "<script>alert('Your message has been sent.');</script>";
    } else {
        echo "<script>alert('There was a problem sending your message. Please try again later.');</script>";
    }
}
?>
