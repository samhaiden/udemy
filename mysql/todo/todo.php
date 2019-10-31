<?php

/*Connect to CRUD Database  mysqli(Server,User,Password,Database)*/
$link = new mysqli('localhost', 'samhaiden', 'Onyva@123', 'crud');

if ($link->connect_error) {
  die("Connection failed: " . $link->connect_error);
} else {echo "<br>Connected successfully"; }

?>

<html>
    
    <head>
//adding basic CSS color and border to the table, th, and td tags
<style>
table, th, td { border: 1px solid black;
                border-collapse: collapse; }
table th { background-color: black;
           color: white; }    
table tr:nth-child(even) { background-color: #eee; }
table tr:nth-child(odd)  { background-color: #fff; }
</style>

    </head>
    
    <body>
    
    <?php
        
/*Set Up the SQL statement*/
$sql = "INSERT INTO todo (title, description) VALUES ('Test', 'TestDescription');";

/*Exectute the statement, and write the results*/
if (mysqli_query($link, $sql)) {
    echo "<br>New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($link);
}
  
if (mysqli_error($link)) {
    echo '<br>Error: ' . mysqli_error($link);
    } else echo '<br>Success';

/*Close database connection*/
  mysqli_close ( $link );
        
    ?>
    
    </body>
    
 </html>