<?php

session_start();

$error = "";

if (array_key_exists("logout", $_GET)) {


  unset($_SESSION);
  setcookie("id", "", time() - 60 * 60);
  $_COOKIE["id"] = "";
  session_destroy();
  $_SESSION = array();

} else if ((array_key_exists("id", $_SESSION) AND $_SESSION['id']) OR (array_key_exists("id", $_COOKIE) AND $_COOKIE['id'])) {

  header("Location: loggedinpage.php");

}

if (array_key_exists("submit", $_POST)) {

$link = mysqli_connect("localhost", "root", "root", "users2");

if (mysqli_connect_error() == true) {

  die ("There was an error connecting to the database.");

}

// echo ("Your connection was succesful");

if (!$_POST['email']) {

$error .= "An email address is required.<br>";

}

if (!$_POST['password']) {

$error .= "A password is required.<br>";

}

if ($error != "") {

$error = "There were error(s) in your submission:<br>".$error;

}

else {

  if ($_POST['signUp'] == '1') {

$query = "SELECT `id` FROM `testusers` WHERE `email` = '".mysqli_real_escape_string($link, $_POST['email'])."' LIMIT 1";

$result = mysqli_query($link, $query);

if (mysqli_num_rows($result) > 0) {

$error .= "That email address is already in use.<br>";

} else {

$query = "INSERT INTO `testusers` (`email`, `password`) VALUES ('".mysqli_real_escape_string($link, $_POST['email'])."',
'".mysqli_real_escape_string($link, $_POST['password'])."')";

if (!mysqli_query($link, $query)) {

$error = "We could not sign you up - please try again later.";

} else {

  $query = "UPDATE `testusers` SET password = '".md5(md5(mysqli_insert_id($link)).$_POST['password'])."' WHERE id = ".mysqli_insert_id($link)." LIMIT 1";

  mysqli_query($link, $query);

  $_SESSION['id'] = mysqli_insert_id($link);

  if ($_POST['signUpCheckBox'] == 1) {

    setcookie("id", mysqli_insert_id($link), time() + 60*60*24*365);

  }

  header("Location:loggedinpage.php");

}

}

} else {

$query = "SELECT * FROM `testusers` WHERE email = '".mysqli_real_escape_string($link, $_POST['email'])."'";

$result = mysqli_query($link, $query);



$row = mysqli_fetch_array($result);

if (isset($row)) {

  $hashedPassword = md5(md5($row['id']).$_POST['password']);

  if ($hashedPassword == $row['Password']) {

    $_SESSION['id'] = $row['id'];

  if ($_POST['signUpCheckBox'] == '1') {

    setcookie("id", $row['id'], time() + 60*60*24*365);

}

  header("Location: loggedinpage.php");

} else {

  $error = "That email/password combination could not be found";

}

} else {

  $error = "That email/password combination could not be found";

}

}

}

}

?>

<!doctype html>

<html>

    <head>

    <title>Log-in Form</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style type="text/css">

#signUpForm {
  margin-bottom: 10px;
}

    </style>

    </head>

<body>

<div id="errorMessage"><?php echo $error; ?></div></div>

<form method="post" id="form" name="form">

  <input id="email" class="inputField" type="text" name="email" placeholder="example@domain.com">


  <input class="inputField" type="password" placeholder="password" name="password">


  <input class="inputField" type="checkbox" value=1 name="signUpCheckBox">


  <input type="hidden" name="signUp" value="1">


  <input type="submit" name="submit" value="Sign Up!">

</form>

<form method="post" id="form" name="form">

  <input id="email" class="inputField" type="text" name="email" placeholder="example@domain.com">


  <input class="inputField" type="password" placeholder="password" name="password">


  <input class="inputField" type="checkbox" name="signUpCheckBox">


  <input type="hidden" name="signUp" value="0">


  <input type="submit" name="submit" value="Log In!">

</form>

</body>


<script type="text/javascript">



</script>
