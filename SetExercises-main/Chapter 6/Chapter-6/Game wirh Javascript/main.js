var player = document.getElementById("player");
var box = document.getElementById("box");
var counter = 0;

function jump() {
    player.classList.add("animate");
    setTimeout(function () {
        player.classList.remove("animate");
    }, 300)
}

var checkDEAD = setInterval(function () {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let boxLeft = parseInt(window.getComputedStyle(box).getPropertyValue("left"));

    if (boxLeft < 20 && boxLeft > -20 && playerTop >= 130) {
        box.style.animation = "none";

        alert("YOU LOST!! GAME OVER !!! Score = " + counter / 100);
        counter = 0;
        box.style.animation = "box 2s infinite linear";
    }

    else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = counter / 100;
    }
}, 10);