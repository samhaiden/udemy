<?php



/*
--- Secure Passwords ---

$hash = password_hash("mypassword", PASSWORD_DEFAULT);

echo $hash;

echo "<br><br>";
if (password_verify('mpassword', $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}

/*

// setcookie("customerid", "1234", time() + 60 * 60 * 24);

setcookie("customerid", "", time() + 60 * 60);

$_COOKIE["customerid"] = "test";

echo $_COOKIE['customerid'];

*/


/* ---opt in form---

session_start();

$link = mysqli_connect("localhost", "root", "root", "users");

if (mysqli_connect_error() == true) {

  die ("There was an error connecting to the database.");

}

if (array_key_exists('email', $_POST) OR array_key_exists('password', $_POST)) {

  if ($_POST['email'] == '') {

    echo "<p>Email address is required</p>";

  } else if ($_POST['password'] == '') {

      echo "<p>Password address is required</p>";

    } else {

      $query = "SELECT `id` FROM `users` WHERE email = '".mysqli_real_escape_string($link, $_POST['email'])."'";

      $result = mysqli_query($link, $query);

      if (mysqli_num_rows($result) > 0) {

        echo "<p>That email address has already been taken.</p>";

      } else {

        $query = "INSERT INTO `users` (`email`, `password`) VALUES ('".mysqli_real_escape_string($link, $_POST['email'])."',
        '".mysqli_real_escape_string($link, $_POST['password'])."')";

         if (mysqli_query($link, $query)) {

          $_SESSION['email'] = $_POST['email'];
          header("Location: session.php");

        } else {

          echo "<p>There has been an error when signing you up - pleaes try again.</p>";

        }

    }
}

} */


/* ---mySQL Queries---

$name = "Sam O'Grady";

$query = "INSERT INTO `users` (`email`, `password`) VALUES ('tommy@robpercival.co.uk', 'lkjh123')";

$query = "UPDATE `users` SET email = 'haiden.sa@gmail.com' WHERE id = 1 LIMIT 1";

$query = "UPDATE `users` SET password = 'asdfjkl123' WHERE email = 'haiden.sa@gmail.com' LIMIT 1";

// mysqli_query($link, $query);

$query = "SELECT `email` FROM users WHERE name = '".mysqli_real_escape_string($link, $name)."'";

if ($result = mysqli_query($link, $query)) {

while ($row = mysqli_fetch_array($result)) {

print_r($row);

}

} */

?>

<!doctype html>

<html>

    <head>

    <title>MySQL</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style type="text/css">

    .inputField {
      margin: 5px;
    }

    </style>

    </head>

<body>


<form method="post">

  <input class="inputField" type="text" name="email" placeholder="example@domain.com">

  <br />

  <input class="inputField" type="tel" name="password">

  <br />

  <input class="inputField" type="email" name="password">

  <br />

  <input class="inputField" type="password" name="password">

  <br />

  <input class="inputField" type="submit" name="submit">

</form>

</body>


<script type="text/javascript">



</script>
