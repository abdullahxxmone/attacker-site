<?php
// attacker-site/xss.php

// Get the 'input' parameter from the URL
$userInput = isset($_GET['input']) ? $_GET['input'] : '';

// Display the user input without sanitization (VULNERABLE!)
?>
<!DOCTYPE html>
<html>
<head>
    <title>XSS Demo</title>
</head>
<body>
    <h1>Enter something:</h1>
    <form method="GET">
        <input type="text" name="input">
        <button type="submit">Submit</button>
    </form>

    <div>
        <h2>Your Input:</h2>
        <?php echo $userInput; ?>
    </div>
</body>
</html>

