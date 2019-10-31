<?php

include('sqlfunctions.php');

$connection = f_sqlConnect();

$table = Optin;

echo '<br> Source table: ' . $table;

if (!f_tableExists($connection, $table, DB_NAME)) {
    
    die('<br>Destination table does not exist: ' . $table);
    
}

$sql = "select * from $table";
echo '<br>sql: ' . $sql;

if ($result = mysqli_query($connection, $sql)) {
    
    echo "<table border = ''1' style=''width:100%''>";
    
    //header
        echo "<tr>";
          echo "<td>OptInID</td>";
          echo "<td>formID</td>";
          echo "<td>First Name</td>";
          echo "<td>Last Name</td>";
          echo "<td>Email Addess</td>";
          echo "<td>Date/Time</td>";
          echo "<td>Source IP</td>";
          echo "<td>SuccessUrl</td>";
          echo "<td>RejectUrl</td>";          
        echo "</tr>";
    
    while ($row = mysqli_fetch_array($result)) {
        
        echo "<tr>";
          echo "<td>{$row[0]}</td>";
          echo "<td>{$row[1]}</td>";
          echo "<td>{$row[2]}</td>";
          echo "<td>{$row[3]}</td>";
          echo "<td>{$row[4]}</td>";
          echo "<td>{$row[5]}</td>";
          echo "<td>{$row[6]}</td>";
          echo "<td>{$row[7]}</td>";
          echo "<td>{$row[8]}</td>";          
        echo "</tr>";
      
        } 
    
        echo "</table>";
        
    }

    mysqli_free_result($result);

    if(mysqli_error($connection)) {
        
        echo '<br>Error: ' . mysqli_error($connection);
        
    } else echo '<br>Success';

mysqli_close($connection);


?>