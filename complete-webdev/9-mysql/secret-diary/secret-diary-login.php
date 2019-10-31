<?php

session_start();

$diaryEntry = $_POST['diary'];

if (array_key_exists("id", $_COOKIE) && $_COOKIE['id']) {

  $_SESSION["id"] = $_COOKIE["id"];

}

if (array_key_exists("id", $_SESSION) && $_SESSION['id']) {

  include("connection.php");

  $query = "SELECT `diary` FROM `testusers` WHERE id = ".mysqli_real_escape_string($link, $_SESSION['id'])." LIMIT 1";

  $row = mysqli_fetch_array(mysqli_query($link, $query));

  $diaryContent = $row['diary'];

} else {

  header("Location: secret-diary-mysql.php");

}

?>


<?php

include("header.php");

?>

<body>

<div id="header">

    <h1 id="loggedinh1">Your Diary</h1>

    <a href="secret-diary-mysql.php?logout=1"><input id="logOutButton" type="button" value="Log Out"></a>

    <input form="diaryForm" id="saveButton" type="submit" value="Save" name="saveButton">

    <span id="savedMessage">Saved!</span>

</div>

<form method="post" id="diaryForm">

    <div id="wrapper">

    <textarea id="diary"><?php echo $diaryContent ?></textarea>

    </div>

</form>





<?php include("footer.php"); ?>

</body>
