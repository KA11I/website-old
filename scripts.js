var i = 0;
var txt = "Hey, I'm Karl...";
var speed = 100;

function typewriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "ka11i.png"){
        
        
        
setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
}, 3000);

setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
}, 3000);

setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
}, 3000);

setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
}, 3000);

alert('hi');
}
}
}
}
}
