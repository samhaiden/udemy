<html>

<head>
    
<title>Create To DO</title>    
    
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
    
    <script type="text/javascript">

        function validateForm() {

            //this is just a placeholder in case we wanted to add additional javascript type validations.

            return true;
        };

    </script>
    
</head>
    
    <body>
    
        <h1>New To Do</h1>
        
        <form action="createtodosubmit.php" method="post" onsubmit="return validateForm()">
        
        <p>To do title: <input type="text" name="title" maxlength='50' required /> </p>
        
        <p>To do date: <input type="date" name="duedate" /> </p>
            
        <p>Description: <br> <textarea cols='100' rows='5' name="description" maxlength='1000'  required></textarea> </p>

        <button type="submit" name="submit">Submit</button>
        
        </form>
    
    </body>

</html>