var i = 0;
var txt = "Hey, I'm Karl...";
var speed = 100;

function typewriter() {
  if (i < txt.length) {
    document.getElementById('title').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

int clickcount = 3;

async function changeImage() {
      clickcount = clickcount - 1
      document.querySelector('#imgClickAndChange').src = "crepe/Crepe" + clickcount + ".png";
  }

document.querySelector('#imgClickAndChange').onclick = changeImage;
