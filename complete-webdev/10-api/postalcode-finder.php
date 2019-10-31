<html>

  <head>
      <title>Postal Code Finder</title>

      <style>

        #postalCode {
          display: none;
          margin-bottom: 20px;
          border-radius: 5px;
          width: 350px;
          height: 50px;
          line-height: 50px;
          text-align: center;
        }

        #postCodeBold {

          font-weight: bold;
        }

      </style>

  </head>

<body>

<h1>Postal Code Finder</h1>

<div id="postalCode"></div>

<form id="addressForm">

  <input type="text" id="addressField" placeholder="Enter partial address"></input>

  <button id="button">Submit</button>

  <button id="findAnother">Find Another!</button>

</form>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script type="text/javascript">

$("#button").click(function(e) {

  e.preventDefault();

$.ajax({
url :"https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent($("#addressField").val()) + "&key=AIzaSyBOAsKCs4_-VvwXrtlnrOrXkWn8lHV9YKc",
type: "GET",
success: function (data) {

if (data["status"] == "OK") {

  $.each(data["results"][0]["address_components"], function (key, value) {

    if (value["types"][0] == "postal_code") {

      $("#postalCode").html("<span id='postCodeBold'>Postal Code Found!</span> Your postal code is " + value['long_name'] + ".");

      $("#postalCode").css({
        "display":"block",
        "border":"1px solid darkgreen",
        "color":"darkgreen"});

      console.log(data);
    }

  })

  } else {

      $("#postalCode").html("<span id='postCodeBold'>That address could not be found!</span> Please try again.");

      $("#postalCode").css({
        "display":"block",
        "border":"1px solid red",
        "color":"red"});

  }

}

})

})

$("#findAnother").click(function() {

location.reload();

})

</script>

</html>
