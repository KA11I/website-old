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
        
        
        
setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.uni-kassel.de%2Funi%2Findex.php%3FeID%3DdumpFile%26t%3Dp%26p%3D63987%26token%3D7a38fdf79a187b68173b4466540fe6b936294e61&sp=1652554349Tab0038b84085c7710f3f44eb987349eee4e2395e072980b7e44b5d7a48a50cad";
}, 3000);

setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimage.geo.de%2F30065630%2Ft%2Fk4%2Fv4%2Fw1440%2Fr0%2F-%2Ffliegenpilz-gross-01-jpg--30419-.jpg&sp=1652554349T911167e3661a32720c8af807b41cc54573df3a6fe07dc4575a37f53fd1f5dfe9";
}, 3000);

setTimeout(function() {

    document.getElementById("imgClickAndChange").src = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.uni-kassel.de%2Funi%2Findex.php%3FeID%3DdumpFile%26t%3Dp%26p%3D63987%26token%3D7a38fdf79a187b68173b4466540fe6b936294e61&sp=1652554349Tab0038b84085c7710f3f44eb987349eee4e2395e072980b7e44b5d7a48a50cad";
}, 3000);

document.getElementById("imgClickAndChange").src = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimage.geo.de%2F30065630%2Ft%2Fk4%2Fv4%2Fw1440%2Fr0%2F-%2Ffliegenpilz-gross-01-jpg--30419-.jpg&sp=1652554349T911167e3661a32720c8af807b41cc54573df3a6fe07dc4575a37f53fd1f5dfe9";}
}


