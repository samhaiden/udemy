<?php

$weather = "";
$error = "";

if (array_key_exists('cityInput', $_GET)) {

$city = str_replace(' ', '-', $_GET['cityInput']);

$file_headers = @get_headers("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");

if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {

$error = "That city could not be found.";

 } else {

$forecast = file_get_contents("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");

$pageArray = explode('</h2>(1&ndash;3 days)</span><p class="b-forecast__table-description-content"><span class="phrase">',$forecast);

if (sizeof($pageArray) > 1) {

$secondArray = explode('</span></p></td><td colspan="9">', $pageArray[1]);

if (sizeof($secondArray) > 1) {

$weather = $secondArray[0];

} else {

  $error = "That city could not be found.";

}

} else {

  $error = "That city could not be found.";

}

}

}


?>

<!doctype html>

<html>

    <head>

    <title>Weather Scraper</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style type="text/css">

    html {
      background-image: url("bgimage.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 100%;
    }

    body {
      font-family: sans-serif;
    }

    #wrapper {
      text-align: center;
      margin-top: 20%;
    }

    h1 {
      color: white;
      font-size: 60px;
    }

    h3 {
      font-weight: normal;
      color: white;
      font-size: 25px;
    }

    #cityInput {
      border-radius: 5px;
      width: 350px;
      height: 40px;
      font-size: 20px;
      padding-left: 10px;
      margin: 15px 10px 0px 10px;
    }

    #submitButton {
      margin-top: 30px;
      border-radius: 5px;
      width: 150px;
      font-size: 20px;
      height: 40px;
    }

    #submitButton:hover {
      background-color: lightblue;
      color: white;
      border: none;
    }

    #weather {
      display: none;
      margin: auto;
      border-radius: 5px;
      margin-top: 20px;
      color: grey;
      padding: 20px;
      background-color: white;
      width: 600px;
      height: auto;
    }

    #error {
      display: none;
      margin: auto;
      border-radius: 5px;
      margin-top: 20px;
      color: red;
      padding: 20px;
      background-color: white;
      width: 600px;
      height: auto;
    }

    </style>

    </head>

<body>

<div id="wrapper">

<h1>What's the Weather?</h1>

<h3>Enter the name of the city.</h3>

<form method="get">

<input id="cityInput" class="inputField" type="text" placeholder="e.g. Paris" name="cityInput" value="<?php

if (array_key_exists('cityInput', $_GET)) {

echo $_GET['cityInput'];

}

?>">

<br>

<button id="submitButton" class="inputField" type="submit">Submit!</button>

</form>

<div id="weather"><?php

if ($weather) {

  echo $weather;

}

?></div>

</div>

<div id="error"><?php

  if ($error) {

    echo $error;

  } ?></div>

</body>


<script type="text/javascript">

var error = "<?php echo $error; ?>";
var weather = "<?php echo $weather; ?>";

if (weather) {

  $("#weather").show();
  $("#error").hide();

}

if (error) {

  $("#error").show();
  $("#weather").hide();

}

</script>
