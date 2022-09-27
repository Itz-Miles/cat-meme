
var cat;
var paused;
var button;


    window.addEventListener('load',function(){
    cat = document.getElementById('cat-container');
    paused = true;
    icon = document.getElementById("icon");
    });

function switcheroo() {

        if (paused == true) {// if the video is 'paused' before clicking
            document.getElementById("icon").src = "pause-icon.png";// unpause it
            cat.play();
            paused = false;    
        } else {// if the icon path is 'played'
            document.getElementById("icon").src = "play-icon.png"; //pause it
            cat.pause();
            paused = true;
        }
}