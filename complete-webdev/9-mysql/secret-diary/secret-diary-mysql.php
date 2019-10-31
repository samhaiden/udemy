<?php

session_start();

$error = "";

if (array_key_exists("logout", $_GET)) {

  unset($_SESSION);
  setcookie("id", "", time() - 60 * 60);
  $_COOKIE["id"] = "";
  session_destroy();
  $_SESSION = array();
  header("Refresh:0; url=secret-diary-mysql.php");

} else if ((array_key_exists("id", $_SESSION) AND $_SESSION['id']) OR (array_key_exists("id", $_COOKIE) AND $_COOKIE['id'])) {

  header("Location: secret-diary-login.php");

}

if (array_key_exists("submit", $_POST)) {

include ("connection.php");

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

  header("Location: secret-diary-login.php");

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

  header("Location: secret-diary-login.php");

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

<body>

<?php include("header.php"); ?>

<div class="container">

<h1 id="homeh1">Your Secret Diary</h1>

<div id="errorMessage"><?php echo $error; ?></div>

<form method="post" id="signUpForm" name="form">

  <p class="text">Create an account where you can store your secrets permanently and safely.</p>

  <input class="email inputField" type="text" name="email" placeholder="example@domain.com">

  <br>

  <input class="inputField" type="password" placeholder="password" name="password">

  <br>

  <input type="hidden" name="signUp" value="1">


  <input class="submitBtn" type="submit" name="submit" value="Sign Up!">

  <br>

  <span class="text">Stay Logged In?</span><label><input class="inputField1" type="checkbox" value=1 name="signUpCheckBox"></label>

  <p class="bottomText">Already have an account? <a class="toggleForm">Log In</a></p>


</form>

<form method="post" id="logInForm" name="form">

  <p class="text">Log in to access your secret diary.</p>

  <input class="email inputField" type="text" name="email" placeholder="example@domain.com">

  <br>

  <input class="inputField" type="password" placeholder="password" name="password">

  <br>

  <input type="hidden" name="signUp" value="0">

  <input class="submitBtn" type="submit" name="submit" value="Log In!">

  <br>

  <span class="text">Stay Logged In?</span><label><input class="inputField1" type="checkbox" value=1 name="signUpCheckBox"></label>

  <p class="bottomText">Don't have an account? <a class="toggleForm">Create Account</a></p>

</form>

</div>

</body>

<?php include("footer.php"); ?>
