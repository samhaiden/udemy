/*insert into submissions (patientId, orderId, ordersId) values ("15282020061932rGz","152820200619","423");

select id from submissions where patientId = '15282020061932rGz';

insert into phi (submissionsId, patientId, ordersId, orderId, indication, birthDate, gender, ethnicity, height_ft, height_in, weight, diagnosis, otherClinicalTrials,otherStudyInterest,otherStudySelection) values (14728,'15282020061932rGz',423,'152820200619','COVID-19','1985-01-01','male','black-or-african-american',5,7,185,'no',0,1,'adhd,bunions,chronic-obstructive-pulmonary-disease-copd,hypoactive-sexual-desire-disorder-hsdd,insomnia,lactose-intolerance,low-back-pain,memory-loss,obsessive-compulsive-disorder,post-traumatic-stress-disorder-ptsd,panic-attacks,unknown');

insert into contact_information (email,orderId,zipCode,lastName, ordersId,firstName,patientId,phoneNumber,submissionsId,preferredContactTime,preferredContactMethod) values ('jamesprigmore93@gmail.com','152820200619',45243,'Prigmore',423,'James','15282020061932rGz',5139043760,14728,'morning','text');

insert into source (submissionsId,patientId,ordersId,orderId,ipAddress,browser,urlReferer,utmCampaign,utmContent,utmMedium,utmSource,utmTerm,operatingSystem) values (14728,'15282020061932rGz',423,'152820200619','24.210.180.97','Chrome','https://cincinnati.craigslist.org/dmg/d/cincinnati-paid-covid-19-research-study/7155633415.html','152820200619','n/a','ad','craigslist','n/a','Linux armv8l');*/


// reaction game

/*
const score = document.querySelector('#score');
const startGame = document.querySelector('#startGame');
const board = document.querySelector('#output11');
const endGame = document.querySelector('#endGame');
let player = {score:0};
let st;
startGame.addEventListener('click',playGame);
endGame.addEventListener('click',endG);


function playGame(){
    startGame.style.display = 'none';
    endGame.style.cssText = 'display:flex; flex-direction: column; justify-content:center';
    let rTime = Math.random()*2000+1000;
    st = setTimeout(makeItem,rTime);
}

function makeItem(){
    let body = document.body.getBoundingClientRect();
    let boundary = board.getBoundingClientRect();
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = Math.random()*boundary.width+"px";
    div.style.top = Math.random()*boundary.top - (body.top - boundary.top)+"px"; 
    div.style.width = Math.random()*50+20+'px';
    div.style.height = Math.random()*50+20+'px';
    div.style.borderRadius = '5px';
    div.style.cursor = 'pointer';
    div.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
    div.style.border = '1px solid black';
    div.startTime = Date.now();
    div.addEventListener('click',logPoint);
    board.appendChild(div);
    st = setTimeout(clearBoard, 2000);
}

function logPoint(){
    clearTimeout(st);
    let endTime = Date.now();
    let diff = (endTime-this.startTime)/1000;
    console.log('it took you '+ diff+ ' seconds');
    board.removeChild(board.firstChild);
    let num = Number(score.innerText);
    num++;
    score.innerHTML = num;
    playGame();
}

function clearBoard(){
    board.removeChild(board.firstChild);
    console.log('you missed');
    playGame();
}

function endG(){
    clearTimeout(st);
    if(board.firstChild){
        board.removeChild(board.firstChild);
    }
    sc = score.innerText;
    score.innerText = 0;
    console.log('you got '+sc+' hits');
    startGame.style.cssText = 'display:flex; flex-direction: column; justify-content:center';
    endGame.style.display = 'none';
    player.score = sc;
}
*/

//calorie counter

/*let output = document.getElementById('output10');

document.forms[3].addEventListener('change',calculate);



function calculate() {
    event.preventDefault();
    let radio = document.querySelectorAll('input[name="gender"]');
    let g;
    for(let x=0;x<radio.length;x++){
        if (radio[x].checked==true){
            g = radio[x].id;
        }
    }
    
    let al = document.getElementById('activityLevel').value;
    let a = document.getElementById('age').value;
    let w = document.getElementById('weight').value;
    let hf = document.getElementById('heightft').value;
    let hi = document.getElementById('heightin').value;
    let ht = Number((hf*12))+Number(hi);
    if(g == 'male') {
        let b = (66+(w*6.2)+(ht*12.7)-(a*6.76))*al;
        console.log(Math.floor(b));
    } else {
        let bf = (655.1+(4.35*w)+(4.7*ht)-(4.7*a))*al;
        console.log(Math.floor(bf));
    }
}*/

//105 ES6 promises and then ajax

/*function getData(url){
    return new Promise(function(response){
        let xhr = new XMLHttpRequest();
        xhr.open('get',url,true);
        xhr.onload = function(){
            if(xhr.status == 200){
                response(xhr.response);
            }
        }
        xhr.send();
})
}


getData('http://discoveryvip.com/shared/json.php?f=quiz').then(function(response) {
    console.log(response);
});*/

//104 ES6 class constructors

/*class makeName {
    constructor(first,last){
        this.firstName = first;
        this.lastName = last;
    }
    complete(){
        console.log(this);
        console.log(this.firstName+' '+this.lastName);
    }
}

let friend = new makeName('sam','haiden');
friend.complete();*/

//103 ES6 arrays - sets, copyWithin, entries

/*function mkArr(){
    console.log(arguments);
    return Array.from(arguments);
}

let d = mkArr('test','test2','test3');

let test = d.entries();

console.log(test);

//console.log(test.next().value);

let test1 = [...test];
console.log(test1);

let e = [1,2,3,4,5,'javascript','test','js6','world','hello'];
let f = e.entries();
let g = [...f];
console.log(g);

let newSet = new Set(e);
console.log(newSet);

let arr2 = Array.from(newSet);
console.log(arr2);

//copyWithin two parameters (where you want to replace, what you want to replace it with)
console.log(arr2.copyWithin(arr2.findIndex(x => x == 'hello'),5));

//fills the entire array with the parameter
console.log(arr2.fill('tester'));*/

//102 ES6 arrays findIndex, find, and Array.from

/*let arr = [2,3,4,33,5,44,2,12,34,5,2];

let a = arr.find(function(x){
    return x > 20;
})
console.log(a)

let b = arr.find(x => x > 20);
console.log(b);

//find index requires a function to find the index of the parameter
let c = arr.findIndex(x => x == 33);
console.log(arr[c]);

function mkArr(){
    console.log(arguments);
    return Array.from(arguments);
}

let d = mkArr('test','test2','test3');
console.log(d);

function mka() {
    let a = Array.from(arguments);
    console.log(a);
    console.log(a.findIndex( x => x == 'asdf3'));
    
}

mka('asdf','asdf2','asdf3');*/


//101 ES6 map and data structure

/*let arr = [1,2,3,4,4,3,5,6,7,3,4,5];

function removeDup(a){
    return [...new Set(a)];
}

console.log(removeDup(arr));

let mapArr = arr.map(function(a){
    return a*2;
})

console.log(mapArr);

let myMap = new Map();

myMap.set('hello','world');
myMap.set('myname','sam');
myMap.set('hello','world');
myMap.set('myname','sam');

console.log(myMap.size);
console.log(myMap.has('myname'));
console.log(myMap.get('hello'));

//myMap.delete('hello');
console.log(myMap);

items = [{name:'iPhone',details:'white',cost:500,},
            {name:'iPad',details:'white',cost:800,},
            {name:'cable',details:'3 ft',cost:10,},
            {name:'camera',details:'25MP',cost:300,},
            {name:'laptop',details:'Intel I7',cost:1200,},
            {name:'LCD monitor',details:'24 inch',cost:200,},
            {name:'tv',details:'50 inch',cost:450,}];

//ES5
let holderCost = items.map(getCost)

function getCost(items){
    return items.cost;
}

//ES6
let hCost = items.map( (items) => items.cost);

console.log(holderCost);
console.log(hCost);*/

//100 ES6 sets and data structure

//below are the common problems with JS

/*let test = Object.create(null);

console.log(test);

test.id = 0;
test[10] = 'hello world';

console.log(test);

if (test.id){
    console.log('it\'s there');
} else {
    console.log('it\'s not there');
}

console.log(test['10']);

let a = null;
let b = null;

test[a] = 'whatever';

console.log(test[b]);

//solutions to these problems with new JS

let test2 = new Set();

test2.add('hello world');
test2.add('hello world 1');
test2.add('hello world 2');
test2.add('hello world'); //only takes unique entries

//test2.delete('hello world');

test2.forEach(function(value,key){
    console.log(key +' '+value); //keys and values are the same thing in sets
})

let arr = [1,2,3,4,4,3,5,6,7,3,4,5];

console.log(arr);

function removeDup(a){
    return [...new Set(a)];
}
console.log(test2);
console.log(removeDup(arr));*/


//99 ES6 generators and iterators

/*'use strict'

function* gen() {
    let counter = 0;
    while (counter < 10) {
        yield counter++;
    }
}

let pg = gen();
for(let i=0;i<10;i++){
    let holder = pg.next();
    if(holder.done){
        break;
    }
    console.log(holder.value);
    //console.log(holder.done);
}


console.log(pg);
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());*/

//98 ES6 deconstruction

/*
let person = {first:'sam',last:'haiden'};
console.log(person);

let {first,last} = person;
console.log(first);
console.log(last);

let arr = ['javascript','js','js6','ecma'];
console.log(arr);

let [a,b,c,d,e='java'] = arr;
console.log(a);

let obj = {time: 'now', date: 'yesterday'};

//let {time, date} = obj;
//console.log(time);

console.log(obj.time);
*/


//97 ES6 functions fat arrows

//word function is replaced with arrow symbol after parameter
/*let mes0 = (value) => {
    let a = 'hello';
    console.log(a + value);
}
mes0(' test 1');

//if only passing one parameter, you can remove rounded brackets. you can also remove function curly braces if only doing one command in function

let mes1 = value => 'Hello '+ value;
console.log(mes1('test 2'));

let mes2 = value => console.log('Hello '+value);

mes2('test 3');

let myFun = value => console.log("Hello, " + value);

myFun('Sam');

let myFun2 = (a='friend') => console.log('hi, '+a);

myFun2();*/

//96 ES6 functions rest parameters

//allows you to capture all parameters after the ones that are definied in function
/*function myFun(a,b,...c){
    console.log(arguments);
    console.log(arguments.length);
    console.log(c);
    
    let name = arguments.callee.name;
    for(let x=0;x<arguments.length;x++){
        console.log(name+ 'says this value '+arguments[x]);
    }
    
}
myFun(1,2,3,4,5,6,7,8,9);*/
    
//95 ES6 functions

/*function outputMessage(message='No value',b=show(message,'blank','new')){
    console.log(message);
}

function show() {
    console.log(arguments);
}

function myFun(a,b,c,d='buff',e){
    console.log(arguments);
    console.log(arguments.length);
    console.log(a+b+c+d);
    console.log(arguments.callee.length);
    
    if(arguments.length==arguments.callee.length){
        console.log('okay');
    } else {
        console.log('missing '+ (arguments.callee.length - arguments.length));
    }
}

outputMessage();
myFun(1,2,3);*/

//94 ES6  string methods, replacing values, backticks

/*let a = ' hello world   ';

console.log(a.trim());
console.log(a.startsWith(' he')); //case sensitive
console.log(a.endsWith(' ')); //case sensitive
console.log(a.includes('hell')); //case sensitive
console.log(a.repeat(3));
console.log(a.trim().repeat(3));*/

//93 ES6  objects and arrays

/*window.onload = asdf;

function asdf() {
const friends = {firstName:'larry',lastName:'stone'};

console.log(friends);
friends.lastName = 'jim';
console.log(friends);
friends.middleName = 'jones';
console.log(friends);

let arr = [];

for (let i=0;i<10;i++){
    arr.push(i);
}

console.log(arr);
}

console.log(arr); //throws error
console.log(friends); //throws error*/

/*let a = 'more lines \
more lines';
// \n\ for a new line; ` is a new line
console.log(a);

let b = `more lines
more lines
more lines`;
console.log(b);*/

//Templates and replacing string values

//let name = 'laurence';

/*function updateMessage(n) {
    let message = `${n} was here today
but he left. he said,"I like you. But I don't care."`; //can be used to create templates;

    return message;
}

console.log(updateMessage('sam'));

   for (let b=0;b<5;b++){
       let message = `${b} is the new number`;
        console.log(message);
    }*/


//92 ES6 block variables

/*
'use strict';

var a = 'hello world';
const b = 'constant';
let c = 'hello world';

//a = 'new'; var can be reassigned
//b = 'new'; const cannot be reassigned
//c = 'new'; let can be reassigned

for(let i=0;i<5;i++){
    console.log(i);
} 
//i is destroyed after curly braces - it only exists within the function. declaring a var in for loop would let you access variable after loop runs

if(a) {
    let d = 'works';
    console.log(d);
} else {
    let d = 'not working';
    console.log(d);
}
console.log(d);
*/

//91 AJAX + JSON Quiz

