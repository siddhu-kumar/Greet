function clock() {
var display = document.getElementById("greet-box");

var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();
var sec = now.getSeconds();

var mid_day;
if(hour>=12) 
    mid_day = 'PM';
else 
    mid_day = 'AM';

if(hour>=12 && hour<18) {
    display.innerHTML = hour + ":" + minutes + ":" + sec + ":" + mid_day + "<br>" + "Good AfterNoon"; 
}
else if(hour>=18 && hour<=24) {
    display.innerHTML = hour + ":" + minutes + ":" + sec + ":" + mid_day + "<br>" + "Good Evening"; 
}
else if(hour>=6 && hour<12) {
    display.innerHTML = hour + ":" + minutes + ":" + sec + ":" + mid_day + "<br>" + "Good Morning"; 
}

}

var interval = setInterval(function() {
    clock();
},1000);
