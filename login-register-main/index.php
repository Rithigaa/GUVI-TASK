


<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User Dashboard</title>
</head>
<body>


<?php
session_start();
if (!isset($_SESSION["user"])) {
    http_response_code(401); // Unauthorized status code
    echo "Unauthorized access. Please login first.";
    echo "<br><a href='login.php'>Login Here</a>"; // Corrected quotes

    exit;
}
?>


    <div class="container">
        <h1>Welcome to Dashboard</h1>
        <a href="logout.php" class="btn btn-warning">Logout</a>
    </div>
    <input type="hidden" id="userSession" value="<?php echo $_SESSION['user']; ?>">

    <script src="dashboard.js"></script>

</body>
</html>