/*"use strict";
window.onload = init;
var data = {};
var page = 0;
var score = 0;
var output = document.getElementById('output9');
var userAnswer = [];
var ques = 0;

function init() {
    var nurl = 'http://discoveryvip.com/shared/json.php?f=quiz';
    xhrFun(nurl, process);
}

function xhrFun(nurl,cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('get',nurl,true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        if(xhr.status==200){
            cb(xhr.response);
        }
    }
    xhr.send();  
}

function process(response) {
    data = response;
    build();
}

function build() {
    var html = '';
    var p = data[page];
    html += '<div>'+p.question+'?</div><br>';
    for (var x=0;x<p.answers.length;x++){
        var answer = x == p.correct ? true: false;
        html += '<input data-id="'+answer+'" type="radio" name="quiz" value="'+p.answers[x]+'" /><label>'+p.answers[x]+'</label><br>';
    }
    html += '<br><input onclick="checkAnswer()" type="button" value="submit" id="submitAnswer"/><br><input type="button" onclick="moveq()" value="prev" /><input type="button" onclick="moveq()" value="next" />';
    html += '</div>'
    output.innerHTML = html;
}

function moveq() {
    var direction = event.target.value;
    if (direction == 'prev') {
        if (page > 0) {
            page--; 
            build();
        } else {
            console.log('this is the first question');
        }
    } else if (direction == 'next') {
        if (page < data.length-1) {
            page++;   
            build();
        } else {
            console.log('this is the last question');
        }    
    }
}

function checkAnswer() {
    var guess = false;
    var q = document.querySelectorAll('input[name="quiz"]');
    for (var x=0;x<q.length;x++) {
        if(q[x].checked==true) {
            userAnswer[data.length-1] = q[x].value;
            if (q[x].dataset.id == 'true') {
                guess = true;
                score++;  
            } 
            ques++
            break;
    }
    }
    data.splice(page,1);
    if (ques >= 3) {
        console.log(userAnswer);
        //userAnswer.reverse();
        console.log(userAnswer);
        output.innerHTML = 'Done with quiz. You got '+score+' questions right.';
    } else {
    page = 0;
    build();
    }
}*/

//90 AJAX + YouTube

/*var url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyCYpUW80IXf94VsBrIFIwzfgEtZLcZ9EQs&q=';

document.getElementById('searchyt').addEventListener('click', myFun);

function myFun() {
    html = '';
    var t = document.getElementById('sytt').value;
    var output = document.getElementById('output8');
    getJSON(url,t,function(data){
        for(var x=0;x<data.items.length;x++) {
            html += '<embed src="https://www.youtube.com/embed/'+data.items[x].id.videoId+'" width="300" height="200"><p>'+(x+1)+') '+ data.items[x].snippet.title+'</p><p>'+ data.items[x].snippet.description+'</p>';
        }
        output.innerHTML = html;
        console.log(data);
    })
}

function getJSON(u,t,b) {
    var xhr = new XMLHttpRequest();
    xhr.open('get',url+t,'&maxResults=5',true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.status==200) {
            b(xhr.response);
        }
    }
     xhr.send();
}*/

//89 JSON + AJAX + API + POST

/*
var url = 'http://discoveryvip.com/posttest.php';

document.getElementById('sendData').addEventListener('click', myFun);


function myFun() {
    var idt = document.getElementById('idText').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            document.getElementById('output7').innerHTML = this.responseText;
        }
    }
    xhr.open('post',url,true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    xhr.send('name='+idt+'&age=50');
}
*/

//88 JSON + AJAX + API

/*window.onload = init;
var url = 'https://restcountries.eu/rest/v2/all';
var pick = '';
var ps = '';
var rC = document.getElementById('rCountry');
var uC = document.getElementById('uCountry');
var dC = document.getElementById('dCountry');
var img = document.getElementById('cFlag');
var sflag = '';
var hint = false;

function init() {
    var btn = document.getElementById('myBtn1').addEventListener('click',load);
    var mG = document.getElementById('myGuess1').addEventListener('click',checkAnswer);
    var h = document.getElementById('hint').addEventListener('click',gh);
    var sa = document.getElementById('showAnswer').addEventListener('click',show);
}

function show() {
    alert(pick);
    location.reload();
}

function load() {
    rC.value = '';
    uC.value = '';
    dC.value = '';
    img.src = '';
    hint = false;
    var xhr = new XMLHttpRequest();
    xhr.onload = routput;
    xhr.open('get',url,true);
    xhr.send();
}

function routput() {
    var d = '';
    var t = JSON.parse(this.responseText);
    var i = Math.round(Math.random()*t.length);
    var r = t[i].name;
    pick = r;
    var s = scramble(r);
    rC.value = s.toLowerCase();
    ps = s;
    for (var x=0;x<s.length;x++) {
        d += '-';
    }
    uC.value = d;
    dC.value = d;
    sflag = t[i].flag;
}

function scramble(r) {
    var nW = '';
    r = r.split('');
    while (r.length > 0) {
        nW += r.splice(Math.floor(Math.random()*r.length),1);
    }
    return nW;
}

function checkAnswer() {
    var ug = uC.value.toLowerCase();
    var num = 0;
    var uGuess = '';
    pick = pick.toLowerCase();
    if (ug.length < pick.length || ug.length > pick.length) {
        console.log ('your answer isn\'t the right length..');
    } else {
    for(var x=0;x<ug.length;x++) {
        if (pick[x] == ug[x]) {
            uGuess += ug[x];
            dC.value = uGuess;
            num++;
        } else {
            uGuess += '-';
            dC.value = uGuess;
        }
    } 
            if (dC.value == pick) {
            img.src = sflag;
            img.style.cssText = 'width:300px;';
        }
    
    }
    
}

function gh() {
    if (uC.value == pick) { 
        console.log('you don\'t need a hint!');
    } else if (hint == true) {
        console.log('sorry - you already got a hint');
    } else {
        rC.value = ps;
    img.src = sflag;
    img.style.cssText = 'width:300px;'; 
    hint = true;
    }
    
}*/

//88 JSON + AJAX

/*var party = [];
var output = document.getElementById('output6');
var el;
var btn = document.querySelector('input[value="add"]');
btn.addEventListener('click',function(e){
    var g = document.getElementById('guestName');
    var ag = document.getElementById('addGuests');
     message('X ',g.value+' +'+ag.value,party.length)
 party.push({name:g.value,guests:Number(ag.value),status:false});
    localStorage.setItem('party', JSON.stringify(party));
    g.value = '';
    ag.value = 0;
})

window.onload = init;

output.addEventListener('click', function(e) {
    el = e.target;
    el.classList.toggle('active1');
    el.children[0].innerHTML = el.children[0].innerHTML == '√' ? 'X':'√';
    console.log(el.dataset);
    var i = el.dataset.id;
     if(party[i].status == true) {
      party[i].status = false;
     } else {
        party[i].status = true; 
     }
    
})

function init() {
    loadJSON(function(response) {
        party = JSON.parse(response);
        build();
    }, 'http://discoveryvip.com/shared/json.php?f=party')  
}

function build() {
        for(var x=0; x<party.length;x++) {
    var s = (party[x].status) ? '√':'X';
    var c = (party[x].status) ? 'active1':'';
    message(s,party[x].name+' +'+party[x].guests,x, c);
        }
    }
        
function message(m, person, id, c) {
    output.innerHTML += '<div class="toggle '+c+'" data-id="'+id+'" data-person="'+person+'"><span>'+m+'</span> '+person+'</div>';
}

function loadJSON(cb, url) {
    var xHR = new XMLHttpRequest;
    xHR.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            cb(this.responseText);
        } else {
            return false;
        }
    }
    xHR.open('GET',url,true);
    xHR.send();
}*/


//87 JSON

/*var party = [];
var output = document.getElementById('output6');
var el;
var btn = document.querySelector('input[value="add"]');
btn.addEventListener('click',function(e){
    var g = document.getElementById('guestName');
    var ag = document.getElementById('addGuests');
     message('X ',g.value+' +'+ag.value,party.length)
 party.push({name:g.value,guest:Number(ag.value),status:false});
    localStorage.setItem('party', JSON.stringify(party));
    g.value = '';
    ag.value = 0;
})

window.onload = init;

output.addEventListener('click', function(e) {
    el = e.target;
    el.classList.toggle('active1');
    el.children[0].innerHTML = el.children[0].innerHTML == '√' ? 'X':'√';
    console.log(el.dataset);
    var i = el.dataset.id;
     if(party[i].status == true) {
      party[i].status = false;
         localStorage.setItem('party', JSON.stringify(party));
     } else {
        party[i].status = true; 
         localStorage.setItem('party', JSON.stringify(party));
     }
    
})

function build() {
    if (localStorage.getItem('party')) {
        party = JSON.parse(localStorage.getItem('party'));
        for(var x=0; x<party.length;x++) {
    var s = (party[x].status) ? '√':'X';
    var c = (party[x].status) ? 'active1':'';
    message(s,party[x].name+' +'+party[x].guest,x, c);
        }
    console.log(party); 
    } else {
        party = JSON.parse(data);
        localStorage.setItem('party', JSON.stringify(party));
        for(var x=0; x<party.length;x++) {
    var s = (party[x].status) ? '√':'X';
    var c = (party[x].status) ? 'active1':'';
    message(s,party[x].name+' +'+party[x].guest,x, c);
        }
    }
}
        
function message(m, person, id, c) {
    output.innerHTML += '<div class="toggle '+c+'" data-id="'+id+'" data-person="'+person+'"><span>'+m+'</span> '+person+'</div>';
}
*/

//86 Canvas drawing

/*var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
        var output = document.getElementById('output5');
        canvas.width = 700;
        canvas.height = 700;
        window.onload = init;
        var pos = {x: 0,y: 0};
        var bgColor = "black";
        var bgC = document.getElementById('bgcolor');
        bgC.addEventListener('change', function () {
            bgColor = event.target.value;
        })

var save = document.getElementById('save').addEventListener('click',function() {
    var dataURL = canvas.toDataURL();
    console.log(dataURL);
    document.getElementById('myImg').src = dataURL; 
})

var clear = document.getElementById('clear').addEventListener('click',function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
})

        function init() {
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mousemove', sPos);
            canvas.addEventListener('mouseenter', sPos);
        }

        function draw(e) {
            if (e.buttons !== 1) return;
            output.innerHTML = "X = " + pos.x + " Y = " + pos.y;
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            sPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.strokeStyle = bgColor;
            ctx.lineWidth = 10;
            ctx.lineCap = 'round';
            ctx.stroke();
        }

function sPos(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
}*/

//85 Canvas

/*window.onload = init; 
var can = document.getElementById('canvas1');
var can2 = document.getElementById('canvas2');
var can3 = document.getElementById('canvas3');
var i = document.getElementById('imgLoader');
i.addEventListener('change',loadImg);
can2.width = 500;
can2.height = 500;
var ctx3 = can3.getContext('2d');
can3.width = 500;
can3.height = 500;
var ctx2 = can2.getContext('2d');
var pos = {x:0,y:50};
var pos1 = {x:50,y:0};
can.addEventListener('click', urldata);
//square
var ctx = can.getContext('2d');
can.width = 900;
can.height = 700;
var y = 150;
var x = 400;
ctx.fillStyle ='#'+
    (Math.random()*0xFFFFFF<<0).toString(16);
ctx.fillRect(100,100,100,100);
ctx.lineWidth = 5;
//empty square
ctx.strokeStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
ctx.strokeRect(10,10,200,200);
//line
ctx.moveTo(10,270);
ctx.lineTo(110,370);
ctx.stroke();
//circle
ctx.beginPath();
ctx.arc(60,430,50,0,2*Math.PI);
ctx.stroke();

//line
ctx.moveTo(200,350);
ctx.lineTo(400,350);
ctx.stroke();
ctx.moveTo(300,250);
ctx.lineTo(300,450);
ctx.stroke();
//circle
ctx.beginPath();
ctx.arc(300,350,100,0,2*Math.PI);
ctx.stroke();
//text
ctx.font = '30px arial';
ctx.fillText('hello world',400,100);
//image
ctx.drawImage(can,400,5);

var cw = document.getElementById('canvasWords');
var btn = document.getElementById('canvasButton').addEventListener('click',draw);
var c = document.getElementsByTagName('canvas');
    /*for(x=0;x<c.length;x++) {      
        c[x].addEventListener('mouseover',updateImg);
    }*/
    
/*function updateImg() {
    var myimg = document.getElementById('myImg');
    myimg.src = event.target.toDataURL();
}

function draw() {
    var t = cw.value;
    ctx.font = '30px arial';
    ctx.fillText(t,x,y);
    y = y+30;
}

function urldata() {
    console.log(event.target.toDataURL());
    }

function init() {
    
draw2();

} 

function draw2() {
    pos.x = pos.x + 1;
    pos1.y = pos1.y + 1;
    if(pos.x > can2.width) {
        pos.x =0;
    }
    if(pos1.y > can2.height) {
        pos1.y =0;
    }
    ctx2.clearRect(0,0,can2.width,can2.height);
    
    ctx2.beginPath();
    ctx2.fillStyle = 'red';
    ctx2.arc(pos.x,pos.y,50,0,Math.PI*2);
    ctx2.fill();
    ctx2.closePath();
    
    ctx2.beginPath();
    ctx2.fillStyle = 'blue';
    ctx2.arc(pos1.x,pos1.y,50,0,Math.PI*2);
    ctx2.fill();
    ctx2.closePath();
    
    window.setTimeout(draw2,10);
}

function loadImg() {
    var f = new FileReader();
    f.readAsDataURL(event.target.files[0]);
    f.onload = function(e) {
        var img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            can3.width = img.width;
            can3.height = img.height;
            ctx3.drawImage(img,0,0);
            ctx3.font = '30px Arial';
            ctx3.fillText('JavaScript course', 100,300);
        }
        console.log(f);
    }
}*/
//84 Shopping cart

