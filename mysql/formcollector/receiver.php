<?php

include('sqlfunctions.php');

echo '<br>Display full contents of the _POST: <br>';
var_dump($_POST);

$connection = f_sqlConnect();

if ( isset($_POST['formID'])) {
    
    $table = $_POST['formID'];
    
    echo '<br>Destination table: ' . $table;

}

$keys = implode(", ", (array_keys($_POST)));

echo '<br>Parsed key: '. $keys;

$values = implode("', '", (array_values($_POST)));

echo '<br>Parsed values: ' . $values;

$x_fields = "entry_timestamp, source_ip";
$x_values = date("Y-m-d H:i:s") . "', '" . f_getIP();

echo '<br>x_value: ' . $x_values;

if ( !f_tableExists($connection, $table, DB_NAME )) {
    
    die('<br>Destination table does not exist:' .$table);
}

if (isset($$_POST['rejectredirecturl'])) {
    
    $rejectredirecturl = $_POST['rejectredirecturl'];
    
    echo '<br>rejectredirectedurl: ' . $rejectredirecturl;
}

if (isset($_POST['successredirecturl'])) {
    
    $successredirecturl = $_POST['successredirecturl'];
    
    echo '<br>successredirecturl: ' . $successredirecturl;
}


$sql = "insert into $table ($keys, $x_fields) values ('$values', '$x_values')";

echo '<br>sql: ' . $sql;

if (!mysql_query($connection, $sql)) {
    
    echo '<br>Error: '. mysqli_error($connection);
    
    if (!empty ($rejectredirecturl)) {
        
        /* header("Location: $rejectredirecturl?msg=1"); */
        
    } 
    
} else if (!empty ($rejectredirecturl)) {
    
    /* header("Location: $successredirecturl?msg=1"); */
    
}

mysqli_close($connection);
    
?>