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
  if (
    document.getElementById('imgClickAndChange').src ==
    '/crepe/Crepe4.png'
  ) {
    const imageWithTimeout = [
      {
        src: '/crepe/Crepe3.png',
        timeout: 1000,
      },
      {
        src: '/crepe/Crepe2.png',
        timeout: 2000,
      },
      {
        src: '/crepe/Crepe1.png',
        timeout: 3000,
      },
      {
        src: '/crepe/Crepe0.png',
        timeout: 4000,
      },
    ];

    for ( let iwt of imageWithTimeout ) {
      setTimeout(() => {
        document.getElementById('imgClickAndChange').src = iwt.src;
      }, iwt.timeout);
    }
  }
}