/*var items = [{name:'iPhone',details:'white',cost:500,},
            {name:'iPad',details:'white',cost:800,},
            {name:'cable',details:'3 ft',cost:10,},
            {name:'camera',details:'25MP',cost:300,},
            {name:'laptop',details:'Intel I7',cost:1200,},
            {name:'LCD monitor',details:'24 inch',cost:200,},
            {name:'tv',details:'50 inch',cost:450,}];
var html = '';
var cart = [];

window.onload = init;

function init() {
    build();
    var q = document.getElementsByClassName('productItem');
    for(var x=0;x<q.length;x++){
        q[x].addEventListener('click',function(e) {
           e.preventDefault();
            addtocart();
        });
    }
    outputCart()
}

function addtocart() {
    var iteminfo = event.target.dataset;
    var itemincart = false;
    iteminfo.qty = 1;
    cart.forEach(function(i) {
        if (i.id == iteminfo.id) {
            i.qty = Number(i.qty)+Number(iteminfo.qty);
            itemincart =true;
        }
    });
        if(!itemincart) {
        cart.push(iteminfo);
    }
    
 localStorage.setItem('shopcart',JSON.stringify(cart));
         outputCart(); 
}

function build() {
var x = 0;
items.forEach(function(i) {
    html += '<div class="wrapper"><div class="item"><h3>'+i.name+'</h3><img src="http://placehold.it/350x150" class="img-fluid"></div>'+i.details+'<a href="#" class="productItem" data-name="'+i.name+'" data-details ="'+i.details+'" data-price ="'+i.cost+'" data-id ="'+x+'"> Add to Cart</a></div>';
    x++;
    //console.log(i);
});
var output = document.getElementById('shoppingCartPage');
output.innerHTML = html;
}

function outputCart() {
    if(localStorage.getItem('shopcart') != null) {
    var output = document.getElementById('shoppingCart');
    var html = '<table><tr><th>Item</th><th>Details</th><th>Price</th><th>Quantity</th></tr>';
    var subtotal = 0;
    cart = JSON.parse(localStorage.getItem('shopcart'));
    }
    cart.forEach(function(i) {
       html += '<tr id="cartItem"><td>'+i.name+'</td><td>'+i.details+'</td><td>'+i.price+'</td><td><input class="qChange" type="number" data-id="'+i.id+'" onchange="updateQty('+i.id+')" value="'+i.qty+'"/><button id="remove" onclick="removeItem('+i.id+')">Remove</button></td></tr>';
    subtotal += i.qty * i.price;
    output.innerHTML = html;
    });
    tprice(subtotal,html,output);
    }

function tprice(st,html,output) {
 html += '<tr><td>Total Price</td><td></td><td></td><td>$'+st+'.00</td></tr></table>'; 
    output.innerHTML = html;
}

function updateQty(m) {
    var q = document.getElementsByClassName('qChange');
    for (var e=0;e<q.length;e++) {
        if (m == cart[e].id) {
            if (q[e].value >=1) {
            cart[e].qty = q[e].value;
            } else {
                removeItem(m);
            }
        }
    }
    localStorage.setItem('shopcart', JSON.stringify(cart));
    outputCart();
}

function removeItem(i) {
    for (var x=0;x<cart.length;x++) {
        if (cart[x].id == i) {
            var rem = cart.splice(x,1);
        }
    }
    localStorage.setItem('shopcart', JSON.stringify(cart));
    outputCart();
 console.dir(event.target.parentElement.previousSibling.previousSibling.previousSibling.innerText+" has been removed from your cart");
}*/


//83 JSON stringify and parse

/*var obj = {'message':'hello world','count':1,'secret':'javascript'};
var str = JSON.stringify(obj);

if(localStorage.getItem('mes')) {
    var obj3 = localStorage.getItem('mes');
    var js = JSON.parse(obj3);
    var arr = Object.entries(js);
    console.log(arr);
    console.log(js);
    for (var x=0;x<arr.length;x++){
        //console.log(arr[0][x]);
        for (var i=0; i<arr[x].length;i++) {
            if (i % 2 == 1) {
            console.log(arr[x][i]);
            }
        }
    }
} 

var cnt = Number(js.count) + 1;
obj = {'message':'updated','count':cnt,'secret':'javascript 2'};
str = JSON.stringify(obj);
localStorage.setItem('mes',str);*/

/*console.log(obj);
console.log(str);
console.log(obj2);*/

//82 LocalStorage Counter

//localStorage.clear();

/*if(localStorage.getItem('num')) {
    var i = Number(localStorage.getItem('num'))+1;
    console.log(i);
    localStorage.setItem('num',i);
} else {
    localStorage.setItem('num',0);
}*/

//81 Geolocation get position
//var apiKey = 'AIzaSyDjZTiITmQHcRBZ4HLtnwcIemN8pRkt4QY';

//window.onload = init;

/*function initMap() {
    navigator.geolocation.getCurrentPosition(placeMap);
}

function placeMap(data){
    var m = document.getElementById('map');
    var options = {
        center:{
            lat:-34.397,
            lng:150.644
        }
        ,zoom:5
    };
    var map = new google.maps.Map(m,options);
    console.dir(data);
    console.log(data.coords.latitude);
}*/


//80 Local File Reader

/*document.getElementById('fileInput').onchange = upFiles;
var message = document.getElementById('fileMessage');

function upFiles() {
    var t = this.files;
    for(var x = 0;x<t.length;x++){
        var fReader = new FileReader();
        var fileName = t[x].name;
        fReader.onload = function(e) {
            message.innerHTML += '<br>' + fileName;
            message.innerHTML += '<br>' + e.target.result;
        }
        fReader.readAsText(t[x]);
    }
}

if(window.FileReader){
    message.innerHTML = "file reader is available";
    } else {
    message.innerHTML = "file reader is not available";     
    }*/

//79 GamePlay Matching Game

/*var btn = document.querySelector('.gamePlayStart');
btn.addEventListener('click',startGame);
var message = document.querySelector('#gamePlayMessage');
var gameBoard = document.querySelector('#gamePlayBoard');
var playLockout = false;
var gamePlay = false;
var tiles = [], tileArray = [], tfo = [];
var cardFlipped = -1;
var timer;

function startGame() {
   if (!gamePlay) {
       gamePlay = true;
       btn.style.display = 'none';
       buildArray();
       tileArray = tiles.concat(tiles);
       var a = shuffle(tileArray);
       console.log(a);
       buildBoard();
   }
}

function buildArray() {
    for(var x = 1;x<7;x++){
        tiles.push(x+'.jpg');
    }
}

function shuffle(a) {
    for (var x=a.length-1; x>0;x--){
        var current = a[x];
        var random = Math.floor(Math.random()*(a.length));
        a[x] = a[random];
        a[random] = current;
    }
    return a;
}

function buildBoard() {
    var html = '';
    var x = 0;
    tileArray.forEach(function (el) {
        x++;
        html += '<div class="gameTile">';
        html+='<img id="card' + x + '" src="http://via.placeholder.com/250/000000/ffffff?text=click" onclick="pickCard(' + (x-1) + ',this)" class="flipImage"></div>';
    })
    gameBoard.innerHTML = html;
}

function pickCard(i,t) {
    if(!playLockout && !isInArray(t.id,tfo)){
    if(cardFlipped >= 0) {
    cardFlip(i,t);
        playLockout = true;
        if (checkSrc(tfo[tfo.length - 1]) == checkSrc(tfo[tfo.length - 2])) {
           message.innerHTML = 'Match found';
            cardFlipped = -1;
            playLockout = false;
            if(tfo.length == tileArray.length){
       gameOver();
       }
           } else {
           message.innerHTML = 'No match';
           timer = setInterval(hideCards, 1000);
           }
    } else {
        cardFlipped = i;
        cardFlip(i,t);
    }
    } else {
        message.innerHTML = 'Locked out';
    }
}

function hideCards() {
    for(var x =0; x<2;x++) {
        var vid = tfo.pop();
        document.getElementById(vid).src = "http://via.placeholder.com/250/000000/ffffff?text=click";
    }
    clearInterval(timer);
    cardFlipped = -1;
    message.innerHTML = 'Select again';
    playLockout = false;
    
}

function checkSrc(a) {
    return document.getElementById(a).src;
}

function cardFlip(i,t) {
    t.src = 'http://via.placeholder.com/250/ffffff/000000?text='+tileArray[i];
    tfo.push(t.id);
}

function isInArray(v, array) {
    return array.indexOf(v) > -1;
}

function gameOver() {
    message.innerHTML = 'You won! Game over.'
    btn.style.display = 'block';
    gamePlay = false;
    tfo = [];
    tileImages = [];
    tileArray = [];
    tiles = [];
    gameboard.innerHTML = '';
    
}*/
//78 Common errors

/*var a = 'hello';
var b = 5;
var c = '5';
if(a == 'hello') {
    console.log('works');
}
//using single equal sign and redeclaring the variable rather than using the comparison operator

if(b===c){
    console.log('equal');
}
//using two equal signs to compare values rather than the three to compare the type as well*/

//77 Strict mode

/*'use strict';

myFun();

//var a;

console.log(a);

function myFun() {
    a = 'hello world';
    
}*/

//76 Hoisting

/*console.log(a);

(function() {  
    console.log(a);
    var b = 'hello world';
})();

var a = 'hello world';*/

//will return undefined instead of throwing error. JS is aware that the variable is used later. Always declare variables at the top.

//75 Function recursion

/*function cUp() {
    var test = document.getElementById('divTest');
    cEl(test);
   
}

function cEl(data) {
    for (var x=0;x<data.children.length;x++) {
        var c = data.children[x];
        cEl(c);
        box(c);
    }
}

function box(data){
    var color = '#'+Math.random().toString(16).substr(-6);
    data.style.margin = '10px';
    data.style.backgroundColor = color;
        data.classList.add('box');
}

cUp();*/

//Allows you to loop through child nodes by calling a function to run through itself until all children are found

//74 Arrays with arguments
/*
var arr = ['sam','jim','jeff','brian','ryan'];

function showNames() {
    console.log(arguments);
    //arguments is a reserved word; automatically displays array of items in their indecies;
}

showNames(arr,'javascript');
    //comma separating items above creates multiple arrays when the arguments keyword is used;
*/

//74 IIFE
/*(function() {
    //IIFE
    var n = 'hello world';
    console.log(n);
    text(n);
})();

function text(m){
    var name = m;
    console.log(m);
}

document.getElementById('findEmails').onclick = text;
*/

//73 Cookies

/*document.cookie = "login=true";

console.dir(document); // see that cookie is set to true;

function createCookie(name,value,days) {
    var e = '';
    if (days) {
        var d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        e = ';expires='+d.toUTCString();
    }
    document.cookie = name+'='+value+e+';path=/';
}

function readCookie(name) {
    var p = name + '=';
    var c = document.cookie.split(';');
    for (var x = 0; x<c.length; x++) {
        var t = c[x].charAt(0) == "" ? c[x].substring(1) : c[x];
        //var t = c[x].trim();
        //var t = c[x].replace(\^\s+|\s+$/gm,");
    }
        if(t.indexOf(p) == 0) {
            return t.substring(p.length,t.length)
        }    
    }
    return "";
}

function deleteCookie() {
    createCookie(name,'',-1);
}

var myCookie = readCookie('test');*/

//72 Email scraper

/*var t = document.getElementById('emails').innerText;
var b = document.getElementById('findEmails');
b.addEventListener('click',getEmails);

function getEmails() {
    var r = /[\w._-]+@[\w._-]+\.\w+/gi
    var em = t.match(r);
    var list = [];
    //var html = "";
    for (var x = 0; x<em.length; x++) {
        list.push(em[x]);
}
    console.log(list);
    document.getElementById('emailList').innerText = list.join('; ');
    ----for (var i = 0; i<list.length; i++) {
        html += list[i]+ '<br>';
        document.getElementById('emailList').innerHTML = html;
        }
        ----

}*/

//71 Find and Replace Regex

/*var btn = document.querySelector('#replaceBtn');
btn.addEventListener('click',findFun);

function findFun() {
    var str = document.querySelector('#regtext').innerText;
    var f = document.querySelector('#find').value;
    var r = document.querySelector('#replace').value;
    var reg = new RegExp(f,'gi');
    var ft = str.match(reg);
    if (ft) {
        replaceFun(str,ft, r);
    }
}

function replaceFun(str,ft, r) {
    var newText;
    for (var x = 0; x<ft.length; x++) {
        newText = str.replace(ft[x],r);
        str = newText;
    }
    
    document.querySelector('#regtext').innerText = newText;
    
    var ann = ft.length > 1 ? ' items have been replaced.' : ' item has been replaced.';
    
    console.log(ft.length+ann);
    
}*/

//71 Regex

/*var rc = document.getElementById('regexCheck');
rc.onclick = myfun;

function myfun() {
    var txt = document.getElementById('texting').value;
    var num = document.getElementById('num2').value;
    var em = document.getElementById('email2').value;
    var er = /[\w.-]+@[\w.-]+\.\w+/gi;
    var tr = /^[a-z]+$/gi;
    var nr = /^[0-9]+$/gi;
    var r1 = txt.match(tr);
    var r2 = num.match(nr);
    var r3 = em.match(er);
    logIt(r1);
    logIt(r2);
    logIt(r3);
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

function logIt(e) {
        var t = e == null ? false : true;
        console.log(t);
    }*/

