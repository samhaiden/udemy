<?php
/*Configuration Settings*/

define('DB_HOST', 'localhost'); /*Database Server*/
define('DB_NAME', 'crud'); /*Database Name*/
define('DB_USER', 'samhaiden'); /*Database Username*/
define('DB_PWD',  'Onyva@123'); /*Database Password*/
?>

Then make an SQLFunctions.php file with the following content:
<?php
include('config.php');

/*Opens connection to database with credentials*/
function connectDB() {
    $link = new mysqli(DB_HOST, DB_USER, DB_PWD, DB_NAME);
  if ($link->connect_error) {
    die("Connection failed: " . $link->connect_error);
  } 
  /*echo "<br>Connected successfully"; */
  return $link;
}
?>

