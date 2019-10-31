<!-- Valid contact form w/ PHP, CSS, HTML, and Javascript -->

<?php

$errorMessages = "";
$successMessages = "";

if ($_POST) {

  if (!$_POST["email"]) {

    $errorMessages .= "An email address is required.<br>";

  }

  if (!$_POST["subject"]) {

    $errorMessages .= "A subject address is required.<br>";

  }

  if (!$_POST["message"]) {

    $errorMessages .= "A message address is required.<br>";

  }

  if ($_POST["email"] && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {

      $errorMessages .= "Your email address is invalid.";
  }

  if ($errorMessages != "") {

    $errorMessages = "<div id='errorMessagesPHP'><strong>There were error(s) in your form:</strong><p></p>" . $errorMessages . "</div>";

  } else {

    $emailTo = "haiden.sa@gmail.com";

    $subject = $_POST["subject"];

    $body = $_POST["message"];

    $headers = "From: ".$_POST['email'];

    if (mail($emailTo, $subject, $body, $headers)) {

      $successMessages = '<div id="successMessages"><strong>Your message has been sent!</strong></div>';

    } else {

$errorMessages = '<div id="errorMessagesPHP"><strong>Whoops, something went wrong. Your message was not sent.</strong><p></p></div>';

    }

  }

}

?>

<!doctype html>

<html>

    <head>

    <title>JQuery</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <style type="text/css">

body {
margin: 0;
padding: 0;
font-family: sans-serif;
}

#title {
  margin-left: 15px;
}
.box {
width: 25%;
height: 30px;
margin-left: 15px;
border-radius: 5px;
border: .5px solid grey;
font-size: 13px;
padding-left: 5px;
}

#submit {
  display: block;
  margin-left: 15px;
  margin-top: 20px;
  width: 75px;
  height: 30px;
  border-radius: 5px;
  font-size: 12px;
}

#submit:hover {
  color: white;
  background-color: grey;
}

.label {
  position: relative;
  top: 11px;
  margin-left: 15px;
}

#message {
  height: 50px;
}

#successMessages {
  margin-left: 15px;
  width: 25%;
  padding: 5px;
  border: 1px solid green;
  font-size: 15px;
  color: green;
  background-color: aquamarine;
}

#errorMessages {
  display: none;
  margin-left: 15px;
  width: 25%;
  padding: 5px;
  border: 1px solid red;
  font-size: 15px;
  color: red;
  background-color: mistyrose;
}

#errorMessagesPHP {
  margin-left: 15px;
  width: 25%;
  padding: 5px;
  border: 1px solid red;
  font-size: 15px;
  color: red;
  background-color: mistyrose;
}

    </style>

    </head>

    <body>


<h1 id="title">Get in Touch!</h1>
<div id="errorMessages"></div>
<div><? echo $errorMessages; ?></div>
<div><? echo $successMessages ?></div>

<form id="form" method="post">

<div>
<p><label for="email" class="label">Email Address</label></p>
<input class="box" id="email" placeholder="youremail@domain.com" name="email"></input>
</div>

<div>
<p><label for="subject" class="label">Subject</label></p>
<input class="box" id="subject" name="subject"></input>
</div>

<div>
<p><label for="message" class="label">What would you like to ask us?</label></p>
<textarea class="box" id="message" name="message"></textarea>
</div>

<button type="submit" id="submit">Submit</button>

</form>


<script>

$("#form").submit(function(e) {

var errMsg = "";

var sent = false;

function isEmail(email) {

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);

  }

if (isEmail($("#email").val()) == false && $("#email").val() !== "") {

    errMsg += "Your email address is not valid<br />";

}

if ($("#email").val() == "") {

errMsg += "Email missing<br />";

}

if ($("#subject").val() == "") {

errMsg += "Subject missing<br />";

}

if ($("#message").val() == "") {

errMsg += "Message missing<br />";

}

if (errMsg != "") {

$("#errorMessages").html("<strong>There were error(s) in your form:</strong><p></p>" + errMsg);
$("#errorMessages").show();

return false;

} else {

return true;

}

})


</script>

</body>

</html>
