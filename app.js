var icon;
var cat;
var music;

window.addEventListener('load',function(){
icon = document.getElementById('icon').src;
cat = document.querySelector('cat-container');
music = document.querySelector('music');
music.play();
cat.play();
});

function switcheroo(){
    if(document.getElementById('icon').src == "pause-icon.png"){// if the icon path is 'paused'
        document.getElementById('icon').src = "play-icon.png";// unpause it
        cat.play();
        music.play();
    }else{ // if it doesn't have it
        icon = "play-icon.png";// add it
        cat.pause();
        music.pause();  
    }
}