//Exercise 70 Built in Javascript Methods

//Whack a Computer Game

/*var startBtn = document.getElementById('startWhack');
startBtn.addEventListener('click', start);
var offices = 9;
window.onload = build;
var comps;
var timer;
var sCom;
var totalscore = document.querySelector('.score');
var cOff = true;
var timeleft = 9;
var num;

function build() {
    var html = '<h1>Hit the Computer</h1>'
    for(var x=0;x<offices;x++) {
        html += '<div class="office"><div class="desk"></div><div class="computer"></div></div>';
    }
    var board = document.querySelector('.gameboard');
    board.innerHTML = html;
    comps = document.querySelectorAll('.computer')
    for (var c=0;c<comps.length;c++){
        comps[c].addEventListener('click',hitComputer,false);
    }
}

function hitComputer() {
        event.target.classList.remove('popup');
        if (cOff) {
            cOff = false;
        }
        score();
}

function popup() {
    cOff = true;
    sCom = comps[Math.floor(Math.random() * comps.length)];
    sCom.classList.add('popup');
    var speed = Math.floor(Math.random() * 800) + 300;
    timer = setTimeout(hideComputer, speed);  
}

function hideComputer() {
    sCom.classList.remove('popup');
    popup(); 
}

function start() {
    popup();
    countdown();
}

function score() {
    num = Number(document.querySelector('.score').innerText);
    num++;
    totalscore.innerHTML = num;
}

function countdown() {
var mytimer = setInterval(function() {
  if(timeleft < 0){
    clearInterval(mytimer);
      alert('Finished! You got '+num+'. Press start to play again.');
      location.reload();
  } else {
    var ct = document.querySelector('.countDownTime');
    ct.innerText = timeleft;
  }
  timeleft -= 1}, 1000);
}*/

//Throw, Try, Catch

/*function testMe() {
    var x = 500;
    try {
        if(x>100) {throw 'Yes its greater than 100';}
        if(x<100) {throw 'No its less than 100'};
        consoel(x);
    }
    catch(e) {
        document.getElementById('output').innerHTML = e.message;
        console.log(e);
    }
}*/

//Color Matching Game

/*var start = document.getElementById('colorStart');

start.addEventListener('click', startGame);

var colorArr = [];
var guessArr = [];
var timer;
var output = document.getElementById('output');
var loop = 0;
var guessOutput = document.getElementById('guessHolder');

var colorSelection = document.getElementsByClassName('colorOpt');

for (var i = 0; i<colorSelection.length;i++) {
    colorSelection[i].addEventListener('click', pushColor)
}

function pushColor() {
    var guess = (event.target.parentElement.attributes[2].value);
    
    if (colorArr.length == 0) {
        console.log('Push start!')
    } else {
    if (guessArr.length < colorArr.length) {
        guessArr.push(guess);
        var newBlock = this;
        guessOutput.innerHTML += newBlock.outerHTML+" ";
        }
    if (guessArr.length == colorArr.length) {
		if (guessArr.toString() == colorArr.toString()) {
            console.log ("you're right!"); 
	} else {
        console.log("you're wrong. the correct pattern is: " + colorArr);
        } 
    }
}
}

function startGame() {
    guessOutput.innerHTML = "";
    colorArr = [];
    guessArr = [];
    clearTimeout(timer);
    var colors = ['red','green','blue','yellow'];
    for (var x=0; x<4;x++) {
        var r = colors[Math.floor(Math.random()*colors.length)];
        colorArr.push(r);
        console.log(colorArr);
    }
    loop = 0;
    timer = setTimeout(goWhite,200);
}

function goWhite() {
    output.style.backgroundColor = 'white';
    timer = setTimeout(goColor,200);
}

function goColor() {
    output.style.backgroundColor = colorArr[loop];
    loop++;
    if (loop >= colorArr.length) {
        clearTimeout(timer);
    }
    timer = setTimeout(goWhite,1000);
}*/

//Countdown Timer

/*var date = document.getElementById('dateInput');
date.addEventListener('change', start);
var cdate,edate,s,m,h,d,t;
var output = document.getElementById('output');

function start() {
    edate = date.valueAsDate;
    console.log(edate);
    t = window.setTimeout(update,1000);
    s = (edate-cdate)/1000;
}

function update() {
    t = window.setTimeout(update,1000);
    outputUpdate();
}

function outputUpdate() {
    cdate = new Date();
    var dur = edate-cdate;
    console.log(dur);
    s = Math.floor((dur % (1000 * 60))/1000);
    s = s < 10 ? "0"+s : s;
    m = Math.floor((dur % (1000 * 60 * 60))/(1000 * 60));
    m = m < 10 ? "0"+m : m;
    h = Math.floor((dur % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    h = h < 10 ? "0"+h : h;
    d = Math.floor(dur / (1000 * 60 * 60 * 24));
    d = d < 10 ? "0"+d : d;
    output.innerHTML = d+":"+h+":"+m+":"+s;
}*/

//Date Object

//var d = new Date();

//var d = new Date('2010-02-14 PST 14:00:02');

//var d = new Date('Oct 14, 1986');

//d.setDate(d.getDate() + 100);

//d.setFullYear(2010);

//d.setMonth(11);

//var t = d.getTime();

//output.innerHTML += '<br>'+d+'<br>'+t;


//Math Object

/*
var m = Math.PI;

Math.floor(m);

Math.round(m);

Math.ceil(m);

Math.abs(-5.44);

Math.sqrt(100);

Math.pow(10,2);
*/

//Word guessing game

/*var arr = ['javascript','python','php','jquery','course','world','time','bingo','bumper','charlie'];

window.onload = scramble;

var btn = document.getElementById('guessBtn');
    
btn.addEventListener('click', rGuess);

var word;

function scramble() {
    
    var output = document.getElementById('titleReplace');
    
    rw = arr[Math.floor((Math.random() * arr.length))];
    
    word = rw;

    var rwLength = rw.length;
    
    var s = '';
    
    for (var x = 0; x<rwLength;x++) {
        
        var i = Math.floor((Math.random() * rw.length));
        s += rw[i];
        rw = rw.substring(0,i)+rw.substring(i+1);
        
    }
    
    output.innerHTML = s.toLowerCase();
    
}


function rGuess() {
        
        var guess = document.getElementById('guessText');
    
        if ( guess.toLowerCase().value == word ) {
            
            console.log('You guessed it!');
        } else {
            console.log('Incorrect. The right answer was ' + word);
        }
    
    
    guess.value = "";
    
    scramble();
    
}*/


/*
var btn = document.getElementById('replaceBtn');

btn.addEventListener('click', replaceHeading);

var holder = 'JavaScript';

function replaceHeading() {
    
    var txt = document.getElementById('replaceTxt');

    var newHeading = txt.value;
    
    var heading = document.getElementById('titleReplace');
    
    var headingTxt = heading.innerText;
    
    var js = headingTxt.replace(holder, newHeading);
    
    holder = newHeading;
    
    heading.innerHTML = js;    
    
}
*/

/*var a = "hello world";
var b = "hello";
var c = a + b;

a.toUpperCase();
b.toLowerCase();
a.indexOf('H');
a.indexOf('h');
a.indexOf('hello');
c.indexOf('ello');
c.lastIndexOf('ello');
var d = c.slice(0,11);
var e = c.substr(11,5);
var f = c.substring(3,10);


window.onload = manText;

function manText() {
    
    var title = document.getElementById('shopList');
    
    var text = title.innerHTML;
    
    var newTitle = 'Javascript ' + text.slice(9);

    console.log(newTitle);
    
    title.innerHTML = newTitle;
}*/

/*
String Objects = Guess Number of Characters

var gc = document.getElementById('guessChar');

gc.addEventListener("click", count);

function count() {
    
    var chars = document.getElementById('chars');
    
    var length = chars.value.length;
    
    console.log(length);
    
    var guess = document.getElementById('charsGuess');
    
    var guessNum = guess.value;
    
    console.log(guessNum);
    
    if (guessNum == length) {
        
        console.log('You guessed it!');
        
    } else if (guessNum < length) {
        
        console.log ('Too low');
        
    } else {
        
        console.log('Too high');
    }
     
}*/

/*var a = 'world hello';
var b = new String('hello world');

for (var x =0; x<a.length; x++) {

console.log(a[x]);

}

a.charAt(6);
a.length;
console.log(a.concat(b));
console.log(a+b);*/

/*
var a = 400;
var b = "Hello World";
var c = "https://www.google.com?id=1000&n=500";
var d = "400";
var e = encodeURIComponent(c);
var f = decodeURIComponent(e);

Number(d);
String(a);
typeof(b);*/

/*
Window Open/Close

var btn = document.getElementById("pop");

var closeBtn = document.getElementById("cls");

btn.addEventListener("click", popup);

closeBtn.addEventListener("click", closeIt);

var wn;

function popup() {

    var url = "https://google.com";
    
    var opt= "top=100,left=100,width=1000,height=500";
    
    wn = window.open(url, "_blank", opt);
    
}

function closeIt() {
    
    wn.close();
}*/



//Exercise 69 Editable List Maker

/*var names = ['ryan','sam','james','brian','cassi','andrew','kendra','cassie','shawn','alison'];

var output = document.getElementById('output3');

window.onload = build;

var submitFriend = document.getElementById('submitFriendtoList');

submitFriend.onclick = addFriend;

function addFriend() {
    
   var addFr = document.getElementById('inputFriendtoList');
    
    var friend = addFr.value;
    
    names.push(friend);
    
    console.log(names);
    
    build();
    
}

function build() {
    
   var html = '<h1>Click Table</h1><table>';
    
    for (var x=0; x<names.length; x++) {
        
        html += '<tr data-row="'+x+'"><td>'+names[x]+'</td><td data-action="edit" class="edit"><a href="#">Edit</a></td><td data-action="delete" class="delete"><a href="#">Del</a></td></tr>';
        
    }
    
    html += '</table>';
    
    output.innerHTML = html;
    
    var editList = document.querySelectorAll('[data-action="edit"]');

    for (var i = 0; i<editList.length;i++) {
    
    editList[i].addEventListener('click', function() {
        
        event.preventDefault();
        
        var editIndex = this.closest('[data-row]');
        
        editIndex.style.backgroundColor = 'yellow';
        
        var friendName = editIndex.children[0].innerText;
            
        editIndex.children[0].innerHTML ="<input value="+friendName+">";
        
        this.innerHTML = "<a href='#' class='save'>Save</a>";
        
        var saveList = document.querySelectorAll('.save');
        
        for (var m = 0; m<saveList.length; m++) {
            
            saveList[m].addEventListener('click', function() {
            
            var newNameIndex = event.target.closest('[data-row]').attributes[0].value;
                
                console.log(newNameIndex);
                
           var newName = event.target.closest('[data-row]').children[0].children[0].value;
                
                names.splice(newNameIndex, 1, newName);
                
                build();
            
        })
        
        }
        
     ANOTHER SOLUTION FOR EDIT
    
    
    var dae = document.querySelectorAll('[data-action="edit"]');
            for (var x = 0; x < dae.length; x++) {
                dae[x].addEventListener('click', function () {
                    event.preventDefault();
                    var row = this.closest('[data-row]');
                    var rid = row.getAttribute('data-row');
                    row.style.backgroundColor = "Yellow";
                    var td = row.firstElementChild;
                    var input = document.createElement('input');
                    input.type = "text";
                    input.value = td.innerText;
                    td.innerHTML = "";
                    td.appendChild(input);
                    input.focus();
                    input.onblur = function () {
                        td.removeChild(input);
                        td.innerHTML = input.value;
                        myArray[rid] = input.value;
                        row.style.backgroundColor = "White"
                    }
                })
            }
        
    });
        
    }
        
    var delList = document.querySelectorAll('[data-action="delete"]');

    for (var j = 0; j<delList.length;j++) {
    
    delList[j].addEventListener('click', function() {
        
        event.preventDefault();
        
        var delIndex = this.parentElement.attributes[0].value;
        
        names.splice(delIndex,1);
        
        build();
        
    });

}
        
    }*/





//Exercise 68 Select

/*var box = document.getElementById('box2');
var output = document.getElementById('output2');

output.addEventListener('select', select);

function select() {
    
    console.dir(event.target);
    
    var e = event.target;
    var str = e.value;
    var result = str.substring(e.selectionStart, e.selectionEnd);
    
    console.log(result);
    
}*/

//Exercise 67 Multiple event listeners

/*var box = document.getElementById('box2');
var output = document.getElementById('output2');

box.addEventListener("mouseover", coordinates);


function coordinates() {

    box.addEventListener('mousemove', update);
    
}

function update() {
    
    var x = event.clientX;
    var y = event.clientY;
    
    outputdata(x, y);
    
}

function outputdata(x, y) {
    
    output.innerHTML = '<h1>Mouse coordinates</h1>X: '+ x + '<br>Y: ' + y;
    
}*/


