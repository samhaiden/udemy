<!--  Sending Email Through PHP  -->


body {

    font-family: helvetica, sans-serif;
    font-size: 130%;
}

#wrapper {

    margin: 0px auto;
    width: 550px;
}

input {

    padding: 5px 5px 12px 5px;
    font-size: 25px;
    border-radius: 5px;
    border: 1px solid grey;
    width: 320px;


}

label {

    position: relative;
    top: 12px;
    width: 200px;
    float: left;
}

.form-element {

    margin-bottom: 10px;
}

#submitButton {

    width: 250px;
    display: block;
    margin: 0px 0px 0px 200px;

}

#submitButton:hover {

    background-color: grey;
    color: white;
}

#errorMessages {

    display: none;
    font-size: 50%;
    text-align: center;
    color: red;
    border: 1px solid red;
    font-style: italic;
    margin: 20px 0px;
}

#successMessage {

    display: none;
    font-size: 50%;
    text-align: center;
    color: green;
    border: 1px solid green;
    font-style: italic;
    margin: 20px 0px;
    padding: 10px 0px;
}



<div id="wrapper">

        <div id="successMessage">You did it! Your account has been created.</div>

        <div id="errorMessages"></div>

        <div class="form-element">

            <label for="email">Email</label>

            <input type="text" name="email" id="email" placeholder="name@domain.com">

        </div>

        <div class="form-element">

            <label for="phone">Telephone</label>

            <input type="text" name="phone" id="phone" placeholder="xxx-xxx-xxxx">

        </div>

        <div class="form-element">

            <label for="password">Password</label>

            <input type="password" name="password" id="password">

        </div>

        <div class="form-element">

            <label for="passwordConfirm">Confirm Password</label>

            <input type="password" name="password" id="passwordConfirm">

        </div>

        <div class="form-element">

            <input type="submit" value="Sign Up!" id="submitButton">

        </div>

</div>

<script type="text/javascript">

    function isEmail(email) {

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        return regex.test(email);

    }

    $("#submitButton").click(function() {

        var errorMessage = "";
        var fieldsMissing = "";

        if ($("#email").val() == "") {

            fieldsMissing += "<br>Email";
        }

        if ($("#phone").val() == "") {

            fieldsMissing += "<br>Phone";
        }

        if ($("#password").val() == "") {

            fieldsMissing += "<br>password";
        }

        if ($("#passwordConfirm").val() == "") {

            fieldsMissing += "<br>Confirm Password";
        }

        if (fieldsMissing != "") {

            errorMessage += "<p>The following fields(s) are missing: "+fieldsMissing;

        }

        if (isEmail($("#email").val()) == false) {

            errorMessage += "<p>Your email address is not valid</p>";

        }

        if ($.isNumeric($("#phone").val()) == false) {

            errorMessage += "<p>Your phone number is not Numeric</p>"

        }

        if ($("#password").val() != $("#passwordConfirm").val()) {

            errorMessage += "<p>Your passwords don't match</p>"
        }

        if (errorMessage != "") {

            $("#errorMessages").html(errorMessage);

            $("#errorMessages").show();

        } else {

            $("#successMessage").show();

            $("#errorMessages").hide();

        }
    });


$emailTo = "sam.haiden@yahoo.com";

$subject = "I hope this works";

$body = "Hey, there!";

$headers = "From: sam.haiden@yahoo.com";

if (mail($emailTo, $subject, $body, $header)) {

echo "Your email was sent!";

} else {

  echo "Your email could not be sent!";

}
