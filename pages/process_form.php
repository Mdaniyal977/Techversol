<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $number = trim($_POST["number"]);
    $companyName = trim($_POST["company_name"]); // Changed to match the form field name
    $projectBudget = trim($_POST["project_budget"]); // Changed to match the form field name
    $comments = trim($_POST["comments"]);
    $services = implode(", ", $_POST["services"]); // Combine selected services into a comma-separated string

    // Set up the email
    $to = "daniyalmuhammad977@gmail.com";
    $subject = "New Contact Form Submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Contact Number: $number\n";
    $message .= "Company Name: $companyName\n";
    $message .= "Project Budget: $projectBudget\n";
    $message .= "Services: $services\n";
    $message .= "Additional Comments: $comments\n";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong.";
    }
} else {
    // If it's not a POST request, redirect back to the form
    header("Location: /your-form-page.html");
}
?>