//Exercise 66 Add event listener

      /* var i = document.getElementById('imgSwap');
        
        var imgHolder = "350x150/ffff00/fff?text=Image10";
        
        var t;
        
        window.onload = function () {
            i.src = imgHolder;
        }
        
        i.addEventListener('click', function () {
            console.log(event);
            message("clicked");
        })
        
        i.addEventListener('mouseover', function () {
            t = this.src;
            this.src = "350x150/ff0000/fff?text=Image2";
            message("Over");
        })
        
        i.addEventListener('mouseout', function () {
            this.src = t;
            message("Out");a
        })

        function cImg(t) {
            message(t.src);
            imgHolder = t.src;
    
            t.src = "350x150/ff0000/fff?text=Image2";
        }

        function bImg(t) {
            t.src = imgHolder;
        }
        
        function message(m) {
            document.getElementById('wrapper').innerHTML = m;
        }*/

//Exercise 65 Shopping List

//window.onload = createTable;

/*var items = [];

var submit = document.getElementById('submitItem');

submit.onclick = addItem;

var itemTable = document.getElementById('itemTable');

var date = new Date();

console.log(date);

function createTable() {
    
    var itemTable = document.getElementById('itemTable');
    
    var html = itemTable.innerHTML;
    
    html = '<table><tr><th>ID</th><th>Date</th><th>Item</th><th>Status</th></tr>';
    
    for (var i=0; i<items.length;i++) {
        html += '<tr data-row="'+(i)+'"><td data-id="'+(i+1)+'">'+(i+1)+'</td><td>'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'</td><td>'+items[i]+'</td><td style="text-align: center;"><input type="checkbox" /></td></tr>';
    }
    
    html += '</table>';
    
    itemTable.innerHTML = html;
    
}


function addItem() {
    
    var item = document.getElementById('item');

    item = item.value;
    
    items.push(item);
    
    append(item);
    
}

function append(i) {
    
    console.log(items);
    
    if (items.length > 1) {
        
    var table = itemTable.getElementsByTagName('tbody')[0];
        
        console.log(table);
    
    var lastItem = table.childElementCount;
        
        console.log(lastItem);

    var nr = table.insertRow();
    nr.innerHTML = '<tr data-row="'+(lastItem)+'"><td data-id="'+(lastItem)+'">'+(lastItem)+'</td><td>'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'</td><td>'+i+'</td><td style="text-align: center;"><input type="checkbox" /></td></tr>'
 
    } else {
        
        createTable();
        
    }
    
}*/


/*function strike() {
    
var table = document.getElementById('itemTable');

var checked = table.getElementsByTagName('input');

for (var k=0; k<checked.length; k++) {
    
  checked[k].onclick = function() {
        
       var checkedVal = event.target.parentElement.previousElementSibling;
      
      console.log(checkedVal);
      
checkedVal.innerHTML = checkedVal.innerHTML.style("text-decoration","line-through");
      
       }
        
    }

}*/



//Exercise 64 Manipulating attributes / Voting system

/*var el = document.getElementById('one');

console.log(el.innerHTML);

el.setAttribute(
"style","color: red; padding: 10px; border: 5px solid red;"

)

el.removeAttribute("style");*/

/*var names = [];

var nameTable = document.getElementById('nameTable');

window.onload = build;

function build() {

    var html = '<table style="border: 1px solid black; text-align: center;">';
    
nameTable.innerHTML = html;

for (var row=0; row<names.length; row++) {
    
    
    html += '<tr data-row='+row+' data-vote="0"><td class="click" style="cursor:pointer;">'+(row+1)+'</td><td>'+names[row]+'</td><td>0</td></tr>'

}

html += '</table>';

nameTable.innerHTML = html;
    
    vote();
    
    //append();

}

var submitFriend = document.getElementById('submitFriend');

friend.onkeydown = enter;

function enter() {
 
    if (event.keyCode === 13) {
        
        addFriend();
        
    }
}

submitFriend.onclick = addFriend;

function addFriend() {
    
    var friend = document.getElementById('friend');
    
    friendName = friend.value;
    
    names.push(friendName);
    
    append();
    
    clear(friend);
    
}

function clear(f) {
    
    f.value = "";
}

function append() {
    
    var newTable = nameTable.getElementsByTagName('tbody')[0];
    
    console.log(newTable);
    
    if (names.length > 1) {
    
    for (var i = names.length; i>(names.length-1);i--) {
        
        var nr = newTable.insertRow();
        nr.setAttribute("data-row",i-1);
        nr.setAttribute("data-vote",0);
        nr.innerHTML = '<td class="click" style="cursor:pointer;">'+(i)+'</td><td>'+names[i-1]+'</td><td>0</td>';
        
        vote();
        
    }
 
}
    
 else {
    
        build();
    
}
    
}

function vote() {

var clickBox = document.querySelectorAll('.click');

var a;
    
for (var i = 0; i<clickBox.length;i++) {
    
    clickBox[i].onclick = function() {
        
        a = this.parentElement.getAttribute("data-row");
        
        var outputName = names[a];
        
        var votes = this.nextSibling.nextSibling;
        
        voteCount = Number(votes.innerText);
        
        voteCount++
        
        votes.innerText = voteCount;*/
        
        /*var last = document.querySelectorAll('.lo');
    
            for (var j=0; j<last.length;j++) {
    
            var b = last[j].parentElement.getAttribute("data-row");
                
                if (a == b) {
        
            last[j].innerHTML = outputName + ' row: ' + a; 
    
            }   
        
        
        }*/
     
    /*}
    
    }
}*/

//Exercise 63 Accordian

//his solution

    /*var aTitle = document.querySelectorAll('.title');
    var c = document.querySelectorAll('.content');

        for (var x = 0; x < aTitle.length; x++) {
            
            aTitle[x].onclick = function () {
                cCon(this.nextElementSibling);
                this.nextElementSibling.classList.toggle('active');
            }
        }

        function cCon(t) {
            for (var x = 0; x < c.length; x++) {
                if (t != c[x]) {
                    c[x].classList.remove('active');
                }
            }
        }*/

//my solution

/*var titleList = document.querySelectorAll('.title');

var contentList = document.querySelectorAll('.content');

for (var i = 0; i< titleList.length; i++) {
    
titleList[i].onclick = function() {
    
var con = this.nextElementSibling.classList;
    
if (con.contains('show')) {
   
   con.remove('show');
    
} else {
   
checkClasses(contentList, con);
        
 if (!con.contains('show')) {
       
       con.add('show');
   } 
        
}

}

}

function checkClasses(arr, el) {

    for (var i = 0; i < arr.length; i++) {
        
        arr[i].classList.remove('show');
        
        console.log(arr[i]);
       
    }
    
}*/
    
    

//Exercise 62 changing classes

/*var boxList = document.getElementsByTagName('div');


for (var x=0;x<boxList.length;x++) {
    
    var newBox = boxList[x];
    
//his solution
    
     newBox.onclick = function() {

         classAction(boxList,'active','remove');
         
       if(!this.classList.contains('active')) {
           
           this.classList.add('active');
       }
      
     }
     
}
     
     function classAction(e,c,a) {
         for (var i=0;i<e.length;i++) {
             
             e[i].classList[a](c);
         }
         
     }*/

//my solution
    
   /* newBox.onclick = function() {

        for (i=0;i<boxList.length;i++) {
            
            boxList[i].classList.remove('active');
        }
        
        this.classList.add('active');
        
    }*/
 
    
    //for fun, add object to array
    
    //var classes = [];

    /*    var obj = {name:newBox, class:newBox.classList.value};
    
    classes.push(obj);*/
    
    
    
    /*newBox.onclick = function() {
        
        //var str = this.classList.value;
        
        if (this.classList.contains('box')) {
        
            //console.log(this.classList);

            this.classList.add('box2');
            
            this.classList.remove('box');
            
        } else if (this.classList.contains('box2')) {
        
        this.classList.add('box3');

        this.classList.remove('box2');

    } else if (this.classList.contains('box3')) {
        
            this.classList.remove('box3');
        
        this.classList.add('box');
    }
        
    }
    
}
*/

//Exercise 61 Popup modal

/*var modal = document.getElementById('overlap');

var btn = document.getElementById('popupBtn');

var visible = false;

btn.onclick = modalBox;

function modalBox() {
    
    if (visible == false) {
    
    modal.style.display = 'block';
    
    visible = true;
        
    } else if (visible == true) {
        
        modal.style.display = 'none';
        
        visible = false;
    }
    
}*/


//Exercise 60 Element style / Rotate background color

/*var color = ['yellow','red','blue','purple','green','pink','aqua','orange'];

var continueChange = 0

window.onload = startColorChange;

function startColorChange() {
        
        setInterval(changeColor, 1000);

}
     

function changeColor() {
    
    var selection = document.querySelectorAll('.output');
    
    if (continueChange < 10) {
    for (var x = 0; x < selection.length; x++) {
    var rndNum = Math.floor(Math.random() * (color.length));
    selection[x].style.backgroundColor = color[rndNum];

    }
        
    }
        
    continueChange++;
    
}*/


//Exercise 60 Query Selector / Query Selector All

/*var el = document.querySelector('.output');

console.log(el);*/

/*
var selection = prompt('what do you want to select?');

var id = prompt('., #, or type?');

selector(selection, id);

function selector(t,k) {

    if (k == '.' || k == "#") {
        
        var x = document.querySelectorAll(k+t);
    
        for (var i = 0; i < x.length; i++) {
        
        x[i].innerHTML = 'it worked';
            
            console.log(i + ' ' + t + ' ' + k);

        
    }
        
    } else {
        
        var p = document.querySelectorAll(t);
    
        for (var j = 0; j < p.length; j++) {
        
        p[j].innerHTML = 'it worked';

        
    }
        
    }    
    

}
*/


//Exercise 59 Click Handler

/*var eClass = document.getElementsByClassName('output');

var hClass = document.getElementsByClassName('highlight');

console.log(eClass);

for (var x = 0; x < eClass.length; x++) {
    
    var el = eClass[x];

    var msg = document.getElementById('msg');
    
    el.onclick = function () {
        
        var txt = event.target.innerHTML;

        msg.innerHTML = txt + ' output';
        
    }
    
}

for (var x = 0; x < hClass.length; x++) {
    
    var el2 = hClass[x];

    var msg2 = document.getElementById('msg2');
    
    el2.onclick = function () {
        
        var txt2 = event.target.innerHTML;

        msg2.innerHTML = txt2 + ' hightlight';
        
    }
    
}*/



/*

var arr = [{name: 'sam',mName:'mike',age: 123, height:12},{name:'stacy',mName:'jane',age: 23, height:90}];

for (var x in arr) {

console.log(arr[x].age);

}

Turn Object into Array

Object.keys(obj);
Object.value(obj);
Object.entries(obj);

*/


//Exercise 58 Traversing the DOM

/*var output = document.getElementById('output2');

var btn = document.getElementById('btn1');

var divList = document.getElementsByTagName('div');

btn1.onclick = myFun;

function myFun() {

for ( var x = 1; x < divList.length; x++) {
    
    if( (Number(divList[x].innerText) % 2) > 0 ) {
        
        output.innerHTML += '<br>'+divList[x].innerText;
        
    }

}

}*/

//Exercise 57 Name Game v1

/*var names = ['ryan','sam','james','brian','cassi','andrew','kendra','cassie','shawn','alison'];

var key;

var myArray = [];

var start = document.getElementById('start').onclick = scramble;

function scramble() {
    
    myArray = names.slice(); // must use this if copying arrays
    
    myArray.sort( function(a,b) {
        
        return 0.5 - Math.random();
        
    });*/
    
    /*for (var x = names.length - 1; x > 0; x--) {
        
        var curPos = names[x];

        var rndPos = Math.floor(Math.random()* (x + 1));

        var tempPos = names[rndPos];

        names[x] = names[rndPos];

        names[rndPos] = curPos;
    
    }*/
    
   /*build(myArray);
    
    resetKey(myArray);
    
}

function resetKey(n) {
    
    key = n[Math.floor(Math.random() * myArray.length)];

    if (myArray.length == 0 ) {
        
        message1("You won!");
        
    } else {
        
        message1("Find " + key);
        
    }
    
}

function build(n) {
    
    var output = document.getElementById('names');
    
    var html = '';
    
    for (var x = 0; x < n.length; x++) {
        
        var str = n[x];
    
        var shuffled = str.split('').sort(function() {
            return 0.5 - Math.random();
        }).join('');
        
        html += '<div class="box divi" onmouseover="updateText(this,\''+shuffled+'\')" onmouseout="updateText(this,\'Hidden '+(x+1)+'\')" onclick="eEle(this,\''+str+'\')" >Hidden '+(x+1)+'</div>';

    }
    
    output.innerHTML = html;
    
}

function updateText(a, b) {
    
    a.innerHTML = b;
    
}

function eEle(a, b) {
    
    if (key == b) {
        
        var index = myArray.indexOf(b);
        
        console.log(index);
        
        console.log(b);
        
        console.log(myArray);
        
        myArray.splice(index, 1);
        
        a.style.display = 'none';
        
        resetKey(myArray);
        
    }
    
}

function message1(mes) {
    
    var answer = document.getElementById('answer');
    
    answer.innerHTML = mes;
    
    console.log(myArray);
}*/

//Exercise 56 Drag and Drop

/*var dragItem = document.getElementById('drag');

dragItem.ondragstart = drag;
var holder;

function drag() {
    
    message('drag started');
    
    holder = event.target;
}

function drop() {
    event.preventDefault();
    message('drop started');
    
    if(event.target.className == 'box') {
        
        event.target.appendChild(holder);
        
    }
}

function noDrop() { 
    
    event.preventDefault(); 

}

function message(m) {
    
    var output = document.getElementById('output');
    
    output.innerHTML = m;
 
}*/

