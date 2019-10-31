<!doctype html>

<html>

<head>

    <title>Reaction Tester</title>

    <style type="text/css">
    
        #shape {
            
            width: 100px;
            height: 100px;
            background-color: red;
            display: none;
            position: relative;
        }
    
    </style>
    
</head>

<body>

    <p>Your time: <span id="timeTaken"></span></p>
    
    <p>Your best time: <span id="bestTime"></span></p>
    
    <p>Your average time: <span id="averageTime"></span></p>
    
    <p>Your turns: <span id="turns"></span></p>
    
    <div id="shape"></div>

<script>

    var start = new Date().getTime();
    
    var bestTime = 0;
    
    var avgTime = [];
    
    var turns = 0;
    
    function getRandomColor() {
        
        var letters = "0123456789ABCDEF".split("");
        
        var color = "#";
        
        for (i = 0; i < 6; i++) {
            
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
        
    }
    
    function makeShapeAppear() {
        
        var top = Math.random() * 500;
        
        var left = Math.random() * 500;
        
        var width = Math.random() * 200 + 50;
        
        if (Math.random() > .5) {
            
            document.getElementById("shape").style.borderRadius = "50%";
            
        } else {
            
            document.getElementById("shape").style.borderRadius ="0";
        }
        
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        
        document.getElementById("shape").style.width = width + "px";
        
        document.getElementById("shape").style.height = width + "px";
        
        document.getElementById("shape").style.top = top + "px";
        
        document.getElementById("shape").style.left = left + "px";
        
        document.getElementById("shape").style.display = "block";
        
        start = new Date().getTime();  
        
    }
    
    function appearAfterDelay() {
        
            setTimeout(makeShapeAppear, Math.random() * 2500);

    }
    
    appearAfterDelay();
    
    document.getElementById("shape").onclick = function() {
        
        document.getElementById("shape").style.display = "none";

        var end = new Date().getTime();
        
        var userTime = (end - start) / 1000;
        
        document.getElementById("timeTaken").innerHTML = userTime + " seconds";
            
            if (bestTime > userTime || bestTime == 0) {
                
                bestTime = userTime;
                
                document.getElementById("bestTime").innerHTML = userTime + "seconds";
                
            } 
        
            avgTime.push(userTime);
        
            var avTotalTime = 0;
                
            var i = 0;
        
            for (i = 0; i < avgTime.length; i++) {
                
                avTotalTime += avgTime[i];
                
                avTime = avTotalTime / avgTime.length;
                
                document.getElementById("averageTime").innerHTML = avTime;
            }
        
            turns++;
    
        document.getElementById("turns").innerHTML = turns;
        
        if (turns <= 10) {
            
            appearAfterDelay();
            
        } else {
            
            alert("Your turn is over! Your best time is " + bestTime + " and your average time is " + avTime + ".");
            
            alert("Want to play again?");
            
            window.location.reload();
        }
        
    }
    
        

    
</script type="text/javascript">

</body>

</html>