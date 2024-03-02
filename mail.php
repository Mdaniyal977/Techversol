<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Your existing PHP code follows here...
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];

    // Check if any field is empty
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill all the fields";
    } else {
        // Compose email message
        $to = "info@techversol.com";
        $subject = "Webtech Message";
        $body = $message;
        $headers = "From: $name <$email>";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "<script>alert('Your message has been sent successfully');</script>";
        } else {
            echo "Failed to send the message. Please try again later.";
        }
    }
}
?>