//Exercise 55 Onsubmit Form Validation

/*var myForm = document.getElementById('myForm');

myForm.onsubmit = valForm;

function valForm() {
     
    var blank = '';
    
    if (event.target[0].value == '' || event.target[1].value == '') {
        
    if ( event.target[1].value == '' ) {
        
        blank = 'Name';

        }
        
    if ( event.target[0].value == '' ) {
        
       blank ='Number';
        
        }
        
        message('The ' + blank + ' field is empty. Please fill it out.');
        
        return false;

    }
    
return true;
    
}

function message(m) {
    
    var output = document.getElementById('output');
    
    output.innerHTML = m;
 
}*/


//Exercise 54 Key Event Return Boolean

/*var numInput = document.getElementById('num');

var letterInput = document.getElementById('lname');

num.onkeypress = numCheck;

num.onpaste = returnFalse;

letterInput.onkeypress = letterCheck;

function returnFalse() {
    
    return false;
    
}

function numCheck(event) {
    
    //!isNaN(event.key);
    //message(!isNaN(event.key));
    return !isNaN(event.key);
    
}

function letterCheck(event) {

    return isNaN(event.key);
    
}

function message(m) {
    
    var output = document.getElementById('output');
    
    output.innerHTML = m;

    
}*/
//Exercise 53 Image Carousel

/*var imagePlace = 0;
var images = ['1','2','3','4','5'];
var imagesColor = ['111','222','FF0000','00FF00','0000FF'];

window.onload = function() {
    
var myImage = document.getElementById('myImage');
    
myImage.src = 'http://via.placeholder.com/350x150/'+imagesColor[imagePlace]+'/fff?text=image'+images[imagePlace];    
    
startSlider();
   
}

function switchImage() {
    
    var myImage = document.getElementById('myImage');

    
    if (imagePlace >= images.length) {
        
        imagePlace = 0;
        
    }
    
    myImage.src = 'http://via.placeholder.com/350x150/'+imagesColor[imagePlace]+'/fff?text=image'+images[imagePlace];

    imagePlace++;
    
    }

function startSlider() {
    
    setInterval(switchImage,1000);
}*/


//Exercise 52 Onchange Image Update

/*var output = document.getElementById('output');

var imgBtn = document.getElementById('imgSubmit');

var sizeChange = document.getElementById('sizing');
    
var colorChange = document.getElementById('color');

var url = 'https://via.placeholder.com/';

var imgDisplay = false;

imgBtn.onclick = message;

colorChange.onchange = updateColor;

sizeChange.onchange = updateSize;


function updateSize(event) {
    
    var size = event.target.value;
    
    var color = event.target.form[1].value;
    
    if ( imgDisplay == true ) {
        
        output.innerHTML = '<img src= "'+url+size+'/'+color+'" />';

    }

}

function updateColor(event) {
    
    var color = event.target.value;
    
    var size = event.target.form[0].value;
    
    if ( imgDisplay == true ) {
        
        output.innerHTML = '<img src= "'+url+size+'/'+color+'" />';

    }
  
}

function message(event) {
    
    var size = event.target.parentElement[0].value;
        
    var color = event.target.parentElement[1].value;

    if (size != '' && color != '') {
        
        console.log(size + ' ' + color);

        output.innerHTML = "<img src='"+url+size+"/"+color+"' />";

        imgDisplay = true;
        
    }
    
} */



//EXERCISE 52 Target Form Content

/*var submit = document.getElementById('submit');

submit.onclick = sendInfo;

function sendInfo() {
    
    
    var parent = event.target.parentElement;
    
    var fname = parent.parentElement[0].value;
    
    var lname = parent.parentElement[1].value;
    
    console.log(event);
    
    message(fname, lname);
    
}

function message(fn,ln) {
    
    var output = document.getElementById('output');
    
    output.innerHTML = fn + ' ' + ln;
    
}*/

//EXERCISE 51 Mouse events

/*imgHover.onmouseover = change4;


btn1.onclick = change1;
btn2.onmouseover = change2;
btn3.onmouseleave = change3;*/

/*function change() {
    
    output.innerHTML = 'Clicked';
    console.log(this);

}

function change1() {
    
    output.innerHTML = img;
    console.log(this.value);

}

function change2() {
    
    output.innerHTML = img;
    console.log(this.value);

}

function change3() {
    
    output.innerHTML = img;
    
    console.log(this.value);

}

function change4() {
    
    output.innerHTML = img2;

}*/

//EXERCISE 50 Event Handler and Onload

/*var output = document.getElementById('output');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');

btn1.onclick = change2;

function change() {
    
    output.innerHTML = 'Clicked';
    console.log(this);

}

function change2() {
    
    output.innerHTML = 'Clicked2';
    console.log(this);

}

window.onload = function() {
    
    change();
    
}*/

//EXERCISE 49 Traversing the DOM
/*
var output = document.getElementById('output');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');

output.innerHTML = 'yes';

btn1.onclick = function() {
    
    btn1.value = 'Clicked';
    btn1.innerText = 'Clicked';
    console.log(btn1.value);
    
}
*/

//EXERCISE 48 Window Navigator

/*var output = document.getElementById('output');

output.innerHTML = navigator.geolocation.getCurrentPosition;*/

//EXERCISE 47 Timeouts

/*var output = document.getElementById('output');

var timer;

var btn = document.getElementById('deal');


window.setTimeout(myPopup, 2000);


function clear() {
    
    window.clearInterval(timer);
    
}

function myPopup() {
    
    alert("Hey there! Welcome to my website.");
    
}*/

//EXERCISE 46 Window Method Print and Prompt

/*
var pp = document.getElementById('deal');

pp.onclick = function() {
    
    var content = prompt('Hello World\'s:');

    print();
    
}
*/

//EXERCISE 45 Window Object DOM

/*console.dir(window);

var output = document.getElementById('output');

for(var prop in window) {
     
     //document.write(prop + ' ' + window[prop] + '<br>');

 }

output.innerHTML = window.innerWidth + ' ' + window.innerHeight;

var x = 0;
   
var w = window.open('https://www.google.com');

w.onbeforeunload = function() {
    
    alert('don\'t leave!');

    
}

var goBack = document.getElementById('deal');

goBack.onclick = function() {
    
    window.open(window.location);
    
    goBackFun();
    
}

function goBackFun() {
    
    output.innerHTML = (window.history.length);
    
}*/
          
//EXERCISE 44 Card Deck

/*var dealBtn = document.getElementById('deal');
var cardFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J','Q','K','A'];
var suits = ['hearts', 'spades', 'clubs', 'diams'];
var players = [];

dealBtn.onclick = function() {
    
     startDeal();
    
}

function startDeal() {
    
    players = [];
    
    var index = Number(document.getElementById('players').value);
    
    var numCards = Number(document.getElementById('numCards').value) * index;
    
        for (i = 0; i < index; i++) {
            
                players[i] = [];

            }
    
    var cards = buildDeck(index);
    
    shuffleCards(cards);
    
    dealCards(numCards, cards);
 
}

function buildDeck(index) {
    
    var cards = [];
    
    for (s in suits) {
        
        var bgColor = (suits[s]) == 'hearts' || suits[s] == 'diams' ? 'red' : 'black';
        
        var suitNew = suits[s] == 'hearts' 
        
        for (c in cardFace) {
            
            var card = {
                
                suit: suits[s],
                num: cardFace[c],
                bgColor: bgColor,
                icon: '&'+suits[s]+';'
            }
            
            cards.push(card);
            
        }
        
    }
    
    return cards;
}

function shuffleCards(arr) {
    
   for (var x = arr.length - 1; x > 0; x--) {
        
        var newPos = Math.floor(Math.random() * (x+1));
        
        var current = arr[x];
        
        arr[x] = arr[newPos];
        
        arr[newPos] = current;  
        
    }
    
    console.log(arr);
    
    return arr;
}
    

function dealCards(num, arr) {

    var output = document.getElementById('output');
    
    output.innerHTML = '';
    
    var p = 0;
    
    var cn = 0;
    
    for (var i = 0; i < arr.length; i++) {
        
        if (cn < num) {
            
            players[p].push(arr[i]);
        
        p++;

    if (p >= players.length) {
            
            p = 0;
            
            }
            
        } cn++;
        
    } 
    
    
    for (var k = 0; k < players.length; k++) {
    
    output.innerHTML += "<br><br>Player " + (k+1) + '<br>';
        
        for (var i = 0; i < players[k].length; i++) {
            
            var info = players[k][i];
            
            output.innerHTML +=  '<span style = \'color: '+ info.bgColor + '\';/>' + info.num + ' ' + info.icon + ' </span>';
        }
        
        }
        
    }*/


//EXERCISE 43.2 Callback Functions - Calculator

/*var output = document.getElementById('output');

var addBtn = document.getElementById('add');
var remBtn = document.getElementById('rem');
var subBtn = document.getElementById('sub');
var divBtn = document.getElementById('div');
var mulBtn = document.getElementById('mul');
var reminder = document.getElementById('rem');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

remBtn.onclick = function() {
    
    calc(Number(num1.value), Number(num2.value), remFun, '%');
    
}

addBtn.onclick = function() {
    
    calc(Number(num1.value), Number(num2.value), addFun, '+');
    
}

subBtn.onclick = function() {
    
    calc(Number(num1.value), Number(num2.value), subFun, '-');
    
}

divBtn.onclick = function() {
    
    calc(Number(num1.value), Number(num2.value), divFun, '/');
    
}

mulBtn.onclick = function() {
    
    calc(Number(num1.value), Number(num2.value), mulFun, '*');
    
}

function remFun(a,b) {
    
    return a % b;
}

function addFun(a,b) {

    return a + b;
}

function subFun(a,b) {

    return a - b;

}

function divFun(a,b) {
    
    return a / b;
}

function mulFun(a,b) {
    
    return a * b;
}

function calc(a, b, cback, s) {
 
    var result = cback(a,b);
    
    output.innerHTML += a + " " + s + " " + b + " = " + result + "<br>";
    
}*/

//EXERCISE 43 Callback Functions

/*var output = document.getElementById('output');

var x = function makeMessage(s1, s2, fun) {
    
    var result2 = 'hi ';
    
    fun(s1,s2);
    
    //output.innerHTML = result2;
    
    console.log(result2);
    
}

var y = function fun1(s1, s2) {
    
    var result2 = s1 + ' ' + s2 + ' worked';
    
    console.log(result2);
}

x('hello','world',y);*/

/*function makeMessage(s1, s2, callback) {
    
    var result1 = callback(s1, s2);
    
    output.innerHTML = result1;
    
    console.log(result2);
    
    console.log(result1);
    
}

makeMessage('hello','world', function (s1, s2) {
    
    var result2 = s1 + ' ' + s2 + ' worked';
    
    return result2;
            
});*/


//EXERCISE 42 Shopping List

/*var output = document.getElementById('output');

var btn = document.getElementById('btn');

var shoppingList = [];

var list = '';

output.innerHTML = 'You have no items in your list';



btn.onclick = function addItem() {
    
    output.innerHTML = '';
    
    var item = document.getElementById('code1');
    
    var itemValue = item.value;
    
    shoppingList = noDups(shoppingList, itemValue);
    
        function noDups(arr, item) {

            for (var i = 0; i <= arr.length; i++) {

                if ( arr[i] != item ) {

                    arr.push(item);

                } else {

                    alert("This item is already on your list");

                }
                
                return arr;
                
            } 
   
        } 
    
    outputList(shoppingList);

        function outputList(arr) {
            
            list = '';

                for (var x = 0; x < arr.length; x++) {

                 list += x+1 +'. ' + arr[x] + '</br>';

            }

            return list;

        }

    output.innerHTML = list;

} */


//EXERCISE 41 Functions within Functions

/*var output = document.getElementById('output');

var num = 1000;

function outsideFun() {
    
    var num2 = 2000;
    
    function insideFun() {
        
        num2++;
        
        return num2;
        
    }
    
    insideFun();
    
    var num3 = insideFun();
    
    var num4 = function() {
        
        num2++;
        
        return num2;
        
    }
    
    num4();
    
    var num5 = num4();
    
    console.log(num2);
    
}*/

/*var output = document.getElementById('output');

function fun1() {
    
    var a = 1;
    
    fun2();
    
    function fun2() {
        
        a++;
        
        fun3();
        
        return a;
        
        function fun3() {
            
            a++;
            
            return a;
            
        }
        
    }
    
    return a;
    
}

output.innerHTML = fun1();*/


//EXERCISE 40.2 Remove Duplicates - Personal Attempt

/*var myArray = ['hello','world', 234,432,'javascript','hello','world', 4322,4322,23,12343,543223,'hi','php','mysql','node'];

var output = document.getElementById('output');

var cleanArray = [];

var cleanObj = {};

for (var x=0; x < myArray.length; x++) {
    
    //console.log(myArray[x]);
    
    cleanObj[myArray[x]] = '';  
 
}

for (var i in cleanObj) {
    
    cleanArray.push(i);
    
}

output.innerHTML = myArray + '<br>' + cleanArray;*/

//EXERCISE 40 Remove Duplicates

