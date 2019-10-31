<!-- GET Variables / Checking for Prime Number / -->

 <?

 $userNumber = $_GET["number"];

if(is_numeric($userNumber) && $userNumber > 0 && $userNumber == round($userNumber,0)) {

$i = 2;

$isPrime = true;

while ($i < $userNumber) {

  if ($userNumber % $i == 0) {

// Number is not prime!

    $isPrime = false;

  }

  $i++;

}

if ($isPrime == true) {

 echo "<p>".$i." is a prime number!</p>";

} else {

  echo "<p>".$i." is not a prime number!</p>";
}

} else if ($userNumber){

// User has submitted something which is not a positive whole number

echo "<p>Please enter a positive whole number!</p>";

}

?>
