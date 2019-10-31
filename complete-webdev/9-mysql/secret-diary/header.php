<html>

    <head>

    <title>Log-in Form</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style type="text/css">

html {
  font-family: sans-serif;
  margin: 0px;
  padding: 0px;
  background-image: url("bg3.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
}

body {
  margin: 0px;
  padding: 0px;
}

.container {
width: 600px;
text-align: center;
margin: auto;
margin-top: 400px;
}

#homeh1 {
  color: white;
}

#errorMessage {
  display: none;
  padding: 15px;
  background-color: white;
  color: red;
  margin: auto;
  margin-bottom: 30px;
  width: 500px;
  border-radius: 5px;
}

#logInForm {
  display: none;
}

.inputField {
  margin: 10px;
  width: 500px;
  height: 50px;
  font-size: 15px;
  padding-left: 10px;
  border-radius: 5px;
}

.submitBtn {
  -webkit-appearance: none;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 250px;
  height: 40px;
  font-size: 15px;
  border: none;
}

.submitBtn:hover {
  background-color: lightblue;
  color: white;
  border: none;
}

.signedIn {
  color: white;
}

.inputField1 {
  margin-left: 15px;
  margin-right: 5px;
  width: 15px;
  height: 15px;
}

.toggleForm {
  color: white;
  background: transparent;
  border: none;
  font-size: 15px;
}

.toggleForm:hover {
  text-decoration: underline;
  color: lightblue;
}

.text {
  color: white;
}

.bottomText {
  color: white;
}

a {
  font-weight: bold;
  text-decoration: underline;
}


#header {
  height: 60px;
  background-color: white;
  width: 100%;
  margin: 0px;
}

#loggedinh1 {
  margin: 0 0;
  float: left;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;

}

#logOutButton,
#saveButton {
  -webkit-appearance: none;
  width: 125px;
  height: 30px;
  float: right;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 15px;
  margin-right: 25px;
  border-color: lightblue;
}

#savedMessage {
  display: none;
  color: lightblue;
  text-align: right;
  margin-right: 20px;
  width: 125px;
  height: 30px;
  float: right;
  margin-top: 23px;
  font-size: 15px;
}

#logOutButton:hover,
#saveButton:hover {
  color: white;
  background-color: lightblue;
}

#wrapper {
  height: 1100px;
  padding: 25px;
}

#diary {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 20px;
  padding: 15px;
  border: none;
  resize: none;
}

</style>

</head>

</html>
