window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const layout = document.querySelectorAll(".layout div");

    layout.forEach((box, index) => {
        box.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });
});