/*
var myArray = ['hello','world', 234,432,'javascript','hello','world', 4322,4322,23,12343,543223,'hi','php','mysql','node'];

var output = document.getElementById('output');

var myArrayClean = removeDup(myArray);

output.innerHTML = myArray + '<br>' + myArrayClean;

function removeDup(arr) {
    
    var cArray = [];
    
    var cObject = {};
    
    for (x=0; x<arr.length; x++) {
        
        console.log(arr[x]);
        
        cObject[arr[x]] = '';
            
        }
    
    for (var i in cObject) {
            
            cArray.push(i);
        
    }
    
    return cArray;
    
}*/



//EXERCISE 39 Shuffle Array

//var output = document.getElementById('output');

//var arr = ['javascript','php','python','node','mysql'];

/*function start() {
    
    shuffleArray(secretWord);
    
    output.innerHTML += secretWord + '<br>';
}*/

/*function shuffleArray() {
    
    for (var x = arr.length - 1; x > 0; x--) {
        
        var randWord = Math.floor(Math.random() * (x+1));
        
        var currentWord = arr[x];
        
        arr[x] = arr[randWord];
        
        arr[randWord] = currentWord;  
        
    }
    
    output.innerHTML += arr + '<br>';
    
    return arr;
}*/


//EXERCISE 38 Recrusive Function Game

/*var output = document.getElementById('output');

var secretWord = ['javascript','php','python','node','mysql'];

var secretChoice = secretWord[Math.floor(Math.random() * secretWord.length)];

var guess = 0;

function start() {
    
    getSecret(prompt('Guess the best language: javascript, php, python, node or mysql'));
    
    guess++;
    
}

function getSecret(secret) {
    
    if (secret == secretChoice) {
        
        output.innerHTML = "You are correct! The best programming language is " + secretChoice;
        
    } else {
        
        
        if (guess == 5) {
            
            output.innerHTML = "You're a bad guesser.. the word was " + secretChoice;
            
        } else {
            
        guess++;
        
        getSecret(prompt('Guess again..'));
            
        }
        
    }
    
}*/


//EXERCISE 37 Anonymous & Self Invoking Functions

//var output = document.getElementById('output');


//anonymous function - no name
/*var asdf = function(b) {
    
    output.innerHTML = 'Welcome to an anonymous function ' + b;
    
}*/


//self invoking function - variables are destroyed after use

/*var a = 'world';

(function() {
 
 var b = 'hello ';
    
    output.innerHTML = b;
 
 })();

output.innerHTML += a;*/



//EXERCISE 36 Safe Cracker

/* 
var output = document.getElementById('output');
var code1 = document.getElementById('code1');
var code2 = document.getElementById('code2');
var code3 = document.getElementById('code3');
var btn = document.getElementById('btn');
var num1 = Math.floor(Math.random() * 5);
var num2 = Math.floor(Math.random() * 5);
var num3 = Math.floor(Math.random() * 5);
var secretCode = Number(num1 +''+ num2 +''+ num3);
btn.onclick = tryCode;
var guesses = document.getElementById('guesses');


function tryCode() {
    
    var val1 = Number(code1.value);
    var val2 = Number(code2.value);
    var val3 = Number(code3.value);
    var calc = (val1 + val2 + val3);
    var userCode = Number(val1+''+val2+''+val3);
    
    logGuess(val1, val2, val3);
    
    output.innerHTML = 'Your code: <br>';
    
    
    if (userCode === secretCode) {
        
        output.innerHTML += '<br> You cracked the code! It is ' + secretCode;
        
    } else {
        
    output.innerHTML += val1 + ' ' + val2 + ' ' + val3;
    
    if (val1 === num1) {
        
        output.innerHTML += '<br><br>Got it. It\'s  ' + val1;
        
    } else {
        
        if (val1 > num1) {
            
            output.innerHTML += '<br><br>#1: Too High ';
            
        } else {
            
            output.innerHTML += '<br><br>#1: Too Low ';
        }
        
    }
    
    if (val2 === num2) {
        
        output.innerHTML += '<br><br>Got it. It\'s: ' + val2;
        
    } else {
        
        if (val2 > num2) {
            
            output.innerHTML += '<br><br>#2: Too High ';
            
        } else {
            
            output.innerHTML += '<br><br>#2: Too Low ';
        }
        
    }
    
    if (val3 === num3) {
        
        output.innerHTML += '<br><br>Got it. It\'s ' + val3;
        
    } else {
        
        if (val3 > num3) {
            
            output.innerHTML += '<br><br>#3: Too High ';
            
        } else {
            
            output.innerHTML += '<br><br>#3: Too Low ';
        }
        
    }
        
}
    
    return calc;
    
}

function logGuess(a,b,c) {
    
     guesses.innerHTML += '<br>' + a + '' + b + '' + c; 
     
       

//other solution: use loop to create code. log guess 3 space array, loop through code and run a function(a,b) to check the guess against the code. 
    
} */

//EXERCISE 35 Parameters

/*
var output = document.getElementById('output');

var a = myFunNew();


function myFunNew(para = "hello, world - new") {
    
    output.innerHTML += para;
    
    return para;
}


function myFunOld(para) {
    
    if (typeof para === 'undefined') {
        
        para = 'hello, world - old';
        
    }
    
    output.innerHTML += para;
    return para;
}
*/

//EXERCISE 34 Calculator

/*
var output = document.getElementById('output');

var addBtn = document.getElementById('add');
var subBtn = document.getElementById('sub');
var divBtn = document.getElementById('div');
var mulBtn = document.getElementById('mul');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

addBtn.onclick = addFun;
subBtn.onclick = subFun;
divBtn.onclick = divFun;
mulBtn.onclick = mulFun;

function addFun() {
    
    var a = Number(num1.value);
    var b = Number(num2.value);
    var e = '+';
    var calc = a + b;
    
    console.log(calc);
    outputHTML(a,b,e,calc);
    return calc;
}

function subFun() {
    
    var a = Number(num1.value);
    var b = Number(num2.value);
    var e = '-';
    var calc = a - b;
    
    console.log(calc);
    outputHTML(a,b,e,calc);
    return calc;

}

function divFun() {
    
    var a = Number(num1.value);
    var b = Number(num2.value);
    var e = '/';
    var calc = a / b;
    
    console.log(calc);
    outputHTML(a,b,e,calc);
    return calc;
}

function mulFun() {
    
    var a = Number(num1.value);
    var b = Number(num2.value);
    var e = '*';
    var calc = a * b;
    
    console.log(calc);
    outputHTML(a,b,e,calc);
    return calc;
}

function outputHTML(a,b,e,c) {
    
    output.innerHTML += a + ' '+ e + ' ' + b + ' = ' + c; 
    
}
*/



//EXERCISE 33 Functions

/*
var btn = document.getElementById('btn');

var output = document.getElementById('output');

btn.onclick = fun2;

var adj = ['fun','super','great','amazing','cool'];

function fun2() {
    
    var name = prompt('what is your name?');
    
    if (name) {
        
        var adjNum = Math.floor(Math.random() * adj.length);
        
        var adjChoice = adj[adjNum];
        
        output.innerHTML += '<br>Hi, ' + name + ', you are ' + adjChoice;
        
        console.log(adjNum);
        
    }
   
}
*/

/*
var ab = "hello";


function fun1() {
     
    var bc = "world";
    
    var calc = ab + ', ' + bc;
    
    output.innerHTML += calc;
    
    return calc;

} */



//EXERCISE 32 Shopping List

/*var output = document.getElementById('output');

var num = prompt('How many items would you like to add?');

num = Number(num);

var shoppingList = [];

for (var x = 0; x < num; x++) {
    
var addItem = prompt('What do you want to add?');
    
    if (addItem == '') {
        
        break;
        
    } else {
        
        shoppingList.push(addItem);
    }
    
}

console.log(shoppingList);

for (var i = 0; i < shoppingList.length; i++ ) {
    
    output.innerHTML +='<br>' + (i + 1) + ') ' + shoppingList[i]; 
    
}*/


//EXERCISE 31 Loops and Objects

//var output = document.getElementById('output');

/*var users = {a: 'Sam', b: 'Cassi', c: 'Brian'};

for (var i in users) {
    
    output.innerHTML += '<br>' + i + ' = ' + users[i] + '<br>';
}*/

/*
for (var i in document) {
    
    output.innerHTML += '<br> 1) ' + i + '; 2) ' + document[i] + '<br>';
    
}
*/

//EXERCISE 30 Loops and Arrays / For In Loop

/*var output = document.getElementById('output');

var users = ['sam','cassi','brian'];*/

/*for (var x = 0; x < users.length; x++) {
    
    output.innerHTML += '<br>' + users[x] + '<br>';
    
}*/

/*var x = 0;

while (users[x]) {
    
    output.innerHTML += '<br>' + users[x] + '<br>';
    
    x++;
    
}*/

/*for (var x = users.length - 1; x >= 0; x--) {
    
    output.innerHTML +=  '<br>' + users[x] + '<br>';
    
}*/

/*for (x of users) {
    
    output.innerHTML +=  '<br>' + x + '<br>';
    
}*/
//EXERCISE 29 Get Multiples

/*var output = document.getElementById('output');

var html = '';

var total = 0;

var sum = 0;

for (var x = 0; x <= 1000; x++) {
    
    if (x % 5 === 0) {
       
    sum = sum + x;
        
    output.innerHTML += '<br>' + x + ' - subtotal: ' + sum;
        
    }
    
} 

output.innerHTML += '<br>Sum: ' + sum;

output.innerHTML += '<br>Total loops: ' + x;*/


//EXERCISE 28 Break and Continue

/*var output = document.getElementById('output');

var html = '<table>';

for (var row = 0; row < 10; row ++) {
    
    html += '<tr>';
    
    if (row == 5) {
        
        break;
        
    if (row == 5) {
        
        continue; //will skip the round the condition applies to (i.e. this would skip the 5th row of cell iteration)
        
    } else {
        
    if (row == 0) {
        
        for (var h = 0; h < 5; h++) {
        
            html+= '<th>Header ' + (h+1) + '</th> ' ;

        }
 
        } else {
            
    for (var col = 0; col < 5; col++) {
            
        html += '<td>Cell ' + ((col + 1)+(row*5)) + '</td>';
        
        }
        
    } html += '</tr>'; 
    
}
    
} html += '</table>'

output.innerHTML = html;*/


//EXERCISE 27 Nested Loops

/*var output = document.getElementById('output');

var html = '<table>';

for (var row = 0; row < 10; row ++) {
    
    html += '<tr>';
    
    if (row == 0) {
        
        for (var h = 0; h < 5; h++) {
        
            html+= '<th>Header ' + (h+1) + '</th> ' ;

        }
 
        } else {
            
    for (var col = 0; col < 5; col++) {
            
        html += '<td>Cell ' + ((col + 1)+(row*5)) + '</td>';
        
        }
        
    } html += '</tr>'; 
    
} html += '</table>'

output.innerHTML = html;*/

//EXERCISE 27 For Loops / Calorie Counter

/*var eaten = prompt("How many bananas did you eat?");

eaten = Number(eaten);

var output = document.getElementById('output');

var cals = 0;

var bna = 89;

output.innerHTML = cals + ' calories for you!';

for (var x = 1; x <= eaten; x++) {

    cals = bna * x;
    
    if ( eaten == 1 ) {
        
        output.innerHTML = 'You\'ve eaten ' + cals + ' calories because you ate ' + eaten + ' banana.';
        
    } else {
        
        output.innerHTML = 'You\'ve eaten ' + cals + ' calories because you ate ' + eaten + ' bananas.';

        
    } 
      
}*/

//another condition option
//var holder = x > 1 ? "banana" : "bananas";

/*var output = document.getElementById('output');

for (var x = 1; x <= 31; x++) {
    
    if (x % 2 > 0) {
    output.innerHTML += 'value of x is ' + x + '<br>';
    
}
    
}*/


//EXERCISE 26 While Loops


/*var output = document.getElementById('output');

var pw = 'password';

var guess = prompt('What is the secret password?');

output.innerHTML += 'Your guess was ' + guess + '<br>';
 
    while (guess != pw) {
        
        if (guess != pw) {
            
            guess = prompt('Sorry, guess again.');
            
            output.innerHTML += 'Your guess was ' + guess + '<br>';
            
        } else {
            
            break;
            output.innerHTML += '<br>You guessed it! The password is ' + pw;
            
        }

}*/

/*var x = 1;

var q = prompt('how many times should i loop?');

while (x < q) {
    
    output.innerHTML += 'value of x is ' + x + '<br>';
    x++;
    
}

output.innerHTML += 'final value of x is ' + x;*/

//EXERCISE 25 Do Loops

/*
var x = 0;
var output = document.getElementById('output');

    do {
    
    if (x % 2 == 0) {
        
        output.innerHTML += 'x = ' + x + '<br>';
        
    }
    
    x++;
    
} while (x < 31);
*/

/*var q = prompt('how high can i count?');
x = 0;
var output = document.getElementById('output');

q = Number(q);

do {
    
    x++;
    
    output.innerHTML += "I can count to " + x + '<br>';
    
    console.log(typeof q);
}

while (x < q);*/


/*var x = 0;

var output = document.getElementById('output');

do {
    
    x++;
    output.innerHTML += '<br> value x = ' + x + '<br>';
}

while (x<10);

output.innerHTML += 'final value of x = ' + x + '<br>';*/


//EXERCISE 24 Rock-Paper-Scissors 2.0

