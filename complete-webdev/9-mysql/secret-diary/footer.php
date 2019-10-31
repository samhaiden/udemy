<script type="text/javascript">

$(".toggleForm").click(function() {

  $("#signUpForm").toggle();
  $("#logInForm").toggle();

})

var error = "<?php echo $error; ?>";

if (error != "") {

  $("#errorMessage").show();

}

$("#saveButton").click(function() {

$.ajax({
  method: "POST",
  url: "updatedatabase.php",
  data: { content: $("#diary").val() }
});

$("#savedMessage").toggle();

});


</script>
