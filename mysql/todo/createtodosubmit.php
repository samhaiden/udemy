<?php 

include('sqlfunctions.php');

if (!empty($_POST)) {
    
    $tdTitle = $_POST['title'];
    
    $tdDate = $_POST['duedate'];
    
    $tdDescr = $_POST['description'];
    
    $link = connectDB();
    
    $sql ="insert into todo (title, description, duedate, entryts) values ('".$tdTitle."', '".$tdDescr."', '".$tdDate."', NOW());";
    
    if (mysqli_query($link, $sql)) {
        
        /* echo "<br>New record created successfully";*/
    } else {
        
        echo "<br>Error: " . $sql . "<br>" . mysqli_error($link);
        
    }
    
    mysqli_close($link);
    
    header("Location: todo.php");
    
}

?>