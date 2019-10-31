<!-- $_POST / Checking entered value against an array -->


<? if ($_POST) {

$userName = $_POST["name"];

$userArray = array("Mike","Jim","Pam","Dwight","Meredith","Angela","Andy","Creed","Kevin");

$isKnown = false;

foreach ($userArray as $value) {

  if ($value == $userName) {

  $isKnown = true;

}

}

if ($isKnown == true) {

  echo "Hi there ".$userName."!";

} else {

echo "I don't know you...";

}

}

?>


 <form method="post">
Enter Your Name
<br />
<br />
<input name="name" type="text" id="userName"></input>
<br />
<br />
<input value="Do I know you?!" type="submit" id="submitButton"></input>
</form>
