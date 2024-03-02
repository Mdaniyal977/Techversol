<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $companyname = $_POST['companyname'];
    $projectbudget = $_POST['projectbudget'];
    $message = $_POST['message'];
    $services = implode(", ", $_POST['services']); // Assuming checkboxes named 'services[]'

    // Email information
    $to = "muhammad.daniyal@techversol.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nNumber: $number\nCompany Name: $companyname\nProject Budget: $projectbudget\nServices: $services\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
?>
