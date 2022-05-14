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
    if (document.getElementById("imgClickAndChange").src == "https://www.ka11i.com/ka11i.png"){
        document.getElementById("imgClickAndChange").src = "https://cdn.discordapp.com/attachments/677498889900785695/975103555889410208/dump_face.jpg";
    } else {
        document.getElementById("imgClickAndChange").src = "https://cdn.discordapp.com/attachments/677498889900785695/975103555889410208/dump_face.jpg";
    }
}