/*
var output = document.getElementById('output');

var guess = Math.round(Math.random()*2);

    switch (guess) {
            
        case 0 :
            guess = 'rock';
            guess.toLowerCase();
            break;
            
        case 1 :
            guess = 'paper';
            guess.toLowerCase();
            break;
            
        case 2 :
            guess = 'scissors';
            guess.toLowerCase();
            break; 
    }

var html = "Ha! I win.. I had " + guess;

var win = false;

var userGuess = prompt("Rock, paper or scissors?");

var ug = userGuess.toLowerCase();
    
    if (ug == guess) {
        
        html = "Tied! I had " + guess + " too.";
        
    } else {
        
    if (userGuess != 'rock' && userGuess != 'paper' && userGuess != 'scissors') {

            html = 'Umm... you do know how to play this game, don\'t you?';

    } else if (ug == 'rock' && guess == 'scissors') {
            
            win = true;
        
    } else if (ug == 'paper' && guess == 'rock') {

            win = true;

    } else if (ug == 'scissors' && guess == 'paper') {

            win = true;

    } 
  
    }

if (win) {
         
        html = "You win. I had " + guess;
    
     }

output.innerHTML = html;
*/


//EXERCISE 24 Rock-Paper-Scissors

/*var output = document.getElementById('output');

var userGuess = prompt("Rock, paper or scissors?"); 
    
    var guess =
    Math.round(Math.random()*2);
    
    console.log(guess);
    
    switch (guess) {
            
        case 0 :
            guess = 'rock';
            break;
            
        case 1 :
            guess = 'paper';
            break;
            
        case 2 :
            guess = 'scissors';
            break;  
    }
    
    if (guess == userGuess) {
        
        output.innerHTML = "Tied! I had " + guess + " too.";
        
    } else if (guess == 'paper' && userGuess == "rock") {
        
        output.innerHTML = "Ha! I win. I had " + guess;
        
    } else if (guess == 'paper' && userGuess == "scissors") {
        
        output.innerHTML = "You win.. I had " + guess;
        
    } else if (guess == 'rock' && userGuess == "scissors") {
        
        output.innerHTML = "Ha! I win. I had " + guess;
        
    } else if (guess == 'rock' && userGuess == "paper") {
        
        output.innerHTML = "You win.. I had " + guess;
        
    } else if (guess == 'scissors' && userGuess == "paper") {
        
        output.innerHTML = "Ha! I win. I had " + guess;
        
    } else if (guess == 'scissors' && userGuess == "rock") {
        
        output.innerHTML = "You win.. I had " + guess;
    
    }*/


//EXERCISE 23 Magic 8 Ball

/*var output = document.getElementById('output');

var q = prompt("What is your question?");

var answer = Math.round(Math.random()*5);

switch (answer) {
        
    case 0 :
        output.innerHTML = "Wow, you would ask about that...";
        break;    
    
    case 1 :
        output.innerHTML = "You will know shortly";
        break;
        
    case 2 :
        output.innerHTML = "Ha! Wouldn't you like to know.";
        break;
        
    case 3 :
        output.innerHTML = "My instincts say yes.";
        break;
        
    case 4 :
        output.innerHTML = "Definitely not.";
        break;
        
    case 5 :
        output.innerHTML = "Doesn't look likely.";
        break;
        
}*/

//EXERCISE 22 Coin Toss Game

/*var output = document.getElementById('output');

var btn = document.getElementById('btn');

btn.onclick = function() {
    
    var guess = prompt("heads or tails?");
    
    var flip = Math.round(Math.random());

    //optional var result = (guess == 'heads') ? 1 : 0;
    
switch (flip) {
        
    case (Number(1)) :
        flip = 'heads';
        break;
    case (Number(0)) :
        flip = 'tails';
        break;
}

if (guess == flip) {
    
    output.innerHTML = 'you guessed it! It was ' + flip;
    
} else {
    
    output.innerHTML = 'darn, you guessed wrong. It was ' + flip;
    
}
    
}*/


//EXERCISE 21 Switch Statement

/*var time = prompt("what are you doing?");

var output = document.getElementById('output');

var html;

switch (time) {
        
    case 'waking up' : 
        html = "it is 6 oclock";
        break;
    case 'eating breakfast' : 
        html = "it is 8 oclock";
        break;
    case '12' :
        html = "eat lunch";
        break;
    case '16' :
        html = "go home";
        break;
    default :
        html = "nothing to do"
        break;
        
}*/

//output.innerHTML = html;


//EXERCISE 20 If/Else Statement

/*var time = prompt("what time is it?");

var output = document.getElementById('output');

if (time >= 22 && time < 24) {
    
    alert("go to bed");
    
} else if ( time < 22 && time >= 16){
    
    alert("it's dinner time");
    
    
} else if ( time < 16 && time >= 14){
    
    alert("it's afternoon");
    
} else if (time < 14 && time >= 12) {
    
    alert("it's lunch time");
    
} else if (time < 12 && time > 7) {
    
    alert("it's morning");
    
} else {
    
    alert("you should be sleeping");
    
}*/


//EXERCISE 19 If Statement

/*
var arr = ['sam','ryan','cassi','mike','brian','stacy','michelle'];

var input = prompt("Enter a name");

var output = document.getElementById('output');

if ( arr.indexOf(input) > -1 ) {
    
    output.innerHTML = "Welcome, " + input;
    
} else {
    
    output.innerHTML = "Sorry, " + input + ", you're denied";
    
}
*/


//EXERCISE 18 Terinary Operator

/*var output = document.getElementById('output');
var login = true;

var outputHolder = "";
var userOkay = login ? outputHolder = 'true' : outputHolder = 'false';
output.innerHTML = userOkay;

login ? alert('okay') : alert('denied');*/

/*var arr = ['sam','ryan','cassi','mike','brian','stacy','michelle'];

var input = prompt("Enter a name");

var output = document.getElementById('output');

arr.indexOf(input) >= 0 ? output.innerText = 'Welcome, ' + input : output.innerText = 'Sorry, ' + input + ', you\'re denied';*/



//EXERCISE 17 DOM

/*
console.dir(document);

document.getElementById("title").innerHTML = "Hello, Everyone!";

document.title = document.getElementById('title').innerText;
*/

/*var btnText = document.getElementById('btn');

var inputText = document.getElementById('input');

document.getElementById('btn').onclick = function() {
    
    btnText.innerText = inputText.value;
    
    }*/

/*var name = prompt("What is your name?");

var welcomeMessage = document.getElementById('msg');

welcomeMessage.innerText = "Welcome, " + name;*/


//var btnText = document.getElementById('btn').innerText;

//EXERCISE 16 Objects and Arrays

/*var bob = {
    age: 30, 
    hair:'brown',
    eyes:'blue',
    work:'developer'
};

var steve = {
    age: 55, 
    hair: 'brown', 
    eyes: 'blue', 
    work: 'engineer'
};

var friends = {bob, steve};

var friends1 = [bob, steve];

console.log(friends);

friends.bob.age = 40; //can either use dot notation or bracket style to make updates or retrieve information

friends1[0]['age'] = 50;*/


//EXERCISE 15 Objects

/*
var bottle = {type: 'bottle', brand: 'hydroflask', color: 'black', size: 40, measurement: 'oz'};

bottle.stickers = 10;

bottle['top'] = 'straw';

for (var x in bottle) {
    
    console.log(x + ': ' + bottle[x]);
    
}
*/


//EXERCISE 14 Objects

//var q = prompt("What do you want to see (type, brand, color, size, measurement)?");

/*
var bottle = {type: 'bottle', brand: 'hydroflask', color: 'black', size: 40, measurement: 'oz'};

bottle.size = 64;

bottle['size'] = 128;

delete bottle.type;

bottle.type = 'bottle';

typeof bottle; //object

console.log(bottle);
*/


//EXERCISE 13 Objects

/*var obj = {color: 'white', make:'ford', model: 'focus', style: 'hatchback', doors: 5}; // literal way to define
    
var obj2 = new Object(); // object constructor method
obj2.color = 'white';
obj2.make = 'ford';
obj2.model = 'focus';*/

/*var q = prompt("What do you want to see (type, brand, color, size, measurement)?");



var bottle = {type: 'bottle', brand: 'hydroflask', color: 'black', size: 40, measurement: 'oz'};

var clr = bottle.color;

var brand = bottle["brand"];

var prop = "size";

console.log(bottle[q]);*/

//console.log(brand);

/*
//EXERCISE 12 Arrays

var arr = ['cat','dog','fish','elephant','horse'];

for (var x in arr) {
    
    console.log(x); //index
    
    console.log(arr[x]); // array element
    
}
*/


//EXERCISE 11 Nested Arrays / Multi dimensional Arrays

/*
var array = [['mike','john','tim','ryan','cassi','brian'],[2000,2001,2002,2003,2004,2005]];

q = prompt("friend");
alert("you met " + array[0][q] + " in " + array[1][q]);

*/

//EXERCISE 10 Arrays

/*
var array = [3,4,5,77,22,33,4,1,55,2,'cat','dog','fish','zebra'];
var q = prompt("what do you want to remove?");
var finder = array.indexOf(q);
console.log(finder);
var exists = (finder == -1) ?  alert("Does not exist") : array.splice(finder, 1);
console.log(array);
*/

//EXERCISE 9 Arrays

/*var animals = ["cat","dog","rabbit","bird"];

console.log(animals.slice(1,3));*/

/*animals.includes("dog");

console.log(animals.includes("dog")); //returns boolean if value exists*/

/*var animals = ["cat","dog","rabbit","bird"];

var response = prompt("Enter an animal");

var position = animals.indexOf(response);

var exists = (position == -1) ? alert("this doesn't exist") : alert("this exists");

console.log(position);*/


//EXERCISE 8 Arrays

/*var animals = ["cat","dog","rabbit","bird"];

animals[10] = "horse";
animals.fill("fish",3,10);
animals.shift();
animals.unshift("sheep");
animals.reverse();
console.log(animals);
/*

animals = animals.push("sheep");
console.log(animals);*/


//EXERCISE 7 Arrays

/*var animals = ['tiger','elephant','zebra','antelope','lion','bear','cat','dog'];
var start = animals.length;

animals.push("sheep"); //add item to end of array
var remove = animals.pop();//remove last item from array
animals.shift();//remove first item
animals.unshift("horse")//add item to front of array
animals.splice(2,1);//removes position number, num of items
animals.reverse();//reverses the order of items
animals.sort();//sort items by value
//var mals = animals.sort();
//console.log(animals.reverse(animals.sort()));
//console.log(animals.sort().reverse());
animals[20] = "horse";
animals.fill("mouse",start,animals.length-1);

console.log(animals);*/


/*Call back example

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);*/


/*function consoleMsg() {
    
    console.log('hello2');
    console.warn('this is a warning');
    console.error('this is an error');
    
    console.log("%cThis is some styled text",
                "color:blue; background-color:white; font-family:sans-serif; font-size:15px;");
}*/

//EXERCISE 1 Prompt
/* document.getElementById("btn").onclick = function() {
    
//consoleMsg();
    
exercise1(msg);
    
} 

function exercise1(a) {
    
//    var al = prompt("enter alert");
    
    document.getElementById("jsBlock").innerHTML = "Welcome to my page.";

    console.log("%cIt worked!", "font-size:20px; color: white; background-color: black;");
    
    a();
    
}

function msg() {

    alert("hi");
    
}*/

//document.write("hello, there");

//EXERCISE 2 Prompt

/*
var question = "What is your ";
var age = prompt(question + "age?");
var name = prompt(question + "name?");
var weight = prompt(question + "weight?");

alert("Hi "+ name +". You are " + age + " years old and weigh " + weight + "lbs.");
*/

//EXERCISE 3 Prompt

/*var str = "Hello, it's me. I hope you remember who I am.";

var strLength = str.length;

if (strLength % 2 != 0) {
    
    console.log("Odd string length.");
    console.log(strLength);
    console.log(strLength % 2);
    
} else {
    
    console.log("Even string length.");
    console.log(strLength);
    console.log(strLength % 2);
    
}*/

/*
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
console.log(Number(num1) + Number(num2));
*/

//EXERCISE 4

/*var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var ter = (Number(num1) > Number(num2)) ? "First number (" + num1 + ") is bigger than the second number (" + num2 +")" : "Second number (" + num2 +") is bigger than the first number (" + num1 + ")";
alert(ter);*/

//EXERCISE 5

/*var tasks = ["read a book","take out garbage","paint the house","walk the dog","water the plants"];
var progress = ['to do','in progress','done'];*/

/*var question = prompt("What are you working on today? 1) " + tasks[0] +" 2) "+tasks[1]+" 3) "+tasks[2]);
var status = prompt("What is the status of the task?  1) " + progress[0] +" 2) "+ progress[1] +" 3) "+ progress[2]);

console.log("Today you are going to " + question + ". Current status: " + status);*/
/*var newTask = prompt("What to do");
tasks[length] = newTask;
var length = tasks.length;
console.log(tasks[length-1]);*/


//EXERCISE 6 Array

/*var animals = ['tiger','elephant','zebra','antelope','lion','bear','cat','dog'];
var length = animals.length;
var index = Math.floor(Math.random() * length);
var randomAnimal = animals[index];
var guess = prompt("Guess the index of the " + randomAnimal + "! There are " + length + " animals in the list. Good luck!");
check();

function check() {
    
    if ( Number(guess) != index ) {
    
    guess = prompt("Guess again");
        
    check();
    
} else if ( Number(guess) == index ) {
    
    alert("You got it right!");
    
}
    
}*/

