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

let changeImageBool = true;
int clickcount = 3;

async function changeImage() {
  if (changeImageBool) {
    changeImageBool = false;
    const images = [
      'crepe/Crepe3.png',
      'crepe/Crepe2.png',
      'crepe/Crepe1.png',
      'crepe/Crepe0.png',
    ];
      clickcount = clickcount - 1
      document.querySelector('#imgClickAndChange').src = "crepe/Crepe" + clickcount + ".png";
    }
  }

document.querySelector('#imgClickAndChange').onclick = changeImage;
