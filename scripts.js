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

async function changeImage() {
    if (document.querySelector('#imgClickAndChange')) {
        const images = [
            'crepe/Crepe3.png',
            'crepe/Crepe2.png',
            'crepe/Crepe1.png',
            'crepe/Crepe0.png',
        ];
        if (
            document.getElementById('imgClickAndChange').src ==
            'crepe/Crepe4.png'
        ) {
            for (let img of images) {
                document.querySelector('#imgClickAndChange').src = img;
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
    }
}

document.querySelector('#imgClickAndChange').onclick(changeImage)
