<?php
// Get form data
$signupusername = $_POST['signupusername'];
$signupemail = $_POST['signupemail'];
$signupmessage = $_POST['signuppassword'];

// Example: display the data (testing)
echo "<h2>Form Submitted!</h2>";
echo "<p><strong>Name:</strong> $signupusername</p>";
echo "<p><strong>Email:</strong> $signupemail</p>";
echo "<p><strong>password:</strong> $signuppassword</p>";

// Later, you can save this into a database or send an email
